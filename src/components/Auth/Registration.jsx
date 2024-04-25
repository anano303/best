import React, { useState } from "react";
import { saveUserData } from "./Localstorage";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import { Link } from "react-router-dom/dist";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!surname) {
      errors.surname = "Surname is required";
    }

    if (!birthdate) {
      errors.birthdate = "Birthdate is required";
    } else {
      const today = new Date();
      const birthdateDate = new Date(birthdate);
      let age = today.getFullYear() - birthdateDate.getFullYear();
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

    if (!mobileNumber) {
      errors.mobileNumber = "Mobile number is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      errors.email = "Invalid email address";
    }

    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!password || !passwordPattern.test(password)) {
      errors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (validateForm()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          saveUserData("userData", {
            name,
            surname,
            birthdate,
            mobileNumber,
            email,
            password,
          });
          window.alert("Registration successful! Please Log in");
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error registering user:", error.message);
        });
    }
  };

  return (
    <div className="registr">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}
        <br />
        <input
          type="date"
          placeholder="Birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        {errors.birthdate && <p style={{ color: "red" }}>{errors.birthdate}</p>}
        <br />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        {errors.mobileNumber && (
          <p style={{ color: "red" }}>{errors.mobileNumber}</p>
        )}
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <br />
        <button type="submit">Register</button>
        <button>
          <Link to="/">Back To Main</Link>
        </button>
        <button>
          <Link to="/login">Back To Log In</Link>
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
