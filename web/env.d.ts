declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DYNAMIC_ID: string;
      }
    }
  }
}
