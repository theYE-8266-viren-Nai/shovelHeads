// src/components/discography/AlbumsSection.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AlbumsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredAlbum, setHoveredAlbum] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const animationProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeIn' },
  };

  const categories = [
    { id: 'all', label: 'ALL RELEASES' },
    { id: 'albums', label: 'ALBUMS' },
    { id: 'eps', label: 'EPs' },
    { id: 'singles', label: 'SINGLES' },
    { id: 'demos', label: 'DEMOS' }
  ];

  const releases = [
    {
      id: 1,
      title: "REBEL STREETS",
      year: "2024",
      type: "albums",
      image: "images/Discography/50paypar.jpg",
      tracks: 12,
      duration: "45:23",
      description: "Raw punk energy meets street rebellion in our latest full-length assault.",
      status: "latest",
      platforms: ["spotify", "bandcamp", "vinyl"]
    },
    {
      id: 2,
      title: "UNDERGROUND ANTHEM",
      year: "2023",
      type: "eps",
      image: "images/Discography/dinosaurs.jpg",
      tracks: 6,
      duration: "22:15",
      description: "Six tracks of pure underground fury that defined our sound.",
      status: "featured",
      platforms: ["spotify", "bandcamp"]
    },
    {
      id: 3,
      title: "NOISE COMPLAINT",
      year: "2023",
      type: "singles",
      image: "images/Discography/scarecrow.jpg",
      tracks: 1,
      duration: "3:47",
      description: "The track that got us banned from three venues in one night.",
      status: "popular",
      platforms: ["spotify", "youtube"]
    },
 
  ];

  const filteredReleases = selectedCategory === 'all' 
    ? releases 
    : releases.filter(release => release.type === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusBadge = (status) => {
    const badges = {
      latest: { text: 'NEW', color: 'bg-red-500' },
      featured: { text: 'FEATURED', color: 'bg-accent-yellow text-black' },
      popular: { text: 'HOT', color: 'bg-orange-500' },
      rare: { text: 'RARE', color: 'bg-purple-500' },
      classic: { text: 'CLASSIC', color: 'bg-blue-500' },
      'sold-out': { text: 'SOLD OUT', color: 'bg-gray-500' }
    };
    
    const badge = badges[status];
    return (
      <span className={`px-2 py-1 text-xs font-black ${badge.color} text-white rounded`}>
        {badge.text}
      </span>
    );
  };

  return (
    <motion.section ref={sectionRef} className="py-20 bg-black" {...animationProps}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...animationProps}>
          <h2 className="text-3xl font-shovelHeads text-shovel-head-main-color pixel-text">
            OUR RELEASES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bitcount">
            Every album, EP, and demo that's shaped our sound. From garage recordings to studio fury.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" {...animationProps}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 font-black text-sm border-2 transition-all duration-300
                         transform hover:scale-105 hover:rotate-1
                         ${selectedCategory === category.id
                           ? 'bg-shovel-head-main-color text-black border-shovel-head-main-color'
                           : 'bg-transparent text-shovel-head-main-color border-shovel-head-main-color hover:bg-shovel-head-main-color hover:text-black'
                         }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReleases.map((release, index) => (
            <motion.div
              key={release.id}
              className={`group relative bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden
                         transform transition-all duration-500 hover:scale-105 hover:-rotate-1
                         hover:border-shovel-head-main-color hover:shadow-2xl hover:shadow-shovel-head-main-color/20`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredAlbum(release.id)}
              onMouseLeave={() => setHoveredAlbum(null)}
        >
              {/* Album Cover */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-500
                           group-hover:scale-110 group-hover:rotate-2"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMTExODI3Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iMTUwIiBzdHJva2U9IiNmY2U4M2EiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjMwIiBmaWxsPSIjZmNlODNhIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMzIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmNlODNhIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIj5BTEJVTTwvdGV4dD4KPC9zdmc+';
                  }}
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  {getStatusBadge(release.status)}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-black/80 text-accent-yellow px-3 py-1 rounded font-bold text-sm">
                  {release.year}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/80 flex items-center justify-center
                               transition-all duration-300 ${
                                 hoveredAlbum === release.id ? 'opacity-100' : 'opacity-0'
                               }`}>
                  <div className="text-center space-y-4">
                    <button className="px-6 py-3 bg-shovel-head-main-color text-black font-black
                                     hover:bg-orange-400 transition-colors duration-300
                                     transform hover:scale-105">
                      LISTEN NOW
                    </button>
                    <div className="flex justify-center space-x-2">
                      {release.platforms.map((platform) => (
                        <span key={platform} className="px-2 py-1 bg-gray-700 text-white text-xs rounded">
                          {platform.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Album Info */}
              <div className="p-6">
                <h3 className="text-xl font-black text-text-primary mb-2 group-hover:text-shovel-head-main-color
                              transition-colors duration-300 font-shovelHeads">
                  {release.title}
                </h3>
                
                <div className="flex justify-between items-center mb-3 text-sm text-gray-300">
                  <span className="uppercase font-bold">{release.type}</span>
                  <span>{release.tracks} tracks • {release.duration}</span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed font-bitcount">
                  {release.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredReleases.length === 0 && (
          <motion.div className="text-center py-20" {...animationProps}>
            <div className="text-6xl text-shovel-head-main-color/30 mb-4">♪</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2 font-shovelHeads">No releases found</h3>
            <p className="text-gray-300 font-bitcount">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default AlbumsSection;