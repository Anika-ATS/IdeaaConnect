import React, { useState } from "react";

const AssignJudges = () => {

  // -------------------------------
  // Dummy Teacher List
  // -------------------------------

  const teachers = [
    {
      id: "t01",
      name: "Dr. Rahman",
      email: "rahman@sust.edu",
      designation: "Professor",
    },
    {
      id: "t02",
      name: "Dr. Karim",
      email: "karim@sust.edu",
      designation: "Associate Professor",
    },
    {
      id: "t03",
      name: "Dr. Alam",
      email: "alam@sust.edu",
      designation: "Assistant Professor",
    },
    {
      id: "t04",
      name: "Dr. Ahmed",
      email: "ahmed@sust.edu",
      designation: "Assistant Professor",
    },
    {
      id: "t05",
      name: "Dr. Khan",
      email: "khan@sust.edu",
      designation: "Professor",
    },
    {
      id: "t06",
      name: "Dr. Islam",
      email: "islam@sust.edu",
      designation: "Associate Professor",
    },
    {
      id: "t07",
      name: "Dr. Sarker",
      email: "sarker@sust.edu",
      designation: "Assistant Professor",
    },
  ];

  // -------------------------------
  // Dummy Approved Submissions
  // -------------------------------

  const [submissions, setSubmissions] = useState([
    {
      _id: "1",
      studentName: "Alice Rahman",
      studentId: "2023822077",
      title: "AI-Based Student Attendance System",
      workType: "Project",
      supervisor: {
        id: "t01",
        name: "Dr. Rahman",
      },
      judge1: "",
      judge2: "",
      status: "Waiting for Judge Assignment",
    },

    {
      _id: "2",
      studentName: "Nusrat Jahan",
      studentId: "2023822056",
      title: "Blockchain Voting System",
      workType: "Thesis",
      supervisor: {
        id: "t03",
        name: "Dr. Alam",
      },
      judge1: "",
      judge2: "",
      status: "Waiting for Judge Assignment",
    },
  ]);

  // -------------------------------
  // Judge Selection
  // -------------------------------

  const handleJudgeChange = (id, field, value) => {
    setSubmissions((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // -------------------------------
  // Assign Judges
  // -------------------------------

  const handleAssign = (submission) => {

    if (!submission.judge1 || !submission.judge2) {
      alert("Please select two judges.");
      return;
    }

    if (submission.judge1 === submission.judge2) {
      alert("Judge 1 and Judge 2 cannot be the same.");
      return;
    }

    console.log({

      submissionId: submission._id,

      judge1: submission.judge1,

      judge2: submission.judge2,

    });

    alert("Judges Assigned Successfully.");

  };

  return (
    <div className="min-h-screen bg-base-200 p-6">

      <h1 className="text-3xl font-bold mb-2">

        Assign Judges

      </h1>

      <p className="text-gray-500 mb-8">

        Assign two judges for every approved project or thesis.

      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {submissions.map((submission) => {

          // Remove supervisor from available judges

          const availableJudge1 = teachers.filter(
            (teacher) =>
              teacher.id !== submission.supervisor.id
          );

          const availableJudge2 = teachers.filter(
            (teacher) =>
              teacher.id !== submission.supervisor.id &&
              teacher.id !== submission.judge1
          );

          return (

            <div
              key={submission._id}
              className="card bg-base-100 shadow-xl border border-base-300"
            >

              <div className="card-body">

                <div className="flex justify-between">

                  <span className="badge badge-primary">

                    {submission.workType}

                  </span>

                  <span className="badge badge-warning">

                    {submission.status}

                  </span>

                </div>

                <h2 className="card-title mt-3">

                  {submission.title}

                </h2>

                <div className="space-y-2">

                  <p>

                    <strong>Student :</strong>{" "}

                    {submission.studentName}

                  </p>

                  <p>

                    <strong>Student ID :</strong>{" "}

                    {submission.studentId}

                  </p>

                  <p>

                    <strong>Supervisor :</strong>{" "}

                    {submission.supervisor.name}

                  </p>

                </div>

                <div className="divider"></div>

                {/* Judge 1 */}

                <div>

                  <label className="font-semibold">

                    Judge 1

                  </label>

                  <select
                    className="select select-bordered w-full mt-2"
                    value={submission.judge1}
                    onChange={(e) =>
                      handleJudgeChange(
                        submission._id,
                        "judge1",
                        e.target.value
                      )
                    }
                  >

                    <option value="">
                      Select Judge 1
                    </option>

                    {availableJudge1.map((teacher) => (

                      <option
                        key={teacher.id}
                        value={teacher.id}
                      >

                        {teacher.name} ({teacher.designation})

                      </option>

                    ))}

                  </select>

                </div>

                {/* Judge 2 */}

                <div className="mt-4">

                  <label className="font-semibold">

                    Judge 2

                  </label>

                  <select
                    className="select select-bordered w-full mt-2"
                    value={submission.judge2}
                    onChange={(e) =>
                      handleJudgeChange(
                        submission._id,
                        "judge2",
                        e.target.value
                      )
                    }
                  >

                    <option value="">
                      Select Judge 2
                    </option>

                    {availableJudge2.map((teacher) => (

                      <option
                        key={teacher.id}
                        value={teacher.id}
                      >

                        {teacher.name} ({teacher.designation})

                      </option>

                    ))}

                  </select>

                </div>

                <div className="card-actions justify-end mt-6">

                  <button
                    onClick={() => handleAssign(submission)}
                    className="btn btn-success"
                  >

                    Assign Judges

                  </button>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
};

export default AssignJudges;