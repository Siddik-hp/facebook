import React from 'react'
import Image from 'next/image';
import { useSession, signOut } from "next-auth/react";
import { LogoutIcon } from "@heroicons/react/outline"
const Profile = () => {
    const { data: session } = useSession()
    return (
        <div className="absolute top-16 bg-white shadow-lg px-4 py-2 w-[250px] lg:w-[400px] p-2 rounded-md flex flex-col space-y-4 z-50" >
            <div className='click_scale flex space-x-5 items-center hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer'>
                <Image src={session.user.image} width={40} height={40} layout="fixed" alt="user" className="rounded-full " />
                <p className='font-semibold pr-3 whitespace-nowrap text-md'>{session.user.name}</p>
            </div>
            <div className='click_scale flex space-x-5 hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer ' onClick={signOut}>
                <LogoutIcon className='h-6 lg:h-7 text-gray-400' />
                <h1 className='font-semibold'>Logout</h1>
            </div>
        </div>
    )
}

export default Profile