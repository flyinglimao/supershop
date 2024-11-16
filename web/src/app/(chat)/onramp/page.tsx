"use client";

import { useKernelClient } from "../../_smartWallet";

export default function Register() {
  const kernel = useKernelClient();

  return (
    <div className="px-4 min-h-screen">
      <header className="flex flex-col gap-6 mt-16 mb-10">
        <h2 className="text-4xl text-white font-bold">
          What is your Height and weight?
        </h2>
      </header>

      <footer className="flex justify-center text-neutral-3 text-sm gap-3 mt-16">
        <a href="#">Term of Use</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
