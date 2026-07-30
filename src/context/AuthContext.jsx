import { createContext, useContext, useEffect, useState } from "react";
import {
  registerUser,
  loginUser,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auto Login
  useEffect(() => {
    const token = localStorage.getItem("rohix_token");
    const savedUser = localStorage.getItem("rohix_user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // Signup
  const signup = async (formData) => {
    const data = await registerUser(formData);

    localStorage.setItem("rohix_token", data.token);
    localStorage.setItem(
      "rohix_user",
      JSON.stringify(data.user)
    );

    setUser(data.user);

    return data;
  };

  // Login
  const login = async (formData) => {
    const data = await loginUser(formData);

    localStorage.setItem("rohix_token", data.token);
    localStorage.setItem(
      "rohix_user",
      JSON.stringify(data.user)
    );

    setUser(data.user);

    return data;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("rohix_token");
    localStorage.removeItem("rohix_user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);