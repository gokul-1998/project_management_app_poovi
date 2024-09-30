<<<<<<< HEAD
"use client"

import React, { useEffect } from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from '@/app/(components)/Sidebar'
import StoreProvider, { useAppSelector } from './redux'
=======
import React from 'react';
import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';
>>>>>>> 73fe80c03703fb4670ec99cc620e0125b5dae6bf

const DashboardLayout = ({children}: {children: React.ReactNode} ) => {
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed,);
    const isDarkMode= useAppSelector((state)=> state.global.isDarkMode,);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/*sidebar*/}
       <Sidebar />
<<<<<<< HEAD
        <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${ isSidebarCollapsed ? "": "md:pl-64"}`}>
=======
        <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}>
>>>>>>> 73fe80c03703fb4670ec99cc620e0125b5dae6bf
          <Navbar />
          {children}
        </main>
    </div>     
);
};

const DashboardWrapper = ({children}: {children: React.ReactNode} ) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
      
  )
}

export default DashboardWrapper