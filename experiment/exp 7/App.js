import React from "react";
import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div className="app">

      <h1>Student Details</h1>

      {/* Using Student Component Multiple Times */}

      <Student
        name="Sarthak Gupta"
        course="B.Tech CSE"
        marks="92"
      />

      <Student
        name="Rahul Sharma"
        course="BCA"
        marks="85"
      />

      <Student
        name="Priya Verma"
        course="MCA"
        marks="95"
      />

    </div>
  );
}

export default App;