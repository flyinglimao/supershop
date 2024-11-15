"use client";

import { isZeroDevConnector } from "@dynamic-labs/ethereum-aa";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { createKernelAccountClient } from "@zerodev/sdk";
import { KernelSmartAccount } from "@zerodev/sdk/accounts";
import { KernelAccountClient } from "@zerodev/sdk/clients";
import { EntryPoint } from "permissionless/types";
import { useEffect, useState } from "react";
import { parseEther, Transport } from "viem";
import { type Chain as ViemChain } from "viem/chains";
export function SendTransaction() {
  const { primaryWallet } = useDynamicContext();
  const [q, setQ] = useState(0);
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

    console.log(
      connector,
      isZeroDevConnector(connector),
      isZeroDevConnector(connector) && connector.getAccountAbstractionProvider()
    );
    if (!isZeroDevConnector(connector)) return;

    // @ts-ignore
    setKernelClient(connector.getAccountAbstractionProvider());
  }, [primaryWallet]);

  if (!kernelClient) return null;

  return (
    <button
      onClick={() => {
        kernelClient.sendTransactions({
          transactions: [
            {
              to: "0xf8F7873f80039D59783e7059ECfF5A6C49D70d47",
              value: parseEther("0.001"),
              data: "0x",
            },
            {
              to: "0x211b6f3bd38C9D3a45cFABf9C29110A8D8911072",
              value: parseEther("0.0011"),
              data: "0x",
            },
          ],
        });
      }}
    >
      Send Transaction
    </button>
  );
}
