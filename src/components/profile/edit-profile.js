import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { updateThunk } from "../../services/users/users-thunks";

const EditProfileComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [password, setPassword] = useState(currentUser.password);
  const [address, setAddress] = useState(currentUser.address);
  // const [avatar, setAvatar] = useState(currentUser.avatar);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSave = () => {
    const updatedUser = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      address: address,
      // avatar: avatar,
      role: currentUser.role,
      likes: currentUser.likes,
      listings: currentUser.listings,
      reviews: currentUser.reviews,
    }
    dispatch(updateThunk(updatedUser))
    navigate("/profile", {state: {profileUser: updatedUser}})
  }
  const onCancel = () => {
    navigate("/profile", {state: {profileUser: currentUser}});
  }
  return (
    <>
      <div className="ps-5 pe-5">
        <h1>Edit Profile</h1>
        <div className="row pt-3">
          <div className="col-12 col-md-6">
            <div style={{ width: "330px" }}>
              <div className="col-1 wd-fill rounded-circle position-relative mb-2" style={{ width: "330px", height: "330px", backgroundColor: "gray"}}>
                <img  src={currentUser.avatar} alt="img"/>
              </div>
              <div className="row ms-1 me-1">
                <button className="col rounded">Choose File</button>
                <span className="col">No file chosen</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <TextBox placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
            <TextBox placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <TextBox placeholder="Phone number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
            <TextBox placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <TextBox placeholder="Address" onChange={(event) => setAddress(event.target.value)} />

            <div className="row">
              <button className="col btn btn-primary rounded-pill ms-3 me-3" style={{ backgroundColor: "#105cd4", borderColor: "transparent" }} onClick={onSave}><b>Save</b></button>
              <button className="col btn btn-secondary override-bs rounded-pill ms-3 me-3" onClick={onCancel}><b>Cancel</b></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const TextBox = ({ placeholder, value, onChange }) => {
  return (
    <>
      <input className="form-control override-bs mb-4 wd-center" placeholder={placeholder} value={value} onChange={onChange}></input>
    </>
  )
}

export default EditProfileComponent;