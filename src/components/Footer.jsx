import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3"> {props.detail.name}</h2>
            <p className="text-sm text-gray-400">
              {props.detail.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-md font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-md font-semibold text-white mb-2">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li> {props.detail.phone}</li>
              <li> {props.detail.mail}</li>
              <li> {props.detail.location}</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-md font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()}  {props.detail.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
