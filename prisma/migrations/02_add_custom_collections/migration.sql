/*
  Warnings:

  - You are about to drop the `NewCollection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NewCollection" DROP CONSTRAINT "NewCollection_userId_fkey";

-- DropTable
DROP TABLE "NewCollection";

-- CreateTable
CREATE TABLE "CustomCollection" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomCollectionObject" (
    "id" SERIAL NOT NULL,
    "collectionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "note" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomCollectionObject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomCollection" ADD CONSTRAINT "CustomCollection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomCollectionObject" ADD CONSTRAINT "CustomCollectionObject_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "CustomCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
