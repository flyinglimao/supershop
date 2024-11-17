"use client";

import avatar from "@/app/_assets/avatar.png";
import botAvatar from "@/app/_assets/bot-avatar.png";
import { type CachedMessage } from "@xmtp/react-sdk";
import Image from "next/image";
import { formatUnits, isAddressEqual } from "viem";

export function Message({ message }: { message: CachedMessage }) {
  const isUser = !isAddressEqual(
    message.senderAddress as `0x${string}`,
    process.env.NEXT_PUBLIC_AGENT_ADDRESS
  );

  if (isUser && typeof message.content === "string")
    return <TextMessage content={message.content} />;
  if (!isUser) return <AgentMessage content={message.content} />;

  return null;
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

function AgentMessage({ content }: { content: { content: string } | string }) {
  if (typeof content === "string") {
    return <TextMessage content={content} isBot />;
  }
  const type = getMessageType(content.content);
  if (type === "text") {
    return <TextMessage content={content.content} isBot />;
  }
  if (type === "ItemList") {
    return <ItemCardList items={JSON.parse(content.content)["items"]} />;
  }
  if (type === "Transaction") {
    return <Transaction tx={JSON.parse(content.content)} />;
  }
  return null;
}

function ItemCardList({
  items,
}: {
  items: ({
    name?: string;
    price?: string;
  } & { id: string })[];
}) {
  return (
    <div className="w-full overflow-auto flex px-6 gap-4">
      {items.map((item) => (
        <Item key={item["id"]} item={item} />
      ))}
    </div>
  );
}
const imageMap = {
  "ETH T Shirts": "/eth.png",
  "Celo T shirts": "/celo.png",
  "Eth pants": "/eth-pant.png",
  "Base Pants": "/base-pant.png",
  "Uniswap Pants": "/uniswap-pant.png",
  "Celo Pants": "/celo-pant.png",
  "Base T Shirts": "/base.png",
  "Uniswap T Shirts": "/uniswap.png",
};
function Item({
  item,
}: {
  item: {
    name?: string;
    price?: string;
  };
}) {
  return (
    <div className="rounded-3xl bg-white w-48 flex-shrink-0 overflow-hidden pb-2">
      <Image
        src={
          imageMap[item["name"] as keyof typeof imageMap] || "/base-pant.png"
        }
        width={192}
        height={192}
        alt="item"
      />
      <div className="flex flex-col py-1 px-2">
        <p>{item["name"] || "Product"}</p>
        <p>${formatUnits(BigInt(item["price"] || 0), 6) || "0"}</p>
      </div>
    </div>
  );
}

function Transaction({
  tx: { description, tx },
}: {
  tx: { description: string; tx: string };
}) {
  return (
    <div className="rounded-3xl bg-white w-80 flex-shrink-0 overflow-hidden p-4">
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{description}</p>
        <button
          className="bg-primary text-white rounded-lg py-1 px-2"
          onClick={() => {
            open(`https://base-sepolia.blockscout.com/tx/${tx}`);
          }}
        >
          Check Transaction
        </button>
      </div>
    </div>
  );
}

function getMessageType(text: string) {
  try {
    const { type } = JSON.parse(text);
    return type;
  } catch (err) {
    return "text";
  }
}
