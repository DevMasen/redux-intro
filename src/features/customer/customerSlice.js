import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fullName: '',
	nationalId: '',
	createdAt: '',
};

const CustomerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		createAccount: {
			prepare(fullName, nationalId) {
				return {
					payload: { fullName, nationalId },
				};
			},
			reducer(state, action) {
				state.fullName = action.payload.fullName;
				state.nationalId = action.payload.nationalId;
				state.createdAt = new Date().toISOString();
			},
		},
		updateName(state, action) {
			state.fullName = action.payload;
		},
	},
});

export const { createAccount, updateName } = CustomerSlice.actions;
export default CustomerSlice.reducer;
