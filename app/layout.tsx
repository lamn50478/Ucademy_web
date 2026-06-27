import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

import "./globals.css";
import { manrope, roboto } from "./components/fonts";
import Sidebar from "@/app/components/layout/sidebar"

import { cn } from "@/app/lib/utils";
import { ThemeProvider } from "./components/Common/ThemeProvider";



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
    <html lang="en" >
      <body
        className={`${manrope.className} m-0 p-0 min-h-screen antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

      </body>
    </html>
    </ClerkProvider>
  );
}


