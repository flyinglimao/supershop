import { Client, type Signer } from "@xmtp/browser-sdk";
import { useEffect, useState } from "react";
import { hexToBytes, keccak256, stringToHex } from "viem";
import { usePublicClient } from "wagmi";
import { useKernelClient } from "../_smartWallet";

export function useXmtp() {
  const kernel = useKernelClient();
  const [client, setClient] = useState<Client>();
  const publicClient = usePublicClient();
  const [blockNumber, setBlockNumber] = useState<bigint>();

  useEffect(() => {
    if (!kernel || !publicClient) return;
    if (!blockNumber) {
      publicClient.getBlockNumber().then(setBlockNumber);
      return;
    }

    const signer: Signer = {
      getAddress: async () => kernel.account.address,
      signMessage: async (message) => {
        return hexToBytes(await kernel.signMessage({ message }));
      },
      // these methods are required for smart contract wallets
      // block number is optional
      getBlockNumber: () => {
        return blockNumber;
      },
      // this example uses the Base chain
      getChainId: () => BigInt(8453),
    };
    const xmtp = Client.create(
      signer,
      hexToBytes(keccak256(stringToHex("supershop@ethglobalbangkok")))
    ).then(setClient);
  }, [kernel, blockNumber]);

  return client;
}
