import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Common/Footer";
import Navbar from "../Pages/Common/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
  <div>
  <Navbar/>
  </div>
      {/* outlet */}
      {/* className="max-w-7xl mx-auto flex-1" */}
      <div className=" flex-1" >
        <Outlet />
      </div>
      {/* outlet ends */}
<div>
<Footer/>
</div>
    </div>
  );
}

export default MainLayout;
