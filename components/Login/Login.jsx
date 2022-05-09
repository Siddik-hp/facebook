import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
const Login = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-start mt-20 items-center'>
            <Image src={"/image/facebook.png"} alt="Facebook" width={150} height={150} />
            <h1 className='bg-blue-500 px-6 py-2 cursor-pointer rounded-full mt-4 text-white font-medium' onClick={() => signIn()}>Login with facebook</h1>
        </div>
    )
}

export default Login