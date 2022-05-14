import React from 'react'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/outline';
import Users from './Users';

const ActiveUser = () => {
    return (
        <div className="w-48 hidden md:flex flex-col mt-4">
            {/* Icon */}
            <div className='flex items-center space-x-4'>
                <h1 className='font-semibold'>Contacts</h1>
                <div className="flex space-x-2 text-gray-600">
                    <VideoCameraIcon className="h-6 cursor-pointer" />
                    <SearchIcon className='h-6 cursor-pointer' />
                    <DotsHorizontalIcon className='h-6 cursor-pointer' />
                </div>
            </div>
            {/* user */}
            <div className='mt-5  h-[450px]  overflow-y-auto scrollbar-hide'>
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
            </div>
        </div>
    )
}

export default ActiveUser