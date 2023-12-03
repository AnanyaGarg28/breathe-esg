import { ActionCreatorWithPayload, createAsyncThunk } from "@reduxjs/toolkit";

export const signInThunk = createAsyncThunk(
    "auth/signInThunk",
    async (payload: {
        email: string,
        password: string,
        setJWT: ActionCreatorWithPayload<any, "auth/setJWT">,
        setUserData: ActionCreatorWithPayload<any, "auth/setUserData">,
    }, thunkAPI) => {
        try {
            const { email, password, setJWT, setUserData } = payload;
            const reqObject={
                email,
                password,
            };
            const body=JSON.stringify(reqObject);
            const response = await fetch(`${process.env.BACKEND_URI}/api/signin`,{
                method: "post",
                headers: { "Content-Type": "application/json" },
                body,
            }).then(res=>{
                if(res.status!==200) throw new Error(`${res.status}`);
                return res;
            }).then(res=>res.json());
            const { token } = response;
            thunkAPI.dispatch(setJWT(token));
            thunkAPI.dispatch(setUserData(token));
            return 'success';
        } catch (error: any) {
            return error.toString();
        }
    }
);