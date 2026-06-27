import React from 'react';
import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'


import Sidebar from "@/app/components/layout/sidebar"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen" >
          <Sidebar></Sidebar>
          <main className="p-5">{children}</main>
        </div> 
  )
}

export default layout