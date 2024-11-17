import { Coinbase } from "@coinbase/coinbase-sdk";
import {
  defaultPromptTemplate,
  HandlerContext,
  processMultilineResponse,
  run,
  textGeneration,
} from "@xmtp/message-kit";
import { skills } from "./skills";

Coinbase.configure({
  apiKeyName: process.env.CDP_API_KEY,
  privateKey: process.env.CDP_API_SECRET,
});

async function agentPrompt(senderAddress: string) {
  let fineTunedPrompt = `
You are a helpful fashion bot. You can search merchantdise for the user according to their need

## Example response

1. If user has something to find, use the skill 'search' and specify the keywords. You can use multiple keywords and join them with comma (so it should look like "t-shirt,yellow") to narrow down the search. For size and color, use the format <size|color>:<value>, for example, "size:L" and "color:Yellow".
  I'm looking goods for you!\n/search [word]

2. If user want to buy the product, use the skill 'search' to find products and product ids, and decidee a best choice for user and use the skill 'buy'.
  I'm searching for the product for you!\n/search [word]\nI'm buying the product for you!\n/buy [id]
  `;
  return defaultPromptTemplate(fineTunedPrompt, senderAddress, skills, "@bot");
}

export async function startAgent() {
  run(
    async (context: HandlerContext) => {
      const {
        message: {
          content: { text, params },
          sender,
        },
      } = context;

      try {
        let userPrompt = params?.prompt ?? text;
        const { reply } = await textGeneration(
          sender.address,
          userPrompt,
          await agentPrompt(sender.address)
        );
        await processMultilineResponse(sender.address, reply, context);
      } catch (error) {
        console.error("Error during OpenAI call:", error);
        await context.send("An error occurred while processing your request.");
      }
    },
    {
      skills,
    }
  );
}
