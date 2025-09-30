import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
  <main className="relative flex items-center justify-center min-h-screen pt-16 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="text-center px-6">
        {/* Funky Gradient 404 */}
        <h1 className="text-[9rem] font-extrabold tracking-widest bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
          404
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-2xl md:text-3xl font-light">
          Lost in my <span className="font-bold text-pink-500">portfolio</span> space 🚀
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          The page you’re looking for doesn’t exist.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg 
            hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Signature */}
        <div className="mt-10 text-sm opacity-60 italic">
          ~ Crafted with 🎨 & 💻 ~
        </div>
      </div>
    </main>
  );
};

export default NotFound;
