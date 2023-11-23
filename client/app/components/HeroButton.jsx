"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../assets/icon.png'

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";

const HeroButton = () => {
    const session = useSession();
    const status = session?.status;
    const userData = session.data?.user;
    let userName = userData?.name || userData?.email;
    console.log(status)
    return (
        <div>
            {status === 'authenticated' && (
                <button
                    onClick={() => signOut()}>

                    Logout
                </button>


            )}
            {status !== 'authenticated' && (
                <div>
                    <Link className='gap-4 px-4 text-gray-500 font-semibold' href="/login">Login</Link>

                    <Link
                        href="/register"
                        className='black_btn'
                    >
                        Register
                    </Link>
                </div>
            )}
        </div>
    )
}

export default HeroButton