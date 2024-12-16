import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/Firebase/AuthProvider";
import logo from "/logo.png";

function Navbar() {
  const { users, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/myApply">My Apply</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/addJobs">Add Jobs</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/myJobsPost">My Jobs Post</NavLink>{" "}
      </li>
     
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="flex gap-x-2 items-center">
          <img src={logo} className="h-10" alt="" />
          <h1 className="font-bold text-violet-600">JOB HOLDER BD</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end  ">
        {users ? (
          <button onClick={handleSignOut} className="btn bg-blue-500">
            Logout
          </button>
        ) : (
          <div className="flex gap-x-4">
            <Link className="btn bg-blue-600" to="/register">
              Register
            </Link>
            <Link className="btn bg-blue-600" to="/login">
              Login
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
