-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('NOT_STARTED', 'PENDING', 'SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'EXPIRED', 'REQUIRES_UPDATE');

-- CreateTable
CREATE TABLE "verification_badges" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" "VerificationStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "permitNumber" TEXT,
    "issuedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "verifiedBy" TEXT,
    "requestedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "requestNotes" TEXT,
    "rejectionReason" TEXT,
    "prerequisiteMet" BOOLEAN NOT NULL DEFAULT true,
    "isRevoked" BOOLEAN NOT NULL DEFAULT false,
    "revokedAt" TIMESTAMP(3),
    "revokedBy" TEXT,
    "revokedReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_logs" (
    "id" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "verifierId" TEXT NOT NULL,
    "location" TEXT,
    "verifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "verification_badges_campaignId_idx" ON "verification_badges"("campaignId");

-- CreateIndex
CREATE INDEX "verification_badges_type_idx" ON "verification_badges"("type");

-- CreateIndex
CREATE INDEX "verification_badges_status_idx" ON "verification_badges"("status");

-- CreateIndex
CREATE INDEX "verification_logs_entityType_entityId_idx" ON "verification_logs"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "verification_logs_verifierId_idx" ON "verification_logs"("verifierId");
