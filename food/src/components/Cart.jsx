  
  import React, { useState } from 'react'
  import { IoMdClose } from "react-icons/io"
  import CartItem from './CartItem'
import { FaShoppingCart } from 'react-icons/fa'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
  const Cart = () => {
    const navigate = useNavigate()
    const [activeCart,setActiveCart] = useState(false)
    const {cart} = useSelector((state)=> state.cart)

    const totalQty = cart.reduce((total,item)=> total + item.quantity,0)
    const totalPrice = cart.reduce((total,item)=> total + item.quantity * item.price,0)
    
    return (
      <>
      
      
      <div className={`fixed right-0 top-0 bg-white w-full h-full md:w-[20vw] p-5 shadow rounded-lg ${activeCart ? "translate-x-0":"translate-x-full hidden"}transition-all duration-500 z-50`} >
        
          <div className="flex justify-between items-center">
            <span className='text-sm font-bold text-gray-800'>My Order</span>
            <IoMdClose onClick={()=> setActiveCart(!activeCart)} className='border-2 border-gray-600 rounded hover:text-red-900 hover:border-red-500 cursor-pointer'/>
          </div>

{/* order item will be included here */}

   {
   cart.length > 0 ? cart.map((item)=>(
      <CartItem key={item.id} item={item}/>
    )) : <h3 className='text-center text-gray-800 mt-3 font-semibold italic'> Your Cart is Empty</h3>
   }


       <div className="absolute bottom-0">
        <h3 className='font-semibold text-gray-800 text-sm'>items:<b className='ml-3 text-orange-700'>{totalQty}</b> </h3>
        <h3 className='text-sm text-gray-800 font-semibold'>Total Amount: {totalPrice}</h3>
        <hr className='my-2'/>
        <button className="btn bg-green-300 w-[90vw] md:w-[18vw] mb-5 my-2 text-green-900" onClick={() => navigate('/checkout')}>CheckOut</button>
       </div>

        </div>
        <FaShoppingCart className={`md:text-5xl fixed md:bottom-4 md:right-10 bottom-0 right-0 text-3xl rounded-full bg-white z-10 p-2 ${totalQty > 0 ? 'animate-bounce':''}`} onClick={()=> setActiveCart(!activeCart)}/>

        </>
    )
  }
  
  export default Cart