// Nodified Code
import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [formData, setFormData] = useState({git 
    name: "",
    email: "",
    password: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", password: "", agreed: false });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <label>
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;

// Original Code

// import React from 'react'
// import './CSS/LoginSignup.css'

// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Your Name' />
//           <input type="email" placeholder='Email Address' />
//           <input type="password" placeholder='Password' />
//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
//         <div className="loginsignup-agree">
//           <input type="checkbox" name='' id='' />
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup
