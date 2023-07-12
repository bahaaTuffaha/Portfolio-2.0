"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAHAA TUFFAHA",
  description: "Bahaa Tuffaha's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isProg, setIsProg] = useState(true);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName.includes("programming")) {
      setIsProg(true);
    } else {
      setIsProg(false);
    }
  }, [pathName]);
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: isProg ? "#8AD0EE" : "#000" }}
        className={inter.className}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
