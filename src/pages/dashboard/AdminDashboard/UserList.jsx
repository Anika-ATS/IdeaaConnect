
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserList = () => {
  const axiosSecure = useAxiosSecure();

  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch pending users
  const fetchPendingUsers = async () => {
    try {
      const res = await axiosSecure.get("/pending-user");

      setPendingUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch pending users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  // Approve user
  const handleApprove = async (id) => {
    try {
      const res = await axiosSecure.patch(
        `/pending-user/approve/${id}`
      );

      console.log(res.data);

      alert("User approved successfully!");

      // Remove approved user from pending list
      setPendingUsers((previousUsers) =>
        previousUsers.filter((user) => user._id !== id)
      );

    } 
    
    catch (error) {
      console.error("Approval error:", error);

      alert(
        error.response?.data?.message ||
        "Failed to approve user."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Page Title */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">
          User List
        </h2>

        <p className="text-gray-500 mt-1">
          Review and approve student and teacher registrations.
        </p>
      </div>

      {/* No pending users */}
      {pendingUsers.length === 0 ? (
        <div className="bg-base-100 rounded-xl shadow p-10 text-center">
          <h3 className="text-xl font-semibold">
            No Pending Users
          </h3>

          <p className="text-gray-500 mt-2">
            There are currently no student or teacher registrations
            waiting for approval.
          </p>
        </div>
      ) : (

        <div className="overflow-x-auto bg-base-100 rounded-xl shadow">

          <table className="table">

            {/* Table Header */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Batch</th>
                <th>ID Number</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              {pendingUsers.map((user, index) => (
                <tr key={user._id}>

                  <td>
                    {index + 1}
                  </td>

                  <td>
                    <div className="font-semibold">
                      {user.name}
                    </div>
                  </td>

                  <td>
                    {user.email}
                  </td>

                  <td>
                    <span className="badge badge-primary">
                      {user.role}
                    </span>
                  </td>

                  <td>
                    {user.role === "student"
                      ? user.batch || "-"
                      : "-"}
                  </td>

                  <td>
                    {user.idNumber}
                  </td>

                  <td>
                    <span className="badge badge-warning">
                      Pending
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        handleApprove(user._id)
                      }
                    >
                      Approve
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
};

export default UserList;

