import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const BASE_SEPOLIA_USDC = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
const OP_SEPOLIA_USDC = "0x2c73213484CDF26C6b499b5890E0523aA5ba57e6";
const CELO_TEST_USDC = "0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B";
// const storeEventContract = "0x98A52058268fe0eB9ED985b8856272c1Ff12b012";
const acceptedTokenContract = "0x2c73213484CDF26C6b499b5890E0523aA5ba57e6";

const StoreModule = buildModule("StoreModule", (m: any) => {
  const StoreEvent = m.contract("StoreEvent");
  // set initial parameters
  //   const storeEventAddress = m.getParameter(
  //     "storeEventAddress",
  //     storeEventContract
  //   );

  const acceptedTokenAddress = m.getParameter(
    "acceptedTokenAddress",
    BASE_SEPOLIA_USDC
  );

  const Store = m.contract("Store", [StoreEvent, acceptedTokenAddress]);

  return { Store };
});

export default StoreModule;
