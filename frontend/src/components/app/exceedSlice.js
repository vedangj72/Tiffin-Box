import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    phone: null,
    exceed: null,
};

const exceedSlice = createSlice({
    name: 'exceed',
    initialState,
    reducers: {
        setData(state, action) {
            return {
                ...state,
                name: action.payload.name,
                phone: action.payload.phone,
                exceed: action.payload.exceed,
            };
        },
    },
});

export const { setData } = exceedSlice.actions;
export default exceedSlice.reducer;