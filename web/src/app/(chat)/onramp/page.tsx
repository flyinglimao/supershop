"use client";

import { useKernelClient } from "../../_smartWallet";
import Image from "next/image";

import logo from "@/app/_assets/logo.png";
import dropdown from "@/app/_assets/dropdown.png";
import diamond from "@/app/_assets/diamond.png";
import { useRouter } from "next/navigation";

function getShortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function Register() {
  const kernel = useKernelClient();
  const router = useRouter();

  return (
    <div className="px-4 min-h-screen">
      <header className="bg-neutral-1 flex items-center p-4 justify-between">
        <p className="text-xl text-white font-semibold">
          Deposit an enough USD for AI Agent
        </p>
        <button role="button p-2">
          <Image {...dropdown} alt="menu" />
        </button>
      </header>
      <div className="pt-16 pb-72 flex flex-col items-center gap-3">
        <Image src={logo.src} width={122} height={122} alt="logo" />
        <p className="text-white text-xl font-semibold">SuperShopper</p>
        <p className="text-neutral-3">
          {getShortenAddress(kernel?.account?.address || "")}
        </p>
        <button
          type="button"
          className="bg-gradient-to-r to-[#FFC47F] from-[#DF9ECD] text-black rounded-full px-4 py-2 font-semibold flex items-center gap-1"
          onClick={() => router.push("/register")}
        >
          <Image {...diamond} alt="" />
          Onboarding
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <button
          className="text-black rounded-full bg-primary p-4 w-full font-semibold disabled:opacity-50"
          type="button"
        >
          Deposit with Crypto
        </button>
        <button
          className="text-black rounded-full bg-primary p-4 w-full font-semibold disabled:opacity-50"
          type="button"
        >
          Deposit with Credit Card
        </button>
        <button
          className="text-black w-full relative text-center"
          type="button"
          onClick={() => router.push("/chat")}
        >
          <div className="w-full h-0.5 bg-neutral-3/30 left-0 top-1/2 -translate-y-1/2 absolute -z-10"></div>
          <span className="bg-neutral-1 text-neutral-3 px-6 z-30">Skip</span>
        </button>
      </div>
      <footer className="flex justify-center text-neutral-3 text-sm gap-3 mt-16">
        <a href="#">Term of Use</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
