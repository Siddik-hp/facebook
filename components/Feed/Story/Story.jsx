import React from 'react'
import StoryCard from './StoryCard'
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { useSession } from "next-auth/react"
import { PlusIcon } from "@heroicons/react/outline"

const Story = () => {
    const { data: session } = useSession()

    const api = [
        {
            name: "Elon musk",
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk"
        },
        {
            name: "Elon musk",
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk"
        },
        {
            name: "Elon musk",
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk"
        },
        {
            name: "Elon musk",
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk"
        },
        {
            name: "Elon musk",
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk"
        },

    ]
    return (
        <>
            <div className="flex items-center  justify-center space-x-3 w-full mx-auto">
                {/* 
                <div className="w-32 h-24  rounded-lg " >
                    <div className="relative w-full h-24">
                        <Image src={session.user.image} layout="fill" alt="not found" />

                    </div>
                    <div className="bg-white ">
                        <PlusIcon className='h-10 mx-auto' />
                    </div>
                </div> */}

                {
                    api.map((story) => {
                        return (
                            <React.Fragment key={uuidv4()}>
                                <StoryCard story={story} />
                            </React.Fragment>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Story