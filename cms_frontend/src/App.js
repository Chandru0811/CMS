import React, { useEffect, useState } from "react";
import User from "./layouts/User";
import Admin from "./layouts/Admin";
import "./Styles/admin/Admin.css";
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
        case "admincms@ecscloudinfotech.sg":
          if (password === "12345678") {
            userId = 1;
            userName = "Admin";
          }
          break;
        case "admincms2@ecscloudinfotech.sg":
          if (password === "12345678") {
            userId = 2;
            userName = "Admin 2";
          }
          break;
        default:
          setIsLoading(false);
          return toast.error("Invalid email or password"); // Default to ID 3 for other users
      }
      if (userId) {
        setIsAuthenticated(true);
        sessionStorage.setItem("isAuthenticated", true);
        sessionStorage.setItem("userName", userName);
      } else {
        setIsLoading(false);
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Error during login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);

    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userName");
  };

  return (
    <div className="App">
      <div>
        {isLoading ? (
          <div className="loader-container">
            <div class="loader"></div>
          </div>
        ) : isAuthenticated ? (
          <Admin handleLogout={handleLogout} />
        ) : (
          <User handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default App;
