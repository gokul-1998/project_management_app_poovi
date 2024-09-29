"use client";

import Image from 'next/image';
import React,{ useState } from 'react'

const Sidebar = () => {
   const [showProjects, setShowProjects] = useState(true);
   const [showPriority, setShowPriority] = useState(true);

   const sidebarClassName='fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64';
  return (
    <div className={sidebarClassName}>
        <div className='flex h-[100%] w-full flex-col justify-start'>
            {/*TOP LOGO*/}
            <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
             <div className='text-xl font-bold text-gray-800'>EDList</div>
            </div>
            {/*TEAM*/}
            <div className='flex items-center gap-5 boder-y-[1.5px] border-gray-200 px-8 py-4 dark:boder-gray-700'>
              <Image src="/logo.png" alt="logo" width={40} height={40}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
