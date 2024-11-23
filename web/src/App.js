import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticationGuard } from "./components/authentication-guard";
import { ProfilePage } from "./pages/profile-page";
import { HomePage } from "./pages/home-page";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
    </Routes>
  );
};