"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppStore } from "@/app/store/app";
import Loader from "@/app/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { setAppLoading } = useAppStore();

  useEffect(() => {
    setAppLoading(false);
  }, [pathname]);

  return (
    <html lang="en">
      <title>Backoffice</title>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Loader />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
