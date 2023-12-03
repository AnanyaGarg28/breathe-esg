import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import "./sass/app.scss";
import { PrivateRoute } from "./components/PrivateRoute";

/**
 * Renders the root component of the application.
 * @param {HTMLElement} rootElement - The root element to render the application into.
 * @returns {void}
 */
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* PrivateRoute is a custom component that ensures the user is authenticated before rendering the App component */}
          <Route path="/" element={<PrivateRoute><App/></PrivateRoute>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
