/*
  Warnings:

  - You are about to drop the column `banner` on the `movies` table. All the data in the column will be lost.
  - Added the required column `filmeId` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "banner",
ADD COLUMN     "filmeId" TEXT NOT NULL;
