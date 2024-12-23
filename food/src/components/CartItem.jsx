import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { decrementCartQuantity, incrementCartQuantity, removeFromCart } from '../store/cart/cartslice'
import { toast } from 'react-toastify'
const CartItem = ({item}) => {
 const {id,name,img,price,quantity} = item
 const dispatch = useDispatch()
 const handleDeleteCart = () =>{
   dispatch(removeFromCart(id))
   toast.error('Item removed from cart')
 }
 
  return (
    <div className='flex items-center my-2 shadow-lg p-2 rounded-lg mt-5 text-sm gap-2 w-full'>
      <FaTrash className='absolute right-7 mb-4 hover:text-red-500'onClick={handleDeleteCart}/>
      <img src={img} alt="food" className='w-10 h-auto object-cover rounded-lg'/>
      <div className='ml-2'>
        <h3 className='text-sm font-semibold'>{name}</h3>
       <div className='flex justify-between items-center my-3'>
        <span>${price}</span>
         <div className='flex items-center space-x-2'>
         <AiOutlinePlus className='border-2 rounded text-md hover:bg-green-500 hover:border-0 hover:text-white font-bold cursor-pointer' onClick={()=> dispatch(incrementCartQuantity(id))}/>
         <span className=''>{quantity}</span>
         <AiOutlineMinus className='border-2 rounded text-md hover:bg-green-500 hover:border-0 hover:text-white font-bold cursor-pointer'onClick={() => quantity > 1 ? dispatch(decrementCartQuantity(id)):quantity=1}/>
         </div>
       </div>


      </div>
    </div>
  )
}

export default CartItem     