import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  signupThunk } from "../../services/users/users-thunks";
import { useNavigate } from "react-router-dom";
import { getRecentRemoteItemsThunk } from "../../services/items/items-thunks";

const RegisterComponent = () => {
  let [role, setRole] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerClickHandler = () => {
    if (role === "") {
      alert("Please select a role.");
    } else if (username === "") {
      alert("Please enter a username.");
    } else if (email === "") {
      alert("Please enter an email.");
    } else if (phoneNumber === "") {
      alert("Please enter a phone number.");
    } else if (password === "") {
      alert("Please enter a password.");
    } else {
      const newUser = {
        role: role,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        likes: "",
        listings: "",
        reviews: "",
      };
      dispatch(signupThunk(newUser)).then((response) => {
        if (response.payload !== undefined) {
          dispatch(getRecentRemoteItemsThunk());
          alert("Success!");
          navigate("/");
        }
      });
    }
  };

  return (
    <>
      <div>
        <h2 className="mt-5 mb-2" style={{ textAlign: "center" }}>
          <b>Create an account</b>
        </h2>
        <div className="wd-center mb-3">
          <span className="me-3">I am a</span>
          <input type="radio" value="BUYER" name="radio-role" id="radio-buyer" className="me-1" onChange={() => setRole("BUYER")} />
          <label for="radio-buyer" className="me-3">
            {" "}
            buyer
          </label>
          <br />
          <input type="radio" value="SELLER" name="radio-role" id="radio-seller" className="me-1" onChange={() => setRole("SELLER")} />
          <label for="radio-seller" className="me-3">
            {" "}
            seller
          </label>
          <br />
        </div>
        <TextBox placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
        <TextBox placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
        <TextBox placeholder="Phone number" onChange={(event) => setPhoneNumber(event.target.value)} />
        <TextBox placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        <button className="btn btn-primary override-bs rounded-pill wd-center" style={{ width: "40%" }} onClick={registerClickHandler}>
          <b>Let's go!</b>
        </button>
      </div>{" "}
    </>
  );
};

const TextBox = ({ placeholder, onChange }) => {
  return (
    <>
      <input className="form-control override-bs mb-4 wd-center" style={{ width: "40%" }} placeholder={placeholder} onChange={onChange}></input>
    </>
  );
};
export default RegisterComponent;
