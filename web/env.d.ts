declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DYNAMIC_ID: string;
        NEXT_PUBLIC_ONCHAINKIT_API_KEY: string;
        NEXT_PUBLIC_CDP_PROJECT_ID: string;
        KEY: `0x${string}`;
        NEXT_PUBLIC_AGENT_ADDRESS: `0x${string}`;
        NEXT_PUBLIC_TOKEN_ADDRESS: `0x${string}`;
        CDP_API_KEY: string;
        CDP_API_SECRET: string;
        WALLET_SEED: string;
        WALLET_ID: string;
      }
    }
  }
}
