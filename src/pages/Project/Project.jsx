import React from "react";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../hooks/useAxiosSecure";
const Project = () => {
   const [projects, setProjects] = useState([]);
   const [filteredProjects, setFilteredProjects] = useState([]);

   // Search & Filter States
   const [searchType, setSearchType] = useState("title");
   const [searchValue, setSearchValue] = useState("");
   const [teachers, setTeachers] = useState([]);


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





    const axiosSecure = useAxiosSecure();

    useEffect(() => {

      const fetchProjects = async () => {

        try {

        const res = await axiosSecure.get("/projects");

        setProjects(res.data);

        setFilteredProjects(res.data);

        }

        catch(error){

        console.log(error);

        }

     };

    //  for supervisor list all techer fetched
       const fetchTeachers = async () => {
            try {
            const res = await axiosSecure.get("/teachers");
            setTeachers(res.data);
            } catch (error) {
            console.log(error);
            }
        };





       fetchProjects();
       fetchTeachers();

    }, [axiosSecure]);

    // const supervisors = [...new Set(projects.map(project => project.supervisorName))];

    const students = [...new Set(projects.map(project => project.studentName))];












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

                        {teachers.map((teacher) => (
                        <option
                            key={teacher.email}
                            value={teacher.name}
                        >
                            {teacher.name}
                        </option>
                        ))}

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

                        {students.map(name => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                        ))}

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

                        <option>Machine Learning</option>

                        <option>Web Development</option>

                        <option>Cyber Security</option>

                        <option>Networking</option>

                        <option>IoT</option>

                        <option>Cloud Computing</option>

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

        {/* Search bar END */}




        {/* Projects AREA */}



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No projects have been published yet.
            </p>
          ) : (
            filteredProjects.map(project => (
              <div
                key={project._id}
                className="card bg-base-200 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    {project.title}
                  </h2>

                  
                {/* Basic Information */}
                <div className="space-y-1 text-sm text-gray-600">

                  <p >
                    <strong>Student:</strong> {project.studentName}
                  </p>

                  <p >
                    <strong>Student ID:</strong> {project.studentId}
                  </p>
                  <p >
                    <strong>Batch:</strong> {project.batch}
                  </p>

                  <p>
                    <strong>Year:</strong> {project.publicationYear}
                  </p>

                  <p>
                    <strong>Department:</strong> {project.department}
                  </p>

                  <p>
                      <strong>Program:</strong> {project.program}
                  </p>

                  <p>
                    <strong>Research Area:</strong> {project.researchArea}
                  </p>  

                  <p>
                      <strong>Supervisor:</strong> {project.supervisorName}
                  </p>
                  
                </div>

                {/* Technology */}
                  <div className="mt-4">

                    <h3 className="font-semibold text-sm mb-2">
                      Technology
                    </h3>

                    <div className="flex flex-wrap gap-2">

                      {project.technology.map((tech, index) => (
                        <span
                          key={index}
                          className="badge badge-outline badge-primary"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                   
                   {/* github */}
                   <p className="text-gray-600">
                    <strong>GitHub:</strong>{" "}
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-primary"
                    >
                        Repository
                    </a>
                    </p>

                    
                  {/* Keywords */}
                  <div className="mt-4">

                    <h3 className="font-semibold text-sm mb-2">
                      Keywords
                    </h3>

                    <div className="flex flex-wrap gap-2">

                      {project.keywords.map((keyword, index) => (
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
                      {project.abstract}
                    </p>

                  </div>

                  
                  
                  <a
                    href={project.pdfUrl}
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
