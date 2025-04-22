import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesRender = ({ obj }) => {
  const nav = useNavigate();

  function goContact() {
    nav('/contact');
  }

  return (
    <div className="space-y-24 py-16 px-4 sm:px-8 bg-purple-50 mt-16">
      {obj.map((service, index) => (
        <CategoryCard key={index} data={service} reverse={index % 2 !== 0} />
      ))}

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4 animate-fade-in-down">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in">
            We craft memorable experiences with passion and creativity. Here's why our clients trust us:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎈",
                title: "Creative Themes",
                desc: "Unique and customized themes for every occasion.",
              },
              {
                icon: "⏱️",
                title: "On-Time Setup",
                desc: "Punctual, smooth, and hassle-free decorations.",
              },
              {
                icon: "🌟",
                title: "Client Satisfaction",
                desc: "Trusted by 500+ happy clients across the city.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-2xl p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={goContact}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 animate-fade-in-up"
            >
              Book a Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ data, reverse }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const previewImages = [data.img, data.img, data.img, data.img];

  return (
    <section className="overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-center items-center">
          <div
            ref={cardRef}
            className="opacity-0 transition-opacity duration-700 text-center max-w-md"
          >
            <img
              src={data.img}
              alt={data.title}
              className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full object-cover shadow-md mb-4 border-4 border-white"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
              {data.title}
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {data.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
          {previewImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Preview ${idx + 1}`}
              className="w-full h-40 sm:h-64 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};


export default ServicesRender;
