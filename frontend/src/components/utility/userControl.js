import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || 'customer');
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || 'John Doe');
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem('userEmail') || 'john@doe.com');

  useEffect(() => {
    localStorage.setItem('userRole', userRole);
  }, [userRole]);

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);  

  useEffect(() => {
    localStorage.setItem('userEmail', userEmail);
  }, [userEmail]);  

  return (
    <UserContext.Provider value={{ userRole, setUserRole, userName, setUserName, userEmail, setUserEmail }}>
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
export function getUserName() {
  return localStorage.getItem('userName') || 'John Doe'; 
}
export function getUserEmail() {
  return localStorage.getItem('userEmail') || 'john@doe.com'; 
}
  
