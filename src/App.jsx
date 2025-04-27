import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './main-components/Navbar'
import Footer from './main-components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  let navDetails={
    name:"Decorish",
    lastName:"Events",
    logo:"https://i.postimg.cc/Kvtph1sv/Whats-App-Image-2025-04-25-at-22-15-48-bea50694.jpg",
    instagram:"https://www.instagram.com/decorish_events/"
  }
  let footerDetails={
    name:"Decorish",
    description:"Your event, our Expertise!",
    phone:"8168504374",
    mail:"decorish12@gmail.com",
    instagram:"https://www.instagram.com/decorish_events/",
    location:"Sirsa - 125055, Haryana",
  }

  return (
    <>
  <Navbar details={navDetails}/>
  <Suspense fallback={
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
  </div>
}>
  <Outlet />
</Suspense>


  <Footer detail={footerDetails}/> 
    </>
  )
}

export default App
