import React from 'react';
import { motion } from 'framer-motion';
const founders = [
  {
    name: "Ekta Aggarwal",
    role: "Co-Founder & CDO",
    bio: "Ekta Aggarwal leads the vision and strategy. With 10+ years of experience in designing and business, he's passionate about building scalable solutions.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Ritika Garg",
    role: "Co-Founder & CTO",
    bio: "Ritika Garg drives the technical architecture. She's a full-stack expert and loves building powerful digital products with real impact.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

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

const FounderSection = () => {
  return (
<section className="relative py-20 bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 animate-gradient bg-[length:400%_400%]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Meet the Founders</h2>

        <div className="space-y-24">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col-reverse md:flex-row items-center gap-12 ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative group">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
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
