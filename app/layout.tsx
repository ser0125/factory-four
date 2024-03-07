import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/core/Navbar";

export const metadata: Metadata = {
  title: "Factory Four",
  description: "Factory Four Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-lvh">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
