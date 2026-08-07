import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from 'react-router';
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SubmitWork = () => {
 
  const {
    register,
    handleSubmit,
    reset,
    watch,  //for github link when it is project
    setValue,
    formState: { errors },
  } = useForm();



  //axios

  const axiosSecure=useAxiosSecure();
  // const [searchValue, setSearchValue] = useState("");
  const [teachers, setTeachers] = useState([]);
  

  useEffect(() => {
     //  for supervisor list all techer fetched
       const fetchTeachers = async () => {
            try {
            const res = await axiosSecure.get("/teachers");
            setTeachers(res.data);
            } catch (error) {
            console.log(error);
            }
        };

       





         fetchTeachers();
    }, [axiosSecure]);


   const workType = watch("workType");

    // backend integration using FormData 
    const onSubmit = async (data) => {
      try {
        // Convert keywords string to array
        data.keywords = data.keywords
          .split(",")
          .map((keyword) => keyword.trim());

            // Add workflow 
        data.adminStatus = "pending";
        data.evaluationStatus = "waiting";
        data.publishStatus = "pending";
        data.submittedAt = new Date();

        console.log("data", data);
      
        const res = await axiosSecure.post("/submits", data);
        console.log("res", res);

        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Submitted Successfully!",
            text: "Your work has been submitted to your supervisor for review.",
            showConfirmButton: false,
            timer: 2000,
          });

          reset();
        }
      } catch (error) {
        // console.error("full error ",error);

        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Something went wrong. Please try again.",
        });
      }
    };



  return (
    <section className="min-h-screen py-16 bg-base-100">
      <div className="max-w-3xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Submit Thesis / Project
          </h1>
          <p className="mt-2 text-gray-500">
            Upload your work for supervisor approval and public showcase
          </p>
        </div>

        {/* Form Card */}
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">

            <form
              onSubmit={handleSubmit(onSubmit,    (errors) => {
      console.log("Validation Errors:", errors);
    })}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >

              {/* Student Name */}
              <div className="form-control">
                <label className="label">Student Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Full name"
                  {...register("studentName", {
                    required: "Student name is required",
                  })}
                />
                {errors.studentName && (
                  <p className="text-error text-sm">
                    {errors.studentName.message}
                  </p>
                )}
              </div>

              {/* Student ID */}
              <div className="form-control">
                <label className="label">Student ID</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="2023822077"
                  {...register("studentId", {
                    required: "Student ID is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Student ID must be exactly 10 digits",
                    },
                  })}
                />
                {errors.studentId && (
                  <p className="text-error text-sm">
                    {errors.studentId.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">Student Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="student@email.com"
                  {...register("studentemail", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.studentemail && (
                  <p className="text-error text-sm">
                    {errors.studentemail.message}
                  </p>
                )}
              </div>

              {/* Batch */}
              <div className="form-control">
                <label className="label">Batch</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="MS-07"
                  {...register("batch", {
                    required: "Batch is required",
                  })}
                />
                {errors.batch && (
                  <p className="text-error text-sm">
                    {errors.batch.message}
                  </p>
                )}
              </div>

              {/* Department */}
              <div className="form-control">
                <label className="label">Department</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="ICT"
                  {...register("department", {
                    required: "Department is required",
                  })}
                />
                {errors.department && (
                  <p className="text-error text-sm">
                    {errors.department.message}
                  </p>
                )}
              </div>

              {/* Program */}

              <div className="form-control">
                <label className="label">Program</label>

                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="MSc in ICT"
                  {...register("program", {
                                  required: "Program is required",
                                })}
                  
                />
                {errors.program && (
                                <p className="text-error text-sm">
                                  {errors.program.message}
                                </p>
                              )}
              </div>


              {/* project  information */}


              <div className="md:col-span-2">
                <h2 className="text-xl font-bold border-b pb-2 mb-4">
                  Project Information
                </h2>
              </div>



                {/* Project Title */}

                <div className="form-control md:col-span-2">
                  <label className="label">Project / Thesis Title :</label>

                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Enter project title"
                    {...register("title", {
                      required: "Project title is required",
                    })}
                  />

                  {errors.title && (
                    <p className="text-error text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* researchArea */}


              <div className="form-control">
                <label className="label">Research Area</label>

                <select
                  className="select select-bordered"
                  placeholder="Select Research Topic/Area"
                  {...register("researchArea", {
                    required: "Project research area is required",
                  })}

                  
                >

                <option value="">Select</option>

                  <option>Artificial Intelligence</option>

                  <option>Machine Learning</option>

                  <option>Web Development</option>

                  <option>Cyber Security</option>

                  <option>Networking</option>

                  <option>IoT</option>

                  <option>Cloud Computing</option>

                  <option>Mobile Application</option>
                </select>

                  {errors.researchArea && (
                      <p className="text-error text-sm">
                        {errors.researchArea.message}
                      </p>
                  )}
              </div>




                {/* Technology */}
                <div className="form-control md:col-span-2">
                  <label className="label">Technology</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["React", "Node.js", "MongoDB", "Express", "Python", "Flutter"].map((tech) => (
                      <label key={tech} className="label cursor-pointer">
                        <input
                          type="checkbox"
                          value={tech}
                          className="checkbox"
                          {...register("technology", {
                            required: "Please select at least one technology",
                          })}
                        />
                        <span className="ml-2">{tech}</span>
                      </label>
                    ))}
                  </div>
                  {errors.technology && (
                    <p className="text-error text-sm mt-1">{errors.technology.message}</p>
                  )}
                </div>


                {/* keywords */}
                <div className="form-control md:col-span-2">

                <label className="label">

                Keywords : 

                </label>

                <input
                type="text"
                className="input input-bordered"
                placeholder="AI, Attendance, Face Recognition"
                {...register("keywords", {
                      required: " Keywords are required",
                    })}

                />

                <p className="text-xs text-gray-500 mt-1 text-primary">

                Separate each keyword with a comma.

                </p>
                {errors.keywords && (
                  <p className="text-error text-sm">
                    {errors.keywords.message}
                  </p>
                )}


                </div>


                {/* abstract */}
                <div className="form-control md:col-span-2">

                <label className="label">

                Project/Thesis Abstract :

                </label>

                <textarea
                rows="6"
                className="textarea textarea-bordered"

                placeholder="Write a short abstract..."
                {...register("abstract", {
                      required: "Abstract is required",
                    })}


                />
                {errors.abstract && (
                  <p className="text-error text-sm">
                    {errors.abstract.message}
                  </p>
                )}

                </div>


          {/* supervisor section */}


              {/* Supervisor Name */}

              

              <div className="form-control">
                <label className="label">Supervisor Name</label>

                <select
                  className="select select-bordered"
                  defaultValue=""
                  {...register("supervisorName", {
                    required: "Supervisor name is required",
                    onChange: (e) => {
                      const teacher = teachers.find(
                        (t) => t.name === e.target.value
                      );

                      if (teacher) {
                        setValue("supervisorEmail", teacher.email);
                      }
                    },
                  })}
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

                {errors.supervisorName && (
                  <p className="text-error text-sm">
                    {errors.supervisorName.message}
                  </p>
                )}
              </div>

              {/* Supervisor Email */}
              <div className="form-control">
                <label className="label">Supervisor Email</label>

                  <input
                    type="email"
                    className="input input-bordered"
                    readOnly
                    {...register("supervisorEmail", {
                      required: "Supervisor email is required",
                    })}
                  />

                  {errors.supervisorEmail && (
                    <p className="text-error text-sm">
                      {errors.supervisorEmail.message}
                    </p>
                  )}
               </div>



              {/* Work Type */}
              <div className="form-control">
                <label className="label">Work Type</label>
                <select
                  className="select select-bordered"
                  {...register("workType", {
                    required: "Please select work type",
                  })}
                >
                  <option value="">Select type</option>
                  <option value="thesis">Thesis</option>
                  <option value="project">Project</option>
                </select>
                {errors.workType && (
                  <p className="text-error text-sm">
                    {errors.workType.message}
                  </p>
                )}
              </div>



                {/* github */}
                      {
                      workType==="project" && (

                      <div className="form-control md:col-span-2">

                      <label className="label">

                      GitHub Repository

                      </label>

                      <input
                      type="url"
                      className="input input-bordered"

                      placeholder="https://github.com/username/project"

                      {...register("githubLink", {
                                          required: "Please provide github link",
                                        })}

                      />
                      {errors.githubLink && (
                        <p className="text-error text-sm">
                          {errors.githubLink.message}
                        </p>
                      )}

                      </div>

                      )
                      }

              {/* PDF Upload */}

              <div className="form-control md:col-span-2">
                <label className="label">
                  PDF Drive Link
                </label>

                <input
                  type="url"
                  className="input input-bordered"
                  placeholder="https://drive.google.com/file/d/..."
                  {...register("pdfUrl", {
                    required: "Please provide Google Drive PDF link",
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Please enter a valid URL",
                    },
                  })}
                />

                {errors.pdfUrl && (
                  <p className="text-error text-sm">
                    {errors.pdfUrl.message}
                  </p>
                )}
              </div>
             


              <div className="md:col-span-2 text-center mt-4">
              <button
                  type="submit"
                  className="btn btn-primary w-full md:w-1/2"
                >
                  Submit for Approval
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitWork;
