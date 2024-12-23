import React from 'react'
import CategoryMenu from '../components/CategoryMenu'
import FoodCard from '../components/FoodCard'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div className='my-3'>
      <CategoryMenu/>
      <FoodCard/>
      <Cart/>
    </div>
  )
}

export default Home