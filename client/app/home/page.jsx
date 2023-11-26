"use client"
import React, { useContext, useState } from 'react';
import { FileContext } from '../contexts/FileContext';
import { useSession } from 'next-auth/react'
import Header from '../sections/Header';
import Footer from '../sections/Footer';
// Additional imports
import axios from 'axios'; // Ensure axios is installed (`npm install axios`)
import TextDisplay from '../sections/TextDisplay'

const page = () => {
  const { data: sessionData, status } = useSession();
  const { file } = useContext(FileContext);
  const [uploadStatus, setUploadStatus] = useState('');
  const [text, setText] = useState()

  const handleFileUpload = async () => {
    if (!file) {
      alert('No file is selected for upload.');
      return;
    }

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
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h1>Uploaded File Details</h1>
      {<div>
        <p>File Name: {file.name}</p>
        <button onClick={handleFileUpload}>Upload File</button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>}
      {uploadStatus && <TextDisplay text={text}/>}
      <Footer />
    </div>
  );
};

export default page;
