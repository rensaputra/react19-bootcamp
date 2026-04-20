/*
  Warnings:

  - You are about to drop the column `paymentDetails` on the `SalesMaster` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SalesMaster" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bId" INTEGER NOT NULL,
    "SODateTime" DATETIME NOT NULL,
    "grandTotalPrice" REAL NOT NULL,
    "paymentMode" TEXT NOT NULL,
    CONSTRAINT "SalesMaster_bId_fkey" FOREIGN KEY ("bId") REFERENCES "BuyerMaster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SalesMaster" ("SODateTime", "bId", "grandTotalPrice", "id", "paymentMode") SELECT "SODateTime", "bId", "grandTotalPrice", "id", "paymentMode" FROM "SalesMaster";
DROP TABLE "SalesMaster";
ALTER TABLE "new_SalesMaster" RENAME TO "SalesMaster";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
