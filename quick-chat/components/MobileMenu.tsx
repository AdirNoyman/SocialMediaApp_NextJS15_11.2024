'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {

 const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=''>
        <div className="flex flex-col gap-[4.5px] cursor-pointer" onClick={prev => setIsOpen(!prev)}>
            <div className="w-6 h-1 bg-blue-500 rounded-sm" />
            <div className="w-6 h-1 bg-blue-500 rounded-sm" />
            <div className="w-6 h-1 bg-blue-500 rounded-sm" />
        </div>
        {isOpen && (<div className=''>
            <Link href="/">Home</Link>
            <Link href="/friends">Friends</Link>
            <Link href="/groups">Groups</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/login">Login</Link>
        </div>)}
    </div>
  )
}

export default MobileMenu