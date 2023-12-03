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
