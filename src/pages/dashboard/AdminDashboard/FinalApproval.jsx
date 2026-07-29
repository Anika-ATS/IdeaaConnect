import React from "react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FinalApproval = () => {
  const axiosSecure = useAxiosSecure();

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApprovedSubmissions();
  }, []);

  const fetchApprovedSubmissions = async () => {
    try {
      const res = await axiosSecure.get("/admin-approved-submissions");
      setSubmissions(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = (id) => {
    console.log("Publish:", id);

    // Later:
    // PATCH adminStatus -> approved
  };

  const handleReject = (id) => {
    console.log("Reject:", id);

    // Later:
    // PATCH adminStatus -> rejected
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-2">
        Final Approval Queue
      </h1>

      <p className="text-gray-500 mb-6">
        Teacher approved submissions awaiting final publication.
      </p>

      {submissions.length === 0 ? (
        <div className="bg-base-200 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold">
            No approved submissions found.
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {submissions.map((submission) => (

            <div
              key={submission._id}
              className="card bg-base-100 shadow-xl border border-base-300"
            >
              <div className="card-body">

                {/* Header */}

                <div className="flex justify-between">

                  <span className="badge badge-primary uppercase">
                    {submission.workType}
                  </span>

                  <span className="badge badge-success">
                    Teacher Approved
                  </span>

                </div>

                {/* Title */}

                <h2 className="card-title text-xl mt-2">
                  {submission.title}
                </h2>

                {/* Information */}

                <div className="space-y-2 mt-2">

                  <p>
                    <strong>Student:</strong> {submission.studentName}
                  </p>

                  <p>
                    <strong>Student ID:</strong> {submission.studentId}
                  </p>

                  <p>
                    <strong>Batch:</strong> MS-{submission.batch}
                  </p>

                  <p>
                    <strong>Research Area:</strong>{" "}
                    {submission.researchArea}
                  </p>

                  <p>
                    <strong>Technology:</strong>{" "}
                    {submission.technology.join(", ")}
                  </p>

                  <p>
                    <strong>Supervisor:</strong>{" "}
                    {submission.supervisorName}
                  </p>

                  <p>
                    <strong>Submitted:</strong>{" "}
                    {new Date(
                      submission.submittedAt
                    ).toLocaleDateString()}
                  </p>

                </div>

                {/* Buttons */}

                <div className="card-actions justify-end mt-5">

                  <a
                    href={submission.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-info btn-sm"
                  >
                    View PDF
                  </a>

                  <button
                    onClick={() => handleReject(submission._id)}
                    className="btn btn-error btn-sm"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => handlePublish(submission._id)}
                    className="btn btn-success btn-sm"
                  >
                    Publish
                  </button>

                </div>

              </div>
            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default FinalApproval;