"use client"
import React from 'react'
import Link from 'next/link'

const HeroButton = () => {
    return (
        <div>
            <Link className='gap-4 px-4 text-gray-500 font-semibold' href="/login">Login</Link>
            
            <Link
            href="/register"
            className='black_btn'
        >
            Register
        </Link>
        </div>
    )
}

export default HeroButton