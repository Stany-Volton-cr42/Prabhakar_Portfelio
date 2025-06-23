import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  href: string;
  label: string;
  gradient: string;
  hoverGradient: string;
  dropdown?: DropdownItem[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const navItems: NavItem[] = [

    {
      href: '#educational-platforms',
      label: 'Content',
      gradient: 'from-red-600/[0.15] via-purple-600/[0.15] to-blue-600/[0.15]',
      hoverGradient: 'from-red-600 via-purple-600 to-blue-600',
      dropdown: [
        { label: 'Book', href: '#work' },
        { label: 'Blogs', href: '#blog' },
        { label: 'Movie review', href: '#machvey-app' }
      ]
    },
    {
      href: '#skilloyuva',
      label: 'Courses',
      gradient: 'from-blue-900/[0.15] via-blue-700/[0.15] to-emerald-600/[0.15]',
      hoverGradient: 'from-blue-900 via-blue-700 to-emerald-600',
      dropdown: [
        { label: 'All Courses', href: '#skilloyuva' }
      ]
    },
    {
      href: '#blog',
      label: 'Blog',
      gradient: 'from-orange-500/[0.15] via-blue-600/[0.15] to-green-500/[0.15]',
      hoverGradient: 'from-orange-500 via-blue-600 to-green-500',
      dropdown: [
        { label: 'Latest Posts', href: '#latest-posts' },
        { label: 'Read More', href: '#read-more' }
      ]
    },
    {
      href: '#work',
      label: 'Book',
      gradient: 'from-blue-600/[0.15] via-purple-600/[0.15] to-green-600/[0.15]',
      hoverGradient: 'from-blue-600 via-purple-600 to-green-600',
      dropdown: [
        { label: 'उसकी हसरत है।', href: '#work' }
      ]
    },
    {
      href: '/gallery',
      label: 'Gallery',
      gradient: 'from-purple-600/[0.15] via-blue-600/[0.15] to-emerald-600/[0.15]',
      hoverGradient: 'from-purple-600 via-blue-600 to-emerald-600'
    },
    {
      href: '/about',
      label: 'About',
      gradient: 'from-blue-600/[0.15] via-emerald-600/[0.15] to-blue-700/[0.15]',
      hoverGradient: 'from-blue-600 via-emerald-600 to-blue-700',
      dropdown: [
        { label: 'My Journey', href: '#my-journey' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only update active section for hash links
      const sections = navItems
        .filter(item => item.href.startsWith('#'))
        .map(item => item.href.substring(1));

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // For hash links, scroll to the element
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
    } else {
      // For regular page links, use navigate
      navigate(href);
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Mobile-only dropdown toggle
  const handleDropdownToggle = (href: string) => {
    setActiveDropdown(activeDropdown === href ? null : href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-black/10 via-black/5 to-black/10 backdrop-blur-sm'
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-emerald-600/5"></div>
      <nav className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 py-4 relative">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold relative group"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">
              MACHVEY
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.button
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center px-2 py-1 transition-all duration-300 font-medium text-sm lg:text-base ${isScrolled
                      ? 'text-gray-700 hover:text-gray-900'
                      : 'text-white/90 hover:text-white'
                    }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-1 transform transition-transform duration-200 ${hoveredItem === item.href ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </motion.button>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {hoveredItem === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <motion.button
                            key={dropdownItem.href}
                            onClick={() => handleNavClick(dropdownItem.href)}
                            whileHover={{ x: 6 }}
                            className="block w-full text-left px-4 py-2 text-sm text-black transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:via-blue-600 hover:to-orange-500 hover:bg-clip-text hover:text-transparent"
                          >
                            {dropdownItem.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${isScrolled
                ? 'text-gray-700 hover:bg-gray-100/80 active:bg-gray-200/80'
                : 'text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20'
              }`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 bg-gradient-to-b from-white/95 to-white/98 backdrop-blur-md rounded-xl shadow-lg border border-gray-100/80 overflow-hidden"
            >
              {navItems.map((item, index) => (
                <div key={item.href}>
                  <motion.button
                    onClick={() => item.dropdown ? handleDropdownToggle(item.href) : handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center justify-between w-full text-left py-3 px-4 transition-all relative ${activeSection === item.href.substring(1)
                        ? 'text-gray-900 font-medium bg-gradient-to-r ' + item.gradient
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/80'
                      }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-200 ${activeDropdown === item.href ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </motion.button>

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-50/80"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <motion.button
                          key={dropdownItem.href}
                          onClick={() => handleNavClick(dropdownItem.href)}
                          whileHover={{ x: 6 }}
                          className="block w-full text-left px-6 py-2 text-sm text-gray-600 hover:text-gray-900 transition-all"
                        >
                          {dropdownItem.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;