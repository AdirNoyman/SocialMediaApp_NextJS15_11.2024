import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import Image from 'next/image';


const NavBar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-purple-800">
        <div className="flex flex-row justify-start gap-1"><Image src="/myLogo.svg" alt="logo" width={28} height={28}/>AdirosSocial</div>
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.png" alt="home page" width={16} height={16} className='w-4 h-4'/>
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/friends.png" alt="friends" width={16} height={16} className='w-4 h-4'/>
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/stories.png" alt="stories" width={16} height={16}className='w-4 h-4'/>
            <span>HomePage</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">

        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;
