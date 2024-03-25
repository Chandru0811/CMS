import React, { useEffect, useState } from "react";
import Admin from "./layouts/Admin";
import "./styles/custom.css";
import "./styles/sidebar.css";
import Auth from "./layouts/Auth";
import api from "./config/URL";
import { updateScreens } from "./config/ScreenFilter";
import { toast } from "react-toastify";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isAuthenticatedFromStorage =
      sessionStorage.getItem("isAuthenticated");
    if (isAuthenticatedFromStorage === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (email, password) => {
    setIsLoading(true); // Set loading state to true during login process

    try {
      let userId, userName;
      switch (email) {
        case "admin@artylearning.sg":
          if (password === "12345678") {
            userId = 1;
            userName = "Admin";
          }
          break;
        case "branchadmin@artylearning.sg":
          if (password === "12345678") {
            userId = 2;
            userName = "Branch Admin";
          }
          break;
        case "staff@artylearning.sg":
          if (password === "12345678") {
            userId = 4;
            userName = "Staff";
          }
          break;
        case "staffadmin@artylearning.sg":
          if (password === "12345678") {
            userId = 5;
            userName = "Staff Admin";
          }
          break;
        case "teacher@artylearning.sg":
          if (password === "12345678") {
            userId = 6;
            userName = "Teacher";
          }
          break;
        default:
          setIsLoading(false);
          return toast.error("Invalid email or password"); // Default to ID 3 for other users
      }
      if (userId) {
        const response = await api.get(`/getAllRoleInfoById/${userId}`);
        const rolePermissions = response.data;
        updateScreens(rolePermissions);
        setIsAuthenticated(true);
        sessionStorage.setItem("isAuthenticated", true);
        sessionStorage.setItem("userName", userName);
      } else {
        setIsLoading(false);
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);

    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("screens");
    sessionStorage.removeItem("userName");
  };

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : isAuthenticated ? (
        <Admin handleLogout={handleLogout} />
      ) : (
        <Auth handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
