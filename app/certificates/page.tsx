"use client";

import { motion } from "framer-motion";

export default function CertificatesPage() {
  const certificates = [
    {
      category: "Courses & Trainings",
      items: [
        {
          name: "Digital Skills: Artificial Intelligence",
          platform: "Accenture FutureLearn",
          link: "https://drive.google.com/file/d/1viQT2PG8ABsdG0XFfmukg3YySim7FR7_/view?usp=sharing"
        },
        {
          name: "AWS Cloud Practitioner Essentials",
          platform: "AWS",
          link: "https://drive.google.com/file/d/1DX3LX5wRAjVrDbURqyD9BEmfwfnWTCb1/view?usp=sharing"
        },
        {
          name: "Basics of Python & Web Design Enhancements",
          platform: "Infosys Springboard",
          link: "https://drive.google.com/file/d/1k0skKL1FE0oPyX8fVIXWlXw7ljw99K6o/view?usp=sharing"
        },
        {
          name: "Cybersecurity Fundamentals",
          platform: "IBM",
          link: "https://drive.google.com/file/d/1QmEQh8F_Oem_QIkNPu-wURVLVNLXerme/view?usp=sharing"
        },
        {
          name: "Employability Skills",
          platform: "SWAYAM",
          link: "https://drive.google.com/file/d/1kKAoYDu2Ni0qN0KN8QBSvxZBc3E7iFhw/view?usp=sharing"
        },
        {
          name: "Data Analytics Internship Completion",
          platform: "TANSAM",
          link: "https://drive.google.com/file/d/14Hm2AVi1s2Mh6M78YrBmRNqTLmEgMgti/view?usp=sharing"
        },
        {
          name: "Paper Presentation",
          platform: "Maths Club / International Conference",
          link: "https://drive.google.com/file/d/YOUR_PDF_ID/view"
        },
        {
          name: "Workshops Attended",
          platform: "MSAJCE & SIMATS",
          link: "https://drive.google.com/drive/folders/16Oxl6e32Wq0NMVbr7Q7QSYL4uWelGxTW?usp=sharing"
        },
      ],
    },
    {
      category: "Credly Badges",
      items: [
        {
          name: "AWS Educate: Introduction to Cloud 101",
          platform: "Credly",
          link: "https://www.credly.com/badges/98b39ca4-12cc-419d-a1c4-e4743683ea38/public_url"
        },
        {
          name: "AWS Educate: Introduction to Gen AI",
          platform: "Credly",
          link: "https://www.credly.com/badges/09f9bc77-025c-4072-95b7-9fd99f0c06b1/public_url"
        },
        {
          name: "IBM Cybersecurity",
          platform: "Credly",
          link: "https://www.credly.com/badges/7223caa8-5cfe-4898-bd5e-de657bb3f419/public_url"
        },
        {
          name: "Cisco Data Analytics Essentials",
          platform: "Credly",
          link: "https://www.credly.com/badges/67227e0a-bfbc-4022-b6a2-7d4c9c6972cf/public_url"
        },
        {
          name: "AWS Machine Learning",
          platform: "Credly (In Process)",
          link: "#"
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Certificates & Badges
      </h1>

      {certificates.map((cat, idx) => (
        <section key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{cat.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.items.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                className="bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:shadow-green-400/50 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-300">{cert.platform}</p>
              </motion.a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}