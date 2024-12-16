import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import PrivateRoute from "../Pages/Auth/Private/PrivateRoute";
import Register from "../Pages/Auth/Register/Register";
import Signin from "../Pages/Auth/Signin/Signin";
import AddJob from "../Pages/HotJob/AddJob";
import JobApply from "../Pages/HotJob/JobApply";
import JobDetails from "../Pages/HotJob/JobDetails";
import MyApply from "../Pages/HotJob/MyApply";
import MyJobPost from "../Pages/HotJob/MyJobPost";
import ViewApplication from "../Pages/HotJob/ViewApplication";

const router = createBrowserRouter([
  {
    errorElement: <h1 className="text-5xl text-red-500">Error </h1>,
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute><JobApply /></PrivateRoute>,
        
      },
      {
        path: "/addJobs",
        element: <PrivateRoute><AddJob /></PrivateRoute>,
        
      },
      {
        path: "/myApply",
        element: <PrivateRoute><MyApply /></PrivateRoute>,
      },
      {
        path: "/myJobsPost",
        element: <PrivateRoute><MyJobPost /></PrivateRoute>,
      },
      {
        path: "/viewApplication/:job_id",
        element: <PrivateRoute><ViewApplication /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  
]);

export default router;
