import type { SkillGroup, HandlerContext } from "@xmtp/message-kit";

async function handler(context: HandlerContext) {
  const {
    message: {
      content: { skill, params, text },
    },
  } = context;
  if (skill) {
    console.log(skill, params, text);
    // Send the URL for the requested game
    // context.reply("yooooo");
  }
}

export const skills: SkillGroup[] = [
  {
    name: "Fashion bot",
    tag: "@bot",
    description: "Fashion bot for searching goods.",
    skills: [
      {
        skill: "/search [keyword]",
        examples: ["/search bangkok t-shirt size:L color:Yellow"],
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
            plural: true,
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
            plural: true,
            type: "string",
          },
        },
      },
    ],
  },
];
