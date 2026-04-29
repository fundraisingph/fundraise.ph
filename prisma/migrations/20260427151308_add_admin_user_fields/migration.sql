-- AlterTable
ALTER TABLE "AdminUser" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "lastLoginAt" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';
