import React from 'react'
import FloatingWhatsapp from './components/FloatingWhatsapp'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import CategoriesSection from "./components/CategoriesSection"
import ReelsSection from "./components/ReelsSection"
import TestimonialSection from "./components/TestimonialSection"
import Footer from "./components/Footer"
export default function Home(props) {
 const whatsappNumber=123456789;
    return (
      <>
  <HeroSection/>
  <CategoriesSection/>
  <ReelsSection/>
  <TestimonialSection/>
  <FloatingWhatsapp  whatsapp={whatsappNumber}/>
      </>
    )
}
