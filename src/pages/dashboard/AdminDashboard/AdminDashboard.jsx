import React from "react";
import useAuth from "../../../hooks/useAuth";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">
        Admin Dashboard
      </h1>

      <div className="bg-base-200 p-6 rounded-lg shadow">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
