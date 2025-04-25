import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 px-4">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          The page you’re looking for doesn’t exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>

    </div>
  );
};

export default NotFound;
