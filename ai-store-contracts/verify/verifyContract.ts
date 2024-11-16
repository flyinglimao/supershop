import hre from "hardhat";
import {
  polygon_amoy_storeAddress,
  polygon_amoy_storeEventAddress,
  polygon_amoy_usdc,
} from "../const";

async function main() {
  /* Verify the contract after deploying */
  // await hre.run("verify:verify", {
  //   address: polygon_amoy_storeAddress,
  //   constructorArguments: [polygon_amoy_storeEventAddress, polygon_amoy_usdc],
  // });

  await hre.run("verify:verify", {
    address: polygon_amoy_storeEventAddress,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
