import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogProps {}

// Move blogPosts outside component to prevent re-declaration
const blogPosts = [
  {
    title: "युवा शक्ति ही रचेगा भारत का भविष्य",
    date: "October 04, 2023",
    readTime: "6 min read",
    excerpt: "शक्ति व क्षमता का एक ज्योति पुंज उसकी युवा शक्ति है। भारत अभी जनसंख्या वितरण के स्वर्णिम काल से गुज़र रहा है।",
    imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEh8u3926jZ3tJHuH2UWx3IwbvlzunqJ-bYP4sk6PwqpKzxzDk-ZVEz20jqRpJzqGrel_56nqpFFXdp3Omz0kuxKU0KtgtjeZvVzzKJjbv-51HhmAzJhaiip7m74v89leDoP77GBtZv5WvMBJny35BN3Bkk9bUXiJNlSsGIFIUoytDqTU8OJc4GAb1hLq8s",
    link: "https://machvey.blogspot.com/2023/10/blog-post.html",
    category: "Youth & Future"
  },  {
    title: "क्या मैं ज़िम्मेदार हूँ ?",
    date: "December 05, 2023",
    readTime: "5 min read",
    excerpt: "यह जीवन मेरा है, इसलिए इससे जुड़ी अपनी जिम्मेदारी को स्वीकारना मेरा धर्म है।",
    imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEi7Cchs_uayTL3PvlbBKRWRmlGC0IsYP7tq7JFqZi7dIQzI6jEchKDdSofBCsKHKvX957qFm1vyew3Pt2K6M2NahOeBByxiqeCy0ghJBj5KxMPnUGpw1ui1lP8aHefWhZ3p_9WWXMnCmbx5e35N1jvqENpuIFnJg3OhA_eIZJizemF6NFYLaXv6Jb_hFCo",
    link: "https://machvey.blogspot.com/2023/12/blog-post_5.html",
    category: "Life Philosophy"
  },
  {
    title: "लड़कियों का बेवजह लड़का जैसा बनने की चाह तबाही है",
    date: "July 08, 2023",
    readTime: "7 min read",
    excerpt: "स्त्री की गरिमा जो पुरुषों के अत्याचार से भी नहीं मिटा था, वो इनकी खुद की नासमझी से जरूर मिट जाएगा।",
    imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEjeRGzWFhmIU0TqUVojGMd00NuXWSPyL5fGqrzEdMgdwWUJk7uu1wOZagZtEp-eAcWnf3otfY_-rNvd__dRVfeIFXZT4WK9mu1Y99MiL_PfJnA1aAFZwgl9Rr0bVzakNx9qNTqseZNYKOJVW5e5_nI4qp6uhNXEfMR1t4v0RMierqXuDKxOI_3thEPgVCY",
    link: "https://machvey.blogspot.com/2023/07/blog-post.html",
    category: "Society"
  },
  {
    title: "क्या UPSC में हिंदी माध्यम के अच्छे दिन आ गए?",
    date: "May 24, 2023",
    readTime: "5 min read",
    excerpt: "पिछले 25 वर्षों में हिंदी माध्यम का सबसे बेहतरीन रिजल्ट इसी बार आया है।",
    imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEhE8L4xSKEF7hnqDFhqb_5THyglIrETT8tpdJVgpuOHCn-wTxd6xg3OI0lPMuyqcC9zeE0ZpGiEomLCLNa2b-xZY9SXibP3apnbx9NduDAJE-34p2t1UBiItb4N-meciGt_IeZq8oi9XO_0dOHwXaytaMfPp5v_ociEzkpwNx1ic99WmA3A6G6oBMcQ",
    link: "https://machvey.blogspot.com/2023/05/upsc.html",
    category: "Education"
  },
  {
    title: "अविवाहित मित्रों के नाम खुले ख़त",
    date: "November 30, 2022",
    readTime: "4 min read",
    excerpt: "विवाह करने का यदि आपने फैसला कर ही लिया है तो आग्रह होगा कि आपको सबसे पहले खुद से ही यह सवाल करना चाहिए।",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizG_cZwc9GFIkqODNsQqqILzSzFMCTA3PVg0yZM9gyycSX_yp7WMc7UrtVVazB5L1I3Yo-plII1pCMVt5jlM92u5R9XFTnnHLh7xGkwSfgYByJMLY5Ul2zdiBTXohbofuvuWpbveZFPDU/s1600/1669825945359400-0.png",
    link: "https://machvey.blogspot.com/2022/11/blog-post_30.html",
    category: "Life Advice"
  },
  {
    title: "मैं एक सिख परिवार का लड़का हूँ",
    date: "July 15, 2023",
    readTime: "6 min read",
    excerpt: "हम सिर्फ दिखावे के लिए एक दूसरे के धर्म का सम्मान नहीं करें, बल्कि एक दूसरे के धर्म से सीखें।",
    imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEjrZl5_uM0kHzy_f8AFpVMzaXqI_VT0hDXW52u1G8yTm-iQzqHLKc7pMTrwTInR2ZlYZlRPlWh8J2vwIolFPpXN9Wuc_YaHVp4zhDJh_K8PxneKdDVy7zQofFKXOyPsLgy9ZpNaecK0GZgw6rrE5ozZ2hQHD6Kn0LhvtQ4XHvTTHjwP62aULYk4ih6Y-vE",
    link: "https://machvey.blogspot.com/2023/07/blog-post.html",
    category: "Society & Religion"
  }
];

