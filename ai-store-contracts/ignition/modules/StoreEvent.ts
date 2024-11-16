import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StoreEventModule = buildModule("StoreEventModule", (m: any) => {
  const StoreEvent = m.contract("StoreEvent");

  return { StoreEvent };
});

export default StoreEventModule;
