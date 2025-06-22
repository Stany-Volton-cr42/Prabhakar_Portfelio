import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const EducationalPlatforms = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/src/img/App screenshot.png',
    '/src/img/App screenshot2.png',
    '/src/img/App Screenshot3.png',
    '/src/img/App Screenshot4.png'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="educational-platforms" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.15] via-purple-500/[0.15] to-blue-500/[0.15]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 75%, rgba(239, 68, 68, 0.15) 0%, transparent 45%),
          radial-gradient(circle at 80% 25%, rgba(147, 51, 234, 0.15) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
        `
      }}></div>
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Educational Platforms
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Educational Platforms List */}
        <div className="flex flex-col gap-12">
          {/* Deep Classes Machvey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Channel Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
              >
                <img
                  src="/src/img/DEEP CLASSES MACHVEY.png"
                  alt="Deep Classes Machvey"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Channel Info */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      DEEP CLASSES MACHVEY
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-700 text-sm md:text-base">
                      <span>@deepclassesmachvey</span>
                      <span className="text-gray-400">•</span>
                      <span>1.17K subscribers</span>
                      <span className="text-gray-400">•</span>
                      <span>118 videos</span>
                    </div>
                  </div>
                  <motion.a
                    href="https://www.youtube.com/@deepclassesmachvey"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                  >
                    <Youtube className="w-5 h-5" />
                    Subscribe
                  </motion.a>
                </div>

                {/* Channel Description */}
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Welcome to Deep Classes Machvey, an educational haven curated by the knowledgeable educator Prabhakar Kumar Machvey. Our channel is dedicated to providing comprehensive study materials for students.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href="https://t.me/deepclassesmachvey"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      t.me/deepclassesmachvey
                    </a>
                    <span className="text-gray-600">and 2 more links</span>
                  </div>
                </div>

                {/* Channel Navigation */}
                <div className="mt-6 border-b border-gray-200">
                  <div className="flex gap-8 overflow-x-auto">
                    <a
                      href="https://www.youtube.com/@deepclassesmachvey/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium py-4 border-b-2 border-gray-900 whitespace-nowrap hover:text-red-600 transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="https://www.youtube.com/@deepclassesmachvey/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 py-4 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all"
                    >
                      Videos
                    </a>
                    <a
                      href="https://www.youtube.com/@deepclassesmachvey/shorts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 py-4 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all"
                    >
                      Shorts
                    </a>
                    <a
                      href="https://www.youtube.com/@deepclassesmachvey/playlists"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 py-4 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all"
                    >
                      Playlists
                    </a>
                    <a
                      href="https://www.youtube.com/@deepclassesmachvey/community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 py-4 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all"
                    >
                      Posts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>        {/* Machvey App */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full pt-5 border-t border-gray-200 mt-8"
        >          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-12">
            {/* Main Content Section */}
            <div className="lg:col-span-8">
              {/* App Header */}
              <div className="flex items-center gap-8 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <img
                    src="/src/img/DEEP CLASSES MACHVEY.png"
                    alt="Machvey App Logo"
                    className="w-32 h-32 rounded-2xl shadow-lg"
                  />
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-[1rem] -z-10 opacity-20 blur-sm"></div>
                </motion.div>
                <div>
                  <h4 className="text-5xl font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-emerald-600 bg-clip-text text-transparent tracking-tight">
                    Machvey App
                  </h4>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-emerald-600 rounded-full mt-2"
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Enhance Your Board Exam Preparation
                </h3>
                <p className="text-xl text-gray-600">
                  Machvey is your comprehensive educational companion, offering extensive study materials, free notes, and video lessons. Perfect for students preparing for Board exams and seeking academic excellence.
                </p>
              </div>

              {/* Download and Stats Section - Compact Layout */}              <div className="flex flex-col sm:flex-row items-start gap-16">
                <div className="flex flex-col gap-8">
                  {/* Play Store Button */}
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=co.in.creatorsmind.marwtaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center bg-black text-white px-8 py-2 rounded-xl hover:bg-gray-900 transition-all duration-300 w-fit"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-10"
                    />
                  </motion.a>

                  {/* Stats Grid - Compact */}
                  <div className="grid grid-cols-3 gap-12">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">4.7★</p>
                      <p className="text-sm text-gray-600">Rating</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">100+</p>
                      <p className="text-sm text-gray-600">Downloads</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">3+</p>
                      <p className="text-sm text-gray-600">Age</p>
                    </div>
                  </div>
                </div>                {/* QR Code */}
                <div className="flex-shrink-0 ml-44 -mt-12">
                  <img
                    src="/src/img/Machey app.png"
                    alt="Download Machvey App"
                    className="w-48 h-64 object-contain"
                  />
                  <p className="text-big text-gray-900 text-center mt-3">Scan to Download</p>
                </div>
              </div>
            </div>            {/* Right Section - iPhone with Screenshot Carousel */}            <div className="lg:col-span-4 relative">
              <div className="relative w-[280px] mx-auto lg:ml-0 lg:-ml-30 lg:mr-0 [perspective:1000px]">
                {/* iPhone frame */}
                <div className="relative w-full aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-[0_32px_50px_-8px_rgba(0,0,0,0.25)] transform -rotate-12 [transform:rotateX(-12deg)] [transform:rotateY(2deg)] hover:scale-105 transition-all duration-500 will-change-transform">
                  {/* iPhone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-7 bg-black z-20">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-full"></div>
                  </div>

                  {/* Inner screen bezel */}
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Screenshot carousel container */}
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="relative w-full h-full"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                      >
                        {images.map((src, index) => (
                          <motion.div
                            key={index}
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: currentImage === index ? 1 : 0,
                              scale: currentImage === index ? 1 : 0.95
                            }}
                            transition={{
                              opacity: { duration: 0.5 },
                              scale: { duration: 0.5 }
                            }}
                          >
                            <img
                              src={src}
                              alt={`App Screenshot ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>                {/* Floating effect and shadows */}
                <div className="absolute -inset-4 bg-gradient-to-br from-white/30 to-transparent rounded-[3.5rem] -z-10 blur-md"></div>

                {/* Background glow and gradient effects */}
                <div className="absolute -inset-10 -z-20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[3rem] blur-2xl transform rotate-180"></div>
                  <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
                </div>

                {/* Navigation dots */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-gray-800 w-4' : 'bg-gray-400'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationalPlatforms;