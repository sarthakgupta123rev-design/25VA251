import React, { useState } from 'react';

export default function StudentReg() {
  const [data, setData] = useState({
    name: "",
    tel: "",
    email: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name === "" || data.tel === "" || data.email === "") {
      alert("Fill all details");
    } else {
      alert(`Data submitted: ${data.name}`);
    }

    setData({ name: "", tel: "", email: "" });
  };

  return (
    <div>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />

        <br />

        <label>Tel</label>
        <input
          type="tel"
          name="tel"
          value={data.tel}
          onChange={handleChange}
        />

        <br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Register Here</button>
      </form>
    </div>
  );
}

// routing in react js:

/*Copilot Search Branding

Like

Dislike
Changing Routes from Home to Login in ReactJS

In ReactJS, navigation between components like Home and Login is typically handled using React Router. With the latest React Router v6, you can achieve this either declaratively or programmatically.

Using <Navigate> for Declarative Redirection

This method is useful when you want to redirect based on a condition directly in the component’s render logic.*/