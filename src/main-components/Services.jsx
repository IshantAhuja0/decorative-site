import React from 'react';
import ServicesRender from '../components/services-section/ServicesRender';

function Services() {
  const categories = [
    {
      title: "Birthday Decoration",
      description: "Celebrate in style with balloons, cake setups, and themed decor!",
      img: "https://plus.unsplash.com/premium_photo-1677666508757-440206aef403?q=80&w=2071&auto=format&fit=crop",
      photos:[
        'https://i.postimg.cc/CKj2LMyX/Whats-App-Image-2025-04-29-at-22-51-32-5edfb6fe.jpg',
        'https://i.postimg.cc/zvCWyfSb/Whats-App-Image-2025-04-29-at-22-54-17-7d61eb50.jpg',
        'https://i.postimg.cc/sXtFgv3z/Whats-App-Image-2025-04-29-at-22-52-13-2771903d.jpg',
        'https://i.postimg.cc/xdLbxChs/Whats-App-Image-2025-04-29-at-22-52-13-7495a9cc.jpg'
      ]
    },
    {
      title: "Kids Decoration",
      description: "For little stars! Themes, characters, and fun-filled setups.",
      img: "https://images.unsplash.com/photo-1732808821250-5a77308223ee?w=600&auto=format&fit=crop",
      photos:[
        'https://i.postimg.cc/CKj2LMyX/Whats-App-Image-2025-04-29-at-22-51-32-5edfb6fe.jpg',
        'https://i.postimg.cc/zvCWyfSb/Whats-App-Image-2025-04-29-at-22-54-17-7d61eb50.jpg',
        'https://i.postimg.cc/sXtFgv3z/Whats-App-Image-2025-04-29-at-22-52-13-2771903d.jpg',
        'https://i.postimg.cc/xdLbxChs/Whats-App-Image-2025-04-29-at-22-52-13-7495a9cc.jpg'
      ]
    },
    {
      title: "Newborn Welcome",
      description: "A soft and magical welcome to your precious bundle.",
      img: "https://images.unsplash.com/photo-1735817699222-35aee080df64?q=80&w=2070&auto=format&fit=crop",
      photos:[
        'https://i.postimg.cc/CKj2LMyX/Whats-App-Image-2025-04-29-at-22-51-32-5edfb6fe.jpg',
        'https://i.postimg.cc/zvCWyfSb/Whats-App-Image-2025-04-29-at-22-54-17-7d61eb50.jpg',
        'https://i.postimg.cc/sXtFgv3z/Whats-App-Image-2025-04-29-at-22-52-13-2771903d.jpg',
        'https://i.postimg.cc/xdLbxChs/Whats-App-Image-2025-04-29-at-22-52-13-7495a9cc.jpg'
      ]
    },
    {
      title: "Anniversary Decoration",
      description: "Elegant and romantic backdrops for memorable anniversaries.",
      img: "https://plus.unsplash.com/premium_photo-1682092021551-c3d981d5f979?q=80&w=2070&auto=format&fit=crop",
      photos:[
        'https://i.postimg.cc/CKj2LMyX/Whats-App-Image-2025-04-29-at-22-51-32-5edfb6fe.jpg',
        'https://i.postimg.cc/zvCWyfSb/Whats-App-Image-2025-04-29-at-22-54-17-7d61eb50.jpg',
        'https://i.postimg.cc/sXtFgv3z/Whats-App-Image-2025-04-29-at-22-52-13-2771903d.jpg',
        'https://i.postimg.cc/xdLbxChs/Whats-App-Image-2025-04-29-at-22-52-13-7495a9cc.jpg'
      ]
    },
    {
      title: "Baby Shower",
      description: "Charming setups to celebrate the upcoming arrival.",
      img: "https://images.unsplash.com/photo-1625990462521-a09e6b880d50?q=80&w=1937&auto=format&fit=crop",
      photos:[
        'https://i.postimg.cc/CKj2LMyX/Whats-App-Image-2025-04-29-at-22-51-32-5edfb6fe.jpg',
        'https://i.postimg.cc/zvCWyfSb/Whats-App-Image-2025-04-29-at-22-54-17-7d61eb50.jpg',
        'https://i.postimg.cc/sXtFgv3z/Whats-App-Image-2025-04-29-at-22-52-13-2771903d.jpg',
        'https://i.postimg.cc/xdLbxChs/Whats-App-Image-2025-04-29-at-22-52-13-7495a9cc.jpg'
      ]
    },
    {
      title: "Haldi & Mehndi",
      description: "A dreamy decor for your special days.",
      img: "https://images.unsplash.com/photo-1670774837214-21b88943a6bb?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      photos:[
        'https://i.postimg.cc/28qNNBGS/Whats-App-Image-2025-04-29-at-22-52-13-f1f84055.jpg',
        'https://unsplash.com/photos/a-wooden-table-topped-with-bowls-of-food-eSflvcBdC8c',
        'https://unsplash.com/photos/a-close-up-of-a-person-getting-a-henna-tattooed-jirG1ekYsnY',
        'https://unsplash.com/photos/a-woman-in-a-yellow-sari-holding-a-garland-YVECUW7Juxs'
      ]
    },
    {
      title: "Festival Celebrations",
      description: "Vibrant and cultural setups for all festive moods.",
      img: "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?q=80&w=2071&auto=format&fit=crop",
      photos:[
        'https://i.postimg.cc/CKj2LMyX/Whats-App-Image-2025-04-29-at-22-51-32-5edfb6fe.jpg',
        'https://i.postimg.cc/zvCWyfSb/Whats-App-Image-2025-04-29-at-22-54-17-7d61eb50.jpg',
        'https://i.postimg.cc/sXtFgv3z/Whats-App-Image-2025-04-29-at-22-52-13-2771903d.jpg',
        'https://i.postimg.cc/xdLbxChs/Whats-App-Image-2025-04-29-at-22-52-13-7495a9cc.jpg'
      ]
    },
    {
      title: "Theme Kitty",
      description: "Personalized decorations for kitty party themed with elegance, games, and delightful surprises.",
      img: "https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      photos:[
        'https://i.postimg.cc/cHT8QztT/Whats-App-Image-2025-04-29-at-22-54-35-2ef32eea.jpg',
        'https://i.postimg.cc/cHT8QztT/Whats-App-Image-2025-04-29-at-22-54-35-2ef32eea.jpg',
        'https://i.postimg.cc/cHT8QztT/Whats-App-Image-2025-04-29-at-22-54-35-2ef32eea.jpg',
        'https://i.postimg.cc/cHT8QztT/Whats-App-Image-2025-04-29-at-22-54-35-2ef32eea.jpg'
      ]
    },
  ];

  return <ServicesRender obj={categories} />;
}

export default Services;
