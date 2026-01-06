-- CreateTable
CREATE TABLE "orphanage_photos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "path" TEXT NOT NULL,
    "orphanage_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "orphanage_photos_orphanage_id_fkey" FOREIGN KEY ("orphanage_id") REFERENCES "orphanages" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
