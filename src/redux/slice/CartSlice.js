import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            state.amount++
            const cartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id)
            cartItem ? (cartItem.amount = cartItem.amount + 1) : state.cartItems.push({ ...action.payload, amount: 1 })
            // Update total price
            state.total += action.payload.price
        },
        increase: (state, action) => {
            state.amount++
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
            state.cartItems[itemIndex].amount += 1
            // Update total price
            state.total += state.cartItems[itemIndex].price
        },
        decrease: (state, action) => {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
            if (state.cartItems[itemIndex].amount > 0) {
                state.cartItems[itemIndex].amount -= 1
                state.amount--
                // Update total price
                state.total -= state.cartItems[itemIndex].price
                // Remove item if amount is zero
                if (state.cartItems[itemIndex].amount === 0) {
                    state.cartItems.splice(itemIndex, 1)
                }
                // Ensure the global amount is not negative
                if (state.amount < 0) {
                    state.amount = 0
                }
            }
        },
        remove: (state, action) => {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
            if (itemIndex !== -1) {
                const item = state.cartItems[itemIndex]
                state.amount -= item.amount
                // Update total price
                state.total -= item.price * item.amount
                state.cartItems.splice(itemIndex, 1)
                // Ensure the global amount is not negative
                if (state.amount < 0) {
                    state.amount = 0
                }
            }
        },
        total: (state) => {
            state.total = state.cartItems.reduce((acc, item) => acc + (item.price * item.amount), 0)
        },
        clear: (state) => {
            state.cartItems = []
            state.amount = 0
            state.total = 0
        }
    }
})

export const { add, increase, decrease, remove, total, clear } = CartSlice.actions
export default CartSlice.reducer
