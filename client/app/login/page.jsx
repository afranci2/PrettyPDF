'use client';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Google from '../assets/google.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn('credentials', { email, password, callbackUrl: '/home' });

    setLoginInProgress(false);
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <Header />
      <div className="z-10 w-full max-w-sm p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-3xl text-primary mb-4">
          Login
        </h1>
        <form onSubmit={handleFormSubmit}>
          <input type="email" placeholder="Email" value={email}
                 disabled={loginInProgress}
                 onChange={ev => setEmail(ev.target.value)}
                 className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <input type="password" placeholder="Password" value={password}
                 disabled={loginInProgress}
                 onChange={ev => setPassword(ev.target.value)}
                 className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <button type="submit" disabled={loginInProgress}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Login
          </button>
        </form>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button onClick={() => signIn('google', { callbackUrl: '/home' })}
                className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
          <Image src={Google} alt="" className='px-2 w-10'/>
          Login with Google
        </button>
        <div className="my-4 text-center text-gray-500 border-t pt-4">
          Don't have an account?{' '}
          <Link href="/register" passHref>
            Register here &raquo;
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
