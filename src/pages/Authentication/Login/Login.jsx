import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useNavigate } from "react-router";

const Login = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  //  ADD login function
  const { signInUser } = useAuth();

  const selectedRole = watch("role");

  const onSubmit = (data) => {
    console.log("Login Data:", data);

    //  login function
    signInUser(data.email, data.password)
      .then(result => {
        console.log(result.user);

        //  redirect  after successful login
        if (data.role === "student") {
          navigate("/submit");
        } else if (data.role === "teacher") {
          navigate("/teacher");
        } else if (data.role === "admin") {
          navigate("/admin/dashboard");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login to IdeaConnect
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Role */}
          <div>
            <label className="label font-semibold">Login as</label>
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
              <p className="text-error text-sm mt-1">
                {errors.role.message}
              </p>
            )}
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email is required" })}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", { required: "Password is required" })}
          />

          <button
            type="submit"
            className="btn btn-neutral w-full mt-4"
            disabled={!selectedRole}
          >
            Login
          </button>

          <p className="text-center mt-3">
            Not registered yet?
          </p>

         
          <NavLink to="/signin">
            <button
              type="button"
              className="btn btn-outline w-full mt-2"
            >
              Sign Up
            </button>
          </NavLink>

        </form>
      </div>
    </div>
  );
};

export default Login;
