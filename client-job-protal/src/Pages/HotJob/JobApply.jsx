import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../Auth/CommonAuth/UseAuth'

function JobApply() {
    const {users} = useAuth()
    const id = useParams()
    console.log(id)



const handleJobApply = (e) => {
    e.preventDefault()
    const form = e.target;
    const linkdin = form.linkdin.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value
    const applyData = {
        linkdin,
        gitHub,
        resume,
        job_id:id,
        applicant_email : users.email,

    }
    console.log(applyData)

    fetch('http://localhost:5000/jobApplications' , {
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(applyData)
    
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            succesApply()
        }
    })

    const succesApply = () => {
        Swal.fire({
            icon: "success",
            title: "Apply Successfully",
            text: "wait some days for result ",
           
          });
    }
}

  return (
    <div className="card bg-base-100 w-full md:w-[600px] mx-auto my-20  shrink-0 shadow-2xl">
    <form onSubmit={handleJobApply} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Linkdin Id</span>
        </label>
        <input type="url" name='linkdin' placeholder="Linkdin Url" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Github Url</span>
        </label>
        <input type="url" name='gitHub' placeholder="Github Url" className="input input-bordered" required />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Resume</span>
        </label>
        <input type="url" name='resume' placeholder="Resume Url" className="input input-bordered" required />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Apply </button>
      </div>
    </form>
  </div>
  )
}

export default JobApply
