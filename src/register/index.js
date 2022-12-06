import React from "react";

const RegisterComponent = () => {
  return (
    <>
      <div>
        <h2 className="mt-5 mb-2" style={{ textAlign: "center" }}><b>Create an account</b></h2>
        <div className="wd-center mb-3">
          <span className="me-3">I am a</span>
          <input type="radio" value="BUYER" name="radio-role" id="radio-buyer" className="me-1"/>
          <label for="radio-buyer" className="me-3"> buyer</label><br/>
          <input type="radio" value="SELLER" name="radio-role" id="radio-seller" className="me-1"/>
          <label for="radio-seller" className="me-3"> seller</label><br/>
        </div>
      <TextBox placeholder="Username" />
      <TextBox placeholder="Email" />
      <TextBox placeholder="Phone number" />
      <TextBox placeholder="Password" />
      <button className="btn btn-primary override-bs rounded-pill wd-center" style={{width: "40%"}}><b>Ler's go!</b></button>
      </div> </>
  );
};

const TextBox = ({ placeholder }) => {
  return (
    <>
      <input className="form-control override-bs mb-4 wd-center" style={{width: "40%" }} placeholder={placeholder}></input>
    </>
  )
}
export default RegisterComponent;