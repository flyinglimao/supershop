import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { polygon_amoy_usdc } from "../../const";

const StoreModule = buildModule("StoreModule", (m: any) => {
  const StoreEvent = m.contract("StoreEvent");
  // set initial parameters
  //   const storeEventAddress = m.getParameter(
  //     "storeEventAddress",
  //     storeEventContract
  //   );

  const acceptedTokenAddress = m.getParameter(
    "acceptedTokenAddress",
    polygon_amoy_usdc
  );

  const Store = m.contract("Store", [StoreEvent, acceptedTokenAddress]);

  return { Store };
});

export default StoreModule;
