import React from "react";
import { useEffect, useState } from "react";

const ThesisShowcase = () => {
  const [theses, setTheses] = useState([]);

  useEffect(() => {
    // Mock data - in real app, fetch from backend API
    const mockTheses = [
      {
        id: 1,
        title: "Machine Learning for Predicting Student Performance",
        studentName: "Alice Rahman",
        studentId: "2023822077",
        supervisorName: "Dr. John Smith",
        pdfLink: "/pdfs/ml_student_performance.pdf",
      },
      {
        id: 2,
        title: "Blockchain-Based Voting System",
        studentName: "Bob Karim",
        studentId: "2023822055",
        supervisorName: "Prof. Sarah Lee",
        pdfLink: "/pdfs/blockchain_voting.pdf",
      },
      {
        id: 3,
        title: "Smart Energy Management in Campus",
        studentName: "Catherine Tan",
        studentId: "2023822099",
        supervisorName: "Dr. Michael Chen",
        pdfLink: "/pdfs/smart_energy.pdf",
      },
    ];

    setTheses(mockTheses);
  }, []);

  return (
    <section className="min-h-screen py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Thesis Showcase</h1>
          <p className="mt-2 text-gray-500">
            Explore approved thesis works submitted by students
          </p>
        </div>

        {/* Thesis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {theses.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No theses have been published yet.
            </p>
          ) : (
            theses.map((thesis) => (
              <div
                key={thesis.id}
                className="card bg-base-200 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div className="card-body">
                  <h2 className="card-title">{thesis.title}</h2>
                  <p className="text-gray-600 mt-2">
                    <strong>Student:</strong> {thesis.studentName}
                  </p>
                  <p className="text-gray-600">
                    <strong>Student ID:</strong> {thesis.studentId}
                  </p>
                  <p className="text-gray-600">
                    <strong>Supervisor:</strong> {thesis.supervisorName}
                  </p>
                  <a
                    href={thesis.pdfLink}
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

export default ThesisShowcase;
