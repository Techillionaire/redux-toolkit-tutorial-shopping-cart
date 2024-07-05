import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { FaBagShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../redux/slice/CheckOutSlice';

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const { amount } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        const handleScroll = () => {
          setScroll(window.scrollY > 20);
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      

  return (
   <nav className={`${scroll ? "bg-slate-50" : ""} fixed top-0 left-0 z-20 h-[70px] w-full flex items-center justify-evenly `}>
    <div>
        <Link to="/" className='text-3xl font-bold hover:text-blue-500'>Lee.</Link>
    </div>
    <div className='w-[300px] flex justify-between'>
        <Link className='hover:text-blue-500' to="/" >Home</Link>
        <Link className='hover:text-blue-500' to="/about" >About</Link>
        <Link className='hover:text-blue-500' to="/products" >Products</Link>
        <Link className='hover:text-blue-500' to="/contact" >Contact</Link>
    </div>
    <div className='relative cursor-pointer' onClick={() => dispatch(open())}>
        
         <FaBagShopping className='text-2xl opacity-80'/>
         <span className='absolute w-4 h-4 rounded-full z-10 right-[-10px] top-[-8px] flex items-center justify-center text-[11px] bg-black text-white'>{amount}</span>

    </div>
   </nav>
  )
}

export default Navbar
