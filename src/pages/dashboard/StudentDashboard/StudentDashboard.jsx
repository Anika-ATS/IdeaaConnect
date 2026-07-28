import React from "react";
import { NavLink } from "react-router";
import { FaUserGraduate, FaFolderOpen, FaUpload } from "react-icons/fa";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-base-200 p-5 md:p-8">

      {/* Welcome Section */}
      <div className="bg-base text-black rounded-2xl p-8 shadow-lg mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome to Student Dashboard 
        </h1>

        <p className="mt-3 text-lg opacity-90 max-w-3xl">
          Manage your thesis or project submission, update your profile,
          and monitor your submission progress from one place.
        </p>
      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Submit Work */}

        <div className="card bg-base-100  shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="card-body items-center text-center">

            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl">
              <FaUpload />
            </div>

            <h2 className="card-title mt-4">
              Submit Work
            </h2>

            <p>
              Upload your thesis or project and send it to your supervisor for
              approval.
            </p>

            <div className="card-actions mt-5">
              
              <NavLink
                to="/submit"
                className="btn btn-primary"
              >
                Go to SubmitWork
              </NavLink>
            </div>

          </div>
        </div>

        {/* Profile */}

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="card-body items-center text-center">

            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-4xl">
              <FaUserGraduate />
            </div>

            <h2 className="card-title mt-4">
              My Profile
            </h2>

            <p>
              View and update your academic information, personal details, and
              account information.
            </p>

            <div className="card-actions mt-5">
              <NavLink
                to="/dashboard/profile"
                className="btn btn-secondary"
              >
                View Profile
              </NavLink>
            </div>

          </div>
        </div>

        {/* Submission */}

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="card-body items-center text-center">

            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent text-4xl">
              <FaFolderOpen />
            </div>

            <h2 className="card-title mt-4">
              My Submissions
            </h2>

            <p>
              Track your submitted projects and theses. Check whether your
              supervisor or admin has approved or rejected them.
            </p>

            <div className="card-actions mt-5">
              <NavLink
                to="/dashboard/mySubmissions"
                className="btn btn-accent"
              >
                View Status
              </NavLink>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Information */}

      <div className="mt-12">

        <div className="card bg-base-100 shadow-lg">

          <div className="card-body">

            <h2 className="card-title">
              Submission Workflow
            </h2>

            <ul className="steps steps-vertical lg:steps-horizontal w-full mt-6">
              <li className="step step-primary">
                Submit Work
              </li>

              <li className="step">
                Supervisor Review
              </li>

              <li className="step">
                Admin Approval
              </li>

              <li className="step">
                Published
              </li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;