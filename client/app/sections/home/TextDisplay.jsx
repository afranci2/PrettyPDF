import React from 'react';

const TextDisplay = ({ text }) => {
    if (!text) {
        return <p className="text-center text-gray-500">Loading text data...</p>;
    }

    const paragraphs = text.split('\n\n');
    return (
        <div className="bg-white shadow-xl w-full p-4  z-50 font-sans">
            <h1 className='font-bold text-lg'> Contents</h1>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg whitespace-pre-line mb-4 last:mb-0">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default TextDisplay;