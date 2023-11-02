/*
  Warnings:

  - You are about to drop the column `translatedUser` on the `Translate` table. All the data in the column will be lost.
  - Added the required column `wordCount` to the `Translate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Translate" DROP COLUMN "translatedUser";
ALTER TABLE "Translate" ADD COLUMN     "userId" UUID;
ALTER TABLE "Translate" ADD COLUMN     "wordCount" INT8 NOT NULL;

-- AddForeignKey
ALTER TABLE "Translate" ADD CONSTRAINT "Translate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
