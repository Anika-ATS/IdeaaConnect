
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Evaluation = () => {


  const { id } = useParams();

  const axiosSecure = useAxiosSecure();

  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [totalMarks, setTotalMarks] = useState(30);
  const [passMarks, setPassMarks] = useState(15);
  const [obtainedMarks, setObtainedMarks] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {

      axiosSecure
          .get(`/submission/${id}`)
          .then(res => {
              setWork(res.data);
              setLoading(false);
          })
          .catch(err => {
              console.log(err);
              setLoading(false);
          });

  }, [id, axiosSecure]);
  
  // checking loading 
  if (loading) {
    return (
        <div className="flex justify-center mt-20">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
  }

  if (!work) {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold text-red-500">
                Evaluation not found.
            </h2>
        </div>
    );
}


  const result =
    Number(obtainedMarks) >= Number(passMarks)
      ? "Pass"
      : "Fail";

  const handleSubmit = () => {

    const evaluation = {
      workId: work._id,
      student: work.studentName,
      totalMarks,
      passMarks,
      obtainedMarks,
      comment,
      result,
    };

    console.log(evaluation);

    alert("Evaluation Submitted");
  };

  return (
    <div className="min-h-screen p-8 bg-base-200">

      <h2 className="text-3xl font-bold mb-6">
        Evaluation Form
      </h2>

      <div className="card bg-base-100 shadow-xl">

        <div className="card-body">

          <input
            className="input input-bordered"
            value={work.studentName}
            readOnly
          />

          <input
            className="input input-bordered"
            value={work.title}
            readOnly
          />

          <div className="grid grid-cols-3 gap-4">

            <input
              type="number"
              className="input input-bordered"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
            />

            <input
              type="number"
              className="input input-bordered"
              value={passMarks}
              onChange={(e) => setPassMarks(e.target.value)}
            />

            <input
              type="number"
              className="input input-bordered"
              value={obtainedMarks}
              onChange={(e) => setObtainedMarks(e.target.value)}
            />

          </div>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <div className="bg-base-200 rounded-lg p-4">

            <p><strong>Total Marks:</strong> {totalMarks}</p>

            <p><strong>Pass Marks:</strong> {passMarks}</p>

            <p><strong>Obtained:</strong> {obtainedMarks}</p>

            <p
              className={`font-bold ${
                result === "Pass"
                  ? "text-success"
                  : "text-error"
              }`}
            >
              {result}
            </p>

          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-success"
          >
            Submit Evaluation
          </button>

        </div>

      </div>

    </div>
  );
};

export default Evaluation;