import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import SidebarRow from './SidebarRow'
import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon, } from "@heroicons/react/outline"
import { CalendarIcon, ClockIcon, DesktopComputerIcon } from "@heroicons/react/solid"
import { useAppContext } from '../../hooks/contex/state'

const Sidebar = () => {
    const [SliderShow, setSliderShow] = useAppContext()
    const [ShowMore, setShowMore] = useState(false)
    const { data: session } = useSession()

    return (
        <>
            <div className={`  sidebar max-w-[400px] xl:min-w-[300px] mt-4 p-2   md:block  ${SliderShow ? "block absolute top-10 w-full bg-white shadow-lg rounded-lg z-50" : "hidden"} h-[90vh] overflow-y-auto scrollbar-hide`}>
                <a rel='noreferrer' target={"_blank"} href='https://facebook.com/lxsiddikxx'>
                    <SidebarRow src={session.user.image} title={session.user.name} />
                </a>
                <SidebarRow Icon={UsersIcon} title="Friends" />
                <SidebarRow Icon={UserGroupIcon} title="Groups" />
                <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
                <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
                <SidebarRow Icon={ClockIcon} title="Event's" />
                <SidebarRow Icon={CalendarIcon} title="Memories" />
                <SidebarRow Icon={ChevronDownIcon} onClick={() => { setShowMore(!ShowMore) }} title="Show More" />
                <div className={`${ShowMore ? "block " : "hidden"}`}>
                    <SidebarRow Icon={UsersIcon} title="Friends" />
                    <SidebarRow Icon={UserGroupIcon} title="Groups" />
                    <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
                    <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
                    <SidebarRow Icon={ClockIcon} title="Event's" />
                    <SidebarRow Icon={CalendarIcon} title="Memories" />
                    <SidebarRow Icon={ChevronUpIcon} onClick={() => { setShowMore(!ShowMore) }} title="Hide" />
                </div>

            </div>

        </>
    )
}

export default Sidebar