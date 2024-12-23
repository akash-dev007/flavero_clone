import React from 'react'
import FoodData from '../data/FoodData'
import FoodItem from './FoodItem'
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
const FoodCard = () => {
 const category = useSelector(state => state.category.category)
 const search = useSelector(state => state.search.search)
  return (
    <div className='container'>
        
      
         <div className='grid md:grid-cols-3 lg:grid-cols-6  gap-3'>
           {
            FoodData.filter((food) => {
               if (category === 'All') {
                  return food.name.toLowerCase().includes(search.toLowerCase())
                
               } else {
                  return food.category === category && food.name.toLowerCase().includes(search.toLowerCase())
               }
            }).map((food,i) => (
              <FoodItem key={i} data={food}/>
            ))
           }
         </div>
      
        
        </div>
  )
}

export default FoodCard