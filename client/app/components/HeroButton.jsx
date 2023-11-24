"use client"
import React from 'react';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const HeroButton = () => {
    const { data: sessionData, status } = useSession();
    console.log(sessionData)
    return (
        <div>
            
            {status === 'authenticated' ? (
                <div className='flex'>
                    <div className='px-4 text-center items-center justify-center'>
                    Hello, {sessionData.user.email}
                    </div>
                    <button onClick={() => signOut()} className='black_btn'>
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <Link href="/login" className='gap-4 px-4 text-gray-500 font-semibold'>
                        Login
                    </Link>

                    <Link href="/register" className='black_btn'>
                        Register
                    </Link>
                </div>
            )}
        </div>
    );
}

export default HeroButton;
