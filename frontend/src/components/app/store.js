// store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userdataReducer from "./dataSlice";
import exceedReducer from "./exceedSlice";
import subincreaseReducer from "./subincreaseSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        userdata: userdataReducer,
        exceed: exceedReducer,
        subincrease: subincreaseReducer,
    },
});

export default store;