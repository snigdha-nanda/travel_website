import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import BlogCard from '../components/BlogCard';
import useBlogs from '../hooks/useBlogs';

const HomePage = () => {
    const { blogs, loading, error, fetchBlogs } = useBlogs();

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="bg-gray-100" id="home">
            <Header />
            <Banner />
            <main className="container mx-auto p-6">
                {/* Blog Section */}
                <section className="my-12" id="blogs">
                    <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Latest Blogs</h2>

                    {loading && <p className="text-center text-lg text-gray-600">Loading...</p>}
                    {error && <p className="text-center text-lg text-red-600">{error}</p>}

                    {!loading && !error && blogs.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <BlogCard
                                    blog={blog}
                                    key={blog.id}
                                />
                            ))}
                        </div>
                    ) : (
                        !loading && !error && <p className="text-center text-lg text-gray-600">No blogs available.</p>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
