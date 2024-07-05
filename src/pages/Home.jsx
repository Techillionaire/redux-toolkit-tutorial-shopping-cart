import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
     <div className='flex items-center justify-center h-[500px]'>
     <Link className=' px-20 py-5 bg-blue-500' to="/products">SEE ALL PRODUCTS</Link>
     </div>
    </div>
  )
}

export default Home
