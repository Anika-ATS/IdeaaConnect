import React from "react";
import useAuth from "../../../hooks/useAuth";
// import FinalApproval from "../pages/dashboard/AdminDashboard/FinalApproval";

import { Link } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Manage final publication approval and department notices.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Final Approval Queue */}
        <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all">

          <div className="card-body">

            <div className="flex items-center gap-4">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                📑
              </div>

              <div>
                <h2 className="card-title text-2xl">
                  Final Approval Queue
                </h2>

                <p className="text-gray-500">
                  Teacher approved submissions
                </p>
              </div>
            </div>

            <div className="divider"></div>

            <ul className="space-y-2">

              <li>✔ Review approved projects</li>

              <li>✔ Review approved thesis</li>

              <li>✔ Final Approve / Reject</li>

              <li>✔ Publish to Project or Thesis page</li>

            </ul>

            <div className="card-actions justify-end mt-6">
              <Link
                to="/finalApproval"
                className="btn btn-primary"
              >
                Open Queue
              </Link>
            </div>

          </div>
        </div>

        {/* Notice Management */}

        <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all">

          <div className="card-body">

            <div className="flex items-center gap-4">

              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                📢
              </div>

              <div>

                <h2 className="card-title text-2xl">
                  Notice Management
                </h2>

                <p className="text-gray-500">
                  Publish department notices
                </p>

              </div>

            </div>

            <div className="divider"></div>

            <ul className="space-y-2">

              <li>✔ Create New Notice</li>

              <li>✔ Edit Existing Notice</li>

              <li>✔ Delete Notice</li>

              <li>✔ Publish Notice</li>

            </ul>

            <div className="card-actions justify-end mt-6">

              <Link
                to="/dashboard/addNotice"
                className="btn btn-secondary"
              >
                Manage Notices
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
