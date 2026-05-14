import React, { useState } from "react";
import "./App.css";

function App() {

  // State Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Form Validation
  const validateForm = () => {

    let newErrors = {};

    // Name Validation
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!email.includes("@")) {
      newErrors.email = "Valid email is required";
    }

    // Password Validation
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Form Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      setSuccess("Registration Successful!");

      // Clear Fields
      setName("");
      setEmail("");
      setPassword("");

      setErrors({});
    }
    else {
      setSuccess("");
    }
  };

  return (

    <div className="container">

      <div className="form-box">

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors.name && <p className="error">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && <p className="error">{errors.email}</p>}

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <button type="submit">
            Register
          </button>

        </form>

        {success && <p className="success">{success}</p>}

      </div>

    </div>

  );
}

export default App;