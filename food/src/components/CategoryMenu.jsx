     import React, { useEffect, useState } from 'react'
     import { useDispatch,useSelector } from 'react-redux' 
     import FoodData from '../data/FoodData'
import { setCategory } from '../store/cart/categorySlice'
   
   const CategoryMenu = () => {
      const [categories,setCategories] = useState([])
      const dispatch = useDispatch()
      const selectedCategory = useSelector(state => state.category.category)
      const uniqueCategoires = () => {
         const unique = [...new Set(FoodData.map((food) => food.category))]
         setCategories(unique)
      }

      useEffect(() => {
         uniqueCategoires()
         
         
        
      },[])
     return (
       <div className='mx-5 py-5'>
        <h3 className='capitalize font-[700] text-gray-400'>find the best foods</h3>
         <div className='flex gap-3 text-sm my-4 overflow-x-scroll scroll-smooth scroll-ml-6 snap-start md:overflow-x-hidden'>
           <button className={`btn ${selectedCategory === "All" && "bg-green-500"}`} onClick={() => dispatch(setCategory('All'))}>All</button>
           
           {
            categories.map((category,index) => {
               return <button key={index} className={`btn ${selectedCategory === category && 'bg-green-500 text-white'}`} onClick={() => dispatch(setCategory(category))}>{category}</button>
            })
           }
</div>
           
       </div>
     )
   }
   
   export default CategoryMenu