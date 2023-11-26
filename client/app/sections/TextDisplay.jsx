import React from 'react';

const TextDisplay = ({ text }) => {
    if (!text) {
        return <p className="text-center text-gray-500">Loading text data...</p>;
    }

    // Split the text into paragraphs based on double line breaks
    const paragraphs = text.split('\n\n');

    return (
        <div className="bg-white p-4 shadow rounded-lg my-4 font-sans">
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line mb-4 last:mb-0">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default TextDisplay;
