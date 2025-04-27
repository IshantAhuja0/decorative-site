import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const FounderSection = ({ stats }) => {
  let founders = stats;
  return (
    <section className="relative py-30 pb-22 bg-gradient-to-b from-indigo-200 via-purple-100 to-pink-200 animate-gradient bg-[length:400%_400%]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet the Founders</h2>

        <div className="space-y-24">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col-reverse md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full rounded-xl h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{
                    maxHeight: '500px', // Allowing higher height for large screens
                    objectFit: 'contain' // Ensures the full image fits in the container without cropping
                  }}
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 z-10 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900">{founder.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{founder.role}</p>
                <p className="text-gray-700 text-base leading-relaxed">{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
