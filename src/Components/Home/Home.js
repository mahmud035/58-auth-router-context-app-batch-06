import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import './Home.css';

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      <h2>{user?.displayName && <span>Welcome, {user.displayName}</span>}</h2>
    </div>
  );
};

export default Home;
