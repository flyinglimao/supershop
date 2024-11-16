import { ethers } from "hardhat";
import { storeAddress } from "./const";

async function main() {
  const store = await ethers.getContractAt("Store", storeAddress);

  const itemId = 1;
  console.log("item:", await store.items(itemId));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
