
import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const NoticeManagement = () => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const notice = {
      title: data.title,
      content: data.content,
      date: data.date,
    };

    try {
      const res = await axiosSecure.post("/notices", notice);

      console.log("Notice created:", res.data);

      alert("Notice published successfully!");

      reset();

    } catch (error) {
      console.error("Failed to create notice:", error);
      alert("Failed to publish notice.");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">

      {/* Page Header */}

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold">
          Notice Management
        </h1>

        <p className="text-gray-500 mt-2">
          Create and publish notices for students and teachers.
        </p>

      </div>


      {/* Notice Form */}

      <div className="max-w-3xl mx-auto">

        <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <h2 className="card-title text-2xl mb-4">
              Create New Notice
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Title */}

              <div>

                <label className="label">
                  <span className="label-text font-semibold">
                    Notice Title
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Enter notice title"
                  className="input input-bordered w-full"
                  {...register("title", {
                    required: "Notice title is required",
                  })}
                />

                {errors.title && (
                  <p className="text-error text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}

              </div>


              {/* Content */}

              <div>

                <label className="label">
                  <span className="label-text font-semibold">
                    Notice Content
                  </span>
                </label>

                <textarea
                  placeholder="Write the notice details..."
                  className="textarea textarea-bordered w-full h-40"
                  {...register("content", {
                    required: "Notice content is required",
                  })}
                />

                {errors.content && (
                  <p className="text-error text-sm mt-1">
                    {errors.content.message}
                  </p>
                )}

              </div>


              {/* Date */}

              <div>

                <label className="label">
                  <span className="label-text font-semibold">
                    Notice Date
                  </span>
                </label>

                <input
                  type="date"
                  className="input input-bordered w-full"
                  {...register("date", {
                    required: "Notice date is required",
                  })}
                />

                {errors.date && (
                  <p className="text-error text-sm mt-1">
                    {errors.date.message}
                  </p>
                )}

              </div>


              {/* Submit */}

              <div className="flex justify-end pt-4">

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Publish Notice
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NoticeManagement;
