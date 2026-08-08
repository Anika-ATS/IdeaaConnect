import React from "react";


import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import SubmitWork from "../pages/SubmitWork/SubmitWork";
import NoticePage from "../pages/Noticepage/NoticePage";
import Project from "../pages/Project/Project";
import Thesis from "../pages/Thesis/Thesis";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Authentication/Login/Login";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import PrivateRoute from "../routes/PrivateRoute";
import TeacherDashboard from "../pages/dashboard/TeacherDashboard/TeacherDashBoard";
import AdminDashboard from "../pages/dashboard/AdminDashboard/AdminDashboard";
import StudentDashboard from "../pages/dashboard/StudentDashboard/StudentDashboard";
import Submissions from "../pages/SubmitWork/Submissions";
import FinalApproval from "../pages/dashboard/AdminDashboard/FinalApproval";
import JudgeDashboard from "../pages/dashboard/JudgeDashboard/JudgeDashboard";
import AssignJudges from "../pages/dashboard/AdminDashboard/AssignJudges";
import Evaluation from "../pages/dashboard/JudgeDashboard/Evaluation";
import SupervisedWorks from "../pages/dashboard/TeacherDashboard/SupervisedWorks";
import EvaluationResult from "../pages/dashboard/AdminDashboard/EvaluationResult";
import AssignedTaskPage from "../pages/dashboard/TeacherDashboard/AssignedTaskPage";
import NoticeManagement from "../pages/dashboard/AdminDashboard/NoticeManagement";
import StudentProfile from "../pages/dashboard/StudentDashboard/StudentProfile";


export  const router = createBrowserRouter([

  { path: "/", 
     Component: RootLayout ,
      children: [
      { index: true, 
        Component: Home 
      },

      
      {
        path:'notice',
        element:<NoticePage></NoticePage>
      },
      {
        path:'project',
        element:<Project></Project>
      },
      {
        
        path:'taskpage',
        element:<AssignedTaskPage></AssignedTaskPage>
       
      },
      // demo
      {
        path:'judge/:id',
       
        element:<JudgeDashboard></JudgeDashboard>
      },
      {
        path:'evaluation/:id',
        element:<Evaluation></Evaluation>
      },
    
      {
        path:'thesis',
        element:<Thesis></Thesis>
      },

      // protection
        {
        path:'student',
        element: <PrivateRoute allowedRoles={['student']}><StudentDashboard></StudentDashboard>
        </PrivateRoute>  
      },
     
      {
        path:'submitwork',
        element: <PrivateRoute allowedRoles={['student']}><SubmitWork></SubmitWork></PrivateRoute>  
      },
      {
        path:'studentprofile',
        element: <PrivateRoute allowedRoles={['student']}><StudentProfile></StudentProfile></PrivateRoute>  
      },
       
      {
        path:'submissions',
        element: <PrivateRoute allowedRoles={['student']}><Submissions></Submissions></PrivateRoute>  
      },
     
       {
        path:'teacher',
        element: <PrivateRoute allowedRoles={['teacher']}><TeacherDashboard></TeacherDashboard></PrivateRoute>  
      },

    
      {
        path:'supervised-works',
        element: <PrivateRoute allowedRoles={['teacher']}><SupervisedWorks></SupervisedWorks></PrivateRoute>  
      },
      

        {  
        path:'admin',
        element:<PrivateRoute allowedRoles={['admin']}><AdminDashboard></AdminDashboard></PrivateRoute>
      },

       {
        path:'finalApproval',
        element: <PrivateRoute allowedRoles={['admin']}><FinalApproval></FinalApproval></PrivateRoute>  
      },

      
        {
            path: "assign-judges",
            element: <PrivateRoute allowedRoles={['admin']}><AssignJudges></AssignJudges></PrivateRoute>  
        },

        {
            path: "evaluatedresult",
            element: <PrivateRoute allowedRoles={['admin']}><EvaluationResult></EvaluationResult></PrivateRoute>  
        },
        {
            path: "noticeManagement",
            element: <PrivateRoute allowedRoles={['admin']}><NoticeManagement></NoticeManagement></PrivateRoute>  
        },



    
    
    ]
    
    
    
    
    
    
    
    },


  //it is for authentication layout

  {

    path:'/',
    Component:AuthLayouts,
     children: [
      { 
        path:'login',
        Component: Login, 
      },

       { 
        path:'signin',
        Component: SignIn, 
      },
    
    
    ]


  }

]);