import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const today = new Date();
const baseDate = new Date('2024-01-01'); // Your starting date
const daysPassed = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));

// Update numbers based on days passed
const stats = [
  { label: 'Orders Fulfilled', value: 860 + daysPassed * 2 }, // +2 orders per day
  { label: 'Happy Customers', value: 800 + daysPassed * 2 }, // +1.5 customers per day
  { label: 'Projects Completed', value: 120 + Math.floor(daysPassed / 10) }, // 1 project every 10 days
  { label: 'Years of Excellence', value: today.getFullYear() - 2023 },
];


const GreatWorkSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!hasAnimated) {
      const intervals = stats.map((stat, index) =>
        setInterval(() => {
          setCounts((prev) => {
            const newCounts = [...prev];
            if (newCounts[index] < stat.value) {
              newCounts[index] += Math.ceil(stat.value / 50); // speed of counting
            } else {
              newCounts[index] = stat.value;
              clearInterval(intervals[index]);
            }
            return newCounts;
          });
        }, 30)
      );

      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <motion.section
      className="bg-white py-16 px-4 sm:px-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
        What We’ve Accomplished With You
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our journey has been incredible, and we're proud of what we’ve achieved with your support.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md py-8 px-4"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-extrabold text-amber-800">
                {counts[index]}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GreatWorkSection;
