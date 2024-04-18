import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        name: null,
        phone: null,
        payed: null,
        sub: false,
        datestart: null,
        dateend: null
    }
};

const userdataSlice = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            if (action.payload && action.payload.name && action.payload.phone) {
                const { name, phone, payed, sub, datestart, dateend } = action.payload;
                state.userData = { name, phone, payed, sub, datestart, dateend };
            }
        },
        clearUserData: (state) => {
            state.userData = initialState.userData;
        }
    }
});

export const { setUserData, clearUserData } = userdataSlice.actions;
export default userdataSlice.reducer;