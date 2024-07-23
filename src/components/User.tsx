import React, { useState } from "react";

// Here we specify our state cuz it may be null or an object of type AuthUser

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Anxhelo",
      email: "anxhelo@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  console.log("This is user:", user);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
