/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "email_verified" DATETIME,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'is_admin',
    "image" TEXT
);
INSERT INTO "new_users" ("email", "email_verified", "id", "image", "password", "phone", "role") SELECT "email", "email_verified", "id", "image", "password", "phone", "role" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
