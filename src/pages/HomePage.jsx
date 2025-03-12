import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import BlogCard from '../components/BlogCard';


const HomePage = () => {
    const blogData = [
        { title: 'Exploring Paris', image: 'paris.jpg', description: 'A beautiful journey through Paris.' },
        { title: 'Visit Bali', image: 'bali.jpg', description: 'Discover the beauty of Bali.' },
        { title: 'Adventure in New Zealand', image: 'newzealand.jpg', description: 'Experience the thrill of New Zealand.' },
        { title: 'Tokyo Travel Guide', image: 'tokyo.jpg', description: 'Discover the vibrant life in Tokyo.' },
        { title: 'A Hidden Gem: Prague', image: 'prague.jpg', description: 'Uncover the charm of Prague.' },
        { title: 'The Best of Italy', image: 'italy.jpg', description: 'A gastronomic and cultural journey.' },
        { title: 'Romantic Getaway to Venice', image: 'venice.jpg', description: 'Fall in love with Venice’s romantic charm.' },
        { title: 'Santorini Vacation', image: 'santorini.jpg', description: 'The blue waters of Santorini await you.' },
        { title: 'Backpacking in Thailand', image: 'thailand.jpg', description: 'Embark on an adventure in Thailand.' },
    ];

    return (
        <div className="bg-gray-100" id='home'>
            <Header />
            <Banner />
            <main className="container mx-auto p-6">
                {/* Blog Section */}
                <section className="my-12" id="blogs">
                    <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Latest Blogs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((blog, index) => (
                            <BlogCard key={index} {...blog} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
