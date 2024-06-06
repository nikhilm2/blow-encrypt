// components/Header.js
"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-5 border-b shadow-sm'>
      <div className='flex items-center justify-between '>
        <Link href={"/"}><Image src={"/logo.svg"} width={50} height={50} alt='logo' /></Link>

        <div className='flex gap-2'>
          <Link href={"/team"}><Button variant="ghost">Team</Button></Link>
          {isSignedIn ? (
            <>
              <Link href={"/dashboard"}><Button>Dashboard</Button></Link>
              <UserButton />
            </>
          ) : (
            <SignInButton><Button>Get Started</Button></SignInButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
