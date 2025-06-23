import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const EducationalPlatformsMobile: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/img/App screenshot.png',
    '/img/App screenshot2.png',
    '/img/App Screenshot3.png',
    '/img/App Screenshot4.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Educational Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive educational ecosystem designed to empower learners at every stage of their journey.
          </p>
        </motion.div>

        {/* YouTube Channel Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Channel Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
            >
              <img
                src="/img/DEEP CLASSES MACHVEY.png"
                alt="Deep Classes Machvey"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Channel Info */}
            <div className="text-center w-full">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                DEEP CLASSES MACHVEY
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700 text-sm mb-4">
                <span>@deepclassesmachvey</span>
                <span className="text-gray-400">•</span>
                <span>1.17K subscribers</span>
                <span className="text-gray-400">•</span>
                <span>118 videos</span>
              </div>

              {/* Subscribe Button */}
              <motion.a
                href="https://www.youtube.com/@deepclassesmachvey"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-red-500/20 mx-auto w-fit mb-4"
              >
                <Youtube className="w-4 h-4" />
                Subscribe
              </motion.a>

              {/* Channel Description */}
              <p className="text-gray-700 text-sm mb-4">
                Welcome to Deep Classes Machvey, an educational haven curated by the knowledgeable educator Prabhakar Kumar Machvey.
              </p>

              {/* Links */}
              <div className="flex flex-wrap justify-center gap-4 text-xs">
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

              {/* Channel Navigation - Mobile Scrollable */}
              <div className="mt-6 border-b border-gray-200">
                <div className="flex gap-4 overflow-x-auto pb-2">
                  <a
                    href="https://www.youtube.com/@deepclassesmachvey/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium py-3 border-b-2 border-gray-900 whitespace-nowrap hover:text-red-600 transition-colors text-sm"
                  >
                    Home
                  </a>
                  <a
                    href="https://www.youtube.com/@deepclassesmachvey/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all text-sm"
                  >
                    Videos
                  </a>
                  <a
                    href="https://www.youtube.com/@deepclassesmachvey/shorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all text-sm"
                  >
                    Shorts
                  </a>
                  <a
                    href="https://www.youtube.com/@deepclassesmachvey/playlists"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all text-sm"
                  >
                    Playlists
                  </a>
                  <a
                    href="https://www.youtube.com/@deepclassesmachvey/community"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all text-sm"
                  >
                    Posts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Machvey App Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full pt-5 border-t border-gray-200 mt-8"
        >
          <div className="flex flex-col gap-8">
            {/* App Header - Mobile */}
            <div className="flex flex-col items-center gap-4 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img
                  src="/img/DEEP CLASSES MACHVEY.png"
                  alt="Machvey App Logo"
                  className="w-20 h-20 rounded-2xl shadow-lg"
                />
                <div className="absolute -inset-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-[1rem] -z-10 opacity-20 blur-sm"></div>
              </motion.div>
              <div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-emerald-600 bg-clip-text text-transparent tracking-tight">
                  Machvey App
                </h4>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-emerald-600 rounded-full mt-2 mx-auto"
                />
              </div>
            </div>

            {/* Main Content - Mobile */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enhance Your Board Exam Preparation
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Machvey is your comprehensive educational companion, offering extensive study materials, free notes, and video lessons.
              </p>
            </div>

            {/* iPhone Mockup - Mobile Optimized */}
            <div className="flex justify-center mb-6">
              <div className="relative w-[200px] [perspective:1000px]">
                {/* iPhone frame - Mobile */}
                <div className="relative w-full aspect-[9/19.5] bg-black rounded-[2rem] p-2 shadow-[0_16px_32px_-4px_rgba(0,0,0,0.25)] transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500">
                  {/* iPhone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-5 bg-black z-20">
                    <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full"></div>
                  </div>

                  {/* Inner screen */}
                  <div className="relative w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <motion.div className="absolute inset-0 w-full h-full">
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
                  </div>
                </div>

                {/* Navigation dots - Mobile */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentImage === index ? 'bg-gray-800 w-3' : 'bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Download Section - Mobile */}
            <div className="flex flex-col items-center gap-6">
              {/* Play Store Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=co.in.creatorsmind.marwtaj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-900 transition-all duration-300 w-fit"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-8"
                />
              </motion.a>

              {/* Stats Grid - Mobile */}
              <div className="grid grid-cols-3 gap-6 max-w-sm">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">4.7★</p>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">100+</p>
                  <p className="text-xs text-gray-600">Downloads</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">3+</p>
                  <p className="text-xs text-gray-600">Age</p>
                </div>
              </div>

              {/* QR Code - Mobile */}
              <div className="text-center">
                <img
                  src="/img/Machey app.png"
                  alt="Download Machvey App"
                  className="w-32 h-40 object-contain mx-auto"
                />
                <p className="text-sm text-gray-900 text-center mt-2">Scan to Download</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationalPlatformsMobile;
