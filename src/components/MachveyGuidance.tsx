/** @jsxImportSource @emotion/react */
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, MessageCircle } from 'lucide-react';

const MachveyGuidance: React.FC = () => {
    return (
        <section id="guidance" className="relative bg-[#EDF5FF] overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/50" />

            {/* Main Container - Using consistent site-wide padding */}
            <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 relative z-10">
                {/* Main Content */}
                <div className="flex flex-col items-start">                    {/* Logo and Brand */}
                    <div className="w-full mb-10">                        <div className="flex flex-col items-center justify-center mb-6">
                        <div className="flex items-center justify-center gap-8">
                            <img
                                src="/img/Machvey_Guidence_Logo.png"
                                alt="Machvey Guidance"
                                className="w-32 h-32 object-contain"
                            />
                            <h1 className="text-5xl lg:text-6xl font-bold text-[#0046B6]">
                                Machvey Guidance
                            </h1>
                        </div>
                        <div className="h-1 w-32 bg-[#0046B6] mt-0 rounded-full"></div>
                    </div>
                        <div className="flex justify-center">
                            <div className="relative group">
                                <button className="flex items-center text-gray-700 hover:text-[#0046B6] transition-colors text-lg">
                                    <span className="font-medium">Students and Professionals</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Heading and Trusted Badge */}
                    <div className="mb-12 w-full">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.2] mb-8">
                            Career counselling for students and working professionals
                        </h2>

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 shadow-sm border border-orange-100"
                        >
                            <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                            <span className="text-gray-800 font-medium">
                                Trusted by over 200,000+ Indians
                            </span>
                        </motion.div>
                    </div>                    {/* Content Section */}
                    <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
                        {/* Left Side - Services */}
                        <motion.div
                            className="w-full md:w-[50%] p-8 flex flex-col justify-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl lg:text-4xl font-bold text-[#0046B6] mb-8">Our Services:</h3>
                            <div className="space-y-5">
                                {[
                                    'Personalized Guidance',
                                    'Direct Interaction with Experts',
                                    'Assessment of Your Skills and Interests',
                                    'Clear Career Roadmap',
                                    'Selection of the Right Career Based on Understanding of Options',
                                    'Information About Market Demand and Opportunities'
                                ].map((service, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <Check className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 text-xl lg:text-2xl font-bold">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>                        {/* Right Side - Call to Action */}
                        <motion.div
                            className="w-full md:w-[50%] relative group overflow-hidden rounded-2xl min-h-[500px]"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="/img/Cureer_path.png"
                                alt="Career Path"
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-start pt-12">
                                {/* Static content */}
                                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0046B6]">
                                    Are you confused about your career after 10th or 12th?
                                </h3>
                                <p className="text-xl text-gray-800 mb-8">
                                    Don't worry! We bring you accurate and right career guidance
                                    that will make your future successful and secure.
                                </p>
                                {/* Interactive CTA section */}
                                <div className="transform group-hover:scale-105 transition-transform duration-300">
                                    <div className="text-2xl font-semibold text-[#0046B6] mb-4">
                                        Consult Now
                                    </div>
                                    <div className="flex items-center gap-20 flex-wrap">
                                        <a
                                            href="https://wa.me/918507289381"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-[#0046B6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0046B6]/90 transition-all duration-300 hover:scale-105 shadow-lg"
                                        >
                                            <MessageCircle className="w-6 h-6" />
                                            <span>📞 8507289381</span>
                                        </a>
                                        <motion.a
                                            href="https://machveyguidance.infigonfutures.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-white text-[#0046B6] border-2 border-[#0046B6] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0046B6] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Sign Up
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-12">
                    <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/img/partners.svg"
                            alt="College Partners"
                            className="w-14 h-14 mx-auto mb-4"
                        />
                        <div className="text-3xl font-bold text-gray-900">150+</div>
                        <div className="text-gray-600">College Club Partners</div>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/img/pathways.svg"
                            alt="Career Pathways"
                            className="w-14 h-14 mx-auto mb-4"
                        />
                        <div className="text-3xl font-bold text-gray-900">5000+</div>
                        <div className="text-gray-600">Career Pathways</div>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/img/students.svg"
                            alt="Students"
                            className="w-14 h-14 mx-auto mb-4"
                        />
                        <div className="text-3xl font-bold text-gray-900">2,000+</div>
                        <div className="text-gray-600">students</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MachveyGuidance;
