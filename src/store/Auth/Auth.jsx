import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentAccounts: {
		id: 1,
		name: "senolduyguuu",
		avatar: "https://pbs.twimg.com/profile_images/1461426155207147526/2kLtJw2U_bigger.jpg",
		fullName: "senolduyguuu"
	},
	accounts: []
}

const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload);
			if (state.currentAccounts && action.payload === state.currentAccounts.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccounts = action.payload
		},
	}
});
export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer


