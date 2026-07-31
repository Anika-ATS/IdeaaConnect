import React from "react";

const evaluationResults= [
  {
    id: 1,
    studentName: "Alice Rahman",
    studentId: "2023822077",
    title: "AI-Based Student Attendance System",
    workType: "Project",
    supervisor: "Dr. Rahman",

    judge1: {
      name: "Dr. Karim",
      marks: 25,
      comment: "Very good implementation.",
    },

    judge2: {
      name: "Dr. Alam",
      marks: 27,
      comment: "Research quality is excellent.",
    },

    totalMarks: 30,
    average: 26,
    result: "Pass",
  },

  {
    id: 2,
    studentName: "Nusrat Jahan",
    studentId: "2023822056",
    title: "Blockchain Voting System",
    workType: "Thesis",

    supervisor: "Dr. Hasan",

    judge1: {
      name: "Dr. Rahman",
      marks: 14,
      comment: "Needs improvement.",
    },

    judge2: {
      name: "Dr. Karim",
      marks: 16,
      comment: "Average performance.",
    },

    totalMarks: 30,
    average: 15,
    result: "Pass",
  },
];

const EvaluationResult= () => {

  const handlePublish = (id) => {
    console.log("Publish:", id);
  };

  const handleReject = (id) => {
    console.log("Reject:", id);
  };

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
            key={work.id}
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
                  <strong>Supervisor :</strong> {work.supervisor}
                </p>

              </div>

              <div className="divider"></div>

              <div className="space-y-3">

                <div>

                  <h3 className="font-bold">
                    Judge 1
                  </h3>

                  <p>{work.judge1.name}</p>

                  <p>
                    Marks :
                    <span className="font-semibold">
                      {" "}
                      {work.judge1.marks}/{work.totalMarks}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500">
                    {work.judge1.comment}
                  </p>

                </div>

                <div>

                  <h3 className="font-bold">
                    Judge 2
                  </h3>

                  <p>{work.judge2.name}</p>

                  <p>
                    Marks :
                    <span className="font-semibold">
                      {" "}
                      {work.judge2.marks}/{work.totalMarks}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500">
                    {work.judge2.comment}
                  </p>

                </div>

              </div>

              <div className="divider"></div>

              <div className="flex justify-between items-center">

                <div>

                  <p>
                    <strong>Average :</strong>{" "}
                    {work.average}/{work.totalMarks}
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
                  onClick={() => handleReject(work.id)}
                  className="btn btn-error btn-sm"
                >
                  Reject
                </button>

                <button
                  onClick={() => handlePublish(work.id)}
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