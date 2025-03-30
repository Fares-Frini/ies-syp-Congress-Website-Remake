import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = localFont({
  src: "../../public/fonts/Montserrat.ttf",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "IEEE IES SYP 2.0",
  description: "IEEE IES SYP 2.0",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
