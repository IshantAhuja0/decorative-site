import React from "react";
import FounderSection from "../components/about-section/FounderSection";
import GreatWorkSection from "../components/about-section/GreatWorkSection";
import HowWeWork from "../components/about-section/HowWeWork";

export default function About(props) {
  const today = new Date();
  const baseDate = new Date("2024-01-01"); // Your starting date
  const daysPassed = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));

  const stats = [
    { label: "Orders Fulfilled", value: 860 + daysPassed * 2 }, // +2 orders per day
    { label: "Happy Customers", value: 800 + daysPassed * 2 }, // +1.5 customers per day
    { label: "Projects Completed", value: 120 + Math.floor(daysPassed / 10) }, // 1 project every 10 days
    { label: "Years of Excellence", value: today.getFullYear() - 2023 },
  ];



  const founders = [
    {
      name: "Ekta Aggarwal",
      role: "Co-Founder & CDO",
      bio: "Ekta Aggarwal leads the vision and strategy. With 10+ years of experience in designing and business, he's passionate about building scalable solutions.",
      image: "https://i.postimg.cc/9MSYfX5J/Whats-App-Image-2025-04-25-at-22-15-47-c17bf45f.jpg"
    },
    {
      name: "Ritika Garg",
      role: "Co-Founder & CTO",
      bio: "Ritika Garg drives the technical architecture. She's a full-stack expert and loves building powerful digital products with real impact.",
      image: "https://i.postimg.cc/Wzr6FmSy/Whats-App-Image-2025-04-25-at-22-15-48-605ec26f.jpg"
    }
  ];
  return (
    <>
      <FounderSection stats={founders}/>
      <GreatWorkSection stats={stats} />
      <HowWeWork />
    </>
  );
}
