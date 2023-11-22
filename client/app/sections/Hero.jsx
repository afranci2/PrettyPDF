// You might need to install additional libraries such as pdfjs-dist for PDF processing
"use client"
import React from 'react';
import Header from './Header';
import FileImport from "../components/FileImport";
import Footer from './Footer'


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <Header />

      <h1 className='head_text'>
        Prettify your PDF with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <FileImport></FileImport>
      <Footer />

    </header>
  );
};

export default Hero;

