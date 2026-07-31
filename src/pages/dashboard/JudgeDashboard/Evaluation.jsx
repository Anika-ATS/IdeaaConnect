import React from 'react';
import { useState } from "react";

const Evaluation =({ work })=> {

  const [totalMarks, setTotalMarks] = useState(30);
  const [passMarks, setPassMarks] = useState(15);
  const [obtainedMarks, setObtainedMarks] = useState(0);
  const [comment, setComment] = useState("");

  const result =
    Number(obtainedMarks) >= Number(passMarks)
      ? "Pass"
      : "Fail";

  const handleSubmit = () => {

    const evaluation = {

      workId: work.id,

      student: work.studentName,

      totalMarks,

      passMarks,

      obtainedMarks,

      comment,

      result

    };

    console.log(evaluation);

    alert("Evaluation Submitted");
  };

  return (

    <div className="mt-10 border rounded-xl p-6 bg-base-200">

      <h2 className="text-2xl font-bold mb-6">
        Evaluate Report
      </h2>

      <div className="space-y-4">

        <input
          className="input input-bordered w-full"
          value={work.studentName}
          readOnly
        />

        <input
          className="input input-bordered w-full"
          value={work.title}
          readOnly
        />

        <div className="grid grid-cols-3 gap-4">

          <input
            type="number"
            className="input input-bordered"
            value={totalMarks}
            onChange={(e)=>setTotalMarks(e.target.value)}
          />

          <input
            type="number"
            className="input input-bordered"
            value={passMarks}
            onChange={(e)=>setPassMarks(e.target.value)}
          />

          <input
            type="number"
            className="input input-bordered"
            value={obtainedMarks}
            onChange={(e)=>setObtainedMarks(e.target.value)}
          />

        </div>

        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Comment"
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />

        <div className="bg-base-100 rounded-lg p-4">

          <p>
            Total Marks :
            <span className="font-bold">
              {" "}
              {totalMarks}
            </span>
          </p>

          <p>
            Pass Marks :
            <span className="font-bold">
              {" "}
              {passMarks}
            </span>
          </p>

          <p>
            Obtained :
            <span className="font-bold">
              {" "}
              {obtainedMarks}
            </span>
          </p>

          <p
            className={`font-bold text-lg ${
              result==="Pass"
                ? "text-green-600"
                : "text-red-600"
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

  );
};
export default  Evaluation;