import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { searchFoods } from '../store/cart/cartslice';
import { setSearch } from '../store/cart/searchSlice';
const Navbar = () => {
  const{search} = useSelector(state=>state.search)
  const dispatch = useDispatch()
  

  return (
    <div className='flex flex-col md:flex-row justify-between items-center py-2 mx-5 gap-2'>

          <div className='font-bold'>
                <p>{new Date().toDateString()}</p>
                <p className='text-sm font-medium leading-5'>Flavero foods</p>
          </div>
          <nav>
                <ul className='flex items-center justify-center gap-x-5'>
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/foods'>foods</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>about</NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact'>contact</NavLink>
                  </li>
                 </ul>
          </nav>
          <div>
            <input type="text" className="text-sm w-full border px-2 py-1 outline-none rounded shadow-slate-100 md:w-[25vw]" placeholder='Search'
            onChange={(e) => dispatch(setSearch(e.target.value))} value={search}
            
            />
          </div>
    </div>
  )
}

export default Navbar