"use client"
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Google from '../assets/google.png'

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            setUserCreated(true);
        }
        else {
            setError(true);
        }
        setCreatingUser(false);
    }

    return (
        <div className=" flex flex-col justify-center items-center ">
            <Header />
            <div className="z-10 w-full max-w-sm p-4 bg-white rounded-lg shadow-xl">
                <h1 className="text-center text-3xl text-primary mb-4">
                    Register
                </h1>
                {userCreated && (
                    <div className="my-4 text-center text-green-600">
                        User created.<br />
                        Now you can{' '}
                        <Link href="/login" passHref>
                            Login &raquo;
                        </Link>
                    </div>
                )}
                {error && (
                    <div className="my-4 text-center text-red-600">
                        An error has occurred.<br />
                        Please try again later
                    </div>
                )}
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        disabled={creatingUser}
                        onChange={ev => setEmail(ev.target.value)}
                        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Changed to border-blue-500
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        disabled={creatingUser}
                        onChange={ev => setPassword(ev.target.value)}
                        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Changed to border-blue-500
                    />
                    <button
                        type="submit"
                        disabled={creatingUser}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700" // Changed to bg-blue-600 and hover:bg-blue-700
                    >
                        Register
                    </button>
                </form>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                    <Image src={Google} alt=""  className='px-2 w-10'/>
                    Login with Google
                </button>
                <div className="my-4 text-center text-gray-500 border-t pt-4">
                    Existing account?{' '}
                    <Link href="/login" passHref>
                        Login here &raquo;
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
