"use client";

import Image from "next/image";

import logo from "@/app/_assets/logo.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser } from "../../_actions/getUser";
import { useKernelClient } from "../../_smartWallet";

export default function Chat() {
  const router = useRouter();
  const kernel = useKernelClient();
  const [user, setUser] = useState<Awaited<ReturnType<typeof getUser>>>();

  useEffect(() => {
    if (!kernel?.account) return;

    let stop = false;

    async function fetchUser() {
      if (!kernel?.account) return;
      const user = await getUser(kernel.account.address);
      if (stop) return;
      if (!user) {
        return router.push("/register");
      }
      setUser(user);
    }

    fetchUser();
  }, [kernel]);

  return (
    <div className="px-4 min-h-screen">
      <header className="flex flex-col gap-6 mt-16 mb-10 w-[21.75rem] max-w-full mx-auto">
        <Image src={logo.src} width={64} height={64} alt="logo" />
        <h2 className="text-4xl text-white font-bold">Create an account</h2>
      </header>
      <footer className="flex justify-center text-neutral-3 text-sm gap-3">
        <a href="#">Term of Use</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
