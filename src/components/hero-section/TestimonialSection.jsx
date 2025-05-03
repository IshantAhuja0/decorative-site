import React from 'react';

const testimonials = [
  {
    name: "Khushboo Bansal",
    comment: "Best event planner👍👍 the creativity nd ideas are very unique🤩🤩must visit.",
    location: "Sirsa, Haryana",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sachin Kochar",
    comment: "I got my house decorated from Decorish Events for my wedding rituals and it came out to be a fabulous decor . Much recommended!",
    location: "Sirsa, Haryana",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Aakarshita Lakhotia",
    comment: "Amazingly Beautiful Setup by Decorish Events 💕 Best one in Sirsa✨💕",
    location: "BanSirsa, Haryana",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    name: "Riya Gupta",
    comment: "To one of the best decor team in the city, always comes up with innovative ideas and provides hustle free services.",
    location: "Sirsa, Haryana",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Shubham Bansal",
    comment: "Everyone keeps telling us how epic the event was. It really was! Thank you for flawlessly executing our vision😍😍",
    location: "Sirsa, Haryana",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Kanika Bagri",
    comment: "One of the best decor planners..Elevating the ideas with unique designs & always upgrading themselves.",
    location: "BanSirsa, Haryana",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },

];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-3">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-300"
                /> */}
                <div>
                  <h4 className="text-base font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
