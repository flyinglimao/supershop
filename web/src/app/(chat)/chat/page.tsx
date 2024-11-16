"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser } from "../../_actions/getUser";
import { useKernelClient } from "../../_smartWallet";

import logo from "@/app/_assets/logo.png";
import menu from "@/app/_assets/menu.png";
import mic from "@/app/_assets/mic.png";
import send from "@/app/_assets/send.png";
import upload from "@/app/_assets/upload.png";
import { StartChat } from "./StartChat";
import { useChat, XmtpProvider } from "@/app/_xmtp/Xmtp";
import { Message } from "./Message";

export default function Chat() {
  const router = useRouter();
  const kernel = useKernelClient();
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();

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
    }

    fetchUser();
  }, [kernel]);

  return (
    <div className="px-4 min-h-screen relative flex flex-col">
      <header className="bg-neutral-1 flex items-center p-4 gap-3 sticky top-0">
        <button role="button p-2" onClick={() => router.push("/onramp")}>
          <Image
            src={menu.src}
            width={menu.width}
            height={menu.height}
            alt="menu"
          />
        </button>
        <Image src={logo.src} width={48} height={48} alt="logo" />
        <div className="flex-1 flex-col gap-1">
          <p className="text-white text-xl font-semibold">SuperShopper</p>
          <p className="text-[#DF9EDB] text-sm font-semibold">Balance: $100</p>
        </div>
        <button role="button p-2">
          <Image
            src={upload.src}
            width={upload.width}
            height={upload.height}
            alt="upload"
          />
        </button>
      </header>
      <div className="flex-1 mb-4">
        {messages.length === 0 ? (
          <StartChat send={sendMessage} />
        ) : (
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))
        )}
      </div>
      <footer className="sticky bottom-0 text-white px-6 pb-6 flex flex-col gap-4 pointer-events-none">
        <button
          type="button"
          className="bg-gradient-to-r from-[#FFC47F] to-[#DF9ECD] rounded-full size-16 grid place-items-center pointer-events-auto"
        >
          <Image
            src={mic.src}
            width={mic.width}
            height={mic.height}
            alt="speech to text"
          />
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
            setInput("");
          }}
        >
          <div className="flex gap-3 pointer-events-auto">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="rounded-full border border-neutral-3 placeholder-shown:border-neutral-2 placeholder:text-neutral-3 text-white focus:text-white px-4 py-1 w-full bg-neutral-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary rounded-full grid place-items-center size-14 flex-shrink-0"
            >
              <Image
                src={send.src}
                width={send.width}
                height={send.height}
                alt="send"
              />
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}
