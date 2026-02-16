
import React from "react";
import { FaLaptopCode, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const AboutUs = () => {
  const aboutCards = [
    {
      icon: <FaLaptopCode size={40} className="text-primary" />,
      title: "Student Project Upload",
      description:
        "Students can upload their thesis or project works easily and submit for supervisor approval.",
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-primary" />,
      title: "Supervisor Review",
      description:
        "Supervisors review submitted works and approve them for publication on the platform.",
    },
    {
      icon: <FaUserGraduate size={40} className="text-primary" />,
      title: "Public Showcase",
      description:
        "Approved works are published by admin on the project and thesis showcase pages for everyone to explore.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="mt-2 text-gray-500">
            Learn how IdeaConnect works and empowers students, teachers, and admin
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow hover:shadow-lg transition duration-300 p-6 text-center"
            >
              <div className="mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
