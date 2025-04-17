import React from 'react'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import CategoriesSection from "./components/CategoriesSection"
import ReelsSection from "./components/ReelsSection"
import TestimonialSection from "./components/TestimonialSection"
import Footer from "./components/Footer"
export default function Home(props) {
  let siteDetails={
    name:"Decorish",
    logo:"https://cdn4.iconfinder.com/data/icons/nature-solid-icons-vol-3/72/133-512.png",
    instagram:"https://www.instagram.com/decorish_events/"
  }
  let footerDetails={
    name:"Decorish",
    description:"Your event, our Expertise!",
    phone:"0123456789",
    mail:"decorish12@gmail.com",
    instagram:"https://www.instagram.com/decorish_events/",
    location:"Sirsa - 125055, Haryana",
  }
    return (
      <>
  <Navbar details={siteDetails}/>
  <HeroSection/>
  <CategoriesSection/>
  <ReelsSection/>
  <TestimonialSection/>
  <Footer detail={footerDetails}/> 
      </>
    )
}
