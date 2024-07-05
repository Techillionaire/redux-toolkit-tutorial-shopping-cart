import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../redux/slice/CartSlice';

const Card = ({ itemprop }) => {
    const { id, image, price, name } = itemprop
    const dispatch = useDispatch()

    return (
        <div className='shadow rounded-md'>
            <div className=' h-[400px]  flex justify-center items-center'>
                <img src={image} alt="" className='w-[200px]' />
            </div>

            <div className='mt-6 flex justify-between items-center px-4'>
                <p className='text-sm font-bold mb-3 h-12'>
                    {name}
                </p>
                <p className='text-xl font-bold mb-3'>
                    N{price}
                </p>
                
            </div>
            <button className='bg-guy p-2 w-full shadow' onClick={() => dispatch(add(itemprop))}>Add To Cart</button>
        </div>
    )
}

export default Card
