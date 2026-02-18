import { combineReducers, createStore } from 'redux';
import AccountReducer from './features/account/accountSlice';
import CustomerReducer from './features/customer/customerSlice';

const rootReducer = combineReducers({
	account: AccountReducer,
	customer: CustomerReducer,
});

const store = createStore(rootReducer);

export default store;
