import React, { useState } from "react";

// Here we are not specifying anything cuz react is smart to do it, and we are keeping our state only as a boolean value

const Loggin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default Loggin;
