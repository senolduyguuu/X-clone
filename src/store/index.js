import { configureStore } from '@reduxjs/toolkit'
import Auth from './Auth/Auth'
export const store = configureStore({
	reducer: {
		Auth
	}
	,
})