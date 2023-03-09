import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMSG: null 
    },
    reducers: {
        login: (state, action) => {
            
        },
        logout: (state, action) => {
            
        },
        checkingCredentials: (state, action) => {
            
        }
    }
});

export const {login,logout,checkingCredentials} = authSlice.actions;