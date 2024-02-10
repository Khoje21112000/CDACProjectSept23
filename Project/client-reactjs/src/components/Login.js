import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8080/recover-password', {
        email: forgotPasswordEmail,
      });
  
      const responseString = response.data;
  
      // Use regex to extract email and password
      const emailMatch = responseString.match(/Email: (.+?),/);
      const passwordMatch = responseString.match(/Password: (.+)$/);
  
      // Check if matches are found
      const newForgetEmail = emailMatch ? emailMatch[1] : null;
      const newForgetPassword = passwordMatch ? passwordMatch[1] : null;
  
      // Now you have email and password as separate variables
      console.log('Email:', newForgetEmail);
      console.log('Password:', newForgetPassword);

      setPass(newForgetPassword);
  
    } catch (error) {
      console.error('Forgot password request failed:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };


  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" placeholder="Enter your email" 
              value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* Password input */}
            <div className="form-outline mb-4">
              <input
                type="password" id="form2Example2" className="form-control"
                placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* Checkbox */}
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label className="form-check-label" htmlFor="form2Example31">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="col">
                {/* Simple link */}
                <a href="#!" onClick={() => setShowForgotPassword(!showForgotPassword)}>
                  {showForgotPassword ? 'Back to Login' : 'Forgot password?'}
                </a>
              </div>
            </div>

            {showForgotPassword ? (
              <div className="mb-4">
                {/* Forgot Password form fields */}
                <div className="form-outline">
                  <input type="email" id="forgotPasswordEmail" className="form-control" placeholder="Enter your email"
                    value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} />
                </div><br/>
                <button type="button" className="btn btn-primary btn-block" data-bs-container="body" data-bs-toggle="popover" 
                    data-bs-placement="top" data-bs-content={pass} data-bs-title="Password" onClick={handleForgotPassword}>
                        Recover Password
                </button>   
              </div>
            ) : (
              // Submit button
              <button type="button"className="btn btn-primary btn-block"onClick={handleLogin}>Sign in</button>
            )}

            {/* Register buttons */}
            <div className="text-center">
              <p>            <br/>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
