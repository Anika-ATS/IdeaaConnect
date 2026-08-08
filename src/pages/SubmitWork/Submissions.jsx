import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Submissions = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/submits?email=${user.email}`)
        .then((res) => {
          setSubmissions(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user, axiosSecure]);

  const total = submissions.length;

  const pending = submissions.filter(
    (item) => item.supervisorStatus === "pending"
  ).length;

  const approved = submissions.filter(
    (item) => item.supervisorStatus === "approved"
  ).length;

  const rejected = submissions.filter(
    (item) => item.supervisorStatus === "rejected"
  ).length;

  return (
    <div className="p-5">

      <h1 className="text-3xl font-bold mb-8">
        My Submissions
      </h1>

      {/* Statistics */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

        <div className="stat bg-base-100 rounded-xl shadow">
          <div className="stat-title">Total</div>
          <div className="stat-value text-primary">
            {total}
          </div>
        </div>

        <div className="stat bg-base-100 rounded-xl shadow">
          <div className="stat-title">Pending</div>
          <div className="stat-value text-warning">
            {pending}
          </div>
        </div>

        <div className="stat bg-base-100 rounded-xl shadow">
          <div className="stat-title">Approved</div>
          <div className="stat-value text-success">
            {approved}
          </div>
        </div>

        <div className="stat bg-base-100 rounded-xl shadow">
          <div className="stat-title">Rejected</div>
          <div className="stat-value text-error">
            {rejected}
          </div>
        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">

        <table className="table">

          <thead>

            <tr>

              <th>Title</th>

              <th>Type</th>

              <th>Supervisor</th>

              <th>Publish Status</th>

              <th>Admin Status</th>

              <th>PDF</th>

              <th>GitHub</th>

            </tr>

          </thead>

          <tbody>

            {
              submissions.map((item) => (

                <tr key={item._id}>

                  <td>{item.title}</td>

                  <td className="capitalize">
                    {item.workType}
                  </td>

                  <td>
                    {item.supervisorName}
                  </td>

                  <td>

                    {
                      item.publishStatus === "pending" &&
                      <span className="badge badge-warning">
                        Pending
                      </span>
                    }

                    {
                      item.publishStatus === "published" &&
                      <span className="badge badge-success">
                        Published
                      </span>
                    }

                    {
                      item.publishStatus === "rejected" &&
                      <span className="badge badge-error">
                        Rejected
                      </span>
                    }

                  </td>

                  <td>

                    {
                      item.adminStatus === "pending" &&
                      <span className="badge badge-warning">
                        Pending
                      </span>
                    }

                    {
                      item.adminStatus === "approved" &&
                      <span className="badge badge-success">
                        Approved
                      </span>
                    }

                    {
                      item.adminStatus === "rejected" &&
                      <span className="badge badge-error">
                        Rejected
                      </span>
                    }

                  </td>

                  <td>

                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline btn-primary"
                    >
                      View
                    </a>

                  </td>

                  <td>

                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline btn-secondary"
                    >
                      GitHub
                    </a>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

      {
        submissions.length === 0 && (

          <div className="text-center mt-10">

            <h2 className="text-2xl font-semibold">
              No Submission Found
            </h2>

            <p className="mt-2 text-gray-500">
              You haven't submitted any thesis or project yet.
            </p>

          </div>

        )
      }

    </div>
  );
};

export default Submissions;