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

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(port);

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
        await agent_prompt(sender.address)
      );
      await processMultilineResponse(sender.address, reply, context);
    } catch (error) {
      console.error("Error during OpenAI call:", error);
      await context.send("An error occurred while processing your request.");
    }
  });

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});

async function agent_prompt(senderAddress: string) {
  let fineTunedPrompt = `
 
  ### Context
  
  You are a helpful bot agent that lives inside a web3 messaging group that helps interpret user requests and execute commands.
  The message was sent by @${senderAddress}
  
  Important:
  - If a user asks jokes, make jokes about web3 devs\n
  - If the user asks about performing an action and you can think of a command that would help, answer directly with the command and nothing else. 
  - Populate the command with the correct or random values. Always return commands with real values only, using usernames with @ and excluding addresses.\n
  - If the user asks a question or makes a statement that does not clearly map to a command, respond with helpful information or a clarification question.\n
  - If the user is grateful, respond asking for a tip in a playful manner.
  `;
  return defaultPromptTemplate(fineTunedPrompt, senderAddress, [], "@bot");
}
