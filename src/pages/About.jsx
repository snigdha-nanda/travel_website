import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {
    return (
        <div className="bg-white text-gray-700">
            <Header />

            {/* About Us Section */}
            <section className="text-center py-16 mt-6">
                <h1 className="text-4xl font-bold text-blue-600 mb-8">About Us</h1>
                <p className="text-lg max-w-4xl mx-auto mb-8 text-gray-600">
                    TravelGo is your ultimate guide to exploring the world! Our mission is to provide the best travel experiences
                    by helping you find top destinations, hotels, and travel advice. We are committed to making travel more accessible,
                    exciting, and enriching for every traveler.
                </p>
            </section>

            {/* Our Team Section */}
            <section className="py-16 bg-gray-50">
                <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Team Member 1 */}
                    <div className="text-center">
                        <img
                            src="/images/avatar-1.png"
                            alt="Team Member 1"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">John Doe</h3>
                        <p className="text-gray-500">CEO & Co-Founder</p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="text-center">
                        <img
                            src="/images/avatar-2.png"
                            alt="Team Member 2"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">Jane Smith</h3>
                        <p className="text-gray-500">Chief Marketing Officer</p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="text-center">
                        <img
                            src="/images/avatar-3.png"
                            alt="Team Member 3"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">Emily Johnson</h3>
                        <p className="text-gray-500">Lead Developer</p>
                    </div>
                </div>
            </section>

            {/* Co-Founders Section */}
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">Our Co-Founders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-center">
                        <img
                            src="/images/avatar-4.png"
                            alt="Co-Founder 1"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">John Doe</h3>
                        <p className="text-gray-500">Co-Founder & CEO</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="/images/avatar-2.png"
                            alt="Co-Founder 2"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">Sarah Brown</h3>
                        <p className="text-gray-500">Co-Founder & CTO</p>
                    </div>
                </div>
            </section>

            {/* Investors Section */}
            <section className="py-16 bg-gray-50">
                <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">Our Investors</h2>
                <div className="flex justify-center gap-16">
                    <div className="text-center">
                        <img
                            src="/images/techventures.jpeg"
                            alt="Investor 1"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">Tech Ventures</h3>
                        <p className="text-gray-500">Leading Venture Capital Firm</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="/images/globalinvestmentpartners.png"
                            alt="Investor 2"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">Global Investment Partners</h3>
                        <p className="text-gray-500">Global Investment Firm</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
