"use client";

import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import Image from "next/image";
import { InstallPrompt } from "./_components/InstallPrompt";
import { SendTransaction } from "./_components/SendTransaction";
import { FundButton } from "@coinbase/onchainkit/fund";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <DynamicWidget />
      <SendTransaction />
      <FundButton />
      <InstallPrompt />
    </div>
  );
}
