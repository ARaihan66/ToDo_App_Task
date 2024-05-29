"use client"

import { Inter } from "next/font/google";
import { makeStore } from "./redux/store";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StoreProvider store={makeStore}>{children}</StoreProvider>
      </body>
    </html>
  );
}
