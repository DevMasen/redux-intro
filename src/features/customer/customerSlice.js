import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fullName: '',
	nationalId: '',
	createdAt: '',
};

const customerSlice = createSlice({
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

export const { createAccount, updateName } = customerSlice.actions;
export default customerSlice.reducer;
