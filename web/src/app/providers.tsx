"use client";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import { ReactNode } from "react";
import { http } from "viem";
import { baseSepolia, polygonAmoy } from "wagmi/chains";
import { WagmiProvider, createConfig } from "wagmi";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { KernelProvider } from "./_smartWallet";

const config = createConfig({
  chains: [baseSepolia, polygonAmoy],
  multiInjectedProviderDiscovery: false,
  transports: {
    [baseSepolia.id]: http(),
    [polygonAmoy.id]: http(),
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
          <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
            projectId={process.env.NEXT_PUBLIC_CDP_PROJECT_ID}
            chain={baseSepolia}
          >
            <DynamicWagmiConnector>
              <KernelProvider>{children}</KernelProvider>
            </DynamicWagmiConnector>
          </OnchainKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
