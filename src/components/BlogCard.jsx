import React from 'react';

const BlogCard = ({ title, image, description }) => {
    return (
        <div className="shadow-lg rounded-lg p-4">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="font-bold text-lg mb-2 text-black">{title}</h2>
            <p className='text-gray-800'>{description}</p>
        </div>
    );
};

export default BlogCard;
