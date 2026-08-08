
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const NoticePage = () => {

  const axiosSecure = useAxiosSecure();

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    axiosSecure
      .get("/notices")
      .then((res) => {

        console.log("Notices:", res.data);

        setNotices(res.data);

      })
      .catch((error) => {

        console.error("Failed to fetch notices:", error);

      })
      .finally(() => {

        setLoading(false);

      });

  }, [axiosSecure]);


  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">

        <span className="loading loading-spinner loading-lg"></span>

      </div>
    );
  }


  return (

    <section className="min-h-screen bg-base-100 py-10 px-6">

      <div className="max-w-4xl mx-auto">

        {/* Page Title */}

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold">
            Notices
          </h1>

          <p className="text-gray-500 mt-2">
            All notices from admin will appear here.
          </p>

        </div>


        {/* Notice List */}

        <div className="space-y-6">

          {notices.length === 0 ? (

            <p className="text-center text-gray-500">
              No notices available at the moment.
            </p>

          ) : (

            notices.map((notice) => (

              <div
                key={notice._id}
                className="card bg-base-200 shadow hover:shadow-lg transition duration-300"
              >

                <div className="card-body">

                  <div className="flex justify-between items-center mb-2">

                    <h2 className="card-title text-lg md:text-xl">
                      {notice.title}
                    </h2>

                    <span className="text-sm text-gray-400">
                      {notice.date}
                    </span>

                  </div>

                  <p className="text-gray-600">
                    {notice.content}
                  </p>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </section>

  );
};

export default NoticePage;






















