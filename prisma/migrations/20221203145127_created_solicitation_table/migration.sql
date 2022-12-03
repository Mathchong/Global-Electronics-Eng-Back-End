-- AlterTable
ALTER TABLE "user" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "area" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitation_types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "solicitation_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "priority_types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "deadline" INTEGER NOT NULL,

    CONSTRAINT "priority_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitation_status" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "solicitation_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitation_follows" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "solicitationId" INTEGER NOT NULL,

    CONSTRAINT "solicitation_follows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,
    "solicitation_typesId" INTEGER NOT NULL,
    "priority_typesId" INTEGER NOT NULL,
    "solicitation_statusId" INTEGER NOT NULL,
    "itemCode" INTEGER NOT NULL,
    "references" VARCHAR(255) NOT NULL,
    "manufacturer" VARCHAR(255) NOT NULL,
    "application" VARCHAR(255) NOT NULL,
    "reason" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" TIMESTAMP(3),

    CONSTRAINT "solicitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "area_name_key" ON "area"("name");

-- CreateIndex
CREATE UNIQUE INDEX "solicitation_types_name_key" ON "solicitation_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "priority_types_name_key" ON "priority_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "solicitation_status_name_key" ON "solicitation_status"("name");

-- AddForeignKey
ALTER TABLE "solicitation_follows" ADD CONSTRAINT "solicitation_follows_solicitationId_fkey" FOREIGN KEY ("solicitationId") REFERENCES "solicitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitation" ADD CONSTRAINT "solicitation_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitation" ADD CONSTRAINT "solicitation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitation" ADD CONSTRAINT "solicitation_solicitation_typesId_fkey" FOREIGN KEY ("solicitation_typesId") REFERENCES "solicitation_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitation" ADD CONSTRAINT "solicitation_priority_typesId_fkey" FOREIGN KEY ("priority_typesId") REFERENCES "priority_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitation" ADD CONSTRAINT "solicitation_solicitation_statusId_fkey" FOREIGN KEY ("solicitation_statusId") REFERENCES "solicitation_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
