import React, { useState } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
	  if(user.emailVerified) {
		localStorage.setItem('token', user.accessToken);
		localStorage.setItem('user', JSON.stringify(user));
		navigate("/");
	  }else {
		  alert("Please verify your email first before login");
	  }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className='login-form'>
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
        <button type="submit" className='login-button'>Login</button>
      </form>
	  <GoogleLogin />
      <p>Need to Signup? <Link to="/signup">Create Account</Link></p>
	  <p>Forgot Password? <Link to="/reset-password">Reset Password</Link></p>
    </div>
  )
}

export default Login