import hre from "hardhat";
import {
  base_sepolia_storeAddress,
  base_sepolia_storeEventAddress,
  base_sepolia_usdc,
} from "../const";

async function main() {
  /* Verify the contract after deploying */
  await hre.run("verify:verify", {
    address: base_sepolia_storeAddress,
    constructorArguments: [base_sepolia_storeEventAddress, base_sepolia_usdc],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
