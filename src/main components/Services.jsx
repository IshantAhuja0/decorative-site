import React from 'react';
import ServicesRender from '../components/services section/servicesRender';

function Services() {
  const categories = [
    {
      title: "Birthday Decoration",
      description: "Celebrate in style with balloons, cake setups, and themed decor!",
      img: "https://plus.unsplash.com/premium_photo-1677666508757-440206aef403?q=80&w=2071&auto=format&fit=crop",
    },
    {
      title: "Kids Decoration",
      description: "For little stars! Themes, characters, and fun-filled setups.",
      img: "https://images.unsplash.com/photo-1732808821250-5a77308223ee?w=600&auto=format&fit=crop",
    },
    {
      title: "Newborn Welcome",
      description: "A soft and magical welcome to your precious bundle.",
      img: "https://images.unsplash.com/photo-1735817699222-35aee080df64?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Anniversary Decoration",
      description: "Elegant and romantic backdrops for memorable anniversaries.",
      img: "https://plus.unsplash.com/premium_photo-1682092021551-c3d981d5f979?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Baby Shower",
      description: "Charming setups to celebrate the upcoming arrival.",
      img: "https://images.unsplash.com/photo-1625990462521-a09e6b880d50?q=80&w=1937&auto=format&fit=crop",
    },
    {
      title: "First Night",
      description: "A dreamy decor for your most special night.",
      img: "https://plus.unsplash.com/premium_photo-1671148880948-0f87a4b28f5b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Festival Celebrations",
      description: "Vibrant and cultural setups for all festive moods.",
      img: "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?q=80&w=2071&auto=format&fit=crop",
    },
    {
      title: "Custom Events",
      description: "Personalized decorations for any theme or event.",
      img: "https://images.unsplash.com/photo-1559899775-7bab80fe1dd0?q=80&w=2062&auto=format&fit=crop",
    },
  ];

  return <ServicesRender obj={categories} />;
}

export default Services;
