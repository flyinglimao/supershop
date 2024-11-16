import type { SkillGroup, HandlerContext } from "@xmtp/message-kit";
import {
  bytesToHex,
  decodeAbiParameters,
  encodeAbiParameters,
  hexToString,
  parseAbiParameters,
  stringToBytes,
  stringToHex,
} from "viem";
import {
  execute,
  GetItemDocument,
  Item,
  SearchItemDocument,
} from "~/.graphclient";

async function handler(context: HandlerContext) {
  const {
    message: {
      content: { skill, params, text },
    },
  } = context;
  switch (skill) {
    case "search":
      const keywords = params.keyword.split(",");
      const result = await execute(SearchItemDocument, {
        query: keywords.map((keyword: string) => ({
          metadata_contains: stringToHex(keyword).slice(2),
        })),
      });

      if (result.data.items.length === 0) {
        context.reply("I can't find any item, please try again.");
        return;
      } else {
        context.reply(
          JSON.stringify({
            type: "ItemList",
            items: result.data.items.map((e: Item) => ({
              ...e,
              ...solveMetadata(e.metadata),
            })),
          })
        );
      }
      return;

    case "buy": {
      const id = params.id;
      const result = await execute(GetItemDocument, { id });
      console.log(result, id);
      if (!result.data.item) {
        context.reply("I can't find the item.");
        return;
      }

      context.reply(
        JSON.stringify({
          type: "Order",
          ...result.data.item,
          ...solveMetadata(result.data.item.metadata),
        })
      );
      return;
    }
  }
}

const STRING = bytesToHex(stringToBytes("string", { size: 32 }));
function solveMetadata(metadata: `0x${string}`): object {
  if (metadata === "0x") return {};

  const [key, type] = decodeAbiParameters(
    parseAbiParameters("bytes32, bytes32"),
    metadata
  );
  if (type === STRING) {
    const [, , value] = decodeAbiParameters(
      parseAbiParameters("bytes32, bytes32, string"),
      metadata
    );

    const current = encodeAbiParameters(
      parseAbiParameters("bytes32, bytes32, string"),
      [key, type, value]
    );

    return {
      [hexToString(key, { size: 32 })]: value,
      ...solveMetadata(metadata.replace(current, "0x") as `0x${string}`),
    };
  }

  throw new Error("Unsupported type");
}

export const skills: SkillGroup[] = [
  {
    name: "Fashion bot",
    tag: "@bot",
    description: "Fashion bot for searching goods.",
    skills: [
      {
        skill: "/search [keywords]",
        examples: ["/search bangkok,t-shirt,size:L,color:Yellow"],
        description: "Search for goods.",
        handler,
        params: {
          keyword: {
            default: "",
            plural: true,
            type: "string",
          },
        },
      },
      {
        skill: "/info [id]",
        examples: ["/info 0x2889bc7Cfd6f3e5dfA0fa14B43a091F11fcE4909:1"],
        description: "Get detail of a good.",
        handler,
        params: {
          id: {
            default: "",
            type: "string",
          },
        },
      },
      {
        skill: "/buy [id]",
        examples: ["/info 0x2889bc7Cfd6f3e5dfA0fa14B43a091F11fcE4909:1"],
        description: "Place a order to buy a good.",
        handler,
        params: {
          id: {
            default: "",
            type: "string",
          },
        },
      },
    ],
  },
];
