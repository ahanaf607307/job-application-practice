import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../Auth/Firebase/AuthProvider'

function AddJob() {

  const {users} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData (e.target)
    const objectFormData = Object.fromEntries(formData.entries())
    const {min ,max , currency, ...newJob} = objectFormData 
    newJob.salaryRange = {
      min , max , currency
    }
    console.log(newJob)


    fetch('http://localhost:5000/jobs' , {
      method:'POST',
      headers:{
         'content-type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Job Added Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch(error =>{
      console.log('error from jobs addd -->' , error)
    })
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-violet-500 text-center font-semibold my-10'>Add Job Post</h1>

      <form onSubmit={handleSubmit} className="card-body w-[300px] md:w-[600px] lg:w-[800px] ">
        <div className="form-control">
            {/* job title  */}
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" name='jobTitle' placeholder="Job Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* Location  */}
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name='location' placeholder="Location" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* Job Type */}
          <select name="jobType" className=' border-2 px-2 py-3 rounded-lg' id="">
            <option >Job Type</option>
            <option value="full time">Full Time</option>
            <option value="Intern">Intern</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>
        <div className="form-control">
            {/* category */}
          <select name="jobType" className=' border-2 px-2 py-3 rounded-lg' id="">
            <option >Category</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Finace">Finace</option>
          </select>
        </div>
        <div className="form-control">
            {/* category */}
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name='category' placeholder="Category" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* applicationDeadline */}
          <label className="label">
            <span className="label-text">ApplicationDeadline</span>
          </label>
          <input type="text" name='applicationDeadline' placeholder="ApplicationDeadline" className="input input-bordered" required />
        </div>
        <div className="salary md:flex gap-x-5 items-center">
             {/* salaryRange */} 
             <h1>Salary Range</h1>
        <div className="form-control">
          
          <label className="label">
            <span className="label-text">Max</span>
          </label>
          <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
        </div>
        <div className="form-control">
           
          <label className="label">
            <span className="label-text">Min</span>
          </label>
          <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/*Currency Type */}
          <select name="jobType" className=' border-2 px-2 py-3 rounded-lg' id="">
            <option >Currency</option>
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>
        </div>
        <div className="form-control">
            {/* description */}
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea type="text" name='description' placeholder="Description" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* requirements */}
          <label className="label">
            <span className="label-text">Requirements</span>
          </label>
          <input type="text" name='requirements' placeholder="Requirements" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* responsibilities */}
          <label className="label">
            <span className="label-text">Responsibilities</span>
          </label>
          <input type="text" name='responsibilities' placeholder="Responsibilities" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* status */}
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input type="text" name='status' placeholder="Status" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* hr_name */}
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input value={users?.displayName} type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* hr_email */}
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input value={users?.email} type="text" name='hr_email' placeholder="HR Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* company_logo */}
          <label className="label">
            <span className="label-text">Company Logo Url</span>
          </label>
          <input type="text" name='company_logo_url' placeholder="Company Logo Url" className="input input-bordered" required />
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default AddJob
