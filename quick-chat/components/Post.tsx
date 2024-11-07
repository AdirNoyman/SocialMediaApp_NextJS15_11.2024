import Image from 'next/image';
import React from 'react';
import Comments from './Comments';

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/28683173/pexels-photo-28683173/free-photo-of-friendly-yellow-labrador-outdoors-in-tunisia.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={40}
            height={40}
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Koko Loko</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="more" />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/1612850/pexels-photo-1612850.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            alt="dog running"
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ex sequi
          quos placeat possimus pariatur vitae consequuntur architecto quis,
          eveniet, officiis sint, mollitia laudantium. Labore sint a suscipit
          tempora consequatur.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt="comment"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt="share"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
