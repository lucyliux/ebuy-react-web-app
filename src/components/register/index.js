import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../services/users/users-thunks";
import { useNavigate } from "react-router-dom";
import { getRecentRemoteItemsThunk } from "../../services/items/items-thunks";

const RegisterComponent = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var re = /\S+@\S+\.\S+/;
  const registerClickHandler = () => {
    if (role === "") {
      alert("Please select a role.");
    } else if (username === "") {
      alert("Please enter a username.");
    } else if (email === "") {
      alert("Please enter an email.");
    } else if (!re.test(email)) {
      alert("Please enter a valid email.");
    } else if (isNaN(Number(phoneNumber))) {
      alert("Please enter a valid phone number.");
    } else if (phoneNumber === "") {
      alert("Please enter a phone number.");
    } else if (password === "") {
      alert("Please enter a password.");
    } else if (confirmPassword === "") {
      alert("Please confirm your password.");
    } else if (password !== confirmPassword) {
      alert("Passwords don't match.");
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
        avatar: "https://www.simpleimageresizer.com/_uploads/photos/e7c8bb42/user_50.png"
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
        <TextBox placeholder="Password" onChange={(event) => setPassword(event.target.value)} type={"password"} />
        <TextBox placeholder="Confirm password" onChange={(event) => setConfirmPassword(event.target.value)} type={"password"} />
        <button className="btn btn-primary override-bs rounded-pill wd-center" style={{ width: "55%" }} onClick={registerClickHandler}>
          <b>Let's go!</b>
        </button>
      </div>{" "}
    </>
  );
};

const TextBox = ({ placeholder, onChange, type = "text" }) => {
  return (
    <>
      <input type={type} className="form-control override-bs mb-3 wd-center" style={{ width: "55%" }} placeholder={placeholder} onChange={onChange}></input>
    </>
  );
};
export default RegisterComponent;
