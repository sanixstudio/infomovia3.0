"use client";
import { Header } from "@/containers";
import { Footer } from "@/components";
import AppContextProvider from "../context/appContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <div className="flex flex-col h-screen">
              <Header />
              {children && <>{children}</>}
              <Footer />
            </div>
          </AppContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
