import React from 'react'
import Card from './Card/Card';
import InputBox from './Input/InputBox';
import Story from './Story/Story';

const Feed = () => {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
            <div className="max-w-md md:max-w-lg mx-auto lg:max-w-2xl">
                {/* Story */}
                <Story />
                {/* input */}
                <InputBox />
                {/* Card */}
                <Card />
            </div>
        </div>
    )
}

export default Feed