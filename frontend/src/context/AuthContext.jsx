import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);
  // Save token and role to localStorage when they change
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("email",email);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  }, [token]);

  useEffect(() => {
    if (userRole) {
      localStorage.setItem("userRole", userRole);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [userRole]);

  // Logout function to clear session
  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
        setToken(null);
        setUserRole(null);
        setEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        
        if (window.location.pathname !== '/') {
            window.location.href = '/';
        }
    }
};


  return (
    <AuthContext.Provider value={{ token, setToken, userRole, setUserRole,email,setEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};