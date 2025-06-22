import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import skilloYuvaLogo from '../img/SkilloYuva_logo.png';
import founderImage from '../img/founder.jpg';

const Skilloyuva = () => {
  const courses = [
    {
      title: 'Business Analysis Foundations',
      category: 'Cloud Computing & DevOps',
      rating: 4.7,
      enrolled: '3.1K',
      duration: '25h',
      image: '/src/img/App Screenshot3.png'
    },
    {
      title: 'Effective Teaching Strategies',
      category: 'Data Science & Analytics',
      rating: 4.7,
      enrolled: '3.1K',
      duration: '25h',
      image: '/src/img/App Screenshot4.png'
    },
    {
      title: 'Mastering Office Productivity Tools',
      category: 'Cloud Computing & DevOps',
      rating: 4.7,
      enrolled: '3.1K',
      duration: '25h',
      image: '/src/img/App screenshot.png'
    },
    {
      title: 'Advanced Data Analytics',
      category: 'Data Science & Analytics',
      rating: 4.8,
      enrolled: '2.8K',
      duration: '30h',
      image: '/src/img/App Screenshot3.png'
    },
    {
      title: 'Digital Marketing Essentials',
      category: 'Marketing & Business',
      rating: 4.6,
      enrolled: '4.2K',
      duration: '20h',
      image: '/src/img/App Screenshot4.png'
    },
    {
      title: 'Web Development Fundamentals',
      category: 'Programming & Development',
      rating: 4.9,
      enrolled: '5.5K',
      duration: '35h',
      image: '/src/img/App screenshot.png'
    }
  ];

  return (
    <section id="skilloyuva" className="pt-10 pb-14 md:pb-8 lg:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-teal-50"></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 relative z-10">
        {/* Logo and Gradient Line */}
        <div className="flex flex-col items-center mb-16">
          <img src={skilloYuvaLogo} alt="SkilloYuva Logo" className="h-16 mb-4" />
          <div className="h-1 w-48 bg-gradient-to-r from-orange-400 to-teal-500 rounded-full"></div>
        </div>

        {/* Founder Image and Title - Side by Side Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mb-16 max-w-6xl mx-auto">
          {/* Founder Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={founderImage}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/30 to-teal-500/30 rounded-full blur-xl opacity-50"></div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Founder of SkilloYuva
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Confidence, Communication, Character.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Sharpen the skills that shape your success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-lg uppercase tracking-wide"
            >
              IDEAL COURSES
            </motion.button>
          </motion.div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 border border-gray-100 group flex flex-col h-full"
            >
              {/* Image Section - 60% of the card */}
              <div className="relative overflow-hidden h-64">
                <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium z-10 shadow-lg">
                  FREE
                </span>
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section - 40% of the card */}
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-gray-50/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow pr-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-teal-500 transition-all duration-300 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">{course.category}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-orange-50 px-3 py-2 rounded-xl border border-yellow-200/50 flex-shrink-0">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-700 font-bold text-sm">{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>{course.enrolled}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <BookOpen className="w-4 h-4 text-teal-500" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 mt-auto uppercase tracking-wide"
                >
                  START LEARNING
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skilloyuva;