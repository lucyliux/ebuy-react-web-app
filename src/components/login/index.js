import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../services/users/users-thunks";
import { findRecentLikesThunk, findRecentListingsThunk } from "../../services/items/items-thunks";
import { findReviewsBySellerThunk } from "../../services/reviews/reviews-thunk";
// import { getSessionAllThunk } from "../../services/sessions/sessions-thunks";

const LoginComponent = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const loginClickHandler = () => {
    const credentials = {
      username: username,
      password: password,
    };
    dispatch(loginThunk(credentials)).then(() => {
      if (currentUser) {
        dispatch(findRecentListingsThunk(currentUser.listings))
        dispatch(findRecentLikesThunk(currentUser.likes));
        dispatch(findReviewsBySellerThunk(currentUser.username));
        return navigate("/profile", { state: { profileUser: currentUser } });
      }
    })
  };
  return (
    <>
      <div>
        <h2 className="mt-5 mb-5" style={{ textAlign: "center" }}>
          <b>Log in</b>
        </h2>
        <input className="form-control override-bs mb-4 wd-center" style={{ width: "40%" }} placeholder="Username" onChange={(event) => setUsername(event.target.value)}></input>
        <input className="form-control override-bs mb-5 wd-center" style={{ width: "40%" }} placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)}></input>
        <button className="btn btn-primary override-bs rounded-pill wd-center" style={{ width: "40%" }} onClick={loginClickHandler}>
          <b>Log in</b>
        </button>
      </div>{" "}
    </>
  );
};
export default LoginComponent;
