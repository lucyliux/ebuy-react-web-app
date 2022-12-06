import React from "react";

const LoginComponent = () => {
  return (
    <>
      <div>
      <h2 className="mt-5 mb-5" style={{ textAlign: "center" }}><b>Log in</b></h2>
      <input className="form-control override-bs mb-4 wd-center" style={{width: "40%" }} placeholder="Email"></input>
      <input className="form-control override-bs mb-5 wd-center" style={{width: "40%"}} placeholder="Password"></input>
      <button className="btn btn-primary override-bs rounded-pill wd-center" style={{width: "40%"}}><b>Log in</b></button>
      </div> </>
  );
};
export default LoginComponent;