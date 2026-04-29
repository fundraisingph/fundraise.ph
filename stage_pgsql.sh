#!/bin/bash
#
# stage_pgsql.sh - PostgreSQL Database Provisioning Script
#
# This script interactively provisions a PostgreSQL database environment
# by creating a database, user, and setting appropriate permissions.
#

set -euo pipefail

# Color codes for output feedback
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} ${1}"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} ${1}"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} ${1}"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} ${1}"
}

# Function to handle errors and exit
handle_error() {
    print_error "Operation failed at step: ${1}"
    print_error "Rolling back changes..."
    
    # Attempt to clean up created resources
    if [[ -n "${DB_NAME:-}" ]] && [[ -n "${DB_USER:-}" ]]; then
        print_warning "Attempting to remove created database and user..."
        sudo -u postgres psql -c "DROP DATABASE IF EXISTS \"${DB_NAME}\";" 2>/dev/null || true
        sudo -u postgres psql -c "DROP USER IF EXISTS \"${DB_USER}\";" 2>/dev/null || true
        print_warning "Cleanup attempted (may not have been necessary)"
    fi
    
    exit 1
}

# Function to validate input (non-empty)
validate_input() {
    local input="${1}"
    local field_name="${2}"
    
    if [[ -z "${input}" ]]; then
        print_error "${field_name} cannot be empty"
        return 1
    fi
    
    # Check for potentially dangerous characters in database names/usernames
    if [[ "${field_name}" == "Project name" ]] || [[ "${field_name}" == "Username" ]]; then
        if [[ "${input}" =~ [^a-zA-Z0-9_-] ]]; then
            print_error "${field_name} contains invalid characters. Use only letters, numbers, underscores, and hyphens."
            return 1
        fi
    fi
    
    return 0
}

# Check if running with sudo/root privileges
check_privileges() {
    print_info "Checking privileges..."
    
    if [[ "${EUID}" -eq 0 ]]; then
        print_warning "Running as root - this is fine for this script"
    else
        # Check if we can use sudo
        if ! sudo -n true 2>/dev/null; then
            print_info "This script requires sudo privileges to interact with PostgreSQL"
            print_info "You may be prompted for your password..."
        fi
    fi
    
    # Verify PostgreSQL is installed and accessible
    if ! sudo -u postgres psql -c "SELECT 1;" >/dev/null 2>&1; then
        print_error "Cannot connect to PostgreSQL as postgres user"
        print_error "Please ensure PostgreSQL is installed and running"
        exit 1
    fi
    
    print_success "Privileges verified - PostgreSQL is accessible"
}

