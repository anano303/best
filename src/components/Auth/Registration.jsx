// RegistrationForm.jsx

import React, { useState } from "react";
import { saveUserData } from "./Localstorage";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!name) {
      errors.name = "Name is required";
    }
    if (!userName) {
      errors.userName = "UserName is required";
    }

    // Validate surname
    if (!surname) {
      errors.surname = "Surname is required";
    }

    // Validate birthdate
    if (!birthdate) {
      errors.birthdate = "Birthdate is required";
    } else {
      const today = new Date();
      const birthdateDate = new Date(birthdate);
      const age = today.getFullYear() - birthdateDate.getFullYear();
      const month = today.getMonth() - birthdateDate.getMonth();
      if (
        month < 0 ||
        (month === 0 && today.getDate() < birthdateDate.getDate())
      ) {
        age--;
      }
      if (age < 14) {
        errors.birthdate = "You must be at least 14 years old";
      }
    }

    // Validate mobile number
    if (!mobileNumber) {
      errors.mobileNumber = "Mobile number is required";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      errors.email = "Invalid email address";
    }

    // Validate password
    // Add your password validation pattern here
    // For example, a password with at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!password || !passwordPattern.test(password)) {
      errors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleRegistration = () => {
    if (validateForm()) {
      // Perform registration logic here
      // For simplicity, let's just log the form data for now
      console.log("Name:", name);
      console.log("userName:", userName);
      console.log("Surname:", surname);
      console.log("Birthdate:", birthdate);
      console.log("Mobile Number:", mobileNumber);
      console.log("Email:", email);
      console.log("Password:", password);
      saveUserData("userData", {
        name,
        surname,
        userName,
        birthdate,
        mobileNumber,
        email,
        password,
      });
      window.alert("Registration successful! Please Log in");
      navigate("/login");
    }
  };

  return (
    <div className="registr">
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: errors.name }}
        ></p>
      )}
      <br />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      {errors.surname && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: errors.surname }}
        ></p>
      )}
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {errors.userName && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: errors.userName }}
        ></p>
      )}
      <br />
      <input
        type="date"
        placeholder="Birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      {errors.birthdate && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: errors.birthdate }}
        ></p>
      )}
      <br />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      {errors.mobileNumber && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: errors.mobileNumber }}
        ></p>
      )}
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: errors.email }}
        ></p>
      )}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: errors.password }}
        ></p>
      )}
      <br />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
