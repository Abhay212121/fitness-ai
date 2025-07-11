import { useState } from "react";
import UserContext from "./UserContext";

export function UserProvider({ children }) {
  const [userFlag, setUserFlag] = useState(!!localStorage.getItem("token"));

  return (
    <UserContext.Provider value={{ userFlag, setUserFlag }}>
      {children}
    </UserContext.Provider>
  );
}
