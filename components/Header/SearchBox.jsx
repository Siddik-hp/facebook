import { ArrowLeftIcon } from '@heroicons/react/solid'
import React from 'react'

const SearchBox = ({ Icon, Show }) => {
    const [toggle, settoggle] = Show
    return (
        <div className={` absolute -top-4 -left-4 px-2 py-3 rounded-lg bg-white shadow-md `}>
            <ArrowLeftIcon onClick={() => { settoggle(!toggle) }} className='click_scale h-10 text-gray-400 cursor-pointer ml-3 my-3 hover:bg-gray-200 px-2 rounded-full py-2' />
            <input type="text" placeholder='Search Facebook' className=' bg-gray-200 px-4 py-2 rounded-full outline-none flex-shrink items-center ' />
            <div className="mt-2">
                <div className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer flex items-center justify-between flex-row">
                    <p >Akhi </p>
                    <Icon className="w-4 h-4" />
                </div>

            </div>
        </div>
    )
}

export default SearchBox