import { ethers } from "hardhat";
import { Store } from "../typechain-types/contracts/Store";
import { polygon_amoy_storeAddress } from "../const";

async function main() {
  const store = await ethers.getContractAt("Store", polygon_amoy_storeAddress);

  const mockItem: Store.ItemInfoStruct = {
    itemId: 1,
    name: "item1",
    price: ethers.parseEther("10"),
    picture: "https://example.com/item1.jpg",
    spec: "spec1",
    description: "description1",
    stock: 100,
    tags: ["tag1"],
    enable: false, // need to set as false (or cannot pass the require check)
    metadata: "0x",
  };

  const releaseItemTx = await store.removeItems(1);
  await releaseItemTx.wait();
  const releaseItemTx2 = await store.removeItems(2);
  await releaseItemTx2.wait();
  const releaseItemTx3 = await store.removeItems(3);
  await releaseItemTx3.wait();
  const releaseItemTx4 = await store.removeItems(4);
  await releaseItemTx4.wait();
  const releaseItemTx5 = await store.removeItems(5);
  await releaseItemTx5.wait();

  console.log("Item removed");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
