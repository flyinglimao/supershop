-- CreateTable
CREATE TABLE "User" (
    "address" TEXT NOT NULL PRIMARY KEY,
    "gender" TEXT NOT NULL,
    "height" REAL NOT NULL,
    "weight" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "ConnectedMerchant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userAddress" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    CONSTRAINT "ConnectedMerchant_userAddress_fkey" FOREIGN KEY ("userAddress") REFERENCES "User" ("address") ON DELETE RESTRICT ON UPDATE CASCADE
);
