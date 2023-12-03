import { createSlice } from "@reduxjs/toolkit";
import { signInThunk } from "./authThunk";

const initialState: {
    isAuthorized: boolean,
    userDetails: any,
    JWT: string | null,
    status: "idle" | "loading" | "failed" | "success"
} = {
    isAuthorized: false,
    userDetails: null,
    JWT: null,
    status: "idle"
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setJWT: (state,action)=>{
            localStorage.setItem('token', action.payload);
            state.JWT = action.payload;
        },
        setUserData: (state,action)=>{
            const {JWT} = state;
            if(JWT){
                const encodedUserData = JWT.split('.')[1];
                state.userDetails = JSON.parse(atob(encodedUserData));
                state.isAuthorized=true;
            }
        },
        getJWTFromStorage: (state)=>{
            const token = localStorage.getItem('token');
            state.JWT=token;
        },
        setStatus: (state,action)=>{
            state.status=action.payload;
        },
        logOut: (state)=>{
            localStorage.removeItem("token");
            state.isAuthorized = false;
            state.userDetails = null;
            state.JWT = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signInThunk.fulfilled, (state, action) => {
                state.status = action.payload;
            })
    }
});

export const { setJWT, setUserData, getJWTFromStorage, setStatus, logOut } = authSlice.actions;

export default authSlice.reducer;