"use client";

import { motion } from "framer-motion";

export default function SkillsPage() {
  const skills = [
    { name: "Data Analytics", level: 90 },
    { name: "Artificial Intelligence", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "C Programming", level: 85 },
    { name: "Cloud Computing", level: 80 },
    { name: "Frontend & Backend Basics", level: 65 },
    { name: "Generative AI", level: 75 },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:shadow-green-400/50 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{skill.name}</h2>
            <div className="w-full bg-gray-800 rounded-full h-4">
              <motion.div
                className="bg-green-400 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.8 }}
              ></motion.div>
            </div>
            <p className="text-gray-300 mt-2">{skill.level}% proficiency</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}