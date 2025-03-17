import { useParams } from "react-router-dom";
import useBlogs from "../hooks/useBlogs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const BlogDetails = () => {
    const { blogId } = useParams(); // Get the blog ID from the URL
    const { blogDetails, loading, error, fetchBlogDetails } = useBlogs();

    useEffect(() => {
        fetchBlogDetails(blogId); // Fetch the details of the specific blog
    }, [blogId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen w-[99vw] bg-white">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500 text-xl">Error: {error}</div>;
    }

    if (!loading && !blogDetails) {
        return <div className="text-center text-red-500 text-xl">Blog not found</div>;
    }

    return (
        <div className="bg-gray-100">
            <Header />

            <main className="container mx-auto p-6">
                <section className="my-12 bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-black mb-4">{blogDetails.title || "No Title"}</h1>
                    <p className="text-gray-600 text-sm mb-4">By <span className="font-medium">{blogDetails.author?.displayName || "Unknown Author"}</span></p>
                    <p className="text-gray-500 text-xs mb-4">Published on: {new Date(blogDetails.published).toLocaleDateString() || "Unknown Date"}</p>
                    {blogDetails.updated && <p className="text-gray-500 text-xs mb-4">Updated on: {new Date(blogDetails.updated).toLocaleDateString() || "Not Updated"}</p>}

                    <div className="text-gray-800 mb-6 text-left">
                        {/* Render the entire content of the blog, replacing any HTML tags */}
                        <p>{blogDetails.content ? blogDetails.content.replace(/<[^>]+>/g, '') : "No content available."}</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetails;
