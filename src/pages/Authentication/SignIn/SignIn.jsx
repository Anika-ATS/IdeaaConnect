import React,{ useState }  from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { NavLink} from "react-router";

const SignIn = () => {

  const [successMessage, setSuccessMessage] = useState("");

  const { createUser } = useAuth();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
       reset,  
    formState: { errors },
  } = useForm();

  const selectedRole = watch("role");

  const onSubmit = (data) => {
    console.log("SignUp Data:", data);

    createUser(data.email, data.password)
      .then((result) => {
        console.log("User Created:", result.user);
        setSuccessMessage("Account created successfully!");
           reset();

        // ("Account created successfully!");

        // Redirect after successful registration
        // if (data.role === "student") {
        //   navigate("/submit");
        // } else if (data.role === "teacher") {
        //   navigate("/teacher/dashboard");
        // } else if (data.role === "admin") {
        //   navigate("/admin/dashboard");
        // }
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
          Create Account
        </h2>

        
         {/*  SHOW SUCCESS MESSAGE HERE */}
        {successMessage && (
          <p className="text-green-600 text-center mb-4 font-semibold">
            {successMessage}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Role */}
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
          </div>

          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            {...register("name", { required: true })}
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", { required: true, minLength: 6 })}
          />

          <button
            type="submit"
            className="btn btn-neutral w-full"
            disabled={!selectedRole}
          >
            Sign Up
          </button>

          <p className="text-center mt-3">
            Already have an account?
          </p>

          <NavLink to="/login">
            <button
              type="button"
              className="btn btn-outline w-full mt-2"
            >
              Login
            </button>
          </NavLink>

        </form>
      </div>
    </div>
  );
};

export default SignIn;
