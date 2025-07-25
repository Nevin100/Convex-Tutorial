'use client';

// Import ConvexProvider and ConvexReactClient to enable React integration with Convex backend
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Import ReactNode type to type the children prop
import { ReactNode } from "react";

// Create a new instance of ConvexReactClient using the environment variable for the Convex backend URL
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Create a wrapper component to provide the Convex client to the entire React component tree
export function ConvexClientProvider({ children }: { children: ReactNode }) {
  // Wrap children components inside ConvexProvider to enable access to Convex backend features
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
