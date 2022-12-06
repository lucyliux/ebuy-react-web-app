import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="pt-2" style={{marginBottom: "-50px"}}>
          <a href="/">
            <h1 className="mb-0" style={{ textAlign: "center" }}>
              eBuy
            </h1>
          </a>
        <div className="row m-0 me-5 pt-3 float-right justify-content-end position-relative" style={{ bottom: "65px" }}>       
            <LoginRegisterButton name="Login" path="login" />
            <LoginRegisterButton name="Register" path="register" />
        </div>
      </div>
      <hr className="mt-1" style={{ borderWidth: "2px" }}></hr>
    </>
  )
}

const LoginRegisterButton = ({ name, path }) => {
  let navigate = useNavigate(); 
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

export default Banner;