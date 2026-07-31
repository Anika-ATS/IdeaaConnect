import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SupervisedWorks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchWorks = async () => {
      try {
        const res = await axiosSecure.get(
          `/teacher-submissions/${user.email}`
        );

        setWorks(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, [user?.email, axiosSecure]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-6">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          My Supervised Works
        </h1>

        <p className="text-gray-500 mt-2">
          View all projects and thesis submitted under your supervision.
        </p>

      </div>

      {/* No Works */}

      {works.length === 0 ? (

        <div className="bg-base-100 rounded-xl shadow p-8 text-center">

          <h2 className="text-xl font-semibold">
            No supervised works found.
          </h2>

        </div>

      ) : (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {works.map((work) => (

            <div
              key={work._id}
              className="card bg-base-100 shadow-xl border border-base-300"
            >

              <div className="card-body">

                {/* Top */}

                <div className="flex justify-between items-center">

                  <span className="badge badge-primary uppercase">

                    {work.workType}

                  </span>

                  <span
                    className={`badge ${
                      work.publishStatus === "published"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {work.publishStatus}
                  </span>

                </div>

                {/* Title */}

                <h2 className="card-title text-xl mt-2">

                  {work.title}

                </h2>

                {/* Student Information */}

                <div className="space-y-2 mt-3">

                  <p>

                    <strong>Student :</strong>{" "}

                    {work.studentName}

                  </p>

                  <p>

                    <strong>Student ID :</strong>{" "}

                    {work.studentId}

                  </p>

                  <p>

                    <strong>Batch :</strong>{" "}

                    MS-{work.batch}

                  </p>

                  <p>

                    <strong>Research Area :</strong>{" "}

                    {work.researchArea}

                  </p>

                  <p>

                    <strong>Technology :</strong>{" "}

                    {work.technology?.join(", ")}

                  </p>

                  <p>

                    <strong>Submitted :</strong>{" "}

                    {new Date(
                      work.submittedAt
                    ).toLocaleDateString()}

                  </p>

                </div>

                <div className="divider"></div>

                {/* Status */}

                <div className="space-y-3">

                  <div className="flex justify-between">

                    <span className="font-semibold">
                      Admin Review
                    </span>

                    <span
                      className={`badge ${
                        work.adminStatus === "approved"
                          ? "badge-success"
                          : work.adminStatus === "rejected"
                          ? "badge-error"
                          : "badge-warning"
                      }`}
                    >
                      {work.adminStatus}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="font-semibold">
                      Judge Evaluation
                    </span>

                    <span
                      className={`badge ${
                        work.evaluationStatus === "completed"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {work.evaluationStatus}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="font-semibold">
                      Publication
                    </span>

                    <span
                      className={`badge ${
                        work.publishStatus === "published"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {work.publishStatus}
                    </span>

                  </div>

                </div>

                {/* Button */}

                <div className="card-actions justify-end mt-6">

                  <a
                    href={work.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-info btn-sm"
                  >
                    View PDF
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default SupervisedWorks;