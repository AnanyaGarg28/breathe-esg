// Import createAsyncThunk from Redux Toolkit for handling asynchronous actions
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for handling user sign-in
export const signInThunk = createAsyncThunk(
    // Unique identifier for this thunk action
  "auth/signInThunk",
  // Async function to perform the sign-in operation
  async (payload: { email: string; password: string }) => {
    try {
      // Extract email and password from payload
      const { email, password } = payload;

      // Construct the request object
      const reqObject = {
        email,
        password,
      };

      // Convert request object to JSON
      const body = JSON.stringify(reqObject);

      // Make a POST request to the login endpoint
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body,
        }
      )
      // Check if the response status is not 200 and throw an error
        .then((res) => {
          if (res.status !== 200) throw new Error(`${res.status}`);
          return res;
        })
        // Parse the JSON response
        .then((res) => res.json());

      // Extract the token from the response
      const { token } = response;

      // Return an object with the extracted token
      return {
        token,
      };
    } catch (error: any) {
      // Handle errors and return appropriate error messages
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

// Async thunk for handling user sign-up
export const signUpThunk = createAsyncThunk(
  // Unique identifier for this thunk action
  "auth/signUpThunk",
  // Async function to perform the sign-up operation
  async (payload: { email: string; password: string }) => {
    try {
      // Extract email and password from payload
      const { email, password } = payload;

      // Construct the request object
      const reqObject = {
        email,
        password,
      };

      // Convert request object to JSON
      const body = JSON.stringify(reqObject);

      // Make a POST request to the signup endpoint
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/signup`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body,
        }
      )
      // Check if the response status is not 200 and throw an error
        .then((res) => {
          if (res.status !== 200) throw new Error(`${res.status}`);
          return res;
        })
        // Parse the JSON response
        .then((res) => res.json());

      // Extract the token from the response
      const { token } = response;

      // Return an object with the extracted token
      return {
        token,
      };
    } catch (error: any) {
      // Handle errors and return the error message
      return {
        error: error.message,
      };
    }
  }
);
