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

export default function Register() {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  return (
    <div className="max-w-3xl px-4">
      <header className="flex flex-col gap-6 mt-16 mb-10">
        <h2 className="text-4xl text-white font-bold">
          What is your Height and weight?
        </h2>
      </header>
      <footer className="flex justify-center text-neutral-3 text-sm gap-3">
        <a href="#">Term of Use</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
