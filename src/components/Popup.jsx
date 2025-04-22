import { motion } from "framer-motion";

const Popup = ({ msg, pop }) => {
  // Determine background and text color based on `pop` status
  let bgColor = "bg-gray-100";
  let textColor = "text-gray-900";

  if (pop === true) {
    bgColor = "bg-green-100";
    textColor = "text-green-800";
  } else if (pop === false) {
    bgColor = "bg-red-100";
    textColor = "text-red-800";
  }

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -30, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`px-6 py-4 rounded-xl shadow-xl border-2 border-white ${bgColor} ${textColor}`}
      >
        {msg}
      </motion.div>
    </div>
  );
};

export default Popup;
