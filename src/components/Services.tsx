import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Mic2, PenTool, Users, Laptop } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Educational Coaching',
      description: 'Comprehensive coaching for 10th, 12th, and competitive exam preparation through Deep Classes Machvey, with specialized focus on core subjects including Hindi, English, Mathematics and more.',
      features: ['Board exam preparation', 'Subject-specific guidance', 'Exam strategy development'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBorderColor: '#2563eb'
    },
    {
      icon: Compass,
      title: 'Career Guidance',
      description: 'Personalized career counseling through Machvey Guidance services to help students make informed decisions about their academic and professional future with expert team support.',
      features: ['Career path exploration', 'Skill assessment', 'College and course selection'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverBorderColor: '#9333ea'
    },
    {
      icon: Mic2,
      title: 'Motivational Speaking',
      description: 'Engaging motivational sessions for schools, colleges, and youth organizations to inspire students and unlock their full potential through powerful storytelling and real-life examples.',
      features: ['Interactive sessions', 'Goal-setting workshops', 'Success strategy sharing'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      hoverBorderColor: '#dc2626'
    },
    {
      icon: PenTool,
      title: 'Poetry & Literary Works',
      description: 'Creative writing and poetry performances for events, with a unique blend of contemporary themes and traditional values that resonate with audiences of all ages.',
      features: ['Poetic performances', 'Literary event participation', 'Creative writing workshops'],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      hoverBorderColor: '#ca8a04'
    },
    {
      icon: Users,
      title: 'Youth Leadership Development',
      description: 'Programs designed to nurture leadership skills and civic engagement among youth, preparing them to be effective change-makers in their communities and society at large.',
      features: ['Leadership workshops', 'Public speaking training', 'Community engagement initiatives'],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverBorderColor: '#16a34a'
    },
    {
      icon: Laptop,
      title: 'Digital Educational Content',
      description: 'Creation of digital educational resources including videos, online courses, study notes and interactive learning materials for students through the Machvey App and YouTube channels.',
      features: ['Educational videos', 'Online study materials', 'Mobile learning solutions'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      hoverBorderColor: '#4f46e5'
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.15] via-purple-600/[0.15] to-green-600/[0.15]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 75%, rgba(37, 99, 235, 0.20) 0%, transparent 45%),
          radial-gradient(circle at 80% 25%, rgba(147, 51, 234, 0.20) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 15% 25%, rgba(202, 138, 4, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 85% 85%, rgba(22, 163, 74, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 50% 15%, rgba(79, 70, 229, 0.15) 0%, transparent 40%)
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                borderLeftColor: service.hoverBorderColor
              }}
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 ${service.borderColor} transition-all duration-300 group`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 ${service.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`${service.color}`} size={24} />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className={`w-2 h-2 ${service.color.replace('text-', 'bg-')} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;