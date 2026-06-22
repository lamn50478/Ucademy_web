import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

import "./globals.css";
import { manrope, roboto } from "./components/fonts";
import Sidebar from "@/app/components/layout/sidebar"


export const metadata: Metadata = {
  title: "ucademy app",
  description: "trang web bán khóa học siêu xịn mịn ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${manrope.className} m-0 p-0 min-h-screen antialiased`}
      >
       
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}


