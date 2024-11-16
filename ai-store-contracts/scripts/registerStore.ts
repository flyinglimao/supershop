import { ethers } from "hardhat";
import { storeAddress, storeEventAddress } from "./const";

async function main() {
  const storeEvent = await ethers.getContractAt(
    "StoreEvent",
    storeEventAddress
  );
  const tx = await storeEvent.registerStore(storeAddress);
  await tx.wait();

  console.log("Store registered");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
