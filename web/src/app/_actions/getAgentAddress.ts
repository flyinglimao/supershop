"use server";

import { privateKeyToAddress } from "viem/accounts";

export function getAgentAddress() {
  return privateKeyToAddress(process.env.KEY);
}
