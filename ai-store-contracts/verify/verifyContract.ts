import hre from "hardhat";

// The contract address is the address of the deployed contract
const verifyContractAddress = "0x15A580c90B10bF98dFe66f28B8e96D08150Cb6a4";
const A = "";
const B = "";

async function main() {
  /* Verify the contract after deploying */
  await hre.run("verify:verify", {
    address: verifyContractAddress,
    constructorArguments: [
      "0x55D30Ba332AdA10478e5aBbcA3400253bD5281E4",
      "0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B",
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
