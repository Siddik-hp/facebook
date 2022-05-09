import React from 'react'
import Image from 'next/image'

const StoryCard = ({ story }) => {
    return (
        <div className='relative cursor-pointer w-16 h-32 md:w-20 md:h-32 lg:w-28 lg:h-48 hover:scale-105 transition-transform duration-200 ease-in-out hover:animate-pulse' >
            <div className="rounded-full  absolute top-2 left-2  z-40 hidden md:block lg:block w-10 h-10 overflow-hidden ">
                <Image src={story.profile}
                    alt={story.name}
                    objectFit="cover"
                    layout='fill'
                />
            </div>
            <Image src={story.src}
                layout="fill"
                objectFit="cover"
                alt={story.name} className="rounded-lg filter brightness-75" />
        </div>
    )
}

export default StoryCard