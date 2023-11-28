"use client"
import React, { useContext, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios'; // Ensure axios is installed (`npm install axios`)
import TextDisplay from '../sections/home/TextDisplay';
import OutlineSection from '../sections/home/OutlineSection';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { FileContext } from '../contexts/FileContext';
import dummyOutlineData from '../libs/dummyOutlineData'
import dummyData from '../libs/dummyData'


const Page = () => {
  const { data: session, status } = useSession();

  const { file } = useContext(FileContext);
  const [uploadStatus, setUploadStatus] = useState('');
  const [text, setText] = useState('');
  const [outline, setOutline] = useState('');

  const handleFileUpload = async () => {


    const formData = new FormData();
    formData.append('file', file);

    setUploadStatus('Uploading...');

    try {
      // Update the URL to your server's upload endpoint
      const response = await axios.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle response from the server
      setUploadStatus('Upload successful!');
      console.log(response.data.text);
      setText(response.data.text)
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus('Upload failed.');
      setText(dummyData)
      setOutline(dummyOutlineData)
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      <div className=''>
        <h1 className="text-2xl font-bold mb-4">Uploaded File Details</h1>
        {/* Upload section */}
        <div>
          {file ? <p>File Name: {file.name}</p> : <p>No file uploaded</p>}
          <button onClick={handleFileUpload} className="bg-blue-500 text-white rounded px-4 py-2 mt-2">Upload File</button>
          {uploadStatus && <p className="mt-2">{uploadStatus}</p>}
        </div>
      </div>
      <div className="flex-grow flex rounded-lg overflow-hidden">
        <section className='flex-1 relative'>
          {text && <TextDisplay text={text} />}
        </section>
        {/* Placeholder for navigation items */}
        <section>
          {outline && <OutlineSection outline={outline} />}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
