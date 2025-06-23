import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Book, Users, Target, ArrowLeft, Lightbulb, Heart, Briefcase, Trophy, Medal, Star, BookOpen, GraduationCap, Compass, Mic2, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

const AboutDetailed = () => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const highlights = [
    { icon: Award, number: '2024', label: 'NYPF Bihar Representative', color: 'text-blue-600' },
    { icon: Book, number: '2021', label: 'Published Author', color: 'text-green-600' },
    { icon: Users, number: '5K+', label: 'Students Connected', color: 'text-purple-600' },
    { icon: Target, number: '95%', label: 'Board Exam Score', color: 'text-red-600' }
  ];

  const achievements = [
    {
      icon: Lightbulb,
      title: 'Educational Innovation',
      description: 'Pioneered new teaching methodologies that have transformed the learning experience for thousands of students.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Book,
      title: 'Literary Achievement',
      description: 'Published "Uski Hasrat Hai", a compelling work that bridges literature and education.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Built a thriving educational community that has touched the lives of over 5000 students.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Leadership Role',
      description: 'Selected as Bihar Representative Speaker at National Youth Parliament Festival 2024.',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const timelineAchievements = [
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
    }
  ];

  const services = [
    {
      icon: GraduationCap,
      title: 'Educational Expertise',
      description: 'Leading Deep Classes Machvey with innovative teaching methodologies for comprehensive academic excellence.',
      features: [
        'Specialized 10th & 12th board preparation',
        'Interactive learning techniques',
        'Personalized student mentoring',
        'Subject mastery programs'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Compass,
      title: 'Career Development',
      description: 'Guiding students towards their ideal career paths with expert counseling and strategic planning.',
      features: [
        'Career aptitude assessment',
        'Academic roadmap planning',
        'College admission guidance',
        'Skill development programs'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Mic2,
      title: 'Public Speaking',
      description: 'Empowering voices through motivational speaking and leadership development programs.',
      features: [
        'Youth Parliament representation',
        'Motivational sessions',
        'Public speaking workshops',
        'Leadership seminars'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: PenTool,
      title: 'Literary Works',
      description: 'Contributing to literature through published works and creative writing initiatives.',
      features: [
        'Published author of "Uski Hasrat Hai"',
        'Poetry composition',
        'Creative writing mentorship',
        'Literary event curation'
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ];

  const content = {
    en: {
      title: "About Prabhakar Kumar Machvey",
      subtitle: "Visionary Educator & Transformative Leader",
      description: [
        "Prabhakar Kumar Machvey is a visionary educator and transformative leader in the field of education. As the founder of Deep Classes Machvey, he has revolutionized the way students learn and grow. His innovative teaching methodologies and dedication to student success have helped thousands of students achieve their academic goals.",
        "A published author of \"Uski Hasrat Hai\", he combines his passion for literature with education to inspire young minds. His role as the Bihar Representative Speaker at the National Youth Parliament Festival 2024 showcases his commitment to youth leadership and national development.",
        "Through his multifaceted approach to education and youth empowerment, he continues to shape the future of education in Bihar and beyond. His teaching philosophy emphasizes not just academic excellence, but also character development and life skills.",
        "Under his leadership, Deep Classes Machvey has become a beacon of quality education, known for its innovative teaching methods and consistent results. The institution reflects his vision of making quality education accessible to all.",
        "His work extends beyond the classroom, actively engaging in community development and youth mentorship programs. Through various initiatives, he has created platforms for students to explore their potential and develop leadership skills."
      ],
      vision: "To transform education through innovation and empower every student to achieve their full potential.",
      mission: "Creating an educational ecosystem that nurtures both academic excellence and personal growth."
    },
    hi: {
      title: "प्रभाकर कुमार माचवे के बारे में",
      subtitle: "दूरदर्शी शिक्षक और परिवर्तनकारी नेता",
      description: [
        "प्रभाकर कुमार माचवे शिक्षा के क्षेत्र में एक दूरदर्शी शिक्षक और परिवर्तनकारी नेता हैं। दीप क्लासेज माचवे के संस्थापक के रूप में, उन्होंने छात्रों के सीखने और विकास के तरीके में क्रांतिकारी बदलाव लाया है। उनकी नवीन शिक्षण पद्धतियों और छात्र सफलता के प्रति समर्पण ने हजारों छात्रों को उनके शैक्षणिक लक्ष्यों को प्राप्त करने में मदद की है।",
        "\"उसकी हसरत है\" के प्रकाशित लेखक के रूप में, वे युवा मनों को प्रेरित करने के लिए साहित्य के प्रति अपने जुनून को शिक्षा के साथ जोड़ते हैं। राष्ट्रीय युवा संसद महोत्सव 2024 में बिहार के प्रतिनिधि वक्ता के रूप में उनकी भूमिका युवा नेतृत्व और राष्ट्रीय विकास के प्रति उनकी प्रतिबद्धता को दर्शाती है।",
        "शिक्षा और युवा सशक्तिकरण के प्रति अपने बहुआयामी दृष्टिकोण के माध्यम से, वे बिहार और उससे आगे की शिक्षा के भविष्य को आकार देना जारी रखे हुए हैं। उनका शिक्षण दर्शन न केवल शैक्षणिक उत्कृष्टता पर बल देता है, बल्कि चरित्र विकास और जीवन कौशल पर भी ध्यान केंद्रित करता है।",
        "उनके नेतृत्व में, दीप क्लासेज माचवे गुणवत्तापूर्ण शिक्षा का प्रतीक बन गया है, जो अपनी नवीन शिक्षण विधियों और निरंतर परिणामों के लिए जाना जाता है। संस्थान सभी के लिए गुणवत्तापूर्ण शिक्षा को सुलभ बनाने के उनके दृष्टिकोण को प्रतिबिंबित करता है।",
        "उनका कार्य कक्षा से परे है, वे सामुदायिक विकास और युवा मेंटरशिप कार्यक्रमों में सक्रिय रूप से संलग्न हैं। विभिन्न पहलों के माध्यम से, उन्होंने छात्रों को अपनी क्षमता का पता लगाने और नेतृत्व कौशल विकसित करने के लिए मंच तैयार किया है।"
      ],
      vision: "नवाचार के माध्यम से शिक्षा को बदलना और प्रत्येक छात्र को अपनी पूरी क्षमता हासिल करने के लिए सशक्त बनाना।",
      mission: "एक ऐसा शैक्षिक वातावरण बनाना जो शैक्षिक उत्कृष्टता और व्यक्तिगत विकास दोनों को पोषित करे।"
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 py-12"
        >
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          {/* Language Toggle */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                } border border-gray-200`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  language === 'hi'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                } border border-l-0 border-gray-200`}
              >
                हिंदी
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-16">
            {/* Hero Section */}            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className={`text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent ${
                  language === 'en' ? 'font-handwriting' : 'font-hindi'
                } leading-tight`}>
                  {content[language].title}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8">
                  {content[language].subtitle}
                </h2>
                <div className="w-48 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 rounded-full"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/img/About_me2.png"
                  alt="Prabhakar Kumar Machvey"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6"
              >
                {content[language].description.map((paragraph, index) => (
                  <p key={index} className="text-xl text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                  <p className="text-gray-700">{content[language].vision}</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                  <p className="text-gray-700">{content[language].mission}</p>
                </div>
              </motion.div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-full ${achievement.color} flex items-center justify-center mb-4`}>
                    <achievement.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-xl text-center group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`${item.color}`} size={24} />
                  </div>
                  <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.number}</div>
                  <p className="text-gray-600 text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Expertise & Services Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
                >
                  Areas of Expertise
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-gray-600 max-w-2xl mx-auto"
                >
                  Dedicated to excellence in education, leadership development, and youth empowerment through various specialized programs and initiatives.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className={`h-full rounded-2xl p-8 border-l-4 ${service.borderColor} bg-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    >
                      <div className="flex items-start mb-6">
                        <div className={`${service.bgColor} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className={service.color} size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${service.color} mr-2`} />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Achievement Timeline */}
            <div className="relative mt-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Journey of Excellence</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
              </motion.div>

              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-emerald-500 h-full hidden lg:block"></div>
              
              <div className="space-y-8 md:space-y-12">
                {timelineAchievements.map((achievement, index) => (
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

              {/* Timeline Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Journey of Excellence</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                    From academic excellence to national recognition, each achievement represents a milestone in the journey of empowering youth and transforming education. These accomplishments reflect dedication, innovation, and an unwavering commitment to making a positive impact in society.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default AboutDetailed;
