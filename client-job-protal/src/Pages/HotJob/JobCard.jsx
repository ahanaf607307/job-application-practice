import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { TbCurrencyTaka } from 'react-icons/tb'
import { Link } from 'react-router-dom'


function JobCard({job}) {
const {_id,title,status,jobType,category,salaryRange,company,requirements,company_logo,location,description} = job 
  


  return (
    <div className=" bg-base-100 flex flex-col h-[320px] shadow-xl">
  <figure className='flex '>
    <img
    className='w-12'
      src={company_logo}
      />
      <div className='flex flex-col  items-center'>
        <h1>{company}</h1>
        <h1 className='flex items-center '><FaLocationDot />{location}</h1>
      </div>
  </figure>
  <div className="mt-4 flex-1">
    <h2 className="card-title">
    {title}
      <div className="badge badge-secondary">{status}</div>
    </h2>
    <p>{description}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {/* {
        requirements.map((req,index) =>  <section className="badge badge-outline" key={index}>{req}</section>)
      } */}
    </div>
    <div className='my-2'>
 
        <p className='flex items-center'>{salaryRange?.min} - {salaryRange?.max} - {salaryRange?.currency} <TbCurrencyTaka /></p>
   
    </div>
   
  </div>
<Link to={`/details/${_id}`}>
<button className='btn my-2'>See Details</button>
</Link>
</div>
  )
}

export default JobCard
