import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
export default function Navbar(props) {
  const [isOpen ,setIsOpen]=useState(false);

  return ( 
    <>

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={props.details.logo} className="h-8 rounded-2xl p-1 text-3xl bg-amber-50    " alt="Flowbite Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{props.details.name}</span>
  </NavLink>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     <a type='button' href={props.details.instagram} className='bg-amber-50 p-2 rounded-2xl text-3xl'><FaInstagram /></a>

<button
          onClick={() =>{
            setIsOpen(!isOpen);

          } }
          className="p-2 w-10 h-10 md:hidden rounded-lg text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          {isOpen ? "✖" : "☰"}
        </button>
  </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1" ${isOpen?"block":"hidden"} `} id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
      </li>
      <li>
        <NavLink to="" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</NavLink>
      </li>
      <li>
        <NavLink to="" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </>
  )
}



