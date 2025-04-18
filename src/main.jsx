import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import App from './App.jsx'
import ContactPage from "./ContactPage.jsx";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactPage />} />
      {/* <Route path="/moviepage" element={<MoviePage />} />
      <Route path="*" element={<NotFound />} /> Catch-all 404 route */}
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
