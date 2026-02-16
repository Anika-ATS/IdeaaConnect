import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router';





const SignUp = () => {
  const { createUser } = useAuth();
//   const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedRole = watch("role");

  const onSubmit = (data) => {
    console.log("SignUp Data:", data);

    createUser(data.email, data.password)
      .then((result) => {
        console.log("User Created:", result.user);

        // 👉 Here you can save user info + role to database

        alert("Account created successfully!");

        // Redirect based on role
        if (data.role === "student") {
        //   navigate("/submit-work");
        } else if (data.role === "teacher") {
        //   navigate("/teacher/dashboard");
        } else if (data.role === "admin") {
        //   navigate("/admin/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Role Selection */}
          <div>
            <label className="label font-semibold">Register as</label>
            <div className="flex gap-4">
              {["student", "teacher", "admin"].map((role) => (
                <label key={role} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={role}
                    className="radio radio-primary"
                    {...register("role", {
                      required: "Please select a role",
                    })}
                  />
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </label>
              ))}
            </div>
            {errors.role && (
              <p className="text-error text-sm mt-1">
                {errors.role.message}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
              {...register("confirmPassword", {
                required: "Please confirm password",
                validate: (value, formValues) =>
                  value === formValues.password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-error text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-neutral w-full mt-4"
            disabled={!selectedRole}
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-3">
            Already have an account?{" "} <Link to='/login'>
            <span
              className="link link-primary cursor-pointer"
              
            > 
              Login here
            </span></Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
