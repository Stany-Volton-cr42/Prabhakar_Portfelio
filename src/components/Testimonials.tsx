import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: '12th Grade Student',
      avatar: 'PS',
      content: "Prabhakar sir's guidance helped me score over 90% in my board exams. His teaching style makes complex topics easy to understand and his strategies for exam preparation are truly effective!",
      rating: 4,
      color: 'bg-blue-500'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Literature Enthusiast',
      avatar: 'RK',
      content: "उसकी हसरत है' is a beautiful piece of literature. Machvey's writing style touches the heart and makes you reflect on life's precious moments. The way he captures emotions through his words is truly remarkable.",
      rating: 5,
      color: 'bg-green-500'
    },
    {
      name: 'Ankit Verma',
      role: 'College Student',
      avatar: 'AV',
      content: "The career guidance session by Prabhakar sir was eye-opening. It helped me make informed decisions about my academic future. His expert team provides personalized advice that really addresses individual concerns.",
      rating: 5,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.15] via-purple-500/[0.15] to-green-500/[0.15]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 40%)
        `
      }}></div>
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What People Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
                rotateY: 5
              }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative group transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 md:left-8">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <Quote className="text-white" size={16} />
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.1, delay: (index * 0.1) + (starIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <Star className="text-amber-400 fill-current" size={20} />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed italic text-sm md:text-base">
                "{testimonial.content}"
              </p>

              {/* Profile */}
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Background Pattern */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;