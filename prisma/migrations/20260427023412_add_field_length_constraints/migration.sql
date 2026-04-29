/*
  Warnings:

  - You are about to alter the column `organizationName` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `contactPerson` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `email` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(254)`.
  - You are about to alter the column `phone` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - You are about to alter the column `partnerType` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `website` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.
  - You are about to alter the column `description` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(5000)`.
  - You are about to alter the column `mission` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(3000)`.
  - You are about to alter the column `howHeard` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `status` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `reviewNotes` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `reviewedBy` on the `PartnerApplication` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "PartnerApplication" ALTER COLUMN "organizationName" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "contactPerson" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(254),
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "partnerType" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "website" SET DATA TYPE VARCHAR(500),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(5000),
ALTER COLUMN "mission" SET DATA TYPE VARCHAR(3000),
ALTER COLUMN "howHeard" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "status" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "reviewNotes" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "reviewedBy" SET DATA TYPE VARCHAR(200);
