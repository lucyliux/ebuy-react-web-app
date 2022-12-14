import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { uploadImageThunk } from "../../services/items/items-thunks";
import { updateThunk } from "../../services/users/users-thunks";

const EditProfileComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [email, setEmail] = useState(currentUser.email);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [password, setPassword] = useState(currentUser.password);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState(currentUser.address);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var re = /\S+@\S+\.\S+/;
  const onSave = () => {
    if (email === "") {
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
      const updatedUser = {
        username: currentUser.username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        address: address,
        avatar: currentUser.avatar,
        role: currentUser.role,
        likes: currentUser.likes,
        listings: currentUser.listings,
        reviews: currentUser.reviews,
      };
      if (avatar != null) {
        dispatch(uploadImageThunk(avatar)).then((response) => {
          const link = response.payload;
          updatedUser.avatar = link;
          dispatch(updateThunk(updatedUser));
          navigate("/profile", { state: { profileUser: updatedUser } });
        });
      } else {
        dispatch(updateThunk(updatedUser));
        navigate("/profile", { state: { profileUser: updatedUser } });
      }
    }
  };
  const onCancel = () => {
    navigate("/profile", { state: { profileUser: currentUser } });
  };
  return (
    <>
      <div className="ps-5 pe-5 pb-5">
        <h1 className="m-0 p-0">Edit Profile</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <div style={{ width: "330px" }}>
              <div className="col-1 wd-fill rounded-circle position-relative mb-2" style={{ width: "330px", height: "330px", backgroundColor: "gray" }}>
                <img src={currentUser.avatar} alt="img" />
              </div>
              <div className="row ms-1 me-1">
                <input id="input" type="file" className="col rounded" onChange={(e) => setAvatar(e.target.files[0])} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h2>{currentUser.username}</h2>
            <TextBox fieldName="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <TextBox fieldName="Phone number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
            <TextBox fieldName="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <TextBox fieldName="Confirm password" onChange={(event) => setConfirmPassword(event.target.value)} type={"password"} />
            <TextBox fieldName="Address" value={address} onChange={(event) => setAddress(event.target.value)} />
            <div className="row mt-4">
              <button className="col btn btn-primary rounded-pill ms-3 me-3" style={{ backgroundColor: "#105cd4", borderColor: "transparent" }} onClick={onSave}>
                <b>Save</b>
              </button>
              <button className="col btn btn-secondary override-bs rounded-pill ms-3 me-3" onClick={onCancel}>
                <b>Cancel</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TextBox = ({ fieldName, value, onChange }) => {
  return (
    <>
      <label for={fieldName}>{fieldName}</label>
      <input id={fieldName} className="form-control override-bs mb-2 wd-center" value={value} onChange={onChange}></input>
    </>
  );
};

export default EditProfileComponent;
