"use client"
import React from 'react'
import play from '../icons/play'
import IconPlay from '../icons/play'
import IconExplore from '../icons/iconExplore'
import { MenuItems } from '../../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'

import { TMenuItem } from '../../types'
import { ActiveLink } from '../Common'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '../Common/ModeToggle'

const Sidebar = () => {
  return (
    <div className='p-5 border-r border-r-gray-200 bg-white dark:bg-grayDarker dark:border-opacity-10 flex flex-col'>

    <a href="/" className='block font-bold text-3xl mb-5 hover:text-primary '>Ucademy</a>
    <ul className="flex flex-col gap-2 ">
     
      {MenuItems.map((item,index)=>(
          <MenuItem
             key={index}
             url={item.url}
             title={item.title}
             icon={item.icon}
          ></MenuItem>
      ))}

    </ul>
    <div className="mt-auto flex items-center justify-end gap-5">
       <ModeToggle></ModeToggle>
       <UserButton/>
       </div>
   
    </div>
  )
}

function MenuItem({
     url="/",
     title="",
     icon 
}:TMenuItem){
  
  
  return (
      <li >
        <ActiveLink url={url}>
            {icon}
          {title}
          
        </ActiveLink>
       
        </li>
   )

}


export default Sidebar; 
