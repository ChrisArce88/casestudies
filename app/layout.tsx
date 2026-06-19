// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Cal_Sans } from "next/font/google";
import Navbar from "./components/Navbar"; // Si la carpeta "components" está dentro de "app" junto al layout
// O usando el alias estándar de Next.js:
// import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer"; 

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const calSans = Cal_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cal-sans",
});

export const metadata: Metadata = {
  title: "Growth Frontend Developer Portfolio",
  description: "Specializing in premium frontend execution, dynamic funnels, and data attribution systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${calSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#171717] antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}