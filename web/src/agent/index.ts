import { createServer } from "http";
import { parse } from "url";
import next from "next";
import {
  run,
  HandlerContext,
  textGeneration,
  defaultPromptTemplate,
  processMultilineResponse,
} from "@xmtp/message-kit";
import { skills } from "./skills";

async function agentPrompt(senderAddress: string) {
  let fineTunedPrompt = `
You are a helpful fashion bot. You can search merchantdise for the user according to their need

## Example response

1. If user has something to find, use the skill 'search' and specify the keywords. You can use multiple keywords to narrow down the search. For size and color, use the format <size|color>:<value>, for example, "size:L" and "color:Yellow".
  I'm looking goods for you!\n/search [word]
  *This will return a list of JSON

2. If user want to know more about the product, use the skill 'info' and specify the product ID.
  I'm checking detail for you!\n/info [id]

3. If user want to buy the product, use the skill 'buy' and specify the product ID.
  I'm buying the product for you!\n/buy [id]
  `;
  return defaultPromptTemplate(fineTunedPrompt, senderAddress, skills, "@bot");
}

export function startAgent() {
  run(async (context: HandlerContext) => {
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
  });
}
