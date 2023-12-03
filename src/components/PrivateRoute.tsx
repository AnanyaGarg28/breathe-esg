import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  getJWTFromStorage,
  setStatus,
  setUserData,
} from "../redux/auth/authSlice";
import { RootState } from "../store";
import { Loading } from "./loading";
/**
 * A component that renders the children only if the user is authorized.
 * If the user is not authorized, it redirects to the sign-in page or shows a loading indicator.
 *
 * @param children - The React nodes to be rendered if the user is authorized.
 * @returns The rendered children if the user is authorized, otherwise redirects to the sign-in page or shows a loading indicator.
 */
export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJWTFromStorage());
        dispatch(setUserData());
        dispatch(setStatus("checkedAuth"));
    }, [dispatch]);
    const isAuthorized = useSelector(
        (state: RootState) => state.auth.isAuthorized
    );
    const status = useSelector((state: RootState) => state.auth.status);

    if (!isAuthorized && status === "checkedAuth")
        return <Navigate to="/signin" />;
    else if (!isAuthorized) return <Loading />;

    return <>{children}</>;
};
