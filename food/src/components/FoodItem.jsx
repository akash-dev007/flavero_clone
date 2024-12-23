import React from 'react'
import { toast } from 'react-toastify';
import { AiFillStar } from "react-icons/ai";
import FormateRatting from './FormateRatting';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/cartslice';
const FoodItem = ({data:{img,name,id,category,price,desc,rating}}) => {
   const dispatch = useDispatch()
  
  return (
    
       <div className='bg-white p-4 rounded-lg relative'>
          <img src={img} alt="food" className='w-full h-auto object-cover hover:scale-110 transition-all duration-500 
       cursor-grab  rounded'/>
          <div className='col-span-1 flex justify-between text-gray-400 mt-5'>
            <p className='text-sm font-medium'>{name}</p>
            <p className='text-green-400 font-bold'>${price}</p>
          </div>
         <p className='text-sm mb-3'>{desc.slice(0,50)}...</p>
          
            <span>
              <FormateRatting stars={rating}/>

            </span>
            

            <button className='ml-auto w-full mt-3 btn text-sm bg-green-400 text-white font-bold hover:bg-transparent hover:-translate-y-3 transition-all duration-500 hover:text-green-500 ' onClick={() =>{
              dispatch(addToCart({id,name,img,price,quantity:1}))
            toast(`Added ${name} to cart`)
            }     
          
          }>Add To Cart</button>

            
          
       </div>
  

  )
}

export default FoodItem