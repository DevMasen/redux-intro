const initialStateCustomer = {
	fullName: '',
	nationalId: '',
	createdAt: '',
};

export default function CustomerReducer(state = initialStateCustomer, action) {
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
export function createAccount(fullName, nationalId) {
	return {
		type: 'customer/createAccount',
		payload: { fullName, nationalId, createdAt: new Date().toISOString() },
	};
}

export function updateName(fullName) {
	return { type: 'customer/updateName', payload: fullName };
}
