import React from "react";
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const Login = () => {

       



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const { createUser} = useAuth();

  

  const selectedRole = watch("role");

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    console.log(createUser);

    createUser(data.user,data.password)
     .then(result => {
        console.log(result.user);
                                })
    .catch(error => {
                console.log(error)
            })

    // 🔐 Replace with real authentication logic
    if (data.role === "student") {
      console.log("Redirect to Submit Work page");
      // navigate("/submit-work");
    } else if (data.role === "teacher") {
      console.log("Redirect to Teacher Dashboard");
      // navigate("/teacher/dashboard");
    } else if (data.role === "admin") {
      console.log("Redirect to Admin Dashboard");
      // navigate("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to IdeaConnect
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Role Selection */}
          <div>
            <label className="label font-semibold">Login as</label>
            <div className="flex gap-4">
              {["student", "teacher", "admin"].map((role) => (
                <label
                  key={role}
                  className="flex items-center gap-2 cursor-pointer"
                >
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
                  message: "Enter a valid email address",
                  
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
                  maxLength:11,
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

          {/* Forgot Password */}
          <div className="text-right">
            <a className="link link-hover text-sm">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-neutral w-full mt-4"
            disabled={!selectedRole}
          >
            Login
          </button>
          <p className="text-center">You are not register yet? please SignIn here.</p>
          <button
            type="submit"
            className="btn btn-neutral w-full mt-4"
            disabled={!selectedRole}
          >
            SignIn
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;


























// import React from 'react';


// const Login = () => {
//     return(

//        <div>
//           <form >
//         <fieldset className="fieldset p-5">
//           <label className="label">Email</label>
//           <input type="email" className="input" placeholder="Email" />
//           <label className="label">Password</label>
//           <input type="password" className="input" placeholder="Password" />
//           <div><a className="link link-hover">Forgot password?</a></div>
//           <button className="btn btn-neutral mt-4 w-1/2">Login</button>
//         </fieldset>


//           </form>
//          </div>


//     );
// }
// export default Login;