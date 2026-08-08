
import React from 'react';
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

import { Link } from "react-router";


//   {
//     id: 2,
//     title: "Blockchain Voting System",
//     studentName: "Nusrat Jahan",
//     studentId: "2023822056",
//     batch: "MIT-07",
//     supervisor: "Dr. Alam",
//     reportType: "Thesis",
//     researchArea: "Blockchain",
//     submittedAt: "2026-07-27",
//     status: "Completed",
//   },
// ];

const AssignedTaskPage= () => {
  const [judgeWorks, setJudgeWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();


  useEffect(() => {
      if (!user?.email) return;

      axiosSecure
        .get(`/judge-assignments/${user.email}`)
        .then((res) => {
          setJudgeWorks(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, [user, axiosSecure]);
    if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  
  //handeling empty state
    if (judgeWorks.length === 0) {
      return (
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold">
            No Assigned Evaluations
          </h2>

          <p className="text-gray-500 mt-2">
            You don't have any projects or theses assigned for evaluation.
          </p>
        </div>
      );
    }


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
              <th>Evaluation Process</th>
            </tr>

          </thead>

          <tbody>

            {
              judgeWorks.map(work=>(
                <tr key={work._id}>

                  <td>{work.studentName}</td>

                  <td>{work.title}</td>

                  <td>{work.supervisorName}</td>

                  <td>{work.evaluationStatus}</td>

                  <td>
                    <Link
                        to={`/judge/${work._id}`}
                        // to="/judge"
                        className="btn btn-primary btn-sm"
                        >
                        Judge Dashboard
                    </Link>
                    

                  </td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

      

    </div>
  );
};
export default AssignedTaskPage;