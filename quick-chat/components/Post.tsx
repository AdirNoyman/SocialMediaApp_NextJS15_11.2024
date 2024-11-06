import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/28683173/pexels-photo-28683173/free-photo-of-friendly-yellow-labrador-outdoors-in-tunisia.jpeg?auto=compress&cs=tinysrgb&w=600" width={40} height={40} alt="user" className="w-10 h-10 rounded-full" />
                <span className='font-medium'>Koko Loko</span>
            </div>
            <Image src="/more.png" width={16} height={16} alt="more" />
        </div>
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src="https://images.pexels.com/photos/1612850/pexels-photo-1612850.jpeg?auto=compress&cs=tinysrgb&w=600" fill alt="dog running" className="object-cover rounded-md" />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ex sequi quos placeat possimus pariatur vitae consequuntur architecto quis, eveniet, officiis sint, mollitia laudantium. Labore sint a suscipit tempora consequatur.</p>
        </div>
        {/* INTERACTION */}
        <div className=""></div>
    </div>
  )
}

export default Post