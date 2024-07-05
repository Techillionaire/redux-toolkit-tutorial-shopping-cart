import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { open } from '../redux/slice/CheckOutSlice';
import { useDispatch, useSelector } from "react-redux"
import CheckoutItem from './CheckoutItem';
import { MdDeleteForever } from "react-icons/md";
import { clear } from '../redux/slice/CartSlice';


const Checkout = () => {
    const dispatch = useDispatch()
    const { cartItems, amount, total } = useSelector(state => state.cart)

    return (
        <div className='bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen'>
            <div className="h-full bg-guy sm:w-[40rem] min-w-[15rem] overflow-y-auto">
                <div className='p-6'>
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center cursor-pointer" onClick={() => dispatch(open())}>
                            <FaChevronLeft />
                            <span className='uppercase text-[0.95rem] select-none'>Continue shopping</span>
                        </div>

                        <div className='flex items-center gap-1 cursor-pointer' >
                            <FaBagShopping className='text-2xl' /> <span>({amount})</span>
                        </div>

                    </div>
                    <div className="mt-8">
                        {cartItems.length === 0 ? (
                            <div className='uppercase text-center text-3xl'>Your Shopping Bag is Empty</div>
                        ) : (
                            <>
                                {
                                    cartItems && cartItems.map(ct => (
                                        <CheckoutItem key={ct.id} cartItemProp={ct} />
                                    ))
                                }
                                <div className="flex justify-between mt-10 border shadow-md p-12 bg-white">
                                    <div>Total Cost: <span className='font-bold text-lg'>N{total}</span></div>
                                    <div className='cursor-pointer  hover:border hover:rounded-full hover:bg-guy hover:text-red-600' onClick={() => dispatch(clear())}>
                                        <MdDeleteForever className='text-3xl ' />
                                    </div>
                                </div>
                                <div className='text-center cursor-pointer bg-black text-white p-3 mt-2 rounded shadow-md'>Checkout</div>
                            </>
                        )}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Checkout
