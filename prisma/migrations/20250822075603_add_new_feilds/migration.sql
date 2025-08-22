/*
  Warnings:

  - Added the required column `name` to the `Links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Links" ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;
