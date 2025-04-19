import { useState } from 'react'
import './App.css'
import Navbar from './main components/Navbar'
import Footer from './main components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  let navDetails={
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
  <Navbar details={navDetails}/>
<Outlet/>
  <Footer detail={footerDetails}/> 
    </>
  )
}

export default App
