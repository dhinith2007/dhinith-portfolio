"use client";

import Link from "next/link";
import { BookOpen, Code, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function ProfessionalPage() {
  const iconsData = [
    { icon: <BookOpen size={40} />, label: "Skills", href: "/skills" },
    { icon: <Code size={40} />, label: "Projects", href: "/projects" },
    { icon: <Award size={40} />, label: "Certificates", href: "/certificates" },
  ];

  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        DHINITH PRAGALYAN M
      </h1>

      {/* Animated Tagline */}
      <p className="text-gray-400 mb-8 text-lg text-center">
        <Typewriter
          words={[
            "AI & Machine Learning Developer",
            "Data Analytics Specialist",
            "Cloud Computing Engineer",
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>

      {/* Resume Button */}
      <motion.a
        href="/Dhinith_Pragalyan_AI_Data_Engineer_Resume.pdf"
        target="_blank"
        className="mt-4 border border-white px-6 py-2 rounded-md text-white hover:border-green-400 hover:text-green-400 hover:drop-shadow-[0_0_10px_#00ff88] transition duration-300"
        whileHover={{ scale: 1.05, textShadow: "0 0 10px #00ff88" }}
      >
        View Resume
      </motion.a>

      {/* Icons Section */}
      <motion.div
        className="flex gap-12 mt-8 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {iconsData.map((item, idx) => (
          <motion.div
            key={idx}
            className="group cursor-pointer flex flex-col items-center gap-3"
            whileHover={{ scale: 1.1 }}
          >
            <Link href={item.href}>
              <motion.div
                className="text-white group-hover:text-green-400 group-hover:drop-shadow-[0_0_10px_#00ff88] transition duration-300"
              >
                {item.icon}
              </motion.div>
              <span className="group-hover:text-green-400 transition">
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
}