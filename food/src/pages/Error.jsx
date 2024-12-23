import React from 'react'
import ErrorImg from '../assets/error.jpg'
const Error = () => {
  return (
    <div className='flex justify-center h-screen w-full items-center'>
        <img src={ErrorImg} alt="error404" />
        
    </div>
  )
}

export default Error