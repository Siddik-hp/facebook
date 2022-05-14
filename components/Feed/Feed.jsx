import React from 'react'
import FbPost from './FBPost/FbPost';
import InputBox from './Input/InputBox';
import Story from './Story/Story';

const Feed = () => {
    return (
        <div className='flex-grow pb-44 pt-6 md:mr-4 xl:mr-40  items-center justify-center h-screen overflow-y-auto scrollbar-hide '>
            <div className="max-w-md md:max-w-lg mx-auto lg:max-w-2xl px-2 ">
                {/* Story */}
                <Story />
                {/* input */}
                <InputBox />
                {/* Card */}
                <FbPost />
            </div>
        </div>
    )
}

export default Feed