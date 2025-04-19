import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./main components/About.jsx";
import ContactPage from "./main components/ContactPage.jsx";
import Home from "./main components/Home.jsx";
import Services from "./main components/Services.jsx";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactPage />} />
       <Route path="/services" element={<Services />} />
      {/* <Route path="*" element={<NotFound />} /> Catch-all 404 route  */}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
    
  // </StrictMode>,
  <RouterProvider router={router}>
  </RouterProvider>
)
