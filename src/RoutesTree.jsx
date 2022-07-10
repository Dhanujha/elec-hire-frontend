import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Routes as route } from "./routes";

const RoutesTree = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.LOGIN} element={<Signin />} />
        <Route path={route.SIGNUP} element={<Signup />} />
        <Route path={route.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesTree;
