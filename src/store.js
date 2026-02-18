import { combineReducers, createStore } from 'redux';
const initialStateAccount = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
};
const initialStateCustomer = {
	fullName: '',
	nationalId: '',
	createdAt: '',
};

function AccountReducer(state = initialStateAccount, action) {
	switch (action.type) {
		case 'account/deposit':
			return { ...state, balance: state.balance + action.payload };
		case 'account/withdraw':
			return { ...state, balance: state.balance - action.payload };
		case 'account/requestLoan':
			if (state.loan > 0) return state;
			return {
				...state,
				loan: action.payload.amount,
				loanPurpose: action.payload.purpose,
				balance: state.balance + action.payload.amount,
			};
		case 'account/payLoan':
			return {
				...state,
				loan: 0,
				loanPurpose: '',
				balance: state.balance - state.loan,
			};
		default:
			return state;
	}
}

function CustomerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		case 'customer/createAccount':
			return {
				...state,
				fullName: action.payload.fullName,
				nationalId: action.payload.nationalId,
				createdAt: action.payload.createdAt,
			};
		case 'customer/updateName':
			return { ...state, fullName: action.payload };
		default:
			return state;
	}
}

const rootReducer = combineReducers({ AccountReducer, CustomerReducer });

const store = createStore(rootReducer);

//! Using Action Creators for dispatch an action

function deposit(amount) {
	return { type: 'account/deposit', payload: amount };
}
function withdraw(amount) {
	return { type: 'account/withdraw', payload: amount };
}
function requestLoan(amount, purpose) {
	return {
		type: 'account/requestLoan',
		payload: { amount: amount, purpose: purpose },
	};
}
function payLoan() {
	return { type: 'account/payLoan' };
}

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(50));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'Cow Pussy'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createAccount(fullName, nationalId) {
	return {
		type: 'customer/createAccount',
		payload: { fullName, nationalId, createdAt: new Date().toISOString() },
	};
}

function updateName(fullName) {
	return { type: 'customer/updateName', payload: fullName };
}

store.dispatch(createAccount('Masein', '3080384660'));
console.log(store.getState());
store.dispatch(updateName('Mohammad Hosein'));
