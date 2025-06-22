import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Book, Users, Target } from 'lucide-react';

const About = () => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const highlights = [
    { icon: Award, number: '2024', label: 'NYPF Bihar Representative', color: 'text-blue-600' },
    { icon: Book, number: '2021', label: 'Published Author', color: 'text-green-600' },
    { icon: Users, number: '5K+', label: 'Students Connected', color: 'text-purple-600' },
    { icon: Target, number: '95%', label: 'Board Exam Score', color: 'text-red-600' }
  ];

  const content = {
    en: {
      title: "Prabhakar Kumar Machvey",
      description: `Prabhakar Kumar Machvey is a visionary educator and transformative leader in the field of education. As the founder of Deep Classes Machvey, he has revolutionized the way students learn and grow. His innovative teaching methodologies and dedication to student success have helped thousands of students achieve their academic goals.

      A published author of "Uski Hasrat Hai", he combines his passion for literature with education to inspire young minds. His role as the Bihar Representative Speaker at the National Youth Parliament Festival 2024 showcases his commitment to youth leadership and national development.

      Through his multifaceted approach to education and youth empowerment, he continues to shape the future of education in Bihar and beyond.`
    },
    hi: {
      title: "प्रभाकर कुमार माचवे",
      description: `प्रभाकर कुमार माचवे शिक्षा के क्षेत्र में एक दूरदर्शी शिक्षक और परिवर्तनकारी नेता हैं। दीप क्लासेज माचवे के संस्थापक के रूप में, उन्होंने छात्रों के सीखने और विकास के तरीके में क्रांतिकारी बदलाव लाया है। उनकी नवीन शिक्षण पद्धतियों और छात्र सफलता के प्रति समर्पण ने हजारों छात्रों को उनके शैक्षणिक लक्ष्यों को प्राप्त करने में मदद की है।

      "उसकी हसरत है" के प्रकाशित लेखक के रूप में, वे युवा मनों को प्रेरित करने के लिए साहित्य के प्रति अपने जुनून को शिक्षा के साथ जोड़ते हैं। राष्ट्रीय युवा संसद महोत्सव 2024 में बिहार के प्रतिनिधि वक्ता के रूप में उनकी भूमिका युवा नेतृत्व और राष्ट्रीय विकास के प्रति उनकी प्रतिबद्धता को दर्शाती है।

      शिक्षा और युवा सशक्तिकरण के प्रति अपने बहुआयामी दृष्टिकोण के माध्यम से, वे बिहार और उससे आगे की शिक्षा के भविष्य को आकार देना जारी रखे हुए हैं।`
    }
  };

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/[0.15] via-blue-700/[0.15] to-emerald-600/[0.15]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 75%, rgba(37, 99, 235, 0.20) 0%, transparent 45%),
          radial-gradient(circle at 80% 25%, rgba(16, 185, 129, 0.20) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 85% 85%, rgba(16, 185, 129, 0.15) 0%, transparent 40%)
        `
      }}></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 relative z-10">
        {/* Language Switch Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage('en')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${language === 'en'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white/80 text-blue-900 hover:bg-white'
              }`}
          >
            English
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage('hi')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${language === 'hi'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white/80 text-blue-900 hover:bg-white'
              }`}
          >
            हिंदी
          </motion.button>
        </div>

        {/* Main Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Section - Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                src="/src/img/About_me_img.png"
                alt="Prabhakar Kumar Machvey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>

          {/* Content Section - Right */}
          <div className="lg:col-span-7">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className={`text-4xl md:text-5xl lg:text-6xl mb-4 leading-normal text-gray-900 ${
                language === 'en' ? 'font-handwriting' : 'font-hindi font-bold'
              }`}>
                {content[language].title}
              </h2>
              <div className="w-36 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {content[language].description.split('\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-4 mt-12 mb-0"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className={`${item.color}`} size={24} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${item.color} mb-1`}>{item.number}</div>
              <p className="text-gray-600 text-xs md:text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;