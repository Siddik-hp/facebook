import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { colRef, stroage } from '../../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, setDoc, doc } from 'firebase/firestore'


const InputBox = () => {
  // input
  const inputRef = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)
  const [image, setImage] = useState(null)
  // repeat
  const filePickerRef = useRef(null)
  const ImageOnChange = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      setImage(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)

    }
  }

  // post
  const postSubmit = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return;
    addDoc(colRef, {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: new Date(),
    }).then(docs => {
      if (image && imageToPost) {
        const imageRef = ref(stroage, `posts/${docs.id + v4()}`);
        uploadBytes(imageRef, image).then((snapshot) => {
          console.log("uploaded successfull");
          getDownloadURL(snapshot.ref).then((url) => {
            setDoc(doc(colRef, docs.id), {
              imagePost: url
            }, { merge: true })
          })
        })
      }
    })
    inputRef.current.value = ''
    setImage(null)
    setImageToPost(null)

  }
  const { data: session } = useSession()
  return (
    <div className='mt-10 bg-white shadow-md  rounded-md max-w-md md:mx-auto font-medium '>
      <div className='flex space-x-3 border-b p-4'>
        <Image alt="user" width={40} height={40} layout="fixed" src={session.user.image} className="rounded-full object-cover hover:animate-pulse cursor-pointercls" />
        {/* input form */}
        <form className=" flex flex-1" method='POST' onSubmit={postSubmit}>
          <input ref={inputRef} type="text" name="message" placeholder={`What's on your mind, ${session.user.name}`} className="outline-none px-4 py-2 rounded-full bg-gray-200 w-full hover:bg-gray-300 cursor-pointer" />
          <button type="submit" hidden >Submit</button>
        </form>
      </div>
      {
        imageToPost && <div className="flex justify-center items-center flex-col pt-2">
          <Image onClick={() => { filePickerRef.current.click() }} width={400} height={200} className="object-contain  filter hover:brightness-110 transition duration-150 cursor-pointer " src={imageToPost} alt="not found" />
          <p className='text-red-500 cursor-pointer' onClick={() => { setImageToPost(null) }}>Remove</p>
        </div>
      }
      <div className="flex justify-around p-2 items-center ">
        <div className='cursor-pointer hover:bg-gray-200  md:px-3 py-2 rounded-lg items-center flex flex-row space-x-2'>
          <VideoCameraIcon className="h-5 md:h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div onClick={() => { filePickerRef.current.click() }} className=' cursor-pointer hover:bg-gray-200 px-2 md:px-3 py-2 rounded-lg items-center flex flex-row space-x-2'>
          <CameraIcon className="h-5 md:h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input onChange={ImageOnChange} type="file" ref={filePickerRef} hidden />
        </div>

        <div className=' cursor-pointer hover:bg-gray-200 px-2 md:px-3 py-2 rounded-lg items-center flex flex-row space-x-2'>
          <EmojiHappyIcon className="h-5 md:h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/activity</p>
        </div>

      </div>
    </div>
  )
}

export default InputBox