import React from "react";
import { useForm } from "react-hook-form";

const SubmitWork = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // 🔜 backend integration using FormData
    console.log(data);

    alert("Your work has been submitted for supervisor approval!");
    reset();
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
              onSubmit={handleSubmit(onSubmit)}
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
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-error text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Batch */}
              <div className="form-control">
                <label className="label">Batch</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="2019–2023"
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
                  placeholder="Computer Science"
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

              {/* Supervisor Name */}
              <div className="form-control">
                <label className="label">Supervisor Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Supervisor full name"
                  {...register("supervisorName", {
                    required: "Supervisor name is required",
                  })}
                />
                {errors.supervisorName && (
                  <p className="text-error text-sm">
                    {errors.supervisorName.message}
                  </p>
                )}
              </div>

              {/* Supervisor Email */}
              <div className="form-control md:col-span-2">
                <label className="label">Supervisor Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="supervisor@email.com"
                  {...register("supervisorEmail", {
                    required: "Supervisor email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
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

              {/* PDF Upload */}
              <div className="form-control">
                <label className="label">Upload PDF</label>
                <input
                  type="file"
                  accept="application/pdf"
                  className="file-input file-input-bordered w-full"
                  {...register("pdfFile", {
                    required: "PDF file is required",
                  })}
                />
                {errors.pdfFile && (
                  <p className="text-error text-sm">
                    {errors.pdfFile.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
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
