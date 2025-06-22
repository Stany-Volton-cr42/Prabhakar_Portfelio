import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Search, Filter, Image as ImageIcon, Book, Users, Trophy, Newspaper, Camera, Video, GraduationCap } from 'lucide-react';

// Interface and type definitions for gallery items
interface GalleryItem {
    id: number;
    title: string;
    category: string;
    subCategory: string;
    description: string;
    imageUrl: string;
    date: string;
}

interface CategoryDef {
    id: string;
    name: string;
    icon: React.ElementType;
    subCategories: string[];
}

// Sample gallery data
const galleryData: GalleryItem[] = [
    {
        id: 1,
        title: "उस्की हसरत Book Launch",
        category: "book-reviews",
        subCategory: "book-launch",
        description: "Book launch event with enthusiastic readers and supporters",
        imageUrl: "/src/img/Uski Hasrat Hai Book Cover.png",
        date: "2024-03-15"
    },
    {
        id: 7,
        title: "UPSC Success Stories",
        category: "educational",
        subCategory: "upsc",
        description: "Interactive session with successful UPSC aspirants",
        imageUrl: "/src/img/students.svg",
        date: "2024-02-28"
    },
    {
        id: 3,
        title: "Leadership Workshop",
        category: "educational",
        subCategory: "workshops",
        description: "Hands-on workshop on leadership development",
        imageUrl: "/src/img/pathways.svg",
        date: "2024-02-15"
    },
    {
        id: 4,
        title: "Monthly Meet & Greet",
        category: "events",
        subCategory: "meetups",
        description: "Monthly community gathering and networking session",
        imageUrl: "/src/img/partners.svg",
        date: "2024-01-20"
    },
    {
        id: 5,
        title: "Youth Summit 2024",
        category: "events",
        subCategory: "summits",
        description: "Annual youth leadership and development summit",
        imageUrl: "/src/img/profile_img.png",
        date: "2024-01-10"
    }
];

// Category definitions
const categories: CategoryDef[] = [
    {
        id: 'book-reviews',
        name: 'Book Reviews & Events',
        icon: Book,
        subCategories: ['book-launch', 'reader-feedback', 'book-signings', 'literary-events']
    },
    {
        id: 'educational',
        name: 'Educational Programs',
        icon: GraduationCap,
        subCategories: ['upsc', 'workshops', 'seminars', 'online-courses']
    },
    {
        id: 'events',
        name: 'Community Events',
        icon: Users,
        subCategories: ['meetups', 'summits', 'conferences', 'social-gatherings']
    },
    {
        id: 'media',
        name: 'Media Coverage',
        icon: Camera,
        subCategories: ['interviews', 'news-features', 'podcasts', 'documentaries']
    },
    {
        id: 'achievements',
        name: 'Achievements',
        icon: Trophy,
        subCategories: ['awards', 'recognitions', 'milestones', 'testimonials']
    }
];

