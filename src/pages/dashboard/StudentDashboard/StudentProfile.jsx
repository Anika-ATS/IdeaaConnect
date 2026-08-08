
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  FaUserGraduate,
  FaEnvelope,
  FaIdCard,
  FaLayerGroup,
  FaUserShield,
  FaCalendarAlt,
} from "react-icons/fa";

const StudentProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/users/${user.email}`)
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load student profile:", error);
        setLoading(false);
      });
  }, [user?.email, axiosSecure]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="alert alert-error">
          Unable to load your profile information.
        </div>
      </div>
    );
  }

  // Format createdAt date
  const joinedDate = student.createdAt
    ? new Date(student.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "Not available";

  return (
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="bg-base-100 rounded-2xl shadow-xl p-8 mb-8">

        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* Profile Icon */}
          <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center text-primary text-5xl">
            <FaUserGraduate />
          </div>

          {/* Name */}
          <div className="text-center md:text-left">

            <h1 className="text-3xl md:text-4xl font-bold">
              {student.name}
            </h1>

            <p className="text-base-content/60 mt-2">
              {student.email}
            </p>

            <div className="badge badge-primary mt-3">
              Student
            </div>

          </div>

        </div>

      </div>


      {/* Account Information */}
      <div className="bg-base-100 rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Account Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Full Name */}
          <div className="bg-base-200 rounded-xl p-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <FaUserGraduate />
              </div>

              <div>
                <p className="text-sm text-base-content/60">
                  Full Name
                </p>

                <p className="text-lg font-semibold">
                  {student.name}
                </p>
              </div>

            </div>

          </div>


          {/* Email */}
          <div className="bg-base-200 rounded-xl p-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-base-content/60">
                  Email Address
                </p>

                <p className="text-lg font-semibold break-all">
                  {student.email}
                </p>
              </div>

            </div>

          </div>


          {/* Student ID */}
          <div className="bg-base-200 rounded-xl p-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <FaIdCard />
              </div>

              <div>
                <p className="text-sm text-base-content/60">
                  Student ID
                </p>

                <p className="text-lg font-semibold">
                  {student.idNumber}
                </p>
              </div>

            </div>

          </div>


          {/* Batch */}
          <div className="bg-base-200 rounded-xl p-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <FaLayerGroup />
              </div>

              <div>
                <p className="text-sm text-base-content/60">
                  Batch
                </p>

                <p className="text-lg font-semibold">
                  {student.batch}
                </p>
              </div>

            </div>

          </div>


          {/* Role */}
          <div className="bg-base-200 rounded-xl p-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <FaUserShield />
              </div>

              <div>
                <p className="text-sm text-base-content/60">
                  Account Role
                </p>

                <p className="text-lg font-semibold capitalize">
                  {student.role}
                </p>
              </div>

            </div>

          </div>


          {/* Account Created */}
          <div className="bg-base-200 rounded-xl p-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <FaCalendarAlt />
              </div>

              <div>
                <p className="text-sm text-base-content/60">
                  Account Created
                </p>

                <p className="text-lg font-semibold">
                  {joinedDate}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Account Summary */}
      <div className="bg-primary text-primary-content rounded-2xl shadow-xl p-8 mt-8">

        <h2 className="text-2xl font-bold">
          Student Account
        </h2>

        <p className="mt-2 opacity-90">
          This profile contains the account information registered
          with IdeaConnect.
        </p>

      </div>

    </div>
  );
};

export default StudentProfile;

