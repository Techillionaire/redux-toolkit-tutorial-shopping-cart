import {configureStore} from "@reduxjs/toolkit"
import CheckOutReducer from "../slice/CheckOutSlice"
import CartReducer from "../slice/CartSlice"

export const store = configureStore({
    reducer: {
        checkout: CheckOutReducer,
        cart: CartReducer
    }
})