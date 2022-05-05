import React from "react";

import { Routes, Route, Router } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import Main from "../pages/Main";
import ErrorPage from "../pages/ErrorPage";
import Users from "../users/Users";
import UserDetailsPage from "../pages/UserDetailsPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
