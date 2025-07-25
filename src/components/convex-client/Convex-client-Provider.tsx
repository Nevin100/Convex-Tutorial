"use client";

// Import the Convex React client and Next.js Auth provider
import { ConvexReactClient } from "convex/react";
import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";

// Import type for the children prop
import { ReactNode } from "react";

// Initialize Convex client using the environment variable
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Provider component to supply Convex client and auth context to the app
export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexAuthNextjsProvider client={convex}>
      {children}
    </ConvexAuthNextjsProvider>
  );
}
