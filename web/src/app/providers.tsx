"use client";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import { ReactNode } from "react";
import { http } from "viem";
import { baseSepolia } from "viem/chains";
import { WagmiProvider, createConfig } from "wagmi";

const config = createConfig({
  chains: [baseSepolia],
  multiInjectedProviderDiscovery: false,
  transports: {
    [baseSepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

export function Provider({ children }: { children: ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ID,
        walletConnectors: [
          EthereumWalletConnectors,
          ZeroDevSmartWalletConnectors,
        ],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
