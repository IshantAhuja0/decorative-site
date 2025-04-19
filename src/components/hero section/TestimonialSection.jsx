import React from 'react';

const testimonials = [
  {
    name: "Amit Sharma",
    comment: "Amazing service! Totally satisfied with the experience.",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sara Khan",
    comment: "Quick delivery and great support. Highly recommend!",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Doe",
    comment: "Very professional and helpful team. 5 stars!",
    location: "Bangalore, India",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    name: "Amit Sharma",
    comment: "Amazing service! Totally satisfied with the experience.",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sara Khan",
    comment: "Quick delivery and great support. Highly recommend!",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Doe",
    comment: "Very professional and helpful team. 5 stars!",
    location: "Bangalore, India",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    name: "Amit Sharma",
    comment: "Amazing service! Totally satisfied with the experience.",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sara Khan",
    comment: "Quick delivery and great support. Highly recommend!",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Doe",
    comment: "Very professional and helpful team. 5 stars!",
    location: "Bangalore, India",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    name: "Amit Sharma",
    comment: "Amazing service! Totally satisfied with the experience.",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sara Khan",
    comment: "Quick delivery and great support. Highly recommend!",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Doe",
    comment: "Very professional and helpful team. 5 stars!",
    location: "Bangalore, India",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
