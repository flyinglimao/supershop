import { ethers } from "hardhat";
import {
  base_sepolia_storeAddress,
  base_sepolia_storeEventAddress,
} from "../const";

async function main() {
  const storeEvent = await ethers.getContractAt(
    "StoreEvent",
    base_sepolia_storeEventAddress
  );
  const tx = await storeEvent.registerStore(base_sepolia_storeAddress);
  await tx.wait();

  console.log("Store registered");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
