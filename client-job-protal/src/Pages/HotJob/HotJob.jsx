import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

function HotJob() {
  const [jobs, setJobs] = useState([]);

  // fetch data using axios
  const fetchData = async () => {
    const data = await axios.get("http://localhost:5000/jobs");
    setJobs(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
  <div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
{
  jobs.map(job=> <JobCard key={job?._id} job={job}></JobCard>)
}
</div>


  </div>) 
}

export default HotJob;
