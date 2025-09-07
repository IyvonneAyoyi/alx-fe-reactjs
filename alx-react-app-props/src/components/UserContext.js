import { createContext, useState } from 'react';

// 1. Create context
const UserContext = createContext();

// 2. Create provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Anne Iyvon',
    email: 'anne.iyv@gmail.com',
    age: 20,
    bio: 'Frontend developer passionate about geospatial tech.',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;