import type { SkillGroup, HandlerContext } from "@xmtp/message-kit";
import {
  bytesToHex,
  decodeAbiParameters,
  encodeAbiParameters,
  erc20Abi,
  hexToString,
  numberToHex,
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
import { Wallet } from "@coinbase/coinbase-sdk";

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

      if (!result.data.item) {
        context.reply("I can't find the item.");
        return;
      }

      const wallet = await Wallet.import({
        walletId: process.env.WALLET_ID,
        seed: process.env.WALLET_SEED,
      });

      const contract = id.slice(0, 42) as `0x${string}`;
      const itemId = id.slice(42);

      await context.reply(
        "I'm going to buy one " +
          result.data.item.itemName +
          ". I'll first approve the merchant to use USDC."
      );
      const tx = await wallet.invokeContract({
        abi: erc20Abi,
        contractAddress: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
        method: "approve",
        args: {
          spender: contract,
          amount: result.data.item.price,
        },
      });
      await tx.wait();

      await context.reply(
        JSON.stringify({
          type: "Transaction",
          description: "Approved the contract to spend the token.",
          tx: tx.getTransactionHash(),
        })
      );

      await context.reply("I'm going to finish the purchase. Please wait.");
      const tx2 = await wallet.invokeContract({
        abi: [
          {
            inputs: [
              {
                name: "itemId",
                type: "uint256",
              },
            ],
            name: "buyItemOne",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        contractAddress: contract,
        method: "buyItemOne",
        args: {
          itemId: itemId,
        },
      });
      await tx2.wait();
      context.reply(
        JSON.stringify({
          type: "Transaction",
          description: `Bought one ${result.data.item.itemName}.`,
          tx: tx2.getTransactionHash(),
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
      // {
      //   skill: "/info [id]",
      //   examples: ["/info 0x2889bc7Cfd6f3e5dfA0fa14B43a091F11fcE4909:1"],
      //   description: "Get detail of a good.",
      //   handler,
      //   params: {
      //     id: {
      //       default: "",
      //       type: "string",
      //     },
      //   },
      // },
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
