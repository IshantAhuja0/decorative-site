import React from "react";

const HeroSection = () => {
  return (
    <div className="rounded-3xl overflow-hidden m-4">
      <section
        className="relative min-h-[26rem] md:min-h-[30rem] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1651667773089-8de0335fcd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            // "url('https://img.freepik.com/premium-vector/vintage-ornamental-background-seamless-floral-pattern_9857-196.jpg')",
        }}
      >
        {/* Light semi-transparent overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-brightness-90"></div>

        <div className="relative z-10 text-center px-4 max-w-2xl text-amber-950">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
          Turning moments into unforgettable experiences
          </h1>
          <p className="text-lg md:text-xl animate-fadeInUp animation-delay-200">
          —your event, our expertise!
          </p>
          <button className="mt-6 px-6 py-3 bg-amber-950 text-white font-semibold rounded-xl hover:bg-amber-800 transition duration-300 animate-fadeInUp animation-delay-300">
            Explore Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
