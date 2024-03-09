import { createSlice } from '@reduxjs/toolkit'

type userState = {
	user: string[]
}

const initialState: userState = {
	user: [],
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		register: (state, action) => {
			state.user = action.payload
		},
		login: (state, action) => {},
		logout: state => {
			state.user = []
		},
	},
})

export const { register, login, logout } = userSlice.actions
export default userSlice.reducer
