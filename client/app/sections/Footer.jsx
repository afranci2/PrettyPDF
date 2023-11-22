// Footer.jsx
"use client"
import React from 'react';
import Image from 'next/image';

import logo from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className='w-full border-t border-gray-200'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start'>
            <a href="#" className='flex items-center'>
              <span className='ml-3 text-base font-medium text-gray-500 hover:text-gray-900'>PrettyPDF</span>
            </a>
          </div>
          <div className='flex space-x-6 md:order-2'>
            <a href="#" className='text-base font-medium text-gray-500 hover:text-gray-900'>Privacy Policy</a>
            <a href="#" className='text-base font-medium text-gray-500 hover:text-gray-900'>Terms of Use</a>
            {/* Additional footer links here */}
          </div>
        </div>
        <div className='mt-8 md:flex md:items-center md:justify-between'>
          <span className='text-base text-gray-400 sm:text-center'>© {new Date().getFullYear()} Summize. All rights reserved.</span>
          {/* Social media icons or additional information can go here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
