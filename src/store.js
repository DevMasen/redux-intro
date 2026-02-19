import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import AccountReducer from './features/account/accountSlice';
import CustomerReducer from './features/customer/customerSlice';

const rootReducer = combineReducers({
	account: AccountReducer,
	customer: CustomerReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
