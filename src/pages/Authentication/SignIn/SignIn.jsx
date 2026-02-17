import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router";

const SignIn = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const selectedRole = watch("role");
  const passwordValue = watch("password"); // for confirm password validation

  const onSubmit = (data) => {
    console.log("SignUp Data:", data);

    createUser(data.email, data.password)
      .then((result) => {
        console.log("User Created:", result.user);
        setSuccessMessage("Account created successfully!");

        // ✅ Reset all fields including role
        reset({
          role: "",
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          batch: "",
          idNumber: "",
         
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 text-center mb-4 font-semibold">
            {successMessage}
          </p>
        )}

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
                    {...register("role", { required: "Please select a role" })}
                  />
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </label>
              ))}
            </div>
            {errors.role && (
              <p className="text-error text-sm mt-1">{errors.role.message}</p>
            )}
          </div>

          {/* Full Name */}
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="input input-bordered w-full"
              {...register("name", { required: "Full Name is required" })}
            />
            {errors.name && (
              <p className="text-error text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-error text-sm">{errors.email.message}</p>
            )}
          </div>


          {/* Batch (only for student) */}
          {selectedRole === "student" && (
            <div>
              <label className="label">Batch</label>
              <input
                type="text"
                placeholder="Enter batch"
                className="input input-bordered w-full"
                {...register("batch", { required: "Batch is required" })}
              />
              {errors.batch && (
                <p className="text-error text-sm">{errors.batch.message}</p>
              )}
            </div>
          )}

          {/* ID Number */}
          <div>
            <label className="label">ID Number</label>
            <input
              type="text"
              placeholder="Enter ID Number"
              className="input input-bordered w-full"
              {...register("idNumber", { required: "ID Number is required" })}
            />
            {errors.idNumber && (
              <p className="text-error text-sm">{errors.idNumber.message}</p>
            )}
          </div>

          
          {/* Password */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
              {...register("password", { required: "Password is required", minLength: 6 })}
            />
            {errors.password && (
              <p className="text-error text-sm">{errors.password.message}</p>
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
                required: "Please confirm your password",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-error text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

         

          <button
            type="submit"
            className="btn btn-neutral w-full"
            disabled={!selectedRole}
          >
            Sign Up
          </button>

          <p className="text-center mt-3">Already have an account?</p>

          <NavLink to="/login">
            <button type="button" className="btn btn-outline w-full mt-2">
              Login
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
