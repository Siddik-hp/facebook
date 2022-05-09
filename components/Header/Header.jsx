import { useState } from "react"
import { useSession } from "next-auth/react";
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, MenuIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline"

import Image from 'next/image'
import HeaderIcon from './HeaderIcon';
import Link from 'next/link';
import SearchBox from './SearchBox';
import Profile from "./Profile";
import { useAppContext } from "../../hooks/contex/state";
const Header = () => {
    const [SliderShow, setSliderShow] = useAppContext()
    const { data: session } = useSession()
    const [toggle, settoggle] = useState(false)
    const [profileToggle, setProfileToggle] = useState(false)
    return (
        <div className=' flex justify-between items-center px-5 py-2 lg:px-5 lg:py-1  shadow-md bg-white sticky top-0  z-50 w-full '>
            {/* Left Side */}
            <div className='flex items-center '>
                <Link href={"/"} passHref>
                    <Image src={"https://links.papareact.com/5me"} width={40} height={40}
                        layout={"fixed"} alt="facebook" className='cursor-pointer' />
                </Link>
                <div className='flex items-center ml-2 bg-gray-100 p-2 hover:bg-gray-200 rounded-full space-x-2 relative'>
                    <SearchIcon className='click_scale h-6 text-gray-600 cursor-pointer  ' onClick={() => { settoggle(!toggle) }} />
                    {
                        toggle && <SearchBox Icon={XIcon} Show={[toggle, settoggle]} />
                    }
                </div>
                <MenuIcon className="w-7 h-7 ml-4 cursor-pointer block md:hidden" onClick={() => setSliderShow(!SliderShow)} />
            </div>
            {/* center  */}
            <div className='hidden  md:flex justify-center items-center flex-grow'>
                <div className='flex lg:ml-16 space-x-6  md:space-x-2 '>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* right  Right*/}
            <div className='flex items-center justify-end space-x-3'>
                <ViewGridIcon className="icon " />
                <ChatIcon className="icon " />
                <BellIcon className="icon " />
                <ChevronDownIcon className="icon relative" onClick={() => { setProfileToggle(!profileToggle) }} />
                {
                    profileToggle && <Profile />
                }
            </div>
        </div>
    )
}

export default Header