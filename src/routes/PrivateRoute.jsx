import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
  //   useEffect(() => {
  //     if (!user) {
  //       toast.success("Please Log in first to access this route");
  //     }
  //   }, []);
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/signin" />;
};

export default PrivateRoute;
