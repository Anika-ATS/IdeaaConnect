import React from "react";
import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  // Search & Filter States
  const [searchType, setSearchType] = useState("title");
const [searchValue, setSearchValue] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedBatch, setSelectedBatch] = useState("");
  // const [selectedYear, setSelectedYear] = useState("");
  // const [selectedSupervisor, setSelectedSupervisor] = useState("");
  // const [selectedStudent, setSelectedStudent] = useState("");
  // const [selectedTechnology, setSelectedTechnology] = useState("");
  // const [selectedResearchArea, setSelectedResearchArea] = useState("");



// const handleSearch = () => {
//   console.log("Searching...");
// };
const handleSearch = () => {

    if(searchValue===""){

        setFilteredProjects(projects);

        return;

    }

    let result=[];

    switch(searchType){

        case "title":

            result=projects.filter(project=>

                project.title.toLowerCase().includes(searchValue.toLowerCase()) ||

                project.keywords.some(keyword=>

                    keyword.toLowerCase().includes(searchValue.toLowerCase())
                )

            );

            break;

        case "batch":

            result=projects.filter(project=>

                project.batch===searchValue

            );

            break;

        case "year":

            result=projects.filter(project=>

                project.publicationYear===searchValue

            );

            break;

        case "supervisor":

            result=projects.filter(project=>

                project.supervisorName===searchValue

            );

            break;

        case "student":

            result=projects.filter(project=>

                project.studentName===searchValue

            );

            break;

        case "technology":

            result=projects.filter(project=>

                project.technology.includes(searchValue)

            );

            break;

        case "researchArea":

            result=projects.filter(project=>

                project.researchArea===searchValue

            );

            break;

        default:

            result=projects;

    }

    setFilteredProjects(result);

}

const handleReset=()=>{

    setSearchValue("");

    setSearchType("title");

    setFilteredProjects(projects);

}

  useEffect(() => {
    // Mock data - replace with backend API in real app
    const mockProjects = [
      {
        id: 1,
        title: "AI-Based Student Attendance System",
        studentName: "Alice Rahman",
        studentId: "2023822077",
        supervisorName: "Dr. John Smith",
           batch:"MS-07",
    publicationYear:"2026",
    technology:["React"],
    researchArea:"Artificial Intelligence",

    keywords:[   "AI",
    "Attendance"],
        


        pdfLink: "/pdfs/ai_attendance.pdf",
      },
      {
        id: 2,
        title: "Online Thesis Management System",
        studentName: "Bob Karim",
        studentId: "2023822055",
        supervisorName: "Prof. Sarah Lee",
        batch: "MS-06",
  publicationYear: "2025",
  technology:["React, Node.js, MongoDB"],
  researchArea: "Web Development",
    keywords:[   "Management",
    "Online","system"],
        
  
        
        pdfLink: "/pdfs/thesis_management.pdf",
      },
      {
        id: 3,
        title: "Smart Campus Navigation App",
        studentName: "Catherine Tan",
        studentId: "2023822099",
        supervisorName: "Dr. Michael Chen",
        batch: "MS-05",
  publicationYear: "2024",
  technology: ["Flutter, Firebase, Google Maps API"],
  researchArea: "Mobile Application",
  keywords:[   "Smart",
    "Campus","Navigation"
   ],
        pdfLink: "/pdfs/smart_campus.pdf",
      },
    ];

    // setProjects(mockProjects);
    setProjects(mockProjects);
setFilteredProjects(mockProjects);

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


        {/* Search bar */}

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

            <option value="year">
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

        {searchType==="year" && (

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

        {/* Search bar */}



   
   
   
   
   
   
   
   
   
   
   










        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No projects have been published yet.
            </p>
          ) : (
            filteredProjects.map((project) => (
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
                    <strong>Batch:</strong> {project.batch}
                  </p>
                     <p className="text-gray-600">
                    <strong>Year:</strong> {project.publicationYear}
                  </p>
                   <p className="text-gray-600">
                    <strong>Topic:</strong> {project.researchArea}
                  </p>
                    <p className="text-gray-600">
                    <strong>Tech:</strong> {project.technology}
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
