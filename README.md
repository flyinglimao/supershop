# ![SuperShop](/images/logo.png)

Here's a future of E-commerce - One-stop concierge for your shopping. Multi-AI-Agent searches, choose and execute a payment for you.

![](/images/hero.png)

## Description

SuperShop is an on-chain e-commerce with experience from chatting to payment assistance through AI agents. By leveraging AI agents and blockchain, Supershop allows users to simply express their shopping needs to a personal AI agent.

After chatting, this agent automatically searches for products from multiple blockchains like Polygon, Celo, and Base, interacts with merchant agents via XMTP messaging to obtain real-time product information, and analyzes on-chain data through The Graph to assist users in making informed purchasing decisions.

To supply more efficiency and a next-generation e-commerce shopping experience, we streamline user onboarding and wallet management, reducing barriers to entry and simplifying the wallet setup process without the complexities of private key management.

By automating the search and purchase process, Supershop offers a personalized, efficient, and secure shopping experience. Users benefit from the convenience of having multi-AI agents handle everything—from finding products that match their exact needs to executing payments—empowering them to effortlessly acquire items that perfectly align with their preferences.

This one-stop, concierge-style service represents the future of e-commerce, making shopping simpler and more intuitive than ever before.

## How it's made

![](/images/tech.png)

Dynamic, ZeroDev Account Abstract Wallet, Coinbase Onchain Kit, Coinbase CDP, XMTP, The Graph, Smart contract, Polygon, Celo, Base

For user onboarding and wallet management, we utilize Dynamic and ZeroDev (account abstraction wallets) to reduce barriers when users access the application. This approach simplifies wallet use and lowers the complexity of private key storage and management, making the app more user-friendly than other apps. Additionally, we employ the Coinbase Onchain Kit to enable users to conveniently deposit USDC into their agent wallets, facilitating subsequent payments and transactions.

In terms of AI agent communication, we enable users to interact with their agents via XMTP, allowing the agent to understand the user's needs effectively. Simultaneously, the user's agent communicates with the merchant's agent through XMTP to obtain merchant information and current product statuses. By analyzing on-chain product data and descriptions provided by merchants, the agent assists users in making informed decisions and determining if products meet their requirements. Finally, the AI agent wallet helps users complete transactions, with wallet management achieved through Coinbase CDP.

For data acquisition by the user's agent, we primarily utilize The Graph to integrate events of product listings or delistings emitted on blockchains like Polygon, Celo, and Base. This allows us to continuously update and retrieve on-chain data in real-time.

Overall, Supershop offers a user-friendly, seamless way for users to engage with the decentralized agent commerce model. Users simply need to express their needs to the agent, which will automatically analyze on-chain data, make decisions, and execute transactions based on those needs—providing a powerful tool for users to easily purchase products that meet their requirements.
