import React, { useEffect } from 'react'
import { productItems } from '../data/productItems'
import Card from '../components/Card'
import { useSelector, useDispatch } from "react-redux"
import { total } from '../redux/slice/CartSlice'


const Products = () => {
    const {cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(total())
    },[cartItems])


  return (
    <div className='section grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
      {
        productItems.map((item)=>(
            <Card key={item.id} itemprop={item}/>
        ))
      }
    </div>
  )
}

export default Products
