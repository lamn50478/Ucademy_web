"use client"
import React from 'react'
import play from '../icons/play'
import IconPlay from '../icons/play'
import IconExplore from '../icons/iconExplore'
import { MenuItems } from '../../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import { TActiveLinkProps } from '../../types'
// file nayf tachs ra  để dùng pathname

const ActiveLink = ({
    url,
    children 

}:TActiveLinkProps) => {
    const pathName=usePathname();
    const isActive= url ==pathName; 
    
    console.log(pathName);
  return (
     <Link
            scroll={false}
             href={url}

           className={`p-3 rounded-md flex items-center gap-3   transition-all  
        ${isActive?"text-white bg-primary svg-animation  ":" hover:text-primary hover:bg-primary  hover:bg-opacity-10"}
      `}>
             {children}</Link>
  )
}

export default ActiveLink;