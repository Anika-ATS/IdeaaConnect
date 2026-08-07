import React from "react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AssignJudges = () => {

 const axiosSecure = useAxiosSecure();

const [submissions,setSubmissions]=useState([]);

const [teachers,setTeachers]=useState([]);

const [loading,setLoading]=useState(true);


    const fetchTeachers = async () => {
      try {
        const res = await axiosSecure.get("/teachers");
        setTeachers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    

    useEffect(()=>{
   
        fetchApprovedSubmissions();

        fetchTeachers();

    },[]);


    // fetch  approved submissions

    const fetchApprovedSubmissions=async()=>{

    try{

        const res= await axiosSecure.get("/approved-submissions");
        const updated = res.data.map((item) => ({
        ...item,
        judge1: "",
        judge2: "",
    }));

    setSubmissions(updated);

        // setSubmissions(res.data);

    }
    catch(err){

        console.log(err);

    }
    finally{

        setLoading(false);

    }

}


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
  const handleAssign = async (submission) => {

      if (!submission.judge1 || !submission.judge2) {
        alert("Please select two judges.");
        return;
      }

      if (submission.judge1 === submission.judge2) {
        alert("Judge 1 and Judge 2 cannot be the same.");
        return;
      }

      try {

        const res = await axiosSecure.patch(
          `/assign-judges/${submission._id}`,
          {
            judge1Email: submission.judge1,
            judge2Email: submission.judge2,
          }
        );

        if (res.data.modifiedCount > 0) {

          alert("Judges Assigned Successfully.");

          // Remove from Assign Judges page
          setSubmissions((prev) =>
            prev.filter((item) => item._id !== submission._id)
          );

        }

      } catch (error) {
        console.log(error);
      }
  };

  // const handleAssign =async (submission) => {

  //   if (!submission.judge1 || !submission.judge2) {
  //     alert("Please select two judges.");
  //     return;
  //   }

  //   if (submission.judge1 === submission.judge2) {
  //     alert("Judge 1 and Judge 2 cannot be the same.");
  //     return;
  //   }

  //   await axiosSecure.patch(`/assign-judges/${submission._id}`,{

  //     judge1Email:submission.judge1,

  //     judge2Email:submission.judge2

  //   });

  //   alert("Judges Assigned Successfully.");

  // };

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
              teacher.email !== submission.supervisorEmail
          );

          const availableJudge2 = teachers.filter(
            (teacher) =>
              teacher.email !== submission.supervisorEmail &&
              teacher.email !== submission.judge1
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

                    {/* {submission.status} */}
                    {submission.evaluationStatus || "Pending Assignment"}

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

                    {submission.supervisorName}

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
                        key={teacher._id}
                        value={teacher.email}
                      >

                        {teacher.name} 

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
                        key={teacher._id}
                        value={teacher.email}
                      >

                        {teacher.name}

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