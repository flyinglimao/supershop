import "@coinbase/onchainkit/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "./providers";

export const metadata: Metadata = {
  title: "SuperShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-neutral-1 max-w-xl mx-auto`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
