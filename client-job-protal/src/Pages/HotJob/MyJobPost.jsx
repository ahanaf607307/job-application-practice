import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { TbCurrencyTaka } from 'react-icons/tb'
import { AuthContext } from '../Auth/Firebase/AuthProvider'
import { Link } from 'react-router-dom'

function MyJobPost() {
const {users} = useContext(AuthContext)
    const [jobs , setJobs] = useState([])

 
    
    useEffect(()=> {
        axios.get(`http://localhost:5000/jobApplications?email=${users.email}` , {withCredentials: true})
        .then(res =>setJobs(res.data) )
      
    } , [])
  return (
    <div className='w-screen'>
     <h1 className='text-3xl text-center text-red-500 my-10'>Total Posted Jobs:  {jobs.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            jobs.map(job => <div className=" bg-base-100 flex flex-col h-[320px] shadow-xl">
               
                 <h1>{job?.applicant_email}</h1>
                
                </div>
             
              )
        }

      </div>
    </div>
  )
}

export default MyJobPost
