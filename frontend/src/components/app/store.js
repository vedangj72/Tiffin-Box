// store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userdataReducer from "./dataSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        userdata: userdataReducer,
    },
});

export default store;