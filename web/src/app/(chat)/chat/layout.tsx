"use client";

import { XmtpProvider } from "@/app/_xmtp/Xmtp";
import {
  XMTPProvider,
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  replyContentTypeConfig,
} from "@xmtp/react-sdk";
import { ReactNode } from "react";

const contentTypeConfigs = [
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  replyContentTypeConfig,
];

export default function ChatProvider({ children }: { children: ReactNode }) {
  return (
    <XMTPProvider contentTypeConfigs={contentTypeConfigs}>
      <XmtpProvider>{children}</XmtpProvider>
    </XMTPProvider>
  );
}
