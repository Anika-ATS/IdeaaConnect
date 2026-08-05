import React from 'react';
// import { useState } from "react";
// import Evaluation from './Evaluation';

import { Link } from "react-router";

const judgeWorks = [
  {
    id: 1,
    title: "AI-Based Student Attendance System",
    studentName: "Alice Rahman",
    studentId: "2023822077",
    batch: "MIT-07",
    supervisor: "Dr. Rahman",
    reportType: "Project",
    researchArea: "Artificial Intelligence",
    submittedAt: "2026-07-25",
    status: "Pending Evaluation",
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    studentName: "Nusrat Jahan",
    studentId: "2023822056",
    batch: "MIT-07",
    supervisor: "Dr. Alam",
    reportType: "Thesis",
    researchArea: "Blockchain",
    submittedAt: "2026-07-27",
    status: "Completed",
  },
];

const JudgeDashboard= () => {
//   const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="p-8">

      <h2 className="text-3xl font-bold mb-6">
        Judge Evaluation Panel
      </h2>

      <div className="overflow-x-auto">

        <table className="table">

          <thead>

            <tr>
              <th>Student</th>
              <th>Title</th>
              <th>Supervisor</th>
              <th>Status</th>
              <th></th>
            </tr>

          </thead>

          <tbody>

            {
              judgeWorks.map(work=>(
                <tr key={work.id}>

                  <td>{work.studentName}</td>

                  <td>{work.title}</td>

                  <td>{work.supervisor}</td>

                  <td>{work.status}</td>

                  <td>
                    <Link
                        to={`/evaluation/${work.id}`}
                        className="btn btn-primary btn-sm"
                        >
                        Evaluate
                    </Link>
                    {/* <button
                        onClick={() => setSelectedWork(work)}
                        className="btn btn-primary btn-sm"
                        >
                        Evaluate
                    </button> */}



                    {/* <Link
                      onClick={()=>setSelectedWork(work)}
                      className="btn btn-primary btn-sm"
                      to="/evaluation"
                    >
                      Evaluate
                    </Link> */}

                  </td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

      {/* {
        selectedWork &&
        <Evaluation work={selectedWork}/>
      } */}

    </div>
  );
};
export default JudgeDashboard;