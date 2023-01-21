import React from "react";
import Home from "../pages/Home";
import Recommend from "../pages/Recommend/Recommend";
import { Navigate } from "react-router-dom";
import Detail from "../pages/Detail";
import Follow from "../pages/Follow";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/recommend", element: <Recommend /> },
  { path: "/follow", element: <Follow /> },
  { path: "/detail", element: <Detail /> },
  // navigate 重定向
  { path: "/", element: <Navigate to='/home' /> },
];
export default routes;
