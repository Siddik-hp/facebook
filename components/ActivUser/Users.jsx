import Image from 'next/image'
import React from 'react'

const Users = () => {
    return (
        <div className="flex items-center space-x-4 hover:bg-gray-300 p-2 rounded-lg cursor-pointer trasition-transform duration-200 ease-in-out">
            <div className="relative w-8 h-8 rounded-full">
                <Image src={"https://links.papareact.com/5me"}
                    layout={"fill"} alt="facebook" className='cursor-pointer' />
                <span className="flex h-2 w-2 absolute bottom-1 right-0">
                    <span className="animate-ping absolute inline-flex  w-2 h-2 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
            </div>
            <p className="font-medium">Ab siddik</p>
        </div>
    )
}

export default Users