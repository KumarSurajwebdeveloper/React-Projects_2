import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset form and success message when user starts typing in a new field after submission
    if (submitSuccess) {
      setSubmitSuccess(false);
      setFormData(initialFormData); // Reset form data to initial values
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors({}); // Clear previous errors

    // Simple validation
    const errors = {};

    if (!formData.username) {
      errors.username = "Username is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setIsSubmitting(true);
      // Simulate API call delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 3500);
    }
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {formErrors.username && (
            <span className="error">{formErrors.username}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {submitSuccess && <p className="success">Registration successful!</p>}
    </div>
  );
};

export default Registration;
