import React from 'react';
import { useState } from "react";
import Evaluation from './Evaluation';
// import { Link } from "react-router";

const judgeWorks = [
  {
    id: 1,
    title: "AI-Based Student Attendance System",
    studentName: "Alice Rahman",
    studentId: "2023822077",
    supervisor: "Dr. John Smith",
    reportType: "Project",
    status: "Pending Evaluation",
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    studentName: "Nusrat Jahan",
    studentId: "2023822056",
    supervisor: "Dr. Karim",
    reportType: "Thesis",
    status: "Pending Evaluation",
  },
];

const JudgeDashboard= () => {
  const [selectedWork, setSelectedWork] = useState(null);

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
                    <button
                        onClick={() => setSelectedWork(work)}
                        className="btn btn-primary btn-sm"
                        >
                        Evaluate
                    </button>



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

      {
        selectedWork &&
        <Evaluation work={selectedWork}/>
      }

    </div>
  );
};
export default JudgeDashboard;