export const Gallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryData);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);

    // Enhanced filter effect with smoother transitions
    useEffect(() => {
        setIsFiltering(true);
        const timer = setTimeout(() => {
            let filtered = galleryData;

            if (selectedCategory) {
                filtered = filtered.filter(item => item.category === selectedCategory);
            }

            if (selectedSubCategory) {
                filtered = filtered.filter(item => item.subCategory === selectedSubCategory);
            }

            if (searchQuery) {
                filtered = filtered.filter(item =>
                    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            setFilteredItems(filtered);
            setIsFiltering(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [selectedCategory, selectedSubCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            {/* Enhanced Creative Header */}
            <header className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.15] via-blue-600/[0.15] to-emerald-500/[0.15]" />
                    <motion.div
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        className="absolute inset-0"
                        style={{
                            backgroundSize: '400% 400%', background: [
                                "radial-gradient(circle at 20% 75%, rgba(147, 51, 234, 0.25) 0%, rgba(147, 51, 234, 0) 50%)",
                                "radial-gradient(circle at 80% 25%, rgba(37, 99, 235, 0.25) 0%, rgba(37, 99, 235, 0) 50%)",
                                "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.20) 0%, rgba(16, 185, 129, 0) 60%)"
                            ].join(",")
                        }}
                    />

                    {/* Animated Pattern Elements */}
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            rotate: [360, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-1/4 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative inline-block mb-6"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 rounded-full blur-xl opacity-50" />
                            <div className="relative bg-white bg-opacity-90 backdrop-blur-sm px-8 py-2 rounded-full">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-sm font-medium bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-transparent bg-clip-text"
                                >
                                    Explore Our Collection
                                </motion.span>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif">
                                <motion.span
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="block bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-transparent bg-clip-text"
                                >
                                    Our Journey
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="block text-2xl md:text-3xl font-sans mt-4 tracking-wide text-gray-700"
                                >
                                    Through Time & Memories
                                </motion.span>
                            </h1>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto max-w-xl mb-8"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed"
                            >
                                A visual journey through our moments of impact and inspiration
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Mobile Filter Toggle */}
                    <button
                        className="md:hidden flex items-center justify-center gap-2 w-full px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700"
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                    >
                        <Filter size={20} />
                        {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>

                    {/* Sidebar with Filters */}
                    <motion.aside
                        className={`w-full md:w-72 lg:w-80 space-y-8 sticky top-8 ${showMobileFilters ? 'block' : 'hidden md:block'
                            }`}
                        style={{ maxHeight: 'calc(100vh - 4rem)' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Search */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-blue-500/[0.02] to-emerald-500/[0.02]" />
                            <div className="relative">
                                <div className="relative">
                                    <Search
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-hover:text-purple-500"
                                        size={20}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search gallery..."
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50 hover:bg-white"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <nav className="bg-white rounded-2xl shadow-sm p-6 space-y-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-blue-500/[0.02] to-emerald-500/[0.02]" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                                        Categories
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {categories.map((category) => (
                                        <div key={category.id} className="space-y-2">
                                            <motion.button
                                                onClick={() => {
                                                    setSelectedCategory(selectedCategory === category.id ? null : category.id);
                                                    setSelectedSubCategory(null);
                                                }}
                                                className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all relative overflow-hidden group ${selectedCategory === category.id
                                                        ? 'text-purple-700 font-medium'
                                                        : 'text-gray-600 hover:text-purple-600'
                                                    }`}
                                                whileHover={{
                                                    scale: 1.02,
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                <div
                                                    className={`absolute inset-0 transition-opacity duration-300 ${selectedCategory === category.id
                                                            ? 'opacity-100'
                                                            : 'opacity-0 group-hover:opacity-50'
                                                        }`}
                                                    style={{
                                                        background: 'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(37, 99, 235, 0.1))'
                                                    }}
                                                />

                                                <div className="relative flex items-center gap-3">
                                                    <category.icon size={18} />
                                                    <span className="text-sm font-medium">{category.name}</span>
                                                </div>
                                            </motion.button>

                                            <AnimatePresence>
                                                {selectedCategory === category.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="ml-7 space-y-1 pt-1"
                                                    >
                                                        {category.subCategories.map((subCat, index) => (
                                                            <motion.button
                                                                key={subCat}
                                                                initial={{ x: -20, opacity: 0 }}
                                                                animate={{ x: 0, opacity: 1 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                onClick={() => setSelectedSubCategory(selectedSubCategory === subCat ? null : subCat)}
                                                                className={`w-full text-left px-6 py-3 rounded-lg text-sm transition-all relative overflow-hidden group ${selectedSubCategory === subCat
                                                                        ? 'text-purple-700 font-medium bg-purple-50'
                                                                        : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50/50'
                                                                    }`}
                                                            >
                                                                <span className="relative z-10">
                                                                    {subCat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                                </span>
                                                            </motion.button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </motion.aside>

                    {/* Updated Gallery Grid */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <LayoutGroup>
                            <motion.div
                                layout
                                className={`${filteredItems.length > 0
                                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max'
                                        : 'w-full'
                                    }`}
                            >
                                <AnimatePresence mode="wait">
                                    {!isFiltering && filteredItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{
                                                opacity: { duration: 0.3 },
                                                scale: { duration: 0.4 },
                                                layout: { duration: 0.4 }
                                            }}
                                            className="w-full group"
                                        >
                                            <motion.div
                                                layout
                                                className="relative overflow-hidden rounded-xl backdrop-blur-sm h-full"
                                            >                        <motion.div
                                                layout
                                                className="relative overflow-hidden"
                                            >
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={item.title}
                                                        className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                                                        onLoad={(e) => {
                                                            const img = e.target as HTMLImageElement;
                                                            const container = img.parentElement;
                                                            if (container) {
                                                                container.style.minHeight = '200px';
                                                                if (img.naturalWidth > img.naturalHeight) {
                                                                    container.style.maxHeight = '500px';
                                                                }
                                                            }
                                                        }}
                                                    />
                                                    <motion.div
                                                        layout
                                                        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    />
                                                </motion.div>

                                                <motion.div
                                                    layout
                                                    className="p-6 relative bg-white/80 backdrop-blur-sm"
                                                >
                                                    <motion.div
                                                        layout
                                                        className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-blue-600/[0.02] to-emerald-500/[0.02]"
                                                    />
                                                    <div className="relative">
                                                        <motion.h3
                                                            layout
                                                            className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors"
                                                        >
                                                            {item.title}
                                                        </motion.h3>
                                                        <motion.p
                                                            layout
                                                            className="mt-2 text-sm text-gray-600 line-clamp-2"
                                                        >
                                                            {item.description}
                                                        </motion.p>
                                                        <motion.div
                                                            layout
                                                            className="mt-4 flex flex-wrap items-center gap-2 text-xs"
                                                        >
                                                            <span className="inline-block px-2.5 py-1 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 border border-gray-100">
                                                                {new Date(item.date).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'short',
                                                                    day: 'numeric'
                                                                })}
                                                            </span>
                                                            <span className="inline-block px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-100">
                                                                {item.subCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                            </span>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    ))}

                                    {/* Loading State */}
                                    {isFiltering && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="col-span-full w-full flex items-center justify-center py-12"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.5, 1, 0.5]
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="w-3 h-3 rounded-full bg-purple-500"
                                                />
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.5, 1, 0.5]
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: 0.2
                                                    }}
                                                    className="w-3 h-3 rounded-full bg-blue-500"
                                                />
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.5, 1, 0.5]
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: 0.4
                                                    }}
                                                    className="w-3 h-3 rounded-full bg-emerald-500"
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Empty State */}
                                    {!isFiltering && filteredItems.length === 0 && (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="col-span-full w-full flex items-center justify-center min-h-[400px]"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center max-w-md mx-auto p-8 bg-white/50 backdrop-blur-sm rounded-2xl"
                                            >
                                                <div className="relative inline-block mb-4">
                                                    <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl" />
                                                    <div className="relative">
                                                        <ImageIcon size={48} className="mx-auto text-purple-600/70" />
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-medium text-gray-900 mb-2">No items found</h3>
                                                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </LayoutGroup>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
