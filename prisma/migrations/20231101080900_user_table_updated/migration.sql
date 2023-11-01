/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName";
ALTER TABLE "User" DROP COLUMN "lastName";
ALTER TABLE "User" ADD COLUMN     "bio" STRING(100);
ALTER TABLE "User" ADD COLUMN     "fullName" STRING(100) NOT NULL;
ALTER TABLE "User" ADD COLUMN     "status" STRING(25);