// Image preloader component
const ImagePreloader: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  React.useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
  }, [imageUrl]);
  return null;
};

const renderBlogCard = (post: typeof blogPosts[0]) => (  <div className="flex flex-col h-full rounded-2xl transition-all duration-500 group">
    <div className="relative h-[280px] md:h-[300px] overflow-hidden rounded-t-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/30 mix-blend-multiply z-10 group-hover:opacity-75 transition-opacity"></div>
      <img 
        src={post.imageUrl}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/src/img/Machvey_profile_pic.jpg';
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20">
        <span className="inline-block px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-lg">
          {post.category}
        </span>
      </div>
    </div>    <div className="p-4 flex flex-col flex-grow rounded-b-2xl">
      <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
        <span className="flex items-center gap-1.5">
          <Calendar size={16} />
          {post.date}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={16} />
          {post.readTime}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2">
        {post.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors">
        {post.excerpt}
      </p>

      <motion.a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-all group-hover:gap-3 mt-auto"
        whileHover={{ x: 5 }}
      >
        Read Full Post
        <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
      </motion.a>
    </div>
  </div>
);

export const Blog: React.FC<BlogProps> = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [displayedCards, setDisplayedCards] = React.useState<number[]>([]);

  // Initialize displayed cards
  React.useEffect(() => {
    const totalPosts = blogPosts.length;
    setDisplayedCards([
      (totalPosts + activeIndex - 1) % totalPosts,
      activeIndex,
      (activeIndex + 1) % totalPosts
    ]);
  }, [activeIndex]);

  // Handle arrow navigation
  const handleArrowClick = (direction: 'left' | 'right') => {
    if (isAnimating) return;

    setIsAnimating(true);
    const totalPosts = blogPosts.length;
    const increment = direction === 'right' ? 1 : -1;
    const newIndex = (activeIndex + increment + totalPosts) % totalPosts;
    
    setActiveIndex(newIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Handle dot navigation
  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Auto-advance carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleArrowClick('right');
      }
    }, 5500);
    return () => clearInterval(interval);
  }, [isAnimating, activeIndex]);

  return (
    <section id="blog" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.15] via-blue-600/[0.15] to-emerald-500/[0.15]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 75%, rgba(147, 51, 234, 0.20) 0%, transparent 45%),
          radial-gradient(circle at 80% 25%, rgba(37, 99, 235, 0.20) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
        `
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">My Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg">Thoughts, stories, and ideas from my journey</p>
        </motion.div>

        {/* Blog Posts Carousel */}
        <div className="relative mx-auto max-w-7xl">
          {/* Navigation Arrows */}
          <motion.button
            onClick={() => handleArrowClick('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg -translate-x-1/2 border border-gray-200/50"
          >
            <ArrowRight size={24} className="transform rotate-180 text-gray-700" />
          </motion.button>

          <motion.button
            onClick={() => handleArrowClick('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg translate-x-1/2 border border-gray-200/50"
          >
            <ArrowRight size={24} className="text-gray-700" />
          </motion.button>

          {/* Cards Container */}
          <div className="relative h-[500px] overflow-hidden">
            {/* Desktop view */}
            <div className="hidden md:block h-full">
              <AnimatePresence initial={false}>
                {displayedCards.map((postIndex, position) => (
                  <motion.div
                    key={`card-${postIndex}-${position}`}
                    initial={{ x: position === 2 ? '100%' : 0, opacity: position === 2 ? 0 : 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: position === 0 ? '-100%' : 0, opacity: position === 0 ? 0 : 1 }}
                    transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0"
                    style={{
                      width: 'calc(33.333% - 1rem)',
                      left: `${position * 33.333}%`,
                      marginLeft: position > 0 ? '1.5rem' : 0
                    }}
                  >
                    <div className="h-full bg-blue-100/30 backdrop-blur-sm rounded-2xl overflow-hidden transform-gpu group">
                      {renderBlogCard(blogPosts[postIndex])}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Mobile view */}
            <div className="block md:hidden h-full">
              <div className="h-full bg-blue-100/30 backdrop-blur-sm rounded-2xl overflow-hidden transform-gpu group">
                {renderBlogCard(blogPosts[activeIndex])}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {blogPosts.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-purple-600 scale-125 shadow-lg' 
                    : 'bg-purple-300 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://machvey.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Posts
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;