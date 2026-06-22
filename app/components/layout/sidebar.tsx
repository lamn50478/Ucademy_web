import React from 'react'
import play from '../icons/play'
import IconPlay from '../icons/play'
import IconExplore from '../icons/iconExplore'
import { MenuItems } from '../../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import ActiveLink from '../Link/activeLink'
import { TMenuItem } from '../../types'

const Sidebar = () => {
  return (
    <div className='p-5 border-r border-r-gray-200'>

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
