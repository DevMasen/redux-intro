import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import AccountReducer from './features/account/accountSlice';
import CustomerReducer from './features/customer/customerSlice';

const rootReducer = combineReducers({
	account: AccountReducer,
	customer: CustomerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
