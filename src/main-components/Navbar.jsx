import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the nav on clicking a link
  function closeNav() {
    setIsOpen(!isOpen);
  }

  // Animation hook to apply fade-in effect to logo text on page load
  useEffect(() => {
    const logoText = document.getElementById("logo-text");
    logoText.classList.add("fade-in");
  }, []);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:mx-auto py-4 mx-3">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            <img
              src={props.details.logo}
              className="h-11 rounded-xl p-1 text-xl bg-amber-50"
              alt="Flowbite Logo"
            />
            <span
              id="logo-text"
              className="md:text-3xl self-center text-2xl font-semibold whitespace-nowrap text-purple-600 transition-all duration-500 transform hover:scale-110"
            >
              {props.details.name}
            </span>
            <span
              className="md:text-3xl self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              {props.details.lastName}
            </span>
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              type="button"
              href={props.details.instagram}
              className="instagram-gradient text-white p-2 rounded-2xl text-3xl transition duration-300 
              sm:bg-white sm:text-white sm:hover:instagram-gradient sm:hover:text-black"
  
  
  
  
  
            >
              <FaInstagram />
            </a>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="p-2 w-10 h-10 md:hidden rounded-lg text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            } `}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:text-xl md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  onClick={closeNav}
                  to="/"
                  end
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-purple-600 " : "text-white"
                    } block py-2 px-3 rounded-sm md:bg-transparent md:p-0`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeNav}
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-purple-600 " : "text-white"
                    } block py-2 px-3 rounded-sm md:bg-transparent md:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={closeNav}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-purple-600 " : "text-white"
                    } block py-2 px-3 rounded-sm md:bg-transparent md:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeNav}
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-purple-600 " : "text-white"
                    } block py-2 px-3 rounded-sm md:bg-transparent md:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CSS for fade-in animation */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
