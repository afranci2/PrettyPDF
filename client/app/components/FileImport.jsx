"use client"
import React, { createContext, useState, useContext } from 'react';
import { FileContext } from '../contexts/FileContext';


import Link from 'next/link'



const FileImport = () => {
    const [fileName, setFileName] = useState('');
    const [fileSelected, setFileSelected] = useState(false);
    const { setFile } = useContext(FileContext);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setFileSelected(true);
            setFile(file); // Save the file in the context
        } else {
            setFileName('');
            setFileSelected(false);
        }
    };

    const uploadButton = (
        <button
            type="submit"
            className='px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-blue-700 transition-colors'
            disabled={!fileSelected}
        >
            Upload
        </button>
    );


    return (
        <div className='w-full mt-8 py-24 px-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200'>
            <h2 className='text-2xl font-bold mb-4 text-black text-center'>
                Upload a PDF
            </h2>

            <div className='flex flex-col items-center gap-4'>
                    <label
                        htmlFor='file-upload'
                        className={`block text-lg font-medium px-6 py-2 rounded-full transition-all cursor-pointer ${fileSelected ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {fileName || "Select File"}
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        className='hidden'
                    />
                    {fileSelected ? (
                        <Link href='/home'>{uploadButton}</Link>
                    ) : (
                        uploadButton
                    )}
            </div>
        </div>

    );
}

export default FileImport;
