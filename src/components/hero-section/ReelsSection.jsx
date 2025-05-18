import React, { useRef } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const reels = [
  {
    title: "Wedding Decor Highlights",
    videoUrl: "https://ik.imagekit.io/jdja9elpv/AQN8Y7xMGM1uH9V5rLiW5_vnNuRC-Q-tfP1eXRo-BX5kejf9jRcY8CUksvKdho7ZEstZChf39DqXA2UwspqpuA0EwqyjthMVUeoynRk.mp4?updatedAt=1747568704733",
    instaUrl:"https://www.instagram.com/reel/DGdYG43N0FO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    //this is not working we have to replace it
    title: "Birthday Bash Vibes",
    videoUrl: "https://ik.imagekit.io/jdja9elpv/AQOL97oGDg_sX3BwtOJnRBESog-VNEN0J_mTUVBH3RwaSYfv8o_tRqWytF65g3Wq2VgxZOhTz8rZeHI8p87lJMMKxg8ArZMJgAFpehg.mp4?updatedAt=1747569287754",
    instaUrl:"https://www.instagram.com/reel/DIZT_4lzlmN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Corporate Gala Snapshots",
    videoUrl: "https://ik.imagekit.io/jdja9elpv/AQOjLO9l8DUeHAif-ort3YPZ9DQYy-VFK3nVhDknZjHcHVo6mNNHjaAPL51PaC9JNpxBgUMgZ5YLONX6Qd3n4lAG9U712pY5SljJxCw.mp4?updatedAt=1747569627382",
    instUrl:"https://www.instagram.com/reel/DGTJmIuTzdK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Wedding Glimpse",
    videoUrl: "https://ik.imagekit.io/jdja9elpv/AQOL97oGDg_sX3BwtOJnRBESog-VNEN0J_mTUVBH3RwaSYfv8o_tRqWytF65g3Wq2VgxZOhTz8rZeHI8p87lJMMKxg8ArZMJgAFpehg%20(1).mp4?updatedAt=1747569752498",
    instaUrl:"https://www.instagram.com/reel/DIZT_4lzlmN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Stage Entry Vibe",
    videoUrl: "https://ik.imagekit.io/jdja9elpv/AQNFIhJG3OBh7T2FuDQ2jVsFjGD5mxvYVdFb3pR6bsdSN2tzl2LxbyzS-DWu3U0DWAcrPws-CjYsQCEyCEWptjv7ejv8Sgy31KIpUiY.mp4?updatedAt=1747569889589",
    instaUrl:"https://www.instagram.com/reel/DGBQAKUzuTr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Decor Timelapse",
    videoUrl: "https://ik.imagekit.io/jdja9elpv/indownloader.app_video_0635706001747570011.mp4?updatedAt=1747570041912",
    instaUrl:"https://www.instagram.com/reel/DGFaZ1Hx3Xj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
];

const ReelsSection = () => {
  return (
      <div className="px-4 py-2  mx-0 bg-gradient-to-b from-[#ece4fc]  via-[#f1ebff] to-[#fdfbff]">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 mb-2 pb-12">
              🔥 Trending Reels
      </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {reels.map((video, index) => (
        <DelayedVideo key={index} videoSrc={video.videoUrl} instaUrl={video.instaUrl} delay={index * 2000} count={index}/>
      ))}
    </div>
      </div>
  );
};

const DelayedVideo = ({ videoSrc, delay ,count ,instaUrl}) => {

function reelPlay(){
window.location.href=instaUrl;
}

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
    className="rounded-xl overflow-hidden shadow-md "
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: count * 0.2 }}
    viewport={{ once: true }}
  >
    <video
      onClick={reelPlay}
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
        <button className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-500 transition" onClick={reelPlay}>
          ❤️ Like
        </button>
        <a href={`https://wa.me/?text=Check%20out%20this%20awesome%20video:%20${encodeURIComponent(instaUrl)}`} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition" >
          🔗 Share
        </a>
      </div>
    </div>
  </motion.div>
  );
};
export default ReelsSection;