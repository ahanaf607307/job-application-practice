import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../Auth/CommonAuth/UseAuth";
import MyApplyCard from "./MyApplyCard";

function MyApply() {
  const { users } = useAuth();
  const [apply, setApply] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobApplications?email=${users?.email}`, {
        withCredentials: true,
      })
      .then((res) => console.log(setApply(res.data)));
  }, [setApply]);

  return (
    <div>
      {apply.length}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {apply.map((applyData) => (
          <MyApplyCard key={applyData?._id} applyData={applyData} />
        ))}
      </div>
    </div>
  );
}

export default MyApply;
