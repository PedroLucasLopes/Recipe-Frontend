"use client";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import SessionProvider from "./components/Provider/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ChakraProvider>
          <SessionProvider>{children}</SessionProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
