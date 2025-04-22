import React from "react";
import FounderSection from "../components/hero section/FounderSection";
import GreatWorkSection from "../components/about section/GreatWorkSection";
import HowWeWork from "../components/about section/HowWeWork";

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
  return (
    <>
      <FounderSection />
      <GreatWorkSection stats={stats} />
      <HowWeWork />
    </>
  );
}
