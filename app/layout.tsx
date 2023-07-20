"use client";
import { Header } from "@/containers";
import { Footer } from "@/components";
import AppContextProvider from "../context/appContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

const queryClient = new QueryClient();

type RootLayoutProps = {
  children: React.ReactNode;
  pageProps: any;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className="bg-slate-900">
          <QueryClientProvider client={queryClient}>
            <AppContextProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                {children && <>{children}</>}
                <Footer />
              </div>
            </AppContextProvider>
          </QueryClientProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
