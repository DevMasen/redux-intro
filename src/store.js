import { configureStore } from '@reduxjs/toolkit';
import account from './features/account/accountSlice';
import customer from './features/customer/customerSlice';

const store = configureStore({
	reducer: {
		account,
		customer,
	},
});

export default store;
