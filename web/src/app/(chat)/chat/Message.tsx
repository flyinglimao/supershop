"use client";

import { type CachedMessage } from "@xmtp/react-sdk";
import { isAddressEqual } from "viem";
import Image from "next/image";

import avatar from "@/app/_assets/avatar.png";
import botAvatar from "@/app/_assets/bot-avatar.png";

export function Message({ message }: { message: CachedMessage }) {
  const isUser = !isAddressEqual(
    message.senderAddress as `0x${string}`,
    process.env.NEXT_PUBLIC_AGENT_ADDRESS
  );

  if (isUser) return <TextMessage content={message.content} />;

  return <AgentMessage content={message.content} />;
}

function TextMessage({ content, isBot }: { content: string; isBot?: boolean }) {
  return (
    <div className="flex flex-col p-6 gap-3">
      <div className="flex items-center gap-3">
        <Image
          src={isBot ? botAvatar.src : avatar.src}
          width={24}
          height={24}
          alt="avatar"
          className="rounded-full"
        />
        <span className="text-white">{isBot ? "Chat Bot AI" : "Me"}</span>
      </div>
      <p className="text-primary">{content}</p>
    </div>
  );
}

function AgentMessage({ content }: { content: string }) {
  const type = getMessageType(content);
  if (type === "text") return <TextMessage content={content} isBot />;
}

function getMessageType(text: string) {
  try {
    const { type } = JSON.parse(text);
    return type;
  } catch (err) {
    return "text";
  }
}
