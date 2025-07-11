import { useState } from "react";
import UserContext from "./UserContext";

export function UserProvider({ children }) {
  const [userFlag, setUserFlag] = useState(!!localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  return (
    <UserContext.Provider
      value={{ userFlag, setUserFlag, username, setUsername }}
    >
      {children}
    </UserContext.Provider>
  );
}
