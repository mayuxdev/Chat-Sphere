import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatSphere",
  description: "Realtime Room Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}