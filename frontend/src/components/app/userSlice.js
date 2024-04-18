import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: null,
        phone: null,
        isloggedIn: false,
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            if (action.payload && action.payload.name && action.payload.phone) {
                const { name, phone } = action.payload;
                state.user = { name, phone };
                state.isloggedIn = true;
            }
        },
        logout(state) {
            state.user = {
                name: null,
                phone: null,
            };
            state.isloggedIn = false; // Set isLoggedIn to false when logging out
        }
    }
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;