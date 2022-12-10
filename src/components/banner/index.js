import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { getSessionAllThunk } from "../../services/sessions/sessions-thunks";
import { logoutThunk, profileThunk } from "../../services/users/users-thunks";

const Banner = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("curenntrr");
  console.log(currentUser);
  return (
    <>
      <div className="pt-2" style={{marginBottom: "-50px"}}>
          <a href="/">
            <h1 className="mb-0" style={{ textAlign: "center" }}>
              eBuy
            </h1>
        </a>
        {
          (currentUser === null || currentUser === undefined) &&
          <div className="row m-0 me-5 pt-3 float-right justify-content-end position-relative" style={{ bottom: "65px" }}>
            <LoginRegisterButton name="Login" path="login" />
            <LoginRegisterButton name="Register" path="register" />
          </div>
        }
        {
          currentUser !== null && 
          <div className="row m-0 me-5 pt-3 float-right justify-content-end position-relative" style={{ bottom: "65px" }}>
              <LogoutButton />
              <Profile user={currentUser} />
          </div>
        }
      </div>
      <hr className="mt-1" style={{ borderWidth: "2px" }}></hr>
    </>
  )
}

const LoginRegisterButton = ({ name, path }) => {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate(path);
  }
  return (
    <>
      <button
        className="col-1 btn btn-primary rounded-pill me-3 align-items-right"
        style={{ fontSize: "15px", paddingTop: "4px", paddingBottom: "4px" }}
        onClick={routeChange}
      >
        {name}
      </button>
    </>
  )
}

const LogoutButton = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const logoutClickHandler = () => { 
    dispatch(logoutThunk());
    navigate("/");
  }
  return (
    <>
      <button
        className="col-1 btn btn-primary rounded-pill me-3 align-items-right"
        style={{ fontSize: "15px", paddingTop: "4px", paddingBottom: "4px" }}
        onClick={logoutClickHandler}
      >
        Logout
      </button>
    </>
  )
}

const Profile = ({ user }) => {
  return (
    <>
      <a href="/profile" className="wd-fill rounded-circle position-relative" style={{ width: "40px", height: "40px", backgroundColor: "gray"}}>
        <img  src={user.avatar} alt="img"/>
      </a>
    </>
  )
}

export default Banner;