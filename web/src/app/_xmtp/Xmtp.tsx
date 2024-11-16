"use client";

import {
  CachedConversation,
  CachedMessage,
  useClient,
  useConversations,
  useMessages,
  useSendMessage,
  useStartConversation,
  useStreamMessages,
} from "@xmtp/react-sdk";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createWalletClient, custom } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { getUser } from "../_actions/getUser";
import { useKernelClient } from "../_smartWallet";
import { useRouter } from "next/navigation";

function StreamConversation({
  conversation,
  children,
}: {
  conversation: CachedConversation;
  children?: ReactNode;
}) {
  useStreamMessages(conversation);
  const { sendMessage: sendMessage_ } = useSendMessage();
  const { messages } = useMessages(conversation);

  return (
    <ChatContext.Provider
      value={{
        sendMessage: async (text: string) => {
          sendMessage_(conversation, text);
        },
        messages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export type ChatContext = {
  sendMessage: (message: string) => Promise<void>;
  messages: CachedMessage[];
};
const ChatContext = createContext<ChatContext | null>(null);

export function XmtpProvider({ children }: { children: ReactNode }) {
  const kernelClient = useKernelClient();
  const { client, initialize } = useClient();
  const { conversations } = useConversations();
  const [conversation, setConversation] = useState<CachedConversation>();
  const { startConversation } = useStartConversation();
  const router = useRouter();

  useEffect(() => {
    let stop = false;
    async function init() {
      if (!kernelClient?.account.address) return;

      const user = await getUser(kernelClient.account.address);

      if (!user?.chatKey) return router.push("/register");
      if (stop) return;

      const client = createWalletClient({
        account: privateKeyToAccount(user.chatKey as `0x${string}`),
        transport: custom(kernelClient.transport),
      });
      await initialize({
        // @ts-ignore
        signer: client,
        options: {
          env: "production",
        },
      });
    }

    init();

    return () => {
      stop = true;
    };
  }, [kernelClient, initialize]);

  useEffect(() => {
    if (!client) return;

    if (conversations.length) {
      setConversation(conversations[0]);
    }
  }, [client, conversations]);

  if (!client) return null;

  if (!conversation) {
    return (
      <ChatContext.Provider
        value={{
          sendMessage: async (txt: string) => {
            startConversation(process.env.NEXT_PUBLIC_AGENT_ADDRESS, txt);
          },
          messages: [],
        }}
      >
        {conversation ? (
          <StreamConversation conversation={conversation} />
        ) : null}
        {children}
      </ChatContext.Provider>
    );
  }

  return (
    <StreamConversation conversation={conversation}>
      {children}
    </StreamConversation>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within XmtpProvider");
  return ctx;
}
