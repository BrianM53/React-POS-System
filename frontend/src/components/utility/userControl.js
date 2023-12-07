import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

/**
 * Provider component for managing user-related data and actions.
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 * @returns {React.ReactNode} JSX element.
 */
export function UserProvider({ children }) {
  const [userRole, setUserRole] = useState(
    () => localStorage.getItem("userRole") || "customer"
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("userName") || "John Doe"
  );
  const [userEmail, setUserEmail] = useState(
    () => localStorage.getItem("userEmail") || "john@doe.com"
  );
  const storedEmployeeId = localStorage.getItem("employeeId");
  const [employeeId, setEmployeeId] = useState(
    storedEmployeeId ? parseInt(storedEmployeeId, 10) : null
  );
  const handleLogout = () => {
    // Clear state
    setUserRole(null);
    setUserName("");
    setUserEmail("");
    setEmployeeId(null);

    // Clear localStorage
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("employeeId");
  };

  useEffect(() => {
    localStorage.setItem("userRole", userRole);
  }, [userRole]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("userEmail", userEmail);
  }, [userEmail]);

  useEffect(() => {
    localStorage.setItem("employeeId", employeeId);
  }, [employeeId]);

  return (
    <UserContext.Provider
      value={{
        userRole,
        setUserRole,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        employeeId,
        setEmployeeId,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

/**
 * Hook for accessing user-related data and actions from the UserContext.
 * @function
 * @returns {UserContext} User context values.
 */
export function useUser() {
  return useContext(UserContext);
}

// export function getUserRole() {
//   return localStorage.getItem("userRole") || "customer";
// }
// export function getUserName() {
//   return localStorage.getItem("userName") || "John Doe";
// }
// export function getUserEmail() {
//   return localStorage.getItem("userEmail") || "john@doe.com";
// }
// export function getEmployeeId() {
//   return localStorage.getItem("employeeId") || 1;
// }
