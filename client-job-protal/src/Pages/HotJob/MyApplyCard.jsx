
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { TbCurrencyTaka } from 'react-icons/tb'


function MyApplyCard({applyData}) {
console.log(applyData)
    const {_id,title,status,jobType,category,salaryRange,company,requirements,company_logo,location,description , applicant_email} =  applyData



  return (
<div>
    <h1>{applicant_email}</h1>
</div>


  )
}

export default MyApplyCard
