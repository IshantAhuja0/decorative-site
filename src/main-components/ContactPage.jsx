import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import Popup from '../components/Popup';
import GoogleMapPreview from '../components/GoogleMapPreview';

const ContactPage = () => {
  let info = {
    phone: '8168504374',  
    email: 'decorish@mail.com',
    address: 'Sirsa - 125055, Haryana',
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    time: '',
    eventType: '',
    date: ''
  });

  const [popupMsg, setPopupMsg] = useState(null);
  const [pop,setPop]=useState(true)
  useEffect(() => {
    if (popupMsg) {
      const timer = setTimeout(() => {
        setPopupMsg(null);
      }, 3000);
      return () => clearTimeout(timer); // cleanup
    }
  }, [popupMsg]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!/^\d{10}$/.test(formData.phone)) {
      setPopupMsg({ message: "Phone number must be exactly 10 digits." });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    
      // ✅ Check response status and content type
      const isJson = response.headers.get('content-type')?.includes('application/json');
    
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
    
      const data = isJson ? await response.json() : null;
    
      setPopupMsg({
        message: "✅ Your appointment has been successfully booked. See you soon!"
      });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setPop(false);
      setPopupMsg({
        message: "❌ Oops! There was an issue booking your appointment. Please try again later."
      });
    }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white py-12 px-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >

        {/* Booking Form */}
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
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-gray-950 focus:outline-none"
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
                pattern="\d{10}"
                title="Phone number must be exactly 10 digits"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-gray-950 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-gray-950 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Event Type</label>
              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-gray-950 focus:outline-none"
              >
                <option value="">Select an event</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Custom">Custom</option>
              </select>
            </div>

            {formData.eventType === "Custom" && (
              <div>
                <label className="block text-sm font-medium">Custom Event Name</label>
                <input
                  type="text"
                  name="customEvent"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-gray-950 focus:outline-none"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium">Date of Event</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-gray-950 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-700 transition duration-300"
            >
              Submit
            </button>
          </form>

          {popupMsg && <Popup msg={popupMsg.message} pop={pop}/>}

        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-100 p-8 rounded-2xl shadow-xl"
        >
<div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <div className="text-gray-700 text-lg space-y-4">
            <p><strong>📞 Phone:</strong> <a href={`tel:${info.phone}`}>{info.phone}</a></p>
            <p><strong>✉️ Email:</strong> {info.email}</p>
            <p><strong>🏢 Address:</strong> {info.address}</p>
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
  
</div>
<div className='mt-10'>

          <h2 className="text-3xl font-bold  text-gray-800">Location</h2>
          <div className="pt-10">
<GoogleMapPreview/>
</div>
          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default ContactPage;
