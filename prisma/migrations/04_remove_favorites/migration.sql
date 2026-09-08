/*
  Warnings:

  - You are about to drop the column `isFavorite` on the `Artwork` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `CustomCollectionObject` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Gallery` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Magazine` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Museum` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Music` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Photograph` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Quote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Artwork" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "CustomCollectionObject" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Idea" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Magazine" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Museum" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Music" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Photograph" DROP COLUMN "isFavorite";

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "isFavorite";
