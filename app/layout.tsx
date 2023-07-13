import "./globals.css";
import type { Metadata } from "next";
import { NavBar } from "./NavBar";
import { CustomBody } from "./CustomBody";
import { Inter } from "next/font/google";

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
  return (
    <html lang="en">
      <CustomBody inter={inter}>
        <>
          <NavBar />
          {children}
        </>
      </CustomBody>
    </html>
  );
}
