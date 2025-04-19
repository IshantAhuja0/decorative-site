import React from 'react'
import FloatingWhatsapp from '../components/hero section/FloatingWhatsapp'
import HeroSection from "../components/hero section/HeroSection"
import CategoriesSection from "../components/hero section/CategoriesSection"
import ReelsSection from '../components/hero section/ReelsSection'
import TestimonialSection from "../components/hero section/TestimonialSection"
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
