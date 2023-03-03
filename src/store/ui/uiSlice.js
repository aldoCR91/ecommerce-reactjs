import { createSlice } from "@reduxjs/toolkit";


export const uiSlice = createSlice({
    name:'ui',
    inicialState: {
        counter: 0
    },
    reducers: {
        increment: (state, /*action */) => {
            state.counter += 1;
        },
    }
});

export const {increment} = uiSlice.actions;