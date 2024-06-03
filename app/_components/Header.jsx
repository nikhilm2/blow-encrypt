"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Header = () => {
    const {user, isSignedIn} = useUser();
  return (
    <div className='p-5 border-b shadow-sm'>
        <div className='flex items-center justify-between '>
        <Link href={"/"}><Image src={"/logo.svg"} 
        width={50} height={50} alt='logo'/></Link>
        {
            isSignedIn? <div className='flex gap-2'>
                <Link href={"/dashboard"}><Button >Dashboard</Button></Link>
                <UserButton/>
            </div>: <SignInButton>
            <Button>Get Started</Button>
            </SignInButton>
        }
       
        </div>
    </div>
  )
}

export default Header