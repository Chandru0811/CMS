import { useState } from "react";
import User from "./layouts/User";
import Admin from "./layouts/Admin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <div className="App">
      <div>
        {isAuthenticated ? (
          <Admin handleLogout={handleLogout} />
        ) : (
          <User handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default App;
