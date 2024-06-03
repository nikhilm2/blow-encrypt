"use client"
import { LibraryBig, Shield } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
    const menuList = [
        {
            id:1,
            name:'My Responses',
            icon:LibraryBig,
            path:'/responses'
        },
        
    ]

    const path = usePathname();
    useEffect(()=>{console.log(path)},[path])
  return (
    <div className='h-screen shadow-md border'>
        <div className='p-5'>
            {menuList.map((menu,index)=>(
                
                <Link key={index} href={menu.path} className='flex items-center gap-3 hover:bg-primary p-4 hover:text-white rounded-lg cursor-pointer'>
                    <menu.icon/>
                    {menu.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideNav