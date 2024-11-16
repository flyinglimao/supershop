import { ethers } from "hardhat";
import { Store } from "../typechain-types/contracts/Store";
import { storeAddress } from "../const";

async function main() {
  const store = await ethers.getContractAt("Store", storeAddress);

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

  const releaseItemTx = await store.removeItems(8);
  await releaseItemTx.wait();
  const releaseItemTx2 = await store.removeItems(9);
  await releaseItemTx2.wait();
  const releaseItemTx3 = await store.removeItems(10);
  await releaseItemTx3.wait();
  const releaseItemTx4 = await store.removeItems(11);
  await releaseItemTx4.wait();
  const releaseItemTx5 = await store.removeItems(12);
  await releaseItemTx5.wait();
  const releaseItemTx6 = await store.removeItems(13);
  await releaseItemTx6.wait();
  const releaseItemTx7 = await store.removeItems(14);
  await releaseItemTx7.wait();

  console.log("Item removed");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
