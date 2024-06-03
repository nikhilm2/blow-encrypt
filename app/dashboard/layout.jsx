import { SignedIn } from '@clerk/nextjs'
import React from 'react'
import SideNav from './_components/SideNav'

const DashboardLayout = ({children}) => {
  return (
    <SignedIn>
    <div>
      
      <div className='md:ml-30'>
      {children}
      </div>
      
     
      
    </div>
    </SignedIn>
  )
}

export default DashboardLayout