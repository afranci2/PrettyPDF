"use client"
import React from 'react';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const HeroButton = () => {
    const { data: sessionData, status } = useSession();
    
    return (
        <div>
            {status === 'authenticated' ? (
                <button onClick={() => signOut()} className='black_btn'>
                    Logout
                </button>
            ) : (
                <div>
                    <Link href="/login">
                        <a className='gap-4 px-4 text-gray-500 font-semibold'>Login</a>
                    </Link>

                    <Link href="/register">
                        <a className='black_btn'>Register</a>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default HeroButton;
