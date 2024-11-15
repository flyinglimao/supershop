declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DYNAMIC_ID: string;
        NEXT_PUBLIC_ONCHAINKIT_API_KEY: string;
        NEXT_PUBLIC_CDP_PROJECT_ID: string;
      }
    }
  }
}
