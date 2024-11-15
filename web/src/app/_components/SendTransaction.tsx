"use client";

import { isZeroDevConnector } from "@dynamic-labs/ethereum-aa";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { createKernelAccountClient } from "@zerodev/sdk";
import { KernelSmartAccount } from "@zerodev/sdk/accounts";
import { KernelAccountClient } from "@zerodev/sdk/clients";
import { EntryPoint } from "permissionless/types";
import { use, useEffect, useState } from "react";
import { parseEther, Transport } from "viem";
import { type Chain as ViemChain } from "viem/chains";
export function SendTransaction() {
  const { primaryWallet } = useDynamicContext();
  const [kernelClient, setKernelClient] =
    useState<
      KernelAccountClient<
        EntryPoint,
        Transport,
        ViemChain,
        KernelSmartAccount<EntryPoint>
      >
    >();

  useEffect(() => {
    if (!primaryWallet) return;
    const { connector } = primaryWallet;

    if (!isZeroDevConnector(connector)) return;

    const pollingClient = setInterval(() => {
      if (!connector.getAccountAbstractionProvider()) return;

      // @ts-ignore
      setKernelClient(connector.getAccountAbstractionProvider());
      clearInterval(pollingClient);
    }, 500);

    return () => clearInterval(pollingClient);
  }, [primaryWallet]);

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
