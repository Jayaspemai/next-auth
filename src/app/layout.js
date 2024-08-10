"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <SessionProvider>
        <Navbar />
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
