import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GreatWorkSection = ({ stats }) => {
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
          Our journey has been incredible, and we're proud of what we’ve
          achieved with your support.
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
