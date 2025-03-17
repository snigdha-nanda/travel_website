import { useState } from "react";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogDetails, setBlogDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBlogs = async () => {
        setLoading(true);

        try {
            const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyAiTsSIAi8es_iwZn7-5YOqg5quGfHRmlE`);

            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }

            const data = await response.json();
            setBlogs(data.items);
            console.log(data.items);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchBlogDetails = async (blogId) => {
        setLoading(true);

        try {
            const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/2399953/posts/${blogId}?key=AIzaSyAiTsSIAi8es_iwZn7-5YOqg5quGfHRmlE`)

            if (!response.ok) {
                throw new Error('Failed to fetch blog details');
            }

            const data = await response.json();
            setBlogDetails(data);
            console.log(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return { blogs, blogDetails, loading, error, fetchBlogs, fetchBlogDetails };

};

export default useBlogs;