"use client";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

import { config } from "../wagmi";
import Footer from "@/components/LandingPage/Footer";
import Navbar from "../components/LandingPage/Navbar.jsx";
import Starfield from "@/components/ui/Starfield";

const client = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-void font-body text-ink antialiased">
        <WagmiProvider config={config}>
          <QueryClientProvider client={client}>
            <RainbowKitProvider
              theme={darkTheme({
                accentColor: "#8b7cf6",
                accentColorForeground: "#05060f",
                borderRadius: "large",
                overlayBlur: "small",
              })}
            >
              <Starfield />
              <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
