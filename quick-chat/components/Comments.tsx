import Image from 'next/image';
import React from 'react';

const Comments = () => {
  return (
    <div className=''>
      {/* COMMENT INPUT FIELD */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/2091374/pexels-photo-2091374.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="concert"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-6 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="concert"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className=""></div>
    </div>
  );
};

export default Comments;
