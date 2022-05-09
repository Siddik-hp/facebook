import Image from 'next/image'
import React from 'react'
import { useSession } from 'next-auth/react'
import { PhotographIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
const InputBox = () => {
  const postSubmit = (e) => {
    e.preventDefault()

  }
  const { data: session } = useSession()
  return (
    <div className='mt-10 bg-white shadow-md  rounded-md max-w-md mx-auto font-medium	 '>
      <div className='flex space-x-3 border-b p-4'>
        <Image alt="user" width={40} height={40} layout="fixed" src={session.user.image} className="rounded-full object-cover" />
        <form className=" flex flex-1" method='POST' onSubmit={postSubmit}>
          <input type="text" name="message" placeholder={`What's on your mind, ${session.user.name}`} className="outline-none px-4 py-2 rounded-full bg-gray-200 w-full" />
          <button type="submit" hidden >Submit</button>
        </form>
      </div>
      <div className="flex justify-around p-2 items-center ">
        <div className=' cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-lg items-center flex flex-row space-x-2'>
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className=' cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-lg items-center flex flex-row space-x-2'>
          <PhotographIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className=' cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-lg items-center flex flex-row space-x-2'>
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

      </div>
    </div>
  )
}

export default InputBox