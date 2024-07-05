import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { increase, decrease, remove } from '../redux/slice/CartSlice';
import { useDispatch } from 'react-redux';


const CheckoutItem = ({cartItemProp}) => {
    const {id, price, amount, name, image} = cartItemProp
    const dispatch = useDispatch()

    const truncateName = (name, charLimit) => {
        if (name.length <= charLimit) {
          return name;
        }
        return name.slice(0, charLimit) + '...';
      }

  return (
    <div className='flex justify-between items-center border border-solid border-glass p-4 mb-6 rounded shadow-md bg-white' key={id}>
      <div className="flex items-center gap-4"> 
        <img src={image} alt="" className="w-20 h-20 object-cover rounded" />
      </div>
      <div className='flex flex-col items-start max-w-[6.8rem]'>
        <div>{truncateName(name, 17)}</div>
        <div className='flex items-center gap-4 mt-2'>
            <button onClick={() => dispatch(decrease({id}))} className='w-8 h-b bg-black text-center  text-white rounded'>-</button>
            <div>{amount}</div>
            <button onClick={() => dispatch(increase({id}))} className='w-8 h-b bg-black text-center  text-white rounded'>+</button>
        </div>
        
      </div>
      <div className='flex flex-col items-center gap-3'>
        <div className='cursor-pointer hover:p-1 hover:border hover:rounded-full hover:bg-guy hover:text-red-600' onClick={() => dispatch(remove({id}))}>
            <MdDeleteForever  className='text-3xl '/>
        </div>
            <div>N{(price * amount).toFixed(2)}</div>
        </div>
    </div>
  )
}

export default CheckoutItem
