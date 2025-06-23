import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';


const YoutubeChannel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const channelStats = {
    subscribers: "1.24K",
    totalVideos: "204",
    description: "* NYPF Bihar Speaker Representative 2024 ...more",
    channelUrl: "youtube.com/@deepclassesmachvey",
    additionalLinks: "and 2 more links"
  };

  const featuredVideos = [
    {
      id: "ootT2pMsCrA",
      title: "RAKSHABANDHAN | PROMISE TO SISTER",
      description: "A heartfelt exploration of sibling bonds and family values",
    },
    {
      id: "YJrlVHYlvlI",
      title: "NYPF SPEECH 2024 | BIHAR REPRESENTIVE",
      description: "Youth Parliament representation highlighting leadership and vision",
    },
    {
      id: "YdPpn_3Ll6g",
      title: "WINNER SPEECH OF STATE LEVEL BIHAR",
      description: "Celebrating achievement and inspiring youth leadership",
    },
    {
      id: "MgZs_g2tKzI",
      title: "Hindi Speech On Gandhi - Life and Philosophy",
      description: "Exploring Gandhian principles and their modern relevance",
    },
  ];
  return (
    <section id="youtube" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Base light gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-gray-50 to-red-50"></div>

      {/* YouTube-themed layered gradients */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 75%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 10% 10%, rgba(254, 242, 242, 0.4) 0%, transparent 35%),
          radial-gradient(circle at 90% 90%, rgba(254, 226, 226, 0.4) 0%, transparent 35%)
        `
      }}></div>

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-red-200/30 to-rose-300/30 rounded-full mix-blend-soft-light filter blur-3xl opacity-50"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          x: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-rose-100/40 to-red-200/40 rounded-full mix-blend-soft-light filter blur-3xl opacity-60"
      />

      {/* Content Container */}
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 relative z-10">
        {/* 1. Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Youtube className="w-12 h-12 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              YouTube Channel
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent mx-auto max-w-[200px] mb-6"
          />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Welcome to my YouTube channel! Here, I share impactful speeches, educational content, and inspirational messages focused on youth empowerment, leadership, and personal development.
          </p>
        </motion.div>

        {/* 2. Channel UI Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Channel Avatar */}
            <motion.div
              variants={itemVariants}
              className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
            >
              <img
                src="/img/Youtube_channels_profile.jpg"
                alt="Channel Avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Channel Info */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    Prabhakar Kumar Machvey
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 text-gray-700 text-sm md:text-base">
                    <span>@prabhakarkumarmachvey</span>
                    <span className="text-gray-400">•</span>
                    <span>{channelStats.subscribers} subscribers</span>
                    <span className="text-gray-400">•</span>
                    <span>{channelStats.totalVideos} videos</span>
                  </div>
                </div>                <motion.a
                  href="https://www.youtube.com/@prabhakarkumarmachvey/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe
                </motion.a>
              </div>

              {/* Channel Description */}
              <div className="space-y-3 mt-6">
                <p className="text-gray-700 font-medium">{channelStats.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={`https://${channelStats.channelUrl}`}
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {channelStats.channelUrl}
                  </a>
                  <span className="text-gray-600">{channelStats.additionalLinks}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Channel Navigation */}
          <div className="mt-8 border-b border-gray-200">
            <div className="flex gap-8 overflow-x-auto">
              <a
                href="https://www.youtube.com/@prabhakarkumarmachvey/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium py-4 border-b-2 border-gray-900 whitespace-nowrap hover:text-red-600 transition-colors"
              >
                Home
              </a>
              <a
                href="https://www.youtube.com/@prabhakarkumarmachvey/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600 py-4 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all"
              >
                Videos
              </a>
              <a
                href="https://www.youtube.com/@prabhakarkumarmachvey/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600 py-4 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all"
              >
                Shorts
              </a>
              <a
                href="https://www.youtube.com/@prabhakarkumarmachvey/playlists"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600 py-4 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all"
              >
                Playlists
              </a>
              <a
                href="https://www.youtube.com/@prabhakarkumarmachvey/community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600 py-4 border-b-2 border-transparent hover:border-red-600 whitespace-nowrap transition-all"
              >
                Posts
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3. Featured Videos Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className=""
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 30px rgba(0,0,0,0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="aspect-video relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-red-100 bg-white"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-red-100 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-600">
                    {video.description}
                  </p>
                </motion.div>
              </motion.div>          ))}
          </div>
        </motion.div>

        {/* YouTube-themed CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://www.youtube.com/@prabhakarkumarmachvey"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
          >
            <Youtube className="w-6 h-6 mr-2" />
            Subscribe to Channel
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default YoutubeChannel;