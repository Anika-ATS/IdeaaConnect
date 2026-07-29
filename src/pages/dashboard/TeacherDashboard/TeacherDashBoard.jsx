import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeacherDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchSubmissions = async () => {
      try {
        const res = await axiosSecure.get(
          `/teacher-submissions/${user.email}`
        );

        setSubmissions(res.data);
      } catch (error) {
        console.error("Failed to fetch submissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [user?.email, axiosSecure]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold mb-4">
        Teacher Dashboard
      </h1>

      {/* Teacher Information */}
      <div className="bg-base-200 p-6 rounded-lg shadow mb-6">
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Role:</strong> {user?.role}
        </p>
      </div>

      {/* Submission Section */}
      <h2 className="text-2xl font-semibold mb-4">
        Student Submission Requests
      </h2>

      {submissions.length === 0 ? (
        <div className="bg-base-200 rounded-lg p-6 text-center">
          <p>No submission requests found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {submissions.map((submission) => (
    <div
      key={submission._id}
      className="card bg-base-100 shadow-lg border border-base-300"
    >
      <div className="card-body">

        {/* Header */}
        <div className="flex justify-between items-center">
          <span className="badge badge-primary uppercase">
            {submission.workType}
          </span>

          <span
            className={`badge ${
              submission.supervisorStatus === "pending"
                ? "badge-warning"
                : submission.supervisorStatus === "approved"
                ? "badge-success"
                : "badge-error"
            }`}
          >
            {submission.supervisorStatus}
          </span>
        </div>

        {/* Title */}
        <h2 className="card-title text-xl">
          {submission.title}
        </h2>

        {/* Student Information */}
        <div className="space-y-2 text-sm">

          <p>
            <span className="font-semibold">Student:</span>{" "}
            {submission.studentName}
          </p>

          <p>
            <span className="font-semibold">Student ID:</span>{" "}
            {submission.studentId}
          </p>

          <p>
            <span className="font-semibold">Batch:</span>{" "}
            MS-{submission.batch}
          </p>

          <p>
            <span className="font-semibold">Research Area:</span>{" "}
            {submission.researchArea}
          </p>

          <p>
            <span className="font-semibold">Technology:</span>{" "}
            {submission.technology.join(", ")}
          </p>

          <p>
            <span className="font-semibold">Submitted:</span>{" "}
            {new Date(submission.submittedAt).toLocaleDateString()}
          </p>

        </div>

        {/* Actions */}
        <div className="card-actions justify-end mt-4">

          <a
            href={submission.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-info btn-sm"
          >
            View PDF
          </a>

          <button
            className="btn btn-error btn-sm"
            onClick={() => handleReject(submission._id)}
          >
            Reject
          </button>

          <button
            className="btn btn-success btn-sm"
            onClick={() => handleApprove(submission._id)}
          >
            Approve
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

export default TeacherDashboard;