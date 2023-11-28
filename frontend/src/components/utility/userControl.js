import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || 'customer');
  const [userName, setUserName] = useState(() => localStorage.getItem('userRole') || '');

  useEffect(() => {
    localStorage.setItem('userRole', userRole);
  }, [userRole]);

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);  

  return (
    <UserContext.Provider value={{ userRole, setUserRole, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function getUserRole() {
  return localStorage.getItem('userRole') || 'customer'; 
}
  
