import React from "react";
import useAuth from "../../../hooks/useAuth";
// import FinalApproval from "../pages/dashboard/AdminDashboard/FinalApproval";

import { Link } from "react-router";



const AdminDashboard = () => {

  const dashboardStats = {
    pendingSubmission: 12,
    assignedEvaluation: 8,
    completedEvaluation: 5,
    publishedWork: 20,
    notices: 4
  };

  return (

    <div className="min-h-screen bg-base-200 p-6">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold">

          Admin Dashboard

        </h1>

        <p className="text-gray-500 mt-2">

          Manage student submissions, judge assignments, evaluation results and publication.

        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-10">

        <div className="stat bg-base-100 rounded-xl shadow">

          <div className="stat-title">

            Pending

          </div>

          <div className="stat-value text-primary">

            {dashboardStats.pendingSubmission}

          </div>

        </div>

        <div className="stat bg-base-100 rounded-xl shadow">

          <div className="stat-title">

            Judge Assigned

          </div>

          <div className="stat-value text-secondary">

            {dashboardStats.assignedEvaluation}

          </div>

        </div>

        <div className="stat bg-base-100 rounded-xl shadow">

          <div className="stat-title">

            Evaluated

          </div>

          <div className="stat-value text-success">

            {dashboardStats.completedEvaluation}

          </div>

        </div>

        <div className="stat bg-base-100 rounded-xl shadow">

          <div className="stat-title">

            Published

          </div>

          <div className="stat-value">

            {dashboardStats.publishedWork}

          </div>

        </div>

        <div className="stat bg-base-100 rounded-xl shadow">

          <div className="stat-title">

            Notices

          </div>

          <div className="stat-value">

            {dashboardStats.notices}

          </div>

        </div>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Pending Submission */}

        <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <div className="text-5xl">

              📄

            </div>

            <h2 className="card-title">

              Pending Submissions

            </h2>

            <p>

              Review newly submitted project and thesis.

            </p>

            <div className="card-actions justify-end mt-4">

              <Link

                  to="/finalApproval"

                className="btn btn-primary"

              >

                Open Queue

              </Link>

            </div>

          </div>

        </div>

        {/* Assign Judges */}

        <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <div className="text-5xl">

              👨‍🏫

            </div>

            <h2 className="card-title">

              Assign Judges

            </h2>

            <p>

              Assign two judges after admin approval.

            </p>

            <div className="card-actions justify-end mt-4">

              <Link

                to="/assign-judges"

                className="btn btn-secondary"

              >

                Assign

              </Link>

            </div>

          </div>

        </div>

        {/* Evaluation */}

        <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <div className="text-5xl">

              📊

            </div>

            <h2 className="card-title">

              Evaluation Results

            </h2>

            <p>

              View judge evaluation and final results.

            </p>

            <div className="card-actions justify-end mt-4">

              <Link

                to="/evaluatedresult"

                className="btn btn-accent"

              >

                View

              </Link>

            </div>

          </div>

        </div>

        {/* Published */}

        {/* <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <div className="text-5xl">

              📚

            </div>

            <h2 className="card-title">

              Published Archive

            </h2>

            <p>

              Publish approved project and thesis.

            </p>

            <div className="card-actions justify-end mt-4">

              <Link

                to="/dashboard/published"

                className="btn btn-success"

              >

                Published

              </Link>

            </div>

          </div>

        </div> */}

        {/* Notice */}

        <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <div className="text-5xl">

              📢

            </div>

            <h2 className="card-title">

              Notice Management

            </h2>

            <p>

              Create, update and publish department notices.

            </p>

            <div className="card-actions justify-end mt-4">

              <Link

                to="/dashboard/addNotice"

                className="btn btn-info"

              >

                Manage

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AdminDashboard;



// const AdminDashboard = () => {
//   return (
//     <div className="min-h-screen bg-base-200 p-6">

//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold">Admin Dashboard</h1>
//         <p className="text-gray-500 mt-2">
//           Manage final publication approval and department notices.
//         </p>
//       </div>

//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* Final Approval Queue */}
//         <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all">

//           <div className="card-body">

//             <div className="flex items-center gap-4">
//               <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl">
//                 📑
//               </div>

//               <div>
//                 <h2 className="card-title text-2xl">
//                   Final Approval Queue
//                 </h2>

//                 <p className="text-gray-500">
//                   Teacher approved submissions
//                 </p>
//               </div>
//             </div>

//             <div className="divider"></div>

//             <ul className="space-y-2">

//               <li>✔ Review approved projects</li>

//               <li>✔ Review approved thesis</li>

//               <li>✔ Final Approve / Reject</li>

//               <li>✔ Publish to Project or Thesis page</li>

//             </ul>

//             <div className="card-actions justify-end mt-6">
//               <Link
//                 to="/finalApproval"
//                 className="btn btn-primary"
//               >
//                 Open Queue
//               </Link>
//             </div>

//           </div>
//         </div>

//         {/* Notice Management */}

//         <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all">

//           <div className="card-body">

//             <div className="flex items-center gap-4">

//               <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl">
//                 📢
//               </div>

//               <div>

//                 <h2 className="card-title text-2xl">
//                   Notice Management
//                 </h2>

//                 <p className="text-gray-500">
//                   Publish department notices
//                 </p>

//               </div>

//             </div>

//             <div className="divider"></div>

//             <ul className="space-y-2">

//               <li>✔ Create New Notice</li>

//               <li>✔ Edit Existing Notice</li>

//               <li>✔ Delete Notice</li>

//               <li>✔ Publish Notice</li>

//             </ul>

//             <div className="card-actions justify-end mt-6">

//               <Link
//                 to="/dashboard/addNotice"
//                 className="btn btn-secondary"
//               >
//                 Manage Notices
//               </Link>

//             </div>

//           </div>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default AdminDashboard;












// const AdminDashboard = () => {
//   const { user } = useAuth();

//   return (
//     <div className="min-h-screen p-6">
//       <h1 className="text-3xl font-bold mb-4">
//         Admin Dashboard
//       </h1>

//       <div className="bg-base-200 p-6 rounded-lg shadow">
//         <p><strong>Email:</strong> {user?.email}</p>
//         <p><strong>Role:</strong> {user?.role}</p>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
