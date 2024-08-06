import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../firebase';

const GoogleLogin = () => {
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info
      const user = result.user;
      console.log('User:', user);
      // You can now use user data (user.displayName, user.email, etc.)
	  localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Sign in with Google
    </button>
  );
};

export default GoogleLogin;
