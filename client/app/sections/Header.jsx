import React from 'react'
import Image from 'next/image'
import HeroButton from '../components/HeroButton'
import logo from '../assets/icon.png'

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