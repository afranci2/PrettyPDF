"use client"
import React from 'react'
import Image from 'next/image'
import HeroButton from '../components/HeroButton'
import logo from '../assets/icon2.png'

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";

function AuthLinks({ status, userName }) {
}

const Header = () => {


    return (
        <header className='w-full flex justify-center items-center flex-col'>

            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <Image src={logo} alt='sumz_logo' className='w-28 object-contain' />

                <HeroButton />
            </nav>
        </header>
    )
}

export default Header