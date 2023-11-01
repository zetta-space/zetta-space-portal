/*
  Warnings:

  - You are about to drop the column `userPassword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "userPassword";
ALTER TABLE "User" ADD COLUMN     "password" STRING(50);
