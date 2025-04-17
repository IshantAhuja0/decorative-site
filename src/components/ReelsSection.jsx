import React, { useRef } from "react";
import { useEffect } from "react";
import reelVideo1 from "../assets/reels/reel1.mp4"; 
import reelVideo2 from "../assets/reels/reel2.mp4"; 
import reelVideo3 from "../assets/reels/reel3.mp4"; 
import reelVideo5 from "../assets/reels/reel5.mp4"; 
import reelVideo6 from "../assets/reels/reel6.mp4"; 
import reelVideo4 from "../assets/reels/reel4.mp4"; 
// import reelVideo1 from "../assets/reels/reel1.mp4"; 
import { motion } from "framer-motion";

const reels = [
  {
    title: "Wedding Decor Highlights",
    videoUrl: reelVideo1,
    poster: "/images/reel1-thumb.jpg",
  },
  {
    title: "Wedding Decor Highlights",
    videoUrl: reelVideo2,
    poster: "/images/reel1-thumb.jpg",
  },
  {
    title: "Wedding Decor Highlights",
    videoUrl: reelVideo3,
    poster: "/images/reel1-thumb.jpg",
  },
  {
    title: "Wedding Decor Highlights",
    videoUrl: reelVideo4,
    poster: "/images/reel1-thumb.jpg",
  },
  {
    title: "Birthday Bash Vibes",
    videoUrl: reelVideo5,
    poster: "/images/reel2-thumb.jpg",
  },
  {
    title: "Corporate Gala Snapshots",
    videoUrl: reelVideo6,
    poster: "/images/reel3-thumb.jpg",
  },
];


const ReelsSection = () => {
  return (
      <div className="px-4 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">🔥 Trending Reels</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {reels.map((video, index) => (
        <DelayedVideo key={index} videoSrc={video.videoUrl} delay={index * 2000} count={index}/>
      ))}
    </div>
      </div>
  );
};

const DelayedVideo = ({ videoSrc, delay ,count}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const timer = setTimeout(playVideo, delay); // Each video gets a delayed start

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [delay]);

  return (
  <motion.div
    key={count}
    className="rounded-xl overflow-hidden shadow-md bg-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: count * 0.2 }}
    viewport={{ once: true }}
  >
    <video
      ref={videoRef}
      className="w-full h-80 object-cover"
      preload="auto"
      muted
      loop
      playsInline
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="p-4">
      <h3 className="font-semibold text-lg">{videoSrc.title}</h3>
      <div className="mt-2 flex gap-3">
        <button className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-500 transition">
          ❤️ Like
        </button>
        <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
          🔗 Share
        </button>
      </div>
    </div>
  </motion.div>
  );
};

export default ReelsSection;