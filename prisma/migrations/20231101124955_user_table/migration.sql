/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";
ALTER TABLE "User" ADD COLUMN     "imageUrl" STRING;
ALTER TABLE "User" ADD COLUMN     "userPassword" STRING(50);
