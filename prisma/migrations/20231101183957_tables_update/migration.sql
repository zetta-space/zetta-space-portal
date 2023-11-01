/*
  Warnings:

  - Added the required column `translateState` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "translateState" STRING(10) NOT NULL;

-- AlterTable
ALTER TABLE "Translate" ADD COLUMN     "translatedUser" STRING;

-- CreateTable
CREATE TABLE "Language" (
    "id" UUID NOT NULL,
    "name" STRING(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);
