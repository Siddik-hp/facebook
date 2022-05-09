import React from 'react'
import StoryCard from './StoryCard'

const Story = () => {
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

    ]
    return (
        <>
            <div className="flex justify-center space-x-3 ">
                {
                    api.map((story) => {
                        return (
                            <>
                                <StoryCard story={story} key={story.src} />
                            </>
                        )
                    })
                }
            </div>
        </>

    )
}

export default Story