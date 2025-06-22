import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Linkedin, Twitter, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      label: "Main Instagram", 
      url: "https://www.instagram.com/prabhakarkumarmachvey/?hl=en", 
      followers: "2K+",
      color: "hover:bg-pink-600"
    },
    { 
      icon: Instagram, 
      label: "Poetry Page", 
      url: "https://www.instagram.com/machvey_ki_kalam/", 
      followers: "Poetry",
      color: "hover:bg-purple-600"
    },
    { 
      icon: Facebook, 
      label: "Facebook", 
      url: "https://www.facebook.com/prabhakarkumarmachvey/", 
      followers: "2.1K+",
      color: "hover:bg-blue-600"
    },
    { 
      icon: Youtube, 
      label: "Main YouTube", 
      url: "https://www.youtube.com/channel/UChRTKCXtT1nbfsXArw2Xxzg", 
      followers: "1.21K+",
      color: "hover:bg-red-600"
    },
    { 
      icon: Youtube, 
      label: "Deep Classes", 
      url: "https://www.youtube.com/channel/UCzo8ahKROYx3RA322XuEusg", 
      followers: "1.17K+",
      color: "hover:bg-red-500"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      url: "https://in.linkedin.com/in/prabhakar-kumar-machvey-911690335", 
      followers: "Connect",
      color: "hover:bg-blue-700"
    },
    { 
      icon: Twitter, 
      label: "Twitter/X", 
      url: "https://x.com/prabhakardeep01", 
      followers: "Follow",
      color: "hover:bg-black"
    },
    { 
      icon: MessageCircle, 
      label: "Threads", 
      url: "https://www.threads.com/@prabhakarkumarmachvey", 
      followers: "146+",
      color: "hover:bg-gray-800"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Published Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  const bookPlatforms = [
    { name: "Amazon Kindle", url: "https://www.amazon.in/-/hi/Prabhakar-Kumar-Machvey-ebook/dp/B098DSCJVT" },
    { name: "Amazon International", url: "https://www.amazon.com/Hasrat-Hindi-Prabhakar-Kumar-Machvey-ebook/dp/B098DSCJVT" },
    { name: "Google Play Books", url: "https://play.google.com/store/books/details/Uski_Hasrat_Hai?id=XPc1EAAAQBAJ" },
    { name: "Flipkart", url: "https://www.flipkart.com/uski-hasrat-hai/p/itmb95fb94c8e1e6" },
    { name: "Goodreads", url: "https://www.goodreads.com/author/list/21633683.Prabhakar_Kumar_Machvey_" },
    { name: "Authors Tree Publishing", url: "https://www.authorstree.com/books/96" },
    { name: "Everand", url: "https://www.everand.com/author/555490601/Prabhakar-Kumar-Machvey" },
    { name: "Joom International", url: "https://www.joom.com/en/products/66c55b0ec6430001eedf5035" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Main Info Section */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
              Prabhakar Kumar Machvey
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg"
            >
              Author, Speaker, Educator, and Youth Leader dedicated to empowering minds and inspiring positive change through education, literature, and youth leadership initiatives across Bihar and beyond.
            </motion.p>
            
            {/* Enhanced Social Media Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8"
            >
              {socialLinks.map((social, index) => (
                <div key={index} className="text-center">
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block bg-gray-800 ${social.color} p-3 md:p-4 rounded-xl transition-all duration-300 transform hover:shadow-lg min-h-[44px] flex flex-col items-center justify-center`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
                    <span className="text-xs font-medium">{social.followers}</span>
                  </motion.a>
                </div>
              ))}
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20"
            >
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">📞 Professional Contact</h4>
              <p className="text-gray-300 mb-2 text-sm md:text-base">
                <strong>Location:</strong> Patna, Bihar, India
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                <strong>For Guidance:</strong> Connect via social media platforms
              </p>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-yellow-400">🔗 Quick Navigation</h4>
            <ul className="space-y-3 md:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-base md:text-lg font-medium hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Book & Educational Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-yellow-400">📚 Get The Book</h4>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {bookPlatforms.map((platform, index) => (
                <li key={index}>
                  <a 
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:underline text-sm md:text-base"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
              <h5 className="font-semibold text-green-400 mb-2 text-sm md:text-base">🎓 Educational Services</h5>
              <p className="text-gray-300 text-xs md:text-sm">Career Guidance • Educational Coaching • Motivational Speaking</p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 md:mt-16 pt-6 md:pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2 text-sm md:text-base">
                &copy; 2025 Prabhakar Kumar Machvey. All rights reserved.
              </p>
              <p className="text-gray-500 italic text-sm md:text-base">
                "इतना यक़ीन है मुझे अपने लफ़्ज़ों के हुनर पर, लोग मेरा चेहरा भूल सकते मगर मेरी बातें नहीं"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="bg-green-500/20 px-3 py-2 md:px-4 md:py-2 rounded-full border border-green-500/30">
                  <span className="text-green-400 font-medium text-xs md:text-sm">📖 Published Author</span>
                </div>
                <div className="bg-blue-500/20 px-3 py-2 md:px-4 md:py-2 rounded-full border border-blue-500/30">
                  <span className="text-blue-400 font-medium text-xs md:text-sm">🏆 NYPF 2024</span>
                </div>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;