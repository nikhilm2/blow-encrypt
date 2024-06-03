import { SignedIn } from '@clerk/nextjs'
import React from 'react'


const DashboardLayout = ({children}) => {
  return (
    <SignedIn>
    <div className='h-screen '>
      
      <div className='md:ml-30'>
      {children}
      </div>
      
     
      
    </div>
    </SignedIn>
  )
}

export default DashboardLayout