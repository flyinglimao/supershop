"use client";

import Image from "next/image";

import logo from "@/app/_assets/logo.png";
import robot from "@/app/_assets/robot.png";
import {
  DynamicConnectButton,
  useIsLoggedIn,
} from "@dynamic-labs/sdk-react-core";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push("/chat");
  }, [isLoggedIn]);

  return (
    <div className="max-w-3xl px-4 min-h-screen">
      <header className="flex flex-col gap-6 mt-16 mb-10 w-[21.75rem] max-w-full mx-auto">
        <Image src={logo.src} width={64} height={64} alt="logo" />
        <h2 className="text-4xl text-white font-bold">Create an account</h2>
      </header>
      <Image
        src={robot.src}
        width={348}
        height={348}
        alt=""
        className="max-w-full aspect-square mt-10 mb-16 mx-auto"
      />
      <div className="flex flex-col gap-4 mb-6 w-[21.75rem] max-w-full mx-auto">
        <p className="text-white text-center">Start your on-chain journey</p>
        <DynamicConnectButton buttonClassName="text-black rounded-full bg-primary p-4 w-full font-semibold">
          Let's Go!
        </DynamicConnectButton>
      </div>
      <footer className="flex justify-center text-neutral-3 text-sm gap-3">
        <a href="#">Term of Use</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
