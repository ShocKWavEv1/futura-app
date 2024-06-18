import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "FVTVRA | IN GAFFER WE TRVST",
  description: "Compact movil and electric van",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
