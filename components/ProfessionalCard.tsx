"use client";

import { motion } from "framer-motion";

interface ProfessionalCardProps {
  title: string;
  description: string;
  link?: string;
}

export default function ProfessionalCard({ title, description, link }: ProfessionalCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/80 dark:bg-white/10 p-6 rounded-xl shadow-lg border border-gray-700 dark:border-gray-600 text-center flex flex-col justify-between"
    >
      <h3 className="text-xl font-semibold mb-2 text-white dark:text-black">{title}</h3>
      <p className="text-gray-300 dark:text-gray-200 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block px-4 py-2 text-sm font-medium border border-white text-white rounded-lg hover:text-green-400 hover:border-green-400 transition"
        >
          Learn More
        </a>
      )}
    </motion.div>
  );
}