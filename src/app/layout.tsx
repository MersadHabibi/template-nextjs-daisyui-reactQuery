import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "title",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-dvh overflow-y-auto overflow-x-hidden bg-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
