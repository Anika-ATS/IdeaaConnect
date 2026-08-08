import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
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
  const { signInUser ,setUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  const selectedRole = watch("role");

  // const onSubmit = (data) => {
  //   console.log("Login Data:", data);

  //   //  login function
  //   signInUser(data.email, data.password )
  //     .then(result => {
  //         const loggedInUser = { ...result.user, role: data.role };  
  //          setUser(loggedInUser); 
  //       // console.log(result.user);

  //       //  redirect  after successful login
  //       if (data.role === "student") {
  //         navigate("/student");
  //       } else if (data.role === "teacher") {
  //         navigate("/teacher");
  //       } else if (data.role === "admin") {
  //         navigate("/admin");
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

    // const onSubmit = async (data) => {
    // try {
    //   // Firebase Login
    //   const result = await signInUser(data.email, data.password);

    //   // fetch user from DB
    //   const res = await axiosSecure.get(`/users/${result.user.email}`);

    //   const dbUser = res.data;

    //   if (!dbUser) {
    //     alert("User not found in database.");
    //     return;
    //   }

    //   // Checking selected role with database role
    //   if (dbUser.role !== data.role) {
    //     alert(
    //       `This account is registered as ${dbUser.role}. Please select the correct role.`
    //     );
    //     return;
    //   }

    //   // Save user in Auth Context
    //   setUser({
    //     ...result.user,
    //     role: dbUser.role,
    //     name: dbUser.name,
    //     batch: dbUser.batch,
    //     idNumber: dbUser.idNumber,
    //   });

    //   // Redirect after login
    //   if (dbUser.role === "student") {
    //     navigate("/student");
    //   } else if (dbUser.role === "teacher") {
    //     navigate("/teacher");
    //   } else if (dbUser.role === "admin") {
    //     navigate("/admin");
    //   }

    // } catch (error) {
    //   console.log(error);
    //   alert("Invalid email or password.");
    // }
    // };
    
  const onSubmit = async (data) => {
    try {
      // ==========================================
      // 1. Firebase Login
      // ==========================================
      const result = await signInUser(
        data.email,
        data.password
      );

      console.log("Firebase user:", result.user);

      // ==========================================
      // 2. ADMIN LOGIN
      // ==========================================
      if (data.role === "admin") {
        console.log("Checking admin collection...");

        const adminRes = await axiosSecure.get(
          `/admins/${result.user.email}`
        );

        const dbAdmin = adminRes.data;

        console.log("Admin from MongoDB:", dbAdmin);

        if (!dbAdmin) {
          alert("Admin account not found.");
          return;
        }

        if (dbAdmin.role !== "admin") {
          alert("This account is not an admin account.");
          return;
        }

        // Save admin to Auth Context
        setUser({
          ...result.user,
          role: "admin",
          name: dbAdmin.name,
          idNumber: dbAdmin.idNumber,
        });

        // Go to admin dashboard
        navigate("/admin");

        return;
      }

      // ==========================================
      // 3. STUDENT / TEACHER LOGIN
      // ==========================================
      const userRes = await axiosSecure.get(
        `/users/${result.user.email}`
      );

      const dbUser = userRes.data;

      console.log("User from MongoDB:", dbUser);

      if (!dbUser) {
        alert("User not found in database.");
        return;
      }

      // ==========================================
      // 4. CHECK ROLE
      // ==========================================
      if (dbUser.role !== data.role) {
        alert(
          `This account is registered as ${dbUser.role}. Please select the correct role.`
        );
        return;
      }

      // ==========================================
      // 5. SAVE USER IN AUTH CONTEXT
      // ==========================================
      setUser({
        ...result.user,
        role: dbUser.role,
        name: dbUser.name,
        batch: dbUser.batch,
        idNumber: dbUser.idNumber,
      });

      // ==========================================
      // 6. REDIRECT
      // ==========================================
      if (dbUser.role === "student") {
        navigate("/student");
      } else if (dbUser.role === "teacher") {
        navigate("/teacher");
      }

    } 
    
    catch (error) {
      console.error("Login error:", error);

      if (
        error.response?.status === 404 &&
        data.role === "admin"
      ) {
        alert("Admin account was not found in the admins collection.");
        return;
      }

      alert(
        error.response?.data?.message ||
        error.message ||
        "Invalid email or password."
      );
    }
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
