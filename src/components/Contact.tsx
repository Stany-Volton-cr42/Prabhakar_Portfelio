import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: 'Contact for Machvey Guidance: 8507289381',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info.machveyguidance@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Bihar, India',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      url: 'https://www.instagram.com/prabhakarkumarmachvey/',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-600'
    },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/prabhakarkumarmachvey/',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Youtube,
      url: 'https://www.youtube.com/channel/UChRTKCXtT1nbfsXArw2Xxzg',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-600'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/prabhakar-kumar-machvey-911690335',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-700'
    }
  ];

  const stats = [
    { number: '1.17K+', label: 'YouTube Subscribers', color: 'text-red-600' },
    { number: '2K+', label: 'Instagram Followers', color: 'text-pink-600' },
    { number: '2.1K+', label: 'Facebook Followers', color: 'text-blue-600' },
    { number: '118+', label: 'Educational Videos', color: 'text-green-600' }
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.15] via-emerald-600/[0.15] to-blue-700/[0.15]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 15% 15%, rgba(39, 219, 87, 0.2) 0%, transparent 40%),
          radial-gradient(circle at 85% 15%, rgba(37, 99, 235, 0.2) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 45%),
          radial-gradient(circle at 15% 85%, rgba(29, 78, 216, 0.2) 0%, transparent 40%),
          radial-gradient(circle at 85% 85%, rgba(39, 219, 87, 0.2) 0%, transparent 40%)
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl h-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-6 md:mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start group"
                  >
                    <div className={`${info.bgColor} p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`${info.color}`} size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{info.title}</h4>
                      <p className="text-gray-700 text-sm md:text-base">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Social Media</h3>
              <div className="flex flex-wrap gap-4 mb-6 md:mb-8">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.bgColor} ${social.hoverColor} p-3 rounded-full ${social.color} hover:text-white transition-all duration-300 shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center bg-white rounded-lg p-4 shadow-md"
                  >
                    <div className={`text-xl md:text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                    <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 h-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Connect With Me</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base min-h-[44px]"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base min-h-[44px]"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base min-h-[44px]"
                    placeholder="Subject"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Your Message"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;