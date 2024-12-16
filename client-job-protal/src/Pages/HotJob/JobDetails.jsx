import React from 'react'
import { TbCurrencyTaka } from 'react-icons/tb'
import { Link, useLoaderData } from 'react-router-dom'

function JobDetails() {
    const {_id,title,status,jobType,category,salaryRange,company,requirements,company_logo,location,description,applicationDeadline,responsibilities,hr_email,hr_name,} = useLoaderData()
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center border-2 my-20 rounded-md shadow-xl bg-blue-100 gap-5 p-5">
  
    <div className="img">
      <img src={company_logo} className="w-full rounded-xl" />
    </div>
    <div>
      <h1 className="bg-blue-400 px-2 py-1 md:w-4/12 text-center rounded-md font-semibold text-white">
        {jobType}
      </h1>
      <h1 className="text-3xl font-semibold my-5">{title}</h1>
      <div className="py-5">
        <p>Status: {status}</p>
        <p>Category : {category}</p>
        <p>Company : {company}</p>
        {/* <section className='flex items-center gap-4'>Requirements:{
            requirements.map((req,index) => <p key={index} className='border flex gap-2 border-red-500'>{req}</p>)
            }</section> */}
        {/* <section className='flex items-center gap-2 flex-wrap'>Responsibilities:{
            responsibilities.map((req,index) => <p key={index} className='border flex gap-2 border-red-500'>{req}</p>)
            }</section> */}
            <p>Deadline : {applicationDeadline}</p>
            <p>Location : {location}</p>
              <section className='flex items-center'>Salary Range : {salaryRange?.min} - {salaryRange?.max} - {salaryRange?.currency} <TbCurrencyTaka /></section>
      </div>
      <h1 className="text-sm text-gray-500">{description}</h1>
      <section className="my-5 text-gray-700">
        <h1>Email : {hr_email}</h1>
        <h1> Name : {hr_name}</h1>
      </section>
      <div className="flex justify-end px-5">
        <Link to={`/jobApply/${_id}`}><button
          className="btn bg-blue-400 text-white"
        >
          Apply Now
        </button></Link>
      </div>
    </div>
  </div>
  )
}

export default JobDetails
