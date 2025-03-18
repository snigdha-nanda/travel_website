import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blogs/${blog.id}`);
    }

    return (
        <div className="shadow-lg rounded-lg p-4 bg-white hover:cursor-pointer" onClick={handleClick}>
            <h2 className="font-bold text-lg mb-2 text-black">{blog.title || "No Title"}</h2>
            <p className="text-gray-600 text-sm mb-1">By <span className="font-medium">{blog.author?.displayName || "Unknown Author"}</span></p>
            <p className="text-gray-800 mb-2">{blog.content ? blog.content.replace(/<[^>]+>/g, '').split(' ').slice(0, 5).join(' ') + "..." : "No Description Available"}</p>
            <div className="text-gray-500 text-xs">
                <p>Published on: {new Date(blog.published).toLocaleDateString() || "Unknown Date"}</p>
                {blog.updated && <p>Updated on: {new Date(blog.updated).toLocaleDateString() || "Not Updated"}</p>}
            </div>
        </div>
    );
};

export default BlogCard;
