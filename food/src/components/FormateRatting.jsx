import React from 'react'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const FormateRatting = ({stars}) => {
  const ratings = Array.from({length:5},(ele,i) => {
     const num = i+0.5

     return(
      <span>
       {
        stars >= i+1 ? (<FaStar/>):stars >= num ? (<FaStarHalfAlt/>):(<AiOutlineStar/>)
       }
       </span>
     )
  })

  return (
    <div className='flex gap-1 text-orange-500 items-center'>{ratings} <b className='text-orange-700'>{stars}</b></div>
  )
}

export default FormateRatting