"use client";

import Image from "next/image";

import logo from "@/app/_assets/logo.png";
import robot from "@/app/_assets/robot.png";
import {
  DynamicConnectButton,
  useIsLoggedIn,
} from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "../_actions/register";
import { useKernelClient } from "../_smartWallet";

export default function Register() {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const kernel = useKernelClient();

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  function onRegister() {
    if (!kernel?.account) return;
    register(
      kernel?.account.address,
      Number(height),
      Number(weight),
      "male"
    ).then(() => {
      router.push("/chat");
    });
  }

  return (
    <div className="px-4 min-h-screen">
      <header className="flex flex-col gap-6 mt-16 mb-10">
        <h2 className="text-4xl text-white font-bold">
          What is your Height and weight?
        </h2>
      </header>
      <div className="flex flex-col gap-3">
        <input
          type="number"
          placeholder="Your Height(...cm)"
          className="rounded-lg border border-neutral-3 placeholder-shown:border-neutral-2 placeholder:text-neutral-3 text-white focus:text-white bg-transparent px-3 py-2"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Your Weight(...kg)"
          className="rounded-lg border border-neutral-3 placeholder-shown:border-neutral-2 placeholder:text-neutral-3 text-white focus:text-white bg-transparent px-3 py-2"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button
        className="mt-12 text-black rounded-full bg-primary p-4 w-full font-semibold disabled:opacity-50"
        disabled={isNaN(Number(height || "x")) || isNaN(Number(weight || "x"))}
        onClick={() => onRegister()}
      >
        Done
      </button>
      <footer className="flex justify-center text-neutral-3 text-sm gap-3 mt-16">
        <a href="#">Term of Use</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
