"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Auto File Organizer",
      desc: "Automates file organization with Python and GUI.",
      tech: ["Python", "Tkinter"],
      link: "https://github.com/dhinith2007/autofileorganizer"
    },
    {
      name: "Bike Sales Analysis",
      desc: "Analyzes bike sales trends using Excel and Python.",
      tech: ["Python", "Excel", "Data Analysis"],
      link: "https://github.com/dhinith2007/bike-sales-powerbi"
    },
    {
      name: "Cloud Computing Project",
      desc: "Cloud deployment and automation experiments.",
      tech: ["AWS", "Python", "Docker"],
      link: "https://github.com/dhinith2007/Cloud1"
    },
    {
      name: "Supermarket Sales Dashboard",
      desc: "Interactive BI dashboards using Tableau & Power BI.",
      tech: ["Tableau", "Power BI", "Python", "Excel"],
      link: "https://github.com/dhinith2007/Supermarket-sales-Analysins-Dashboard"
    },
    {
      name: "CodSoft Internship - Titanic Survival Prediction",
      desc: "Predicts Titanic passenger survival using ML models.",
      tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
      link: "https://github.com/dhinith2007/CODSOFT"
    },
    {
      name: "GDP Dashboard (Streamlit App)",
      desc: "Visualizes GDP data with interactive charts using Streamlit.",
      tech: ["Python", "Streamlit", "Data Visualization"],
      link: "https://github.com/dhinith2007/gdp-dashboard"
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.a
            key={idx}
            href={proj.link}
            target="_blank"
            className="bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:shadow-green-400/50 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{proj.name}</h2>
            <p className="text-gray-300 mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-green-400 px-2 py-1 rounded-full text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}