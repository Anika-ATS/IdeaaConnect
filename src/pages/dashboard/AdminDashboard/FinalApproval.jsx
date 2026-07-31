import React from "react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const FinalApproval = () => {

  const [loading] = useState(false);

  const [submissions] = useState([
    {
      _id: "1",
      title: "AI-Based Student Attendance System",
      workType: "Project",
      studentName: "Alice Rahman",
      studentId: "2023822077",
      batch: "07",
      researchArea: "Artificial Intelligence",
      technology: ["React", "Node.js", "MongoDB"],
      supervisor: {
        id: "t01",
        name: "Dr. Rahman",
        email: "rahman@sust.edu"
      },
      submittedAt: "2026-07-25",
      pdfUrl: "#",
      adminStatus: "Pending"
    },

    {
      _id: "2",
      title: "Blockchain Voting System",
      workType: "Thesis",
      studentName: "Nusrat Jahan",
      studentId: "2023822056",
      batch: "07",
      researchArea: "Blockchain",
      technology: ["React", "Express", "Ethereum"],
      supervisor: {
        id: "t02",
        name: "Dr. Karim",
        email: "karim@sust.edu"
      },
      submittedAt: "2026-07-27",
      pdfUrl: "#",
      adminStatus: "Pending"
    },

    {
      _id: "3",
      title: "IoT Smart Agriculture",
      workType: "Project",
      studentName: "Hasan Ahmed",
      studentId: "2023822033",
      batch: "07",
      researchArea: "Internet of Things",
      technology: ["Arduino", "React"],
      supervisor: {
        id: "t03",
        name: "Dr. Alam",
        email: "alam@sust.edu"
      },
      submittedAt: "2026-07-29",
      pdfUrl: "#",
      adminStatus: "Pending"
    }
  ]);

  const handleApprove = (id) => {
    console.log("Approve:", id);

    // Later
    // PATCH adminStatus = approved
    // Navigate to Assign Judges page
  };

  const handleReject = (id) => {
    console.log("Reject:", id);

    // Later
    // PATCH adminStatus = rejected
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
        Admin Review Queue
      </h1>

      <p className="text-gray-500 mb-6">
        Review newly submitted projects and thesis before assigning judges.
      </p>

      {submissions.length === 0 ? (

        <div className="bg-base-200 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold">
            No Pending Submissions
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

                <div className="flex justify-between">

                  <span className="badge badge-primary">
                    {submission.workType}
                  </span>

                  <span className="badge badge-warning">
                    Pending Review
                  </span>

                </div>

                <h2 className="card-title text-xl mt-2">
                  {submission.title}
                </h2>

                <div className="space-y-2 mt-2">

                  <p>
                    <strong>Student:</strong> {submission.studentName}
                  </p>

                  <p>
                    <strong>Student ID:</strong> {submission.studentId}
                  </p>

                  <p>
                    <strong>Batch:</strong> MIT-{submission.batch}
                  </p>

                  <p>
                    <strong>Research Area:</strong> {submission.researchArea}
                  </p>

                  <p>
                    <strong>Technology:</strong>{" "}
                    {submission.technology.join(", ")}
                  </p>

                  <p>
                    <strong>Supervisor:</strong>{" "}
                    {submission.supervisor.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {submission.supervisor.email}
                  </p>

                  <p>
                    <strong>Submitted:</strong>{" "}
                    {new Date(submission.submittedAt).toLocaleDateString()}
                  </p>

                </div>

                <div className="card-actions justify-end mt-5">

                  <button className="btn btn-info btn-sm">
                    View PDF
                  </button>

                  <button
                    onClick={() => handleReject(submission._id)}
                    className="btn btn-error btn-sm"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => handleApprove(submission._id)}
                    className="btn btn-success btn-sm"
                  >
                    Approve & Assign Judges
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

// const FinalApproval = () => {
//   const axiosSecure = useAxiosSecure();

//   const [submissions, setSubmissions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   fetchApprovedSubmissions();

//   // }, []);
//   const fetchPendingSubmissions = async () => {
//   try {
//     const res = await axiosSecure.get("/admin-pending-submissions");
    
// console.log(res.data);
//     setSubmissions(res.data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoading(false);
//   }
// };

// useEffect(() => {
//   fetchPendingSubmissions();
// }, []);

//   // const fetchApprovedSubmissions = async () => {
//   //   try {
//   //     // const res = await axiosSecure.get("/admin-approved-submissions");
//   //     const res = await axiosSecure.get("/admin-pending-submissions");
//   //     setSubmissions(res.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // const handlePublish = (id) => {
//   //   console.log("Publish:", id);
//   const handleApprove = (id) => {
//   console.log("Approve:", id);

//     // Later:
//     // PATCH adminStatus -> approved
//   };

//   const handleReject = (id) => {
//     console.log("Reject:", id);

//     // Later:
//     // PATCH adminStatus -> rejected
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-6">

//       <h1 className="text-3xl font-bold mb-2">
//         {/* Final Approval Queue */}
//          Admin Review Queue
//       </h1>

//       <p className="text-gray-500 mb-6">
//           Review newly submitted projects and thesis before assigning them for judge evaluation.
//       </p>

//       {submissions.length === 0 ? (
//         <div className="bg-base-200 rounded-lg p-8 text-center">
//           <h2 className="text-xl font-semibold">
//               No pending submissions found.
//           </h2>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {submissions.map((submission) => (

//             <div
//               key={submission._id}
//               className="card bg-base-100 shadow-xl border border-base-300"
//             >
//               <div className="card-body">

//                 {/* Header */}

//                 <div className="flex justify-between">

//                   <span className="badge badge-primary uppercase">
//                     {submission.workType}
//                   </span>

//                   <span className="badge badge-success">
//                       Pending Admin Review
//                   </span>

//                 </div>

//                 {/* Title */}

//                 <h2 className="card-title text-xl mt-2">
//                   {submission.title}
//                 </h2>

//                 {/* Information */}

//                 <div className="space-y-2 mt-2">

//                   <p>
//                     <strong>Student:</strong> {submission.studentName}
//                   </p>

//                   <p>
//                     <strong>Student ID:</strong> {submission.studentId}
//                   </p>

//                   <p>
//                     <strong>Batch:</strong> MS-{submission.batch}
//                   </p>

//                   <p>
//                     <strong>Research Area:</strong>{" "}
//                     {submission.researchArea}
//                   </p>

//                   <p>
//                     <strong>Technology:</strong>{" "}
//                     {/* {submission.technology.join(", ")} */}
//                     {submission.technology?.join(", ") || "N/A"}
//                   </p>

//                   <p>
//                     <strong>Supervisor:</strong>{" "}
//                     {submission.supervisorName}
//                   </p>

//                   <p>
//                     <strong>Submitted:</strong>{" "}
//                     {new Date(
//                       submission.submittedAt
//                     ).toLocaleDateString()}
//                   </p>

//                 </div>

//                 {/* Buttons */}

//                 <div className="card-actions justify-end mt-5">

//                   <a
//                     href={submission.pdfUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn btn-info btn-sm"
//                   >
//                     View PDF
//                   </a>

//                   <button
//                     onClick={() => handleReject(submission._id)}
//                     className="btn btn-error btn-sm"
//                   >
//                     Reject
//                   </button>

//                 <button
//                     onClick={() => handleApprove(submission._id)}
//                     className="btn btn-success btn-sm"
//                   >
//                     Approve & Send to Judge
//                 </button>

//                 </div>

//               </div>
//             </div>

//           ))}

//         </div>
//       )}

//     </div>
//   );
// };

// export default FinalApproval;