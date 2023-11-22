"use client"
import React, { useContext } from 'react';
import { FileContext } from '../contexts/FileContext';

const page = () => {
  const { file } = useContext(FileContext);

  return (
    <div>
      <h1>Uploaded File Details</h1>
      {file && <p>File Name: {file.name}</p>}
    </div>
  );
}

export default page