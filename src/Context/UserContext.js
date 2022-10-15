import React, { createContext, useState } from 'react';
import app from '../Firebase Configuration/firebase.config';
import { getAuth } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: 'Akash' });

  const authInfo = { user: user };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
