import Image from 'next/image'
import React, { useState } from 'react'
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from '@heroicons/react/outline'


const SingleFbPost = ({ post }) => {
    const { name, timestamp, image, imagePost, message, email } = post
    const [like, setLike] = useState(10)
    return (
        <div className="flex flex-col my-10 max-w-md mx-auto">
            <div className='p-5 bg-white rounded-t-2xl shadow-sm'>
                <div className='flex  items-center space-x-3'>
                    <Image width={40} layout="fixed" height={40} src={image} alt={name} className="rounded-full object-cover" />
                    <div className=' '>
                        <p className='font-medium'>{name}</p>
                        <p className='text-xs text-gray-400'> {new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
                </div>
                <p className='pt-5 '>{message}</p>
            </div>
            {
                imagePost && <div className='relative h-56 md:h-72  bg-white '>
                    <Image src={imagePost} objectFit="cover" layout="fill" alt='"no image' />
                </div>
            }
            {
                like !== 0 && <div className="bg-white px-2 py-1 flex space-x-2 items-center border-t">
                    <ThumbUpIcon className="h-4 text-gray-800" />
                    <p className="font-medium">{like}</p>
                </div>
            }
            <div className='flex justify-between items-center  bg-white rounded-b-2xl border-t shadow-sm text-gray-400'>
                <div className=' hover:bg-gray-300 w-full flex items-center  justify-center rounded-b-md py-1 cursor-pointer space-x-2'>
                    <ThumbUpIcon className='h-5' />
                    <p>Like</p>
                </div>
                <div className='w-full hover:bg-gray-300  flex items-center justify-center py-1 cursor-pointer space-x-2'>
                    <ChatAltIcon className='h-5' />
                    <p>Comment</p>
                </div>
                <div className='w-full hover:bg-gray-300  flex items-center  justify-center rounded-b-md py-1 cursor-pointer space-x-2'>
                    <ShareIcon className='h-5' />
                    <p>Share</p>
                </div>
            </div>
        </div >
    )
}

export default SingleFbPost