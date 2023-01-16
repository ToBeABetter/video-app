import React from "react";
import Home from "../pages/Home";
import Recommend from "../pages/Recommend/Recommend";
import { Navigate } from "react-router-dom";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/recommend", element: <Recommend /> },
  // navigate 重定向
  { path: "/", element: <Navigate to='/home' /> },
];
export default routes;
