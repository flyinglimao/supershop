import { ethers } from "hardhat";
import {
  polygon_amoy_storeAddress,
  polygon_amoy_storeEventAddress,
} from "../const";

async function main() {
  const storeEvent = await ethers.getContractAt(
    "StoreEvent",
    polygon_amoy_storeEventAddress
  );
  const tx = await storeEvent.registerStore(polygon_amoy_storeAddress);
  await tx.wait();

  console.log("Store registered");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
