import React from 'react';
import { Link,useParams} from "react-router";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

// , Navigate,, useParams 
 // Only judge can access this page
  // if (!authorized) {
  //   return <Navigate to="/login" replace />;
  // }

const JudgeDashboard = () => {

  const { user } = useAuth();
  const [judgeWorks, setJudgeWorks] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  // const [judgeProfile, setJudgeProfile] = useState(null);
  // const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!user?.email) return;

  //   setLoading(true);

  //   axiosSecure
  //     .get(`/users/${user.email}`)
  //     .then((res) => {
  //       setJudgeProfile(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Failed to load user:", err);
  //     });
  // }, [user?.email, axiosSecure]);


  useEffect(() => {
    //  || !id
    if (!user?.email) return;
    setLoading(true);

    axiosSecure
      // .get(`/judge-assignment/${id}?email=${user.email}`)
      .get(`/judge-assignments/${user.email}`)
      .then((res) => {
        // setWork(res.data);
         setJudgeWorks(res.data);
      })
      .catch((err) => {
        console.log("Failed to load assigned work:", err);
        setJudgeWorks([]); //new
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email, axiosSecure]);

  // Loading
  if (loading ) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg">loading</span>
      </div>
    );
  }

 


  // if no work

  if (judgeWorks.length === 0) {
      return (
        <div className="min-h-screen bg-base-200 p-6">

          <div className="bg-base-100 shadow rounded-xl p-8 text-center">

            <h2 className="text-2xl font-bold">
              No Assigned Evaluation
            </h2>

            <p className="text-gray-500 mt-2">
              You don't have any projects or theses assigned
              for evaluation.
            </p>

          </div>

        </div>
      );
  }

  // if (!work) { 
  //   return ( 
  //     <div className="min-h-screen bg-base-200 p-6">
  //       <div className="bg-base-100 shadow rounded-xl p-8 text-center">
  //       <h2 className="text-2xl font-bold"> No Assigned Evaluation </h2>
  //         <p className="text-gray-500 mt-2"> This work is not assigned to you for evaluation. </p>
  //       </div>
  //     </div>
           
  //   ); 
  // }










  const stats = {
    assigned: 8,
    pending: 5,
    completed: 3,
  };

  return (

     <div className="min-h-screen bg-base-200 p-6">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">

         Judge Dashboard

        </h1>

        <p className="text-gray-500 mt-2">

          Manage your assigned evaluations task.

        </p>

      </div>

      {/* judgeInformation */}

      <div className="bg-base-100 shadow rounded-xl p-6 mb-8">

        <h2 className="text-2xl font-semibold mb-4">

          My Profile

        </h2>

        <p>

          <strong>Email :</strong> {user?.email}

        </p>
      

        <p>

          <strong>Role :</strong> Teacher

        </p>

         <p>
            <strong>Position:</strong>{" "}
            <span className="badge badge-primary">
              Judge
            </span>
          </p>

      </div>

      {/* //statiscs cards */}

       <div className="grid md:grid-cols-3 gap-6 mb-6">

        <div className="stat bg-base-100 shadow rounded-xl">
         

          <div className="stat-value text-primary">
            {stats.assigned}
          </div>
        </div>

        <div className="stat bg-base-100 shadow rounded-xl">
          <div className="stat-title">
            Pending Reviews
          </div>

          <div className="stat-value text-warning">
            {stats.pending}
          </div>
        </div>

        <div className="stat bg-base-100 shadow rounded-xl">
          <div className="stat-title">
            Completed Reviews
          </div>

          <div className="stat-value text-success">
            {stats.completed}
          </div>
        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        {/* Assigned judge Evaluations */}
        {/* {!work ? (
        <div className="bg-base-100 shadow rounded-xl p-8 text-center">

          <h2 className="text-2xl font-bold">
            No Assigned Work
          </h2>

          <p className="text-gray-500 mt-2">
            No project or thesis has been selected for evaluation.
          </p>

        </div>
      ) : ( */}


        <div className="card bg-base-100 shadow-xl border border-base-300">

          <div className="card-body">

            <div className="flex items-center gap-4">

              <div className="text-4xl">
                📝
              </div>

              <div>
                <h2 className="card-title text-2xl">
                  Assigned Evaluation
                </h2>

                <p className="text-gray-500">
                  Evaluate the project assigned by Admin.
                </p>
              </div>

            </div>

            <div className="divider"></div>

            {/* Work Information */}
            {
              judgeWorks.map((work) => (

                <div
                  key={work._id}
                  className="border border-base-300 rounded-xl p-6 mb-6"
                >

                  <div className="space-y-3">

                    <p>
                      <strong>Student:</strong>{" "}
                      {work.studentName}
                    </p>

                    <p>
                      <strong>Project Title:</strong>{" "}
                      {work.title}
                    </p>

                    <p>
                      <strong>Supervisor:</strong>{" "}
                      {work.supervisorName}
                    </p>

                    <p>
                      <strong>Status:</strong>{" "}

                      <span className="badge badge-warning">
                        {work.evaluationStatus || "Pending"}
                      </span>

                    </p>

                  </div>

                  <div className="flex justify-end mt-6">

                    <Link
                      to={`/evaluation/${work._id}`}
                      className="btn btn-primary"
                    >
                      Evaluate
                    </Link>

                  </div>

                </div>

              ))
            }

            {/* <div>
              
           

            <div className="space-y-3">

              <p >
                <strong>Student:</strong>{" "}
                {work.studentName}
              </p>

              <p>
                <strong>Project Title:</strong>{" "}
                {work.title}
              </p>

              <p>
                <strong>Supervisor:</strong>{" "}
                {work.supervisorName}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className="badge badge-warning">
                  {work.evaluationStatus || "Pending"}
                </span>
              </p>

            </div>

            <div className="card-actions justify-end mt-6">

              <Link
                to={`/evaluation/${work._id}`}
                className="btn btn-primary"
              >
                Evaluate
              </Link>

            </div>

       

            </div> */}



          </div>

        </div>
      

        {/* <div className="card  bg-base-100 shadow-xl border border-base-300">

          <div className="card-body">

            <div className="flex items-center gap-4">

              <div className="text-4xl">

                📝

              </div>

              <div>

                <h2 className="card-title text-2xl">

                  Assigned Judge Evaluations

                </h2>

                <p className="text-gray-500">

                  Evaluate reports assigned by Admin

                </p>

              </div>

            </div>

            <div className="divider"></div>

            <ul className="space-y-2">

              <li>✔ Assigned project/thesis list</li>

              <li>✔ Submit evaluation</li>

              

            </ul>

            <div className="card-actions justify-end mt-6">
               <Link
                        // to={`/evaluation/${work._id}`}
                        
                        className="btn btn-primary btn-sm"
                        >
                        Evaluate
              
             
              </Link>

            </div>

          </div>

        </div> */}

      </div>





    
    </div>
  );
};

