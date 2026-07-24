import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;