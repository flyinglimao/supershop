import { run, HandlerContext } from "@xmtp/message-kit";

run(async (context: HandlerContext) => {
  await context.send(
    "A crypto-themed outfit starts with a black T-shirt featuring a bold Bitcoin logo on the chest, crafted from soft cotton for all-day comfort. Pair it with dark denim jeans or jogger pants that have subtle blockchain code patterns along the sides, adding a tech-inspired touch. Layer with a lightweight hoodie adorned with a collage of various cryptocurrency symbols for extra style and warmth. Accessorize with a snapback cap embroidered with the Ethereum logo and a minimalist wristband bearing a QR code. Finish the look with sneakers that have metallic accents, tying together a modern ensemble perfect for any crypto enthusiast."
  );
});
