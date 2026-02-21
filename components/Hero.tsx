"use client";

import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-6 px-4 md:px-0"
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="p-1 rounded-full bg-gradient-to-r from-green-400 to-green-600">
          <img
            src="/profile.jpg"
            alt="Dhinith"
            className="w-44 h-44 rounded-full object-cover bg-black"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
        DHINITH PRAGALYAN M
      </h1>

      {/* Animated Tagline */}
      <p className="text-gray-400 text-lg md:text-xl h-8">
        <Typewriter
          words={[
            "AI & Machine Learning Developer",
            "Data Analytics Specialist",
            "Cloud Computing Engineer",
          ]}
          loop={0}          // 0 = infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>

      {/* Social Links */}
      <SocialLinks />

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <Link
          href="/professional"
          className="inline-block px-6 py-2 border border-white text-white rounded-lg hover:border-green-400 hover:text-green-400 transition duration-300"
        >
          View Profile
        </Link>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 border border-white text-white rounded-lg hover:border-green-400 hover:text-green-400 transition duration-300"
        >
          Contact Me
        </Link>
      </div>
    </motion.div>
  );
}