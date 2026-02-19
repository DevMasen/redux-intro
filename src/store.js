import { configureStore } from '@reduxjs/toolkit';
import AccountReducer from './features/account/accountSlice';
import CustomerReducer from './features/customer/customerSlice';

const store = configureStore({
	reducer: {
		account: AccountReducer,
		customer: CustomerReducer,
	},
});

export default store;
