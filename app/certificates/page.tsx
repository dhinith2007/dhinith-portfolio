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
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_artificial-intelligence-activity-7335971877661597696-QQCm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "AWS Cloud Practitioner Essentials",
          platform: "AWS",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_aws-cloudcomputing-awscloudpractitioner-activity-7349989301767622656-PfTV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Basics of Python",
          platform: "Infosys Springboard",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_basics-of-python-activity-7335972830662017024-hW7D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Web Design Enhancements",
          platform: "Infosys Springboard",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_web-design-enhancements-activity-7335973945331830785-UGOL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Cybersecurity Fundamentals",
          platform: "IBM",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_cybersecurity-fundamentals-was-issued-by-activity-7348983778293202944-CkvV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Employability Skills",
          platform: "SWAYAM",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_wadhwanifoundation-employabilityskills-lifelonglearning-activity-7342906959227944961-yUvQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Data Analytics Internship Completion",
          platform: "TANSAM",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_dataanalytics-mindsphere-powerbi-activity-7335977227106279424-E2PG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Paper Presentation",
          platform: "Maths Club",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_panimalarengineeringcollege-mathsclub-certificate-activity-7349666191046594561-0I1H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Paper Presentation",
          platform: "International Conference",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_smartparking-iot-engineeringprojects-activity-7335978901526986753-e8OW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Workshops",
          platform: "MSJACE",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_designthinking-gratitude-workshopexperience-activity-7353828641450991617-Rloo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
        },
        {
          name: "Workshops",
          platform: "SIMATS",
          link: "https://www.linkedin.com/posts/dhinith-pragalyan-m-8a0061355_simats-simatsworkshop-workshopexperience-activity-7335980415582621696-IOzg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh2gbgBx8ETUpuNiWNXUBBR89_dc_KCnfM"
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
          name: "AWS Machine Learning Foundations",
          platform: "Credly",
          link: "https://www.credly.com/badges/9656ada6-a2e0-4666-b024-fbd5404f67b7/public_url"
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