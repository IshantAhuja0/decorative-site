import { motion } from 'framer-motion';
import { useState } from 'react';
const ContactPage = () => {
  let info={
    phone:'123456789',
    email:'decorish@mail.com',
    address:'sirsa'
  }
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' , time:''});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async(e) => {
    formData.email="hii";
    e.preventDefault();
    console.log('Submitted:', formData);
    const response = await fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white py-12 px-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Appointment Form */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-amber-950 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-amber-950 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-amber-950 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-amber-950 transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-100 p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <div className="text-gray-700 text-lg space-y-4">
            <p><strong>📞 Phone:</strong> {info.phone}</p>
            <p><strong>✉️ Email:</strong> {info.email}</p>
            <p><strong>🏢 Address:</strong>  {info.address}</p>
            <div className="mt-6">
              <a
      href={`https://wa.me/91${info.phone}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-600 transition duration-300"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png"
                  alt="WhatsApp"
                />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
