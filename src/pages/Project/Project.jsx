import React from "react";
import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Mock data - replace with backend API in real app
    const mockProjects = [
      {
        id: 1,
        title: "AI-Based Student Attendance System",
        studentName: "Alice Rahman",
        studentId: "2023822077",
        supervisorName: "Dr. John Smith",
        pdfLink: "/pdfs/ai_attendance.pdf",
      },
      {
        id: 2,
        title: "Online Thesis Management System",
        studentName: "Bob Karim",
        studentId: "2023822055",
        supervisorName: "Prof. Sarah Lee",
        pdfLink: "/pdfs/thesis_management.pdf",
      },
      {
        id: 3,
        title: "Smart Campus Navigation App",
        studentName: "Catherine Tan",
        studentId: "2023822099",
        supervisorName: "Dr. Michael Chen",
        pdfLink: "/pdfs/smart_campus.pdf",
      },
    ];

    setProjects(mockProjects);
  }, []);

  return (
    <section className="min-h-screen py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Project Showcase</h1>
          <p className="mt-2 text-gray-500">
            Explore approved projects submitted by students
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No projects have been published yet.
            </p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="card bg-base-200 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="text-gray-600 mt-2">
                    <strong>Student:</strong> {project.studentName}
                  </p>
                  <p className="text-gray-600">
                    <strong>Student ID:</strong> {project.studentId}
                  </p>
                  <p className="text-gray-600">
                    <strong>Supervisor:</strong> {project.supervisorName}
                  </p>
                  <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm mt-4"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
