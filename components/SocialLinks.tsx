"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const socialData = [
    { icon: <FaGithub />, href: "https://github.com/dhinith2007", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dhinith-pragalyan-m-8a0061355/", label: "LinkedIn" },
    { icon: <MdEmail />, href: "mailto:dhinithmuruganantham@gmail.com", label: "Email" },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-4">
      {socialData.map((social, idx) => (
        <motion.a
          key={idx}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.5 }}
          whileHover={{
            scale: 1.2,
            color: "#00ff88",
            textShadow: "0 0 8px #00ff88",
          }}
          whileTap={{ scale: 0.9 }}
          className="text-black dark:text-white text-3xl transition-colors duration-300"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}