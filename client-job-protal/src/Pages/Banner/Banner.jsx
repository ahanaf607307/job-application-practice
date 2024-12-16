import React from 'react';
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import { motion } from "framer-motion";
function Banner() {
  return (
    <div className="md:flex md:h-[700px] justify-center items-center">
    <div className='w-6/12'>
        <h1 className='text-center font-bold text-5xl'
        >WELCOME TO ,<span className='text-violet-600'> JOB HOLDER BD</span></h1>
    </div>
    <div className='w-6/12 '>
    <motion.img animate={{
      y:[50,100,50],

    }}
    transition={{
      duration:10,
      repeat: Infinity,
    }}
    className='w-72 rounded-3xl border-b-8 border-l-8 border-red-500' src={p1} alt="" />
    <motion.img animate={{
      x:[50,100,50],

    }}
    transition={{
      duration:10,
      repeat: Infinity,
    }}
    className='w-72 rounded-3xl border-b-8 border-l-8 border-red-500' src={p2} alt="" />
    </div>
  </div>
  )
}

export default Banner
