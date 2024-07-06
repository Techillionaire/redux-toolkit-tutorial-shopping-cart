import React from 'react'
import { useParams } from 'react-router-dom';
import { productItems } from './../data/productItems';
import {add} from "../redux/slice/CartSlice"
import { useDispatch } from 'react-redux';

const ProductPage = () => {
  const { id } = useParams()
  const item = productItems.find(item => item.id === parseInt(id))
  const { name, price, image } = item
  const dispatch = useDispatch()

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4'>
      <div className="lg:flex items-center justify-center">
        <img src={image} alt="" className='lg:w-[35rem] md:w-[30rem] w-[25rem]' />
        <div className='ml-20'>
          <div className='tex-3xl font-extrabold mb-4'>
            {name}
          </div>
          <div className='mb-4 font-bold'>N{price}</div>
          <p className='max-w-[400px] mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore odio perferendis temporibus cumque dignissimos perspiciatis nihil soluta tenetur dolores possimus?</p>
          <button onClick={() => dispatch(add(item))} className='bg-black rounded shadow-md text-white p-3 w-full'>Add To Cart</button>
        </div>

      </div>
    </div>
  )
}

export default ProductPage
