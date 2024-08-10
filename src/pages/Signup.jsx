import React, { useState } from 'react'
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { Link,  useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
	  // Send verification email
      await sendEmailVerification(user);
	  
      // Inform the user
      alert('A verification email has been sent to your email address. Please verify your email to complete the signup process.');
	  if(user.emailVerified) {
		  localStorage.setItem('token', user.accessToken);
		  localStorage.setItem('user', JSON.stringify(user));
		  
		  // Redirect to login or home page
		  navigate("/");
	  }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit} className='signup-form'>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='signup-button'>Signup</button>
      </form>
      <p>Need to Login? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Signup