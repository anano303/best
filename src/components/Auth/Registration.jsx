import React, { useState } from "react";
import { saveUserData } from "../../Localstorage";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleRegistration = () => {
    // Perform registration logic here
    // For simplicity, let's just log the form data for now
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Birthdate:", birthdate);
    console.log("Mobile Number:", mobileNumber);
    console.log("Email:", email);
    saveUserData("userData", { name, surname, birthdate, mobileNumber, email });
  };

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="date"
        placeholder="Birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
