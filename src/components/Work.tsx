import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const Work = () => {
  const purchaseLinks = [
    { name: 'Amazon Kindle', url: 'https://www.amazon.in/-/hi/Prabhakar-Kumar-Machvey-ebook/dp/B098DSCJVT', icon: '🛒', color: 'bg-orange-600 hover:bg-orange-700' },
    { name: 'Amazon Intl', url: 'https://www.amazon.com/Hasrat-Hindi-Prabhakar-Kumar-Machvey-ebook/dp/B098DSCJVT', icon: '🌍', color: 'bg-orange-500 hover:bg-orange-600' },
    { name: 'Flipkart', url: 'https://www.flipkart.com/uski-hasrat-hai/p/itmb95fb94c8e1e6', icon: '🛍️', color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Google Play', url: 'https://play.google.com/store/books/details/Uski_Hasrat_Hai?id=XPc1EAAAQBAJ', icon: '📱', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Goodreads', url: 'https://www.goodreads.com/author/list/21633683.Prabhakar_Kumar_Machvey_', icon: '⭐', color: 'bg-yellow-600 hover:bg-yellow-700' },
    { name: 'Everand', url: 'https://www.everand.com/author/555490601/Prabhakar-Kumar-Machvey', icon: '📖', color: 'bg-indigo-600 hover:bg-indigo-700' }
  ];

  return (
    <section id="work" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.15] via-blue-600/[0.15] to-green-500/[0.15]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 75%, rgba(249, 115, 22, 0.25) 0%, transparent 45%),
          radial-gradient(circle at 80% 25%, rgba(37, 99, 235, 0.25) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.20) 0%, transparent 50%),
          radial-gradient(circle at 10% 25%, hsla(271, 91.00%, 65.10%, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 90% 85%, rgba(236, 72, 153, 0.15) 0%, transparent 40%)
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">My Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Published Book */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 max-w-7xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 flex items-center justify-center">
            <BookOpen className="mr-3 text-blue-600" size={32} />
            Published Book
          </h3>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl shadow-xl flex">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                className="lg:w-1/2 flex justify-center p-4 lg:p-8"
              >
                <div className="relative perspective-1000">
                  {/* 3D Book Container */}
                  <motion.div
                    initial={{ rotateY: 0, rotateX: 0 }}
                    whileHover={{
                      rotateY: -15,
                      rotateX: 5,
                      scale: 1.05,
                      z: 50
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative preserve-3d"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    {/* Book Shadow */}
                    <motion.div
                      initial={{ opacity: 0.3, scale: 1 }}
                      whileHover={{
                        opacity: 0.6,
                        scale: 1.1,
                        x: 20,
                        y: 10
                      }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-4 left-4 w-64 h-80 sm:w-72 sm:h-96 md:w-[24rem] md:h-[32rem] lg:w-[28rem] lg:h-[36rem] bg-black opacity-20 rounded-lg blur-xl -z-10"
                    />

                    {/* Main Book Cover */}
                    <div className="relative">
                      <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-[24rem] md:h-[32rem] lg:w-[28rem] lg:h-[36rem] rounded-lg shadow-2xl overflow-hidden relative">
                        <img
                          src="/src/img/Uski Hasrat Hai Book Cover.png"
                          alt="Uski Hasrat Hai Book Cover"
                          className="w-full h-full object-contain bg-gradient-to-br from-blue-200 to-emerald-200"
                        />
                      </div>

                      {/* Book Spine - Initially Hidden */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          scaleX: 0,
                          transformOrigin: 'left center'
                        }}
                        whileHover={{
                          opacity: 1,
                          scaleX: 1,
                          transition: { duration: 0.6, ease: "easeOut" }
                        }}
                        className="absolute top-0 -left-6 w-6 h-80 sm:h-96 md:h-[32rem] lg:h-[36rem] bg-gradient-to-b from-blue-800 via-blue-700 to-blue-900 rounded-l-lg shadow-lg"
                        style={{
                          transform: 'rotateY(90deg)',
                          transformOrigin: 'right center',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {/* Spine Text */}
                        <div className="h-full flex items-center justify-center">
                          <p className="text-white text-xs font-bold writing-mode-vertical-rl text-orientation-mixed px-1 text-center transform rotate-180">
                            उसकी हसरत है...
                          </p>
                        </div>

                        {/* Spine Details */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <div className="absolute top-4 left-1 right-1 h-0.5 bg-white/20"></div>
                        <div className="absolute bottom-4 left-1 right-1 h-0.5 bg-white/20"></div>
                      </motion.div>

                      {/* Book Pages Effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{
                          opacity: 1,
                          transition: { duration: 0.6 }
                        }}
                        className="absolute top-1 right-1 w-1 h-78 sm:h-94 md:h-[31.5rem] lg:h-[35.5rem] bg-gradient-to-b from-gray-100 to-gray-300 rounded-r-sm shadow-sm"
                      />
                    </div>

                    {/* Floating Sparkle */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      className="absolute -top-3 -right-3 w-10 h-10 md:w-12 md:h-12 bg-amber-400 rounded-full flex items-center justify-center text-lg md:text-xl shadow-lg"
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="lg:w-1/2 text-center lg:text-left p-8 lg:p-12">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Uski Hasrat Hai...</h4>
                <p className="text-blue-600 mb-6 md:mb-8 font-medium text-lg md:text-xl">Published by Authors Tree Publishing, 2021</p>

                <div className="space-y-6 mb-8">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    "उसकी हसरत है..." is a poetic journey through life's various phases and emotions. The book captures the essence of human experiences, from childhood's innocence to adulthood's complexities. With lyrical prose and heartfelt verses, Prabhakar Kumar Machvey explores themes of love, ambition, nostalgia, and the human condition.
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800 bg-blue-50 p-4 rounded-r-lg text-sm md:text-base">
                    जीवन के वे दौर, जिनसे गुजरने वाले को शायद ही उस वक़्t इसकी अहमियत का अंदाज़ा होता हो...जब बचपन की अठखेलियाँ न तो समाप्त होती और न ही युवावस्था का आगाज़ होता है...वो दौर ज़िंदगी का सबसे हसीन दौर होता है...
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-xl text-center border border-orange-200">
                      <p className="text-orange-800 font-bold text-xl md:text-2xl">₹199</p>
                      <p className="text-orange-600 font-medium text-sm md:text-base">Paperback</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                      <p className="text-green-800 font-bold text-xl md:text-2xl">₹99</p>
                      <p className="text-green-600 font-medium text-sm md:text-base">eBook</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
                  {purchaseLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`${link.color} w-full h-11 text-white px-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md text-sm hover:shadow-lg`}
                    >
                      <span className="text-lg flex-shrink-0">{link.icon}</span>
                      <span className="truncate max-w-[100px]">{link.name.split(' ')[0]}</span>
                      <ExternalLink size={14} className="flex-shrink-0 opacity-75" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }
        
        .text-orientation-mixed {
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default Work;