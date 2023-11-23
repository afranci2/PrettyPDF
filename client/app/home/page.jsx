"use client"
import React, { useContext } from 'react';
import { FileContext } from '../contexts/FileContext';
import { useSession } from 'next-auth/react'
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const page = () => {
  const { data: sessionData, status } = useSession();
  const { file } = useContext(FileContext);
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <Header/>
      <h1>Uploaded File Details</h1>
      {file && <p>File Name: {file.name}</p>}
      <Footer/>
    </div>
  );
}

export default page