import React from "react";

import { Routes, Route } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import Main from "../pages/Main";
import ErrorPage from "../pages/ErrorPage";
import Users from "../users/Users";
import UserDetailsPage from "../pages/UserDetailsPage";
import HelloWorld from "../pages/HelloWorld";
import UsersForTests from "../usersForTests/UsersForTests";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/user-test" element={<UsersForTests />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
