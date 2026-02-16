import React from "react";


import {
  FaUpload,
  FaUserCheck,
  FaBullhorn,
  FaComments,
  FaBookOpen,
  FaUserShield,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Student Project & Thesis Upload",
    description:
      "Students can submit their projects or thesis work through a structured form for review.",
    icon: <FaUpload className="text-4xl text-primary" />,
  },
  {
    id: 2,
    title: "Supervisor Approval System",
    description:
      "Submitted projects require supervisor review and approval before publication.",
    icon: <FaUserCheck className="text-4xl text-primary" />,
  },
  {
    id: 3,
    title: "Admin Publishing Control",
    description:
      "Admins publish approved projects or thesis works to the respective public pages.",
    icon: <FaUserShield className="text-4xl text-primary" />,
  },
  {
    id: 4,
    title: "Project & Thesis Showcase",
    description:
      "Separate public pages to showcase approved projects and thesis works for everyone.",
    icon: <FaBookOpen className="text-4xl text-primary" />,
  },
  {
    id: 5,
    title: "Notice Board",
    description:
      "Admins can post important notices that are visible to all registered users.",
    icon: <FaBullhorn className="text-4xl text-primary" />,
  },
  {
    id: 6,
    title: "Chat & Communication",
    description:
      "A real-time chat system allowing students, teachers, and admins to communicate.",
    icon: <FaComments className="text-4xl text-primary" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            This is how the website will work
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300  hover:bg-amber-300"
            >
              <div className="card-body items-center text-center">
                {service.icon}
                <h3 className="card-title mt-4">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
