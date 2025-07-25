import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import { ConvexClientProvider } from "@/components/convex-client/Convex-client-Provider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convex Tutorial",
  description: "Full Stack Convex Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} min-h-[calc(100vh-2rem)] flex flex-col gap-4 antialiased`}
        >
          <ConvexClientProvider>
            <Navbar />
            <main className="px-2 md:px-4 grow flex flex-col">{children}</main>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
