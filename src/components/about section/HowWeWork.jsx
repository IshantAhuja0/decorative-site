import { motion } from 'framer-motion';
import { FaRegCalendarCheck, FaChalkboardTeacher, FaPaintBrush, FaThumbsUp } from 'react-icons/fa';

const steps = [
  {
    icon: <FaRegCalendarCheck size={30} className="text-white" />,
    title: 'Book Appointment',
    desc: 'Choose your preferred time and book a session with us.',
  },
  {
    icon: <FaChalkboardTeacher size={30} className="text-white" />,
    title: 'Free Consultation',
    desc: 'We understand your needs and provide personalized suggestions.',
  },
  {
    icon: <FaPaintBrush size={30} className="text-white" />,
    title: 'Design & Execution',
    desc: 'We bring your vision to life with creative designs and skilled execution.',
  },
  {
    icon: <FaThumbsUp size={30} className="text-white" />,
    title: 'Delivery & Feedback',
    desc: 'Project completed! We ensure satisfaction and collect feedback.',
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-white py-16 px-4" id="how-we-work">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-gray-800"
        >
          How We Work
        </motion.h2>
        <p className="text-gray-500 mb-12">A smooth and thoughtful process — from idea to reality.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#f0f4f8] to-[#dbeafe] p-6 rounded-2xl shadow-lg text-amber-800 flex flex-col items-center text-center"
            >
              <div className="bg-black bg-opacity-20 p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
