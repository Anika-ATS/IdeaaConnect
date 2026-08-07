import React from "react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EvaluationResult= () => {

  const [evaluationResults, setEvaluationResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {

    axiosSecure
      .get("/evaluation-results")
      .then((res) => {
        setEvaluationResults(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, [axiosSecure]);

  // const handlePublish = (id) => {
  //   console.log("Publish:", id);
  // };
  const handlePublish = async (id) => {

    try {

      await axiosSecure.patch(`/publish-work/${id}`);

      setEvaluationResults(prev =>
        prev.filter(item => item._id !== id)
      );

    } catch (error) {
      console.log(error);
    }
  };

  // const handleReject = (id) => {
  //   console.log("Reject:", id);
  // };
  const handleReject = async (id) => {

    try {

      await axiosSecure.patch(`/reject-work/${id}`);

      setEvaluationResults(prev =>
        prev.filter(item => item._id !== id)
      );

    } catch (error) {
      console.log(error);
    }
    };


    // Loading state
  if (loading) {
      return (
        <div className="flex justify-center mt-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
  }

  if (evaluationResults.length === 0) {
    return (
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold">
          No Evaluation Results Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-6">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Evaluation Results
        </h1>

        <p className="text-gray-500 mt-2">
          Review judges' evaluations before publishing.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {evaluationResults.map((work) => (

          <div
            key={work._id}
            className="card bg-base-100 shadow-xl border border-base-300"
          >

            <div className="card-body">

              <div className="flex justify-between">

                <span className="badge badge-primary">
                  {work.workType}
                </span>

                <span
                  className={`badge ${
                    work.result === "Pass"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {work.result}
                </span>

              </div>

              <h2 className="card-title mt-2">
                {work.title}
              </h2>

              <div className="space-y-2 mt-3">

                <p>
                  <strong>Student :</strong> {work.studentName}
                </p>

                <p>
                  <strong>Student ID :</strong> {work.studentId}
                </p>

                <p>
                  <strong>Supervisor :</strong> {work.supervisorName}
                </p>

              </div>

              <div className="divider"></div>

              <div className="space-y-3">

                <div>

                  <h3 className="font-bold">
                    Judge 1
                  </h3>

                  {/* <p>{work.judge1.name}</p> */}
                  <p>Judge 1</p>

                  <p>
                    Marks :
                    <span className="font-semibold">
                      {" "}
                      {work.judge1Evaluation?.marks}/{work.totalMarks}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500">
                    {work.judge1Evaluation?.comment}
                  </p>

                </div>

                <div>

                  <h3 className="font-bold">
                    Judge 2
                  </h3>

                  <p>{work.judge2}</p>

                  <p>
                    Marks :
                    <span className="font-semibold">
                      {" "}
                      {work.judge2Evaluation?.marks}/{work.totalMarks}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500">
                    {work.judge2Evaluation?.marks}
                  </p>

                </div>

              </div>

              <div className="divider"></div>

              <div className="flex justify-between items-center">

                <div>

                  <p>
                    <strong>Average :</strong>{" "}
                    {work.averageMarks}/{work.totalMarks}
                  </p>

                </div>

                <div>

                  <span
                    className={`badge badge-lg ${
                      work.result === "Pass"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {work.result}
                  </span>

                </div>

              </div>

              <div className="card-actions justify-end mt-5">

                <button
                  onClick={() => handleReject(work._id)}
                  className="btn btn-error btn-sm"
                >
                  Reject
                </button>

                <button
                  onClick={() => handlePublish(work._id)}
                  className="btn btn-success btn-sm"
                >
                  Publish
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default EvaluationResult;