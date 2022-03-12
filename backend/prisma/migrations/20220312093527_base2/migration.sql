/*
  Warnings:

  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "courtNumber" INTEGER,
    "lawyer" TEXT,
    "by" TEXT NOT NULL,
    "for" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "closed" BOOLEAN NOT NULL DEFAULT false,
    "documentId" TEXT[],
    "bookedUnder" TEXT
);

-- CreateTable
CREATE TABLE "Court" (
    "number" SERIAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Case_id_key" ON "Case"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Court_number_key" ON "Court"("number");

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_courtNumber_fkey" FOREIGN KEY ("courtNumber") REFERENCES "Court"("number") ON DELETE SET NULL ON UPDATE CASCADE;
