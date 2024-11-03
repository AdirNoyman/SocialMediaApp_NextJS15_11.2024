import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';

const NavBar = () => {
  return <div className='h-24 flex items-center justify-between'>
    {/* LEFT */}
    <div className="font-bold text-xl text-purple-800">
        <Link href="/">AdirSocial</Link>
    </div>
    {/* CENTER */}
    <div className="hidden"></div>
    {/* RIGHT */}
    <div className="">
        <MobileMenu />
    </div>

  </div>;
};

export default NavBar;
