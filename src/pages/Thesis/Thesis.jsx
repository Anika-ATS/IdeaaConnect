import React from "react";
import { useEffect, useState } from "react";

  const ThesisShowcase = () => {
    const [theses, setTheses] = useState([]);
    const [filteredTheses, setFilteredTheses] = useState([]);
    const [searchType, setSearchType] = useState("title");
    const [searchValue, setSearchValue] = useState("");
 const handleSearch = () => {

  if (searchValue === "") {
    setFilteredTheses(theses);
    return;
  }

  let result = [];

  switch (searchType) {

    case "title":
      result = theses.filter(thesis =>
        thesis.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        thesis.keywords.some(keyword =>
          keyword.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      break;

    case "batch":
      result = theses.filter(thesis => thesis.batch === searchValue);
      break;

    case "year":
      result = theses.filter(thesis => thesis.publicationYear === searchValue);
      break;

    case "supervisor":
      result = theses.filter(thesis => thesis.supervisorName === searchValue);
      break;

    case "student":
      result = theses.filter(thesis => thesis.studentName === searchValue);
      break;

    case "technology":
      result = theses.filter(thesis =>
        thesis.technology.includes(searchValue)
      );
      break;

    case "researchArea":
      result = theses.filter(thesis =>
        thesis.researchArea === searchValue
      );
      break;

    default:
      result = theses;
  }

  setFilteredTheses(result);
};

const handleReset=()=>{

    setSearchValue("");

    setSearchType("title");

    setFilteredTheses(theses);

}



  useEffect(() => {
    // Mock data - in real app, fetch from backend API
    const mockTheses = [
  {
    id: 1,
    title: "Machine Learning for Predicting Student Performance",
    studentName: "Alice Rahman",
    studentId: "2023822077",
    publicationYear: "2023-24",
    batch:"MS-07",
    department: "ICT",
    program: "MSc in ICT",

    researchArea: "Machine Learning",

    technology: ["Python", "TensorFlow"],

    keywords: [
      "Machine Learning",
      "Prediction",
      "Education"
    ],

    abstract:
      "This thesis proposes a machine learning model to predict student academic performance using historical educational data. The model helps identify at-risk students and supports early intervention strategies.",

    supervisorName: "Dr. John Smith",

    pdfLink: "/pdfs/ml_student_performance.pdf",

    workType: "thesis"
  },

  {
    id: 2,
    title: "Blockchain-Based Secure Voting System",
    studentName: "Bob Karim",
    studentId: "2023822055",
    publicationYear: "2022-23",
    batch:"MS-06",

    department: "ICT",
    program: "MSc in ICT",

    researchArea: "Cyber Security",

    technology: ["Ethereum", "Solidity", "React", "Node.js"],

    keywords: [
      "Blockchain",
      "Voting",
      "Security",
      "Smart Contract"
    ],

    abstract:
      "This research presents a blockchain-based electronic voting system that ensures transparency, voter privacy, and tamper-proof election records through smart contract technology.",

    supervisorName: "Prof. Sarah Lee",

    pdfLink: "/pdfs/blockchain_voting.pdf",

    workType: "thesis"
  },

  {
    id: 3,
    title: "IoT-Based Smart Energy Management System for University Campus",
    studentName: "Catherine Tan",
    studentId: "2023822099",
     publicationYear: "2021-22",
    batch:"MS-05",
    
    department: "ICT",
    program: "MSc in ICT",

    researchArea: "Internet of Things (IoT)",

    technology: ["ESP32", "Arduino", "Firebase", "Flutter"],

    keywords: [
      "IoT",
      "Energy Management",
      "Smart Campus",
      "Automation"
    ],

    abstract:
      "This thesis develops an IoT-enabled energy management system that monitors electricity consumption in real time and automatically controls electrical devices to reduce energy waste across university facilities.",

    supervisorName: "Dr. Michael Chen",

    pdfLink: "/pdfs/smart_energy_management.pdf",

    workType: "thesis"
  }
];

    setTheses(mockTheses);
  setFilteredTheses(mockTheses)
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
      

       {/* ================= Search Section ================= */}

<div className="bg-base-200 rounded-xl shadow-lg p-6 mb-10">

    <h2 className="text-2xl font-bold text-center">
        Find Previous Projects
    </h2>

    <p className="text-center text-gray-500 mt-2">
        Choose one search option to explore previous projects.
    </p>

    {/* Search Type */}

    <div className="mt-6">

        <label className="font-semibold">
            Search By
        </label>

        <select
            className="select select-bordered w-full mt-2"
            value={searchType}
            onChange={(e)=>{
                setSearchType(e.target.value);
                setSearchValue("");
            }}
        >

            <option value="title">
                Project Title / Keyword
            </option>

            <option value="batch">
                Batch
            </option>

            <option value="publicationYear">
                Publication Year
            </option>

            <option value="supervisor">
                Supervisor
            </option>

            <option value="student">
                Student Name
            </option>

            <option value="technology">
                Technology
            </option>

            <option value="researchArea">
                Research Area
            </option>

        </select>

    </div>
    {/* Dynamic Input */}

    <div className="mt-6">

        {/* Title */}

        {searchType==="title" && (

            <input
                type="text"
                placeholder="Search by Project Title or Keyword..."
                className="input input-bordered w-full"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            />

        )}

        {/* Batch */}

        {searchType==="batch" && (

            <select
                className="select select-bordered w-full"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            >

                <option value="">Select Batch</option>

                <option>MS-01</option>
                <option>MS-02</option>
                <option>MS-03</option>
                <option>MS-04</option>
                <option>MS-05</option>
                <option>MS-06</option>
                <option>MS-07</option>

            </select>

        )}

        {/* Year */}

        {searchType==="publicationYear" && (

            <select
                className="select select-bordered w-full"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            >

                <option value="">Select Year</option>

                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>

            </select>

        )}

        {/* Supervisor */}

        {searchType==="supervisor" && (

            <select
                className="select select-bordered w-full"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            >

                <option value="">Select Supervisor</option>

                <option>Dr. John Smith</option>

                <option>Prof. Sarah Lee</option>

                <option>Dr. Michael Chen</option>

            </select>

        )}

        {/* Student */}

        {searchType==="student" && (

            <select
                className="select select-bordered w-full"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            >

                <option value="">Select Student</option>

                <option>Alice Rahman</option>

                <option>Bob Karim</option>

                <option>Catherine Tan</option>

            </select>

        )}

        {/* Technology */}

        {searchType==="technology" && (

            <select
                className="select select-bordered w-full"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            >

                <option value="">Select Technology</option>

                <option>React</option>

                <option>Node.js</option>

                <option>Flutter</option>

                <option>Python</option>

            </select>

        )}

        {/* Research Area */}

        {searchType==="researchArea" && (

            <select
                className="select select-bordered w-full"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            >

                <option value="">Select Research Area</option>

                <option>Artificial Intelligence</option>

                <option>Web Development</option>

                <option>Networking</option>

                <option>Mobile Application</option>

            </select>

        )}

    </div>
    {/* Search Button */}

<div className="flex justify-end mt-6 gap-3">

  <button
    className="btn btn-outline"
    onClick={() => {
      setSearchValue("");
    }}
  >
    Reset
  </button>

  <button
    className="btn btn-primary"
    onClick={handleSearch}
  >
    🔍 Search
  </button>

</div>

</div>

        {/* Search section */}
















        {/* Thesis Grid */}
       {/* Thesis Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {filteredTheses.length === 0 ? (

    <p className="text-center text-gray-500 col-span-full">
      No theses have been published yet.
    </p>

  ) : (

    filteredTheses.map((thesis) => (

      <div
        key={thesis.id}
        className="card bg-base-200 shadow hover:shadow-lg transition duration-300 flex flex-col"
      >

        <div className="card-body">

          {/* Thesis Title */}
          <h2 className="card-title text-primary">
            {thesis.title}
          </h2>

          {/* Basic Information */}
          <div className="space-y-1 text-sm text-gray-600">

            <p>
              <strong>Student:</strong> {thesis.studentName}
            </p>

            <p>
              <strong>Student ID:</strong> {thesis.studentId}
            </p>

            <p>
              <strong>Batch:</strong> {thesis.batch}
            </p>
               
                     <p className="text-gray-600">
                    <strong>Year:</strong> {thesis.publicationYear}
                  </p>

            <p>
              <strong>Department:</strong> {thesis.department}
            </p>

            <p>
              <strong>Program:</strong> {thesis.program}
            </p>

            <p>
              <strong>Research Area:</strong> {thesis.researchArea}
            </p>

            <p>
              <strong>Supervisor:</strong> {thesis.supervisorName}
            </p>

          </div>

          {/* Technology */}
          <div className="mt-4">

            <h3 className="font-semibold text-sm mb-2">
              Technology
            </h3>

            <div className="flex flex-wrap gap-2">

              {thesis.technology.map((tech, index) => (
                <span
                  key={index}
                  className="badge badge-outline badge-primary"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Keywords */}
          <div className="mt-4">

            <h3 className="font-semibold text-sm mb-2">
              Keywords
            </h3>

            <div className="flex flex-wrap gap-2">

              {thesis.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="badge badge-outline badge-secondary"
                >
                  {keyword}
                </span>
              ))}

            </div>

          </div>

          {/* Abstract */}
          <div className="mt-4">

            <h3 className="font-semibold text-sm">
              Abstract
            </h3>

            <p className="text-sm text-gray-500 line-clamp-4 mt-1">
              {thesis.abstract}
            </p>

          </div>

          {/* View PDF Button */}
          <div className="card-actions justify-end mt-6">

            <a
              href={thesis.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-sm"
            >
              View Thesis
            </a>

          </div>

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
