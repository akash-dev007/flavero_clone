import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Homes'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import './App.css'
import CartItem from './components/CartItem'
import Cart from './components/Cart'
import {ToastContainer} from 'react-toastify'
import CheckOut from './components/CheckOut'
import FoodItem from './components/FoodItem'
import FoodCard from './components/FoodCard'
function App() {                
 
  return (
    <>
    <ToastContainer/>
      <Router>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>    
           <Route path='/cart/:id' element={<Cart/>}/>    
           <Route path='/foods' element={<FoodCard/>}/>    
           <Route path='/checkout' element={<CheckOut/>}/>    
           <Route path='/*' element={<Error/>}/>
        
        </Routes>
      </Router>
    </>
  )
}

export default App
