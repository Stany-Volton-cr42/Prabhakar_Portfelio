import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Target, BookOpen, Users, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Bihar Representative Speaker in NYPF 2024',
      description: 'Represented Bihar in the National Youth Parliament Festival 2024, showcasing exceptional oratory and leadership skills on a national platform.',
      year: '2024',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Trophy,
      title: 'Bihar State Declaration Winner 2024',
      description: 'Recognized for outstanding performance and contributions to youth development initiatives in Bihar, earning statewide recognition.',
      year: '2024',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Users,
      title: 'Youth Convenor - Bihar Chhatra Sansad',
      description: 'Appointed as Youth Convenor connecting over 5,000 motivated students and fostering collaboration for positive change.',
      year: '2023',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: BookOpen,
      title: 'Published Author',
      description: 'Successfully published "Uski Hasrat Hai..." with Authors Tree Publishing, showcasing literary talents and storytelling abilities.',
      year: '2021',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Achieved outstanding 95% in board examinations, demonstrating exceptional academic prowess and dedication to educational excellence.',
      year: '2020',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Star,
      title: 'Educational Content Creator',
      description: 'Built successful educational platform with over 1.17K YouTube subscribers and 118+ educational videos across two channels.',
      year: '2022',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      icon: Medal,
      title: 'Yuva Dharma Sansad 2024 Participation',
      description: 'Participated in Yuva Dharma Sansad 2024 in Haridwar as Bihar Representative, delivering motivational poetry.',
      year: '2024',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      icon: Lightbulb,
      title: 'Educational Innovation',
      description: 'Developed innovative teaching methodologies helping numerous students achieve academic success with accessible learning approaches.',
      year: '2023',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section id="achievements" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.15] via-purple-600/[0.15] to-green-600/[0.15]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 15% 15%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 85% 15%, rgba(202, 138, 4, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 15% 85%, rgba(239, 99, 99, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 85% 85%, rgba(219, 39, 119, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 50% 25%, rgba(79, 70, 229, 0.15) 0%, transparent 45%),
          radial-gradient(circle at 50% 75%, rgba(228, 152, 111, 0.15) 0%, transparent 45%)
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-emerald-500 h-full hidden lg:block"></div>
          
          <div className="space-y-8 md:space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Achievement Card */}
                <motion.div
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    scale: 1.02
                  }}
                  className={`w-full lg:w-5/12 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 ${achievement.borderColor} group transition-all duration-300`}
                >
                  <div className="flex items-start">
                    <div className={`${achievement.bgColor} p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className={`${achievement.color}`} size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${achievement.bgColor} ${achievement.color}`}>
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-4 h-4 rounded-full ${achievement.color.replace('text-', 'bg-')} border-4 border-white shadow-lg z-10`}
                  ></motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Journey of Excellence</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              From academic excellence to national recognition, each achievement represents a milestone in the journey of empowering youth and transforming education. These accomplishments reflect dedication, innovation, and an unwavering commitment to making a positive impact in society.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;