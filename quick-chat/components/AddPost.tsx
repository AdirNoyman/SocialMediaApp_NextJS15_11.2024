import Image from 'next/image';
import React from 'react';

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* AVATAR */}
      <Image src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=800" width={48} height={48} alt="nature" className='w-12 h-12 object-cover rounded-full'/>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind ASSHOLE? 🤪" className='bg-slate-100 rounded-lg flex-1 p-2'/>
          <Image src="/emoji.png" width={20} height={20} alt="emoji" className='w-5 h-5 cursor-pointer self-end'/>
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/addimage.png" width={20} height={20} alt="add photo" />
          Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/addVideo.png" width={20} height={20} alt="add video" />
          Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/addevent.png" width={20} height={20} alt="add event" />
          Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/poll.png" width={20} height={20} alt="poll" />
          Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
