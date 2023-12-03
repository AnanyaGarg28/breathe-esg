import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInThunk = createAsyncThunk(
  "auth/signInThunk",
  async (payload: { email: string; password: string }) => {
    try {
      const { email, password } = payload;
      const reqObject = {
        email,
        password,
      };
      const body = JSON.stringify(reqObject);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body,
        }
      )
        .then((res) => {
          if (res.status !== 200) throw new Error(`${res.status}`);
          return res;
        })
        .then((res) => res.json());
      const { token } = response;
      return {
        token,
      };
    } catch (error: any) {
      return {
        error:
          error.message === "401"
            ? "Invalid Credentials"
            : error.message === "404"
            ? "User not found"
            : "Something went wrong",
      };
    }
  }
);

export const signUpThunk = createAsyncThunk(
  "auth/signUpThunk",
  async (payload: { email: string; password: string }) => {
    try {
      const { email, password } = payload;
      const reqObject = {
        email,
        password,
      };
      const body = JSON.stringify(reqObject);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/signup`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body,
        }
      )
        .then((res) => {
          if (res.status !== 200) throw new Error(`${res.status}`);
          return res;
        })
        .then((res) => res.json());
      const { token } = response;
      return {
        token,
      };
    } catch (error: any) {
      return {
        error: error.message,
      };
    }
  }
);
