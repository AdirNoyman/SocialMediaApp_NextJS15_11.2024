import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800" alt="venice" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Koko</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800" alt="venice" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Koko</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800" alt="venice" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Koko</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800" alt="venice" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Koko</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800" alt="venice" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Koko</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800" alt="venice" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Koko</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800" alt="venice" width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Koko</span>
        </div>
      </div>
    </div>
  )
}

export default Stories