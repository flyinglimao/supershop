"use client";

import { parseEther } from "viem";
import { useKernelClient } from "../_smartWallet";
export function SendTransaction() {
  const kernelClient = useKernelClient();

  if (!kernelClient) return null;

  return (
    <button
      onClick={async () => {
        const tx = await kernelClient.sendTransactions({
          transactions: [
            {
              to: "0xf8F7873f80039D59783e7059ECfF5A6C49D70d47",
              value: parseEther("0.001"),
              data: "0x",
            },
            {
              to: "0xf8F7873f80039D59783e7059ECfF5A6C49D70d47",
              value: parseEther("0.002"),
              data: "0x0012",
            },
          ],
        });
        console.log(tx);
      }}
    >
      Send Transaction
    </button>
  );
}
