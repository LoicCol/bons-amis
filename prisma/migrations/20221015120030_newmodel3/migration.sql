-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    CONSTRAINT "Cost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Cost_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Cost" ("createdAt", "description", "groupId", "id", "title", "updatedAt", "userId") SELECT "createdAt", "description", "groupId", "id", "title", "updatedAt", "userId" FROM "Cost";
DROP TABLE "Cost";
ALTER TABLE "new_Cost" RENAME TO "Cost";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
