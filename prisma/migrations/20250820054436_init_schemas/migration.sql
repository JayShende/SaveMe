-- CreateEnum
CREATE TYPE "public"."linkTypes" AS ENUM ('Twitter', 'Instagram', 'WebUrl');

-- CreateTable
CREATE TABLE "public"."Links" (
    "linkId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "public"."linkTypes" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("linkId")
);

-- CreateTable
CREATE TABLE "public"."Tags" (
    "tagId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("tagId")
);

-- CreateTable
CREATE TABLE "public"."_links_Tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_links_Tags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_userId_key" ON "public"."Links"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_ownerId_key" ON "public"."Tags"("ownerId");

-- CreateIndex
CREATE INDEX "_links_Tags_B_index" ON "public"."_links_Tags"("B");

-- AddForeignKey
ALTER TABLE "public"."Links" ADD CONSTRAINT "Links_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tags" ADD CONSTRAINT "Tags_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_links_Tags" ADD CONSTRAINT "_links_Tags_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Links"("linkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_links_Tags" ADD CONSTRAINT "_links_Tags_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Tags"("tagId") ON DELETE CASCADE ON UPDATE CASCADE;
