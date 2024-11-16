"use client";

import { isZeroDevConnector } from "@dynamic-labs/ethereum-aa";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { KernelSmartAccount } from "@zerodev/sdk/accounts";
import { KernelAccountClient } from "@zerodev/sdk/clients";
import { EntryPoint } from "permissionless/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Transport } from "viem";
import { type Chain as ViemChain } from "viem/chains";

export type KernelClient = KernelAccountClient<
  EntryPoint,
  Transport,
  ViemChain,
  KernelSmartAccount<EntryPoint>
>;
const kernelContext = createContext<KernelClient | undefined>(undefined);

export function useKernelClient() {
  return useContext(kernelContext);
}

export function KernelProvider({ children }: { children: ReactNode }) {
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

  return (
    <kernelContext.Provider value={kernelClient}>
      {children}
    </kernelContext.Provider>
  );
}
