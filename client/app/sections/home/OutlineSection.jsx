// OutlineSection.js
import React from 'react'

const OutlineSection = ({ outline }) => {
  if (!outline) {
    return <p className="text-center text-gray-500">No outline available</p>;
  }

  return (
    <div className="w-72 h-full bg-gray-100  p-4 z-10 ">
      <ul>
        {outline.map((item, index) => (
          <li key={index} className="mb-2">
            {item.title}
            <ul>
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OutlineSection;