export default JudgeDashboard;


















// const JudgeDashboard= () => {
//   const [judgeWorks, setJudgeWorks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();


//   useEffect(() => {
//       if (!user?.email) return;

//       axiosSecure
//         .get(`/judge-assignments/${user.email}`)
//         .then((res) => {
//           setJudgeWorks(res.data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.log(err);
//           setLoading(false);
//         });
//     }, [user, axiosSecure]);
//     if (loading) {
//     return <span className="loading loading-spinner loading-lg"></span>;
//   }
  
//   //handeling empty state
//     if (judgeWorks.length === 0) {
//       return (
//         <div className="text-center mt-16">
//           <h2 className="text-2xl font-bold">
//             No Assigned Evaluations
//           </h2>

//           <p className="text-gray-500 mt-2">
//             You don't have any projects or theses assigned for evaluation.
//           </p>
//         </div>
//       );
//     }


//   return (
//     <div className="p-8">

//       <h2 className="text-3xl font-bold mb-6">
//         Judge Evaluation Panel
//       </h2>

//       <div className="overflow-x-auto">

//         <table className="table">

//           <thead>

//             <tr>
//               <th>Student</th>
//               <th>Title</th>
//               <th>Supervisor</th>
//               <th>Status</th>
//               <th>Evaluation Process</th>
//             </tr>

//           </thead>

//           <tbody>

//             {
//               judgeWorks.map(work=>(
//                 <tr key={work._id}>

//                   <td>{work.studentName}</td>

//                   <td>{work.title}</td>

//                   <td>{work.supervisorName}</td>

//                   <td>{work.evaluationStatus}</td>

//                   <td>
//                     <Link
//                         to={`/evaluation/${work._id}`}
//                         className="btn btn-primary btn-sm"
//                         >
//                         Judge Dashboard
//                     </Link>
                    

//                   </td>

//                 </tr>
//               ))
//             }

//           </tbody>

//         </table>

//       </div>

      

//     </div>
//   );
// };
