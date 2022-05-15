import React from 'react'
import SingleFbPost from './SingleFbPost'
import { useCollection } from 'react-firebase-hooks/firestore';
import { colRef } from '../../../firebase';
import { orderBy } from 'firebase/firestore';
const FbPost = () => {
    const [realtimePost, loading, error] = useCollection(colRef, orderBy("timestamp", "asc"));
    return (
        <div className='mx-auto'>
            {
                realtimePost?.docs.map((post) => {
                    return (
                        <>
                            <SingleFbPost post={post.data()} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default FbPost