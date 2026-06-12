#!/bin/bash

set -o pipefail

# =====================================================================
# CONFIGURATION
# =====================================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

APP_NAME="fundraise-ph"
APP_PORT=$(node -e "const p=require('./package.json');const m=p.scripts.dev.match(/-p\s+(\d+)/);console.log(m?m[1]:'3000')")
NODE_ENV="${NODE_ENV:-production}"
START_CMD="env NODE_ENV=$NODE_ENV PORT=$APP_PORT bun .next/standalone/server.js"

PID_DIR="${SCRIPT_DIR}/.pids"
LOG_DIR="${SCRIPT_DIR}/logs"

PID_FILE="${PID_DIR}/${APP_NAME}.pid"
LOG_FILE="${LOG_DIR}/auto-restart.log"

# =====================================================================
# UTILITY FUNCTIONS
# =====================================================================

if [[ -t 1 ]]; then
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[0;33m'
    CYAN='\033[0;36m'
    BOLD='\033[1m'
    NC='\033[0m'
else
    RED='' GREEN='' YELLOW='' CYAN='' BOLD='' NC=''
fi

info()    { echo -e "${CYAN}[INFO]${NC} $*"; }
success() { echo -e "${GREEN}[OK]${NC} $*"; }
warn()    { echo -e "${YELLOW}[WARN]${NC} $*"; }
error()   { echo -e "${RED}[ERROR]${NC} $*" >&2; }

log() {
    local timestamp
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    mkdir -p "$LOG_DIR"
    echo "[$timestamp] $*" >> "$LOG_FILE"
}

ensure_directories() {
    mkdir -p "$PID_DIR" "$LOG_DIR"
}

# =====================================================================
# PROCESS MANAGEMENT
# =====================================================================

is_running() {
    if [[ -f "$PID_FILE" ]]; then
        local pid
        pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        fi
    fi
    return 1
}

get_pid() {
    if [[ -f "$PID_FILE" ]]; then
        cat "$PID_FILE"
    fi
}

get_port_pids() {
    local port="$1"
    local pids=""

    if command -v ss &>/dev/null; then
        pids=$(ss -tlnp 2>/dev/null | grep -E ":${port}\s" | grep -oP 'pid=\K[0-9]+' | sort -u)
    fi

    if [[ -z "$pids" ]] && command -v lsof &>/dev/null; then
        pids=$(lsof -t -i:"$port" 2>/dev/null | sort -u)
    fi

    echo "$pids"
}

is_port_in_use() {
    local pids
    pids=$(get_port_pids "$1")
    [[ -n "$pids" ]]
}

kill_port_process() {
    local port="$1"
    local pids
    pids=$(get_port_pids "$port")

    if [[ -n "$pids" ]]; then
        for pid in $pids; do
            kill -TERM "$pid" 2>/dev/null || true
        done
        sleep 2

        pids=$(get_port_pids "$port")
        if [[ -n "$pids" ]]; then
            for pid in $pids; do
                kill -KILL "$pid" 2>/dev/null || true
            done
            sleep 1
        fi
    fi
}

# =====================================================================
# START / STOP / RESTART / REBUILD
# =====================================================================

do_start() {
    info "Starting ${APP_NAME}..."

    if is_port_in_use "$APP_PORT"; then
        error "Port ${APP_PORT} is already in use by: $(get_port_pids "$APP_PORT")"
        error "Run '$0 stop' first."
        return 1
    fi

    if is_running; then
        warn "${APP_NAME} is already running (PID $(get_pid))"
        return 0
    fi

    if [[ ! -f "${SCRIPT_DIR}/.next/BUILD_ID" ]]; then
        error "Production build not found. Run '$0 rebuild' first."
        return 1
    fi

    if [[ ! -d "${SCRIPT_DIR}/.next/standalone/.next/static" ]]; then
        info "Copying static files to standalone output..."
        cp -r "${SCRIPT_DIR}/.next/static" "${SCRIPT_DIR}/.next/standalone/.next/"
    fi

    if [[ ! -d "${SCRIPT_DIR}/.next/standalone/public" ]]; then
        info "Copying public directory to standalone output..."
        cp -r "${SCRIPT_DIR}/public" "${SCRIPT_DIR}/.next/standalone/"
    fi

    cd "$SCRIPT_DIR"
    nohup $START_CMD > "${LOG_DIR}/app.log" 2>&1 &
    local pid=$!
    echo "$pid" > "$PID_FILE"

    sleep 3

    if kill -0 "$pid" 2>/dev/null; then
        success "${APP_NAME} started (PID ${pid}) on port ${APP_PORT}"
        log "Started ${APP_NAME} (PID ${pid})"
        return 0
    else
        error "Failed to start ${APP_NAME}. Check ${LOG_DIR}/app.log"
        rm -f "$PID_FILE"
        return 1
    fi
}

do_stop() {
    local stopped=false

    if is_running; then
        local pid
        pid=$(get_pid)
        info "Stopping ${APP_NAME} (PID ${pid})..."
        log "Stopping ${APP_NAME} (PID ${pid})"

        kill -TERM "$pid" 2>/dev/null || true

        local count=0
        while kill -0 "$pid" 2>/dev/null && [[ $count -lt 15 ]]; do
            sleep 1
            ((count++))
        done

        if kill -0 "$pid" 2>/dev/null; then
            warn "Force killing..."
            kill -KILL "$pid" 2>/dev/null || true
        fi

        stopped=true
    fi

    rm -f "$PID_FILE"

    if is_port_in_use "$APP_PORT"; then
        warn "Found orphaned process on port ${APP_PORT}, killing..."
        kill_port_process "$APP_PORT"
        stopped=true
    fi

    if $stopped; then
        success "${APP_NAME} stopped"
        log "Stopped ${APP_NAME}"
    else
        warn "${APP_NAME} is not running"
    fi
}

do_restart() {
    do_stop
    sleep 2
    do_start
}

do_rebuild() {
    do_stop
    sleep 1

    info "Building ${APP_NAME}..."
    log "Building ${APP_NAME}"

    cd "$SCRIPT_DIR"
    rm -rf .next

    NODE_OPTIONS="--max-old-space-size=2048" npx next build 2>&1 | tee -a "$LOG_FILE"
    local build_status=${PIPESTATUS[0]}

    if [[ $build_status -eq 0 ]]; then
        info "Copying static files and public directory to standalone output..."
        cp -r "${SCRIPT_DIR}/.next/static" "${SCRIPT_DIR}/.next/standalone/.next/"
        cp -r "${SCRIPT_DIR}/public" "${SCRIPT_DIR}/.next/standalone/"
        success "Build completed"
        log "Build completed"
        do_start
    else
        error "Build failed"
        log "Build failed"
        return 1
    fi
}

do_status() {
    if is_running; then
        local pid
        pid=$(get_pid)
        success "${APP_NAME} is running (PID ${pid}, port ${APP_PORT})"
    else
        warn "${APP_NAME} is not running"
    fi
}

# =====================================================================
# MAIN
# =====================================================================

ensure_directories

case "${1:-}" in
    start)    do_start ;;
    stop)     do_stop ;;
    restart)  do_restart ;;
    rebuild)  do_rebuild ;;
    status)   do_status ;;
    *)
        echo "Usage: $0 {start|stop|restart|rebuild|status}"
        exit 1
        ;;
esac
