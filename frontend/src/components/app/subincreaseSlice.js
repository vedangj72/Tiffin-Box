import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    phone: null,
    Dateend: null,
    Datestart: null,
    payed: null,
};

const subincreaseSlice = createSlice({
    name: 'subincrease',
    initialState,
    reducers: {
        setsubincrease: (state, action) => {
            return {
                ...state,
                name: action.payload.name,
                phone: action.payload.phone,
                Dateend: action.payload.Dateend,
                Datestart: action.payload.Datestart,
                payed: action.payload.payed,
            };
        },
    },
});

export const { setsubincrease } = subincreaseSlice.actions;
export default subincreaseSlice.reducer;