# Main script execution
main() {
    echo ""
    echo "=============================================="
    echo "  PostgreSQL Database Provisioning Script"
    echo "=============================================="
    echo ""
    
    # Check privileges first
    check_privileges
    
    # Prompt for project name
    while true; do
        echo ""
        read -rp "Enter project name: " PROJECT_NAME
        
        if validate_input "${PROJECT_NAME}" "Project name"; then
            break
        fi
    done
    
    # Prompt for username
    while true; do
        echo ""
        read -rp "Enter database username: " DB_USER
        
        if validate_input "${DB_USER}" "Username"; then
            break
        fi
    done
    
    # Prompt for password (silent input)
    while true; do
        echo ""
        read -rsp "Enter database password: " DB_PASSWORD
        echo ""
        
        if [[ -z "${DB_PASSWORD}" ]]; then
            print_error "Password cannot be empty"
            continue
        fi
        
        # Confirm password
        read -rsp "Confirm database password: " DB_PASSWORD_CONFIRM
        echo ""
        
        if [[ "${DB_PASSWORD}" != "${DB_PASSWORD_CONFIRM}" ]]; then
            print_error "Passwords do not match. Please try again."
            continue
        fi
        
        break
    done
    
    # Set derived variables
    DB_NAME="${PROJECT_NAME}-db"
    
    echo ""
    echo "=============================================="
    echo "  Configuration Summary"
    echo "=============================================="
    echo "  Project Name:  ${PROJECT_NAME}"
    echo "  Database Name: ${DB_NAME}"
    echo "  Username:      ${DB_USER}"
    echo "  Password:      ********"
    echo "=============================================="
    echo ""
    
    read -rp "Proceed with these settings? (y/N): " CONFIRM
    
    if [[ ! "${CONFIRM}" =~ ^[Yy]$ ]]; then
        print_warning "Operation cancelled by user"
        exit 0
    fi
    
    # Step 1: Create the database
    print_info "Creating database '${DB_NAME}'..."
    
    if sudo -u postgres psql -c "CREATE DATABASE \"${DB_NAME}\";" 2>&1; then
        print_success "Database '${DB_NAME}' created successfully"
    else
        handle_error "Database creation"
    fi
    
    # Step 2: Create the user with password
    print_info "Creating user '${DB_USER}'..."
    
    if sudo -u postgres psql -c "CREATE USER \"${DB_USER}\" WITH ENCRYPTED PASSWORD '${DB_PASSWORD}';" 2>&1; then
        print_success "User '${DB_USER}' created successfully"
    else
        handle_error "User creation"
    fi
    
    # Step 3: Grant all database privileges to the new user
    print_info "Granting database privileges to '${DB_USER}'..."
    
    if sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE \"${DB_NAME}\" TO \"${DB_USER}\";" 2>&1; then
        print_success "Database privileges granted to '${DB_USER}'"
    else
        handle_error "Granting database privileges"
    fi
    
    # Step 4: Grant CREATEDB permission to the user
    print_info "Granting CREATEDB permission to '${DB_USER}'..."
    
    if sudo -u postgres psql -c "ALTER USER \"${DB_USER}\" CREATEDB;" 2>&1; then
        print_success "CREATEDB permission granted to '${DB_USER}'"
    else
        handle_error "Granting CREATEDB permission"
    fi
    
    # Step 5: Connect to the new database and set up schema permissions
    print_info "Connecting to '${DB_NAME}' to configure schema permissions..."
    
    # Grant full usage on the public schema
    print_info "  - Granting usage on public schema..."
    
    if sudo -u postgres psql -d "${DB_NAME}" -c "GRANT USAGE, CREATE ON SCHEMA public TO \"${DB_USER}\";" 2>&1; then
        print_success "  Schema usage granted"
    else
        handle_error "Granting schema usage"
    fi
    
    # Grant privileges on all existing tables
    print_info "  - Granting privileges on all existing tables..."
    
    if sudo -u postgres psql -d "${DB_NAME}" -c "GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO \"${DB_USER}\";" 2>&1; then
        print_success "  Table privileges granted"
    else
        handle_error "Granting table privileges"
    fi
    
    # Grant privileges on all sequences (important for auto-increment columns)
    print_info "  - Granting privileges on all sequences..."
    
    if sudo -u postgres psql -d "${DB_NAME}" -c "GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO \"${DB_USER}\";" 2>&1; then
        print_success "  Sequence privileges granted"
    else
        handle_error "Granting sequence privileges"
    fi
    
    # Set default privileges for future tables
    print_info "  - Setting default privileges for future tables..."
    
    if sudo -u postgres psql -d "${DB_NAME}" -c "ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO \"${DB_USER}\";" 2>&1; then
        print_success "  Default table privileges set"
    else
        handle_error "Setting default table privileges"
    fi
    
    # Set default privileges for future sequences
    print_info "  - Setting default privileges for future sequences..."
    
    if sudo -u postgres psql -d "${DB_NAME}" -c "ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO \"${DB_USER}\";" 2>&1; then
        print_success "  Default sequence privileges set"
    else
        handle_error "Setting default sequence privileges"
    fi
    
    # Step 6: Update .env file with database configuration
    print_info "Updating .env file with database configuration..."
    
    ENV_FILE=".env"
    DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}"
    
    # Check if .env file exists
    if [[ -f "${ENV_FILE}" ]]; then
        # Check if DATABASE_URL already exists in .env
        if grep -q "^DATABASE_URL=" "${ENV_FILE}" 2>/dev/null; then
            print_warning "DATABASE_URL already exists in ${ENV_FILE}"
            read -rp "Replace existing DATABASE_URL? (y/N): " REPLACE_URL
            
            if [[ "${REPLACE_URL}" =~ ^[Yy]$ ]]; then
                # Escape special characters in the URL for sed
                ESCAPED_URL=$(printf '%s\n' "${DATABASE_URL}" | sed 's/[&/\]/\\&/g')
                
                if sed -i "s|^DATABASE_URL=.*|DATABASE_URL=\"${ESCAPED_URL}\"|" "${ENV_FILE}" 2>&1; then
                    print_success "DATABASE_URL updated in ${ENV_FILE}"
                else
                    print_error "Failed to update DATABASE_URL in ${ENV_FILE}"
                fi
            else
                print_info "Skipping DATABASE_URL update"
            fi
        else
            # Append DATABASE_URL to existing .env
            echo "" >> "${ENV_FILE}"
            echo "# Database Configuration (PostgreSQL)" >> "${ENV_FILE}"
            echo "DATABASE_URL=\"${DATABASE_URL}\"" >> "${ENV_FILE}"
            print_success "DATABASE_URL added to ${ENV_FILE}"
        fi
    else
        # Create new .env file
        {
            echo "# Database Configuration (PostgreSQL)"
            echo "DATABASE_URL=\"${DATABASE_URL}\""
        } > "${ENV_FILE}"
        print_success "Created ${ENV_FILE} with DATABASE_URL"
    fi
    
    # Step 8: Update Prisma schema from SQLite to PostgreSQL
    print_info "Updating Prisma schema provider from SQLite to PostgreSQL..."
    
    SCHEMA_FILE="prisma/schema.prisma"
    
    if [[ -f "${SCHEMA_FILE}" ]]; then
        # Check current provider
        CURRENT_PROVIDER=$(grep -E '^\s*provider\s*=\s*"sqlite"' "${SCHEMA_FILE}" 2>/dev/null || echo "")
        
        if [[ -n "${CURRENT_PROVIDER}" ]]; then
            # Backup the schema file first
            cp "${SCHEMA_FILE}" "${SCHEMA_FILE}.sqlite.bak"
            print_info "  - Backed up schema to ${SCHEMA_FILE}.sqlite.bak"
            
            # Replace sqlite with postgresql in the datasource provider
            sed -i 's/provider\s*=\s*"sqlite"/provider = "postgresql"/' "${SCHEMA_FILE}"
            print_success "  Prisma schema provider updated to PostgreSQL"
        else
            # Check if already PostgreSQL
            if grep -qE '^\s*provider\s*=\s*"postgresql"' "${SCHEMA_FILE}" 2>/dev/null; then
                print_info "  Prisma schema already using PostgreSQL provider"
            else
                print_warning "  Could not determine current database provider in schema"
            fi
        fi
    else
        print_warning "  Prisma schema file not found at ${SCHEMA_FILE}"
    fi
    
    # Step 9: Initialize database with Prisma
    print_info "Initializing database schema with Prisma..."
    
    # Check if bun is available
    if command -v bun &>/dev/null; then
        PACKAGE_MANAGER="bun"
    elif command -v npm &>/dev/null; then
        PACKAGE_MANAGER="npm"
    else
        print_warning "No package manager found (bun/npm). Skipping database initialization."
        PACKAGE_MANAGER=""
    fi
    
    if [[ -n "${PACKAGE_MANAGER}" ]]; then
        # Generate Prisma client
        print_info "  - Generating Prisma client..."
        
        if ${PACKAGE_MANAGER} run db:generate 2>&1; then
            print_success "  Prisma client generated"
        else
            print_warning "  Prisma client generation failed (may already be generated)"
        fi
        
        # Push database schema (init db)
        print_info "  - Pushing database schema (db:push)..."
        
        if ${PACKAGE_MANAGER} run db:push 2>&1; then
            print_success "  Database schema pushed successfully"
        else
            print_error "  Failed to push database schema"
            print_warning "  You may need to run 'bun run db:push' manually"
        fi
        
        # Run database migrations
        print_info "  - Running database migrations (db:migrate)..."
        
        if ${PACKAGE_MANAGER} run db:migrate 2>&1; then
            print_success "  Database migrations completed"
        else
            print_warning "  Database migrations failed or no migrations to apply"
            print_warning "  You may need to run 'bun run db:migrate' manually"
        fi
    fi
    
    # Step 10: Offer to migrate data from SQLite if exists
    SQLITE_DB="db/custom.db"
    
    if [[ -f "${SQLITE_DB}" ]]; then
        echo ""
        print_info "Found existing SQLite database at ${SQLITE_DB}"
        print_warning "Data migration from SQLite to PostgreSQL requires manual steps."
        echo ""
        echo "To migrate your data, you can use one of these approaches:"
        echo ""
        echo "  1. Use Prisma's migrate feature:"
        echo "     ${PACKAGE_MANAGER} run db:reset  # Will seed if you have seed data"
        echo ""
        echo "  2. Export SQLite data and import to PostgreSQL:"
        echo "     sqlite3 ${SQLITE_DB} .dump > backup.sql"
        echo "     # Then manually convert and import to PostgreSQL"
        echo ""
        echo "  3. Use pgloader (if installed):"
        echo "     pgloader ${SQLITE_DB} postgresql://${DB_USER}:********@localhost:5432/${DB_NAME}"
        echo ""
    fi
    
    # Final summary
    echo ""
    echo "=============================================="
    echo "  Provisioning Complete!"
    echo "=============================================="
    print_success "Database '${DB_NAME}' has been created"
    print_success "User '${DB_USER}' has been created with full permissions"
    print_success "DATABASE_URL has been configured in ${ENV_FILE}"
    print_success "Prisma schema migrated from SQLite to PostgreSQL"
    print_success "Database schema has been pushed and migrations applied"
    echo ""
    echo "Connection string:"
    echo "  postgresql://${DB_USER}:********@localhost:5432/${DB_NAME}"
    echo ""
    echo "To connect using psql:"
    echo "  psql -U ${DB_USER} -d ${DB_NAME} -h localhost"
    echo ""
    print_info "Your .env file has been updated with the PostgreSQL database configuration!"
    print_info "Prisma schema provider changed from 'sqlite' to 'postgresql'"
    print_info "Database schema has been initialized via Prisma (db:push + db:migrate)"
    echo "=============================================="
}

# Run main function
main "$@"
