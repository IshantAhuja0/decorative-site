import { motion } from "framer-motion";

const categories = [
  {
    title: "Birthday Decoration",
    img: "https://plus.unsplash.com/premium_photo-1677666508757-440206aef403?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Kids Decoration",
    img: "https://images.unsplash.com/photo-1732808821250-5a77308223ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGtpZHMlMjBkZWNvcmF0aW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Newborn Welcome",
    img: "https://images.unsplash.com/photo-1735817699222-35aee080df64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Anniversary Decoration",
    img: "https://plus.unsplash.com/premium_photo-1682092021551-c3d981d5f979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Baby Shower",
    img: "https://images.unsplash.com/photo-1625990462521-a09e6b880d50?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "First Night",
    img: "https://plus.unsplash.com/premium_photo-1671148880948-0f87a4b28f5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Festival Celebrations",
    img: "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Custom Events",
    img: "https://images.unsplash.com/photo-1559899775-7bab80fe1dd0?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CategoriesSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#fdfbff] via-[#f1ebff] to-[#ece4fc] py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 mb-2">
        Top Categories
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Wide Range of Options
      </p>

      <div className="grid place-items-center gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center w-32 sm:w-36 md:w-40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="rounded-full w-full aspect-square object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-3 text-center text-sm sm:text-base font-semibold text-purple-800">
              {cat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
