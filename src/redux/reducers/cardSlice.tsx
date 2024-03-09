import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartData = {
	id: number
	title: string
	info: string
	image: string
	price: number
	count: number
	background: string
}

type CartState = {
	cart: CartData[]
	error: null | string
	loading: boolean
	totalPrice: number
}

const initialState: CartState = {
	cart: [],
	error: null,
	loading: false,
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart: (state, action) => {
			const existingItem = state.cart.find(
				item => item.id === action.payload.id
			)
			if (existingItem) {
				existingItem.count++
			} else {
				state.cart.push({ ...action.payload, count: 1 })
			}
			state.totalPrice = state.cart.reduce((sum, item) => {
				return item.price * item.count + sum
			}, 0)
		},
		deleteCart: (state, action: PayloadAction<number>) => {
			const existingItem = state.cart.find(item => item.id === action.payload)
			if (existingItem) {
				existingItem.count--
				state.totalPrice -= existingItem.price
				if (existingItem.count === 0) {
					state.cart = state.cart.filter(item => item.id !== action.payload)
				}
			}
		},
		clearCart: state => {
			state.cart = []
			state.totalPrice = 0
		},
	},
})

export const { addCart, deleteCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
