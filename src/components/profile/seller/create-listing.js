import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createItemThunk, findRecentListingsThunk } from "../../../services/items/items-thunks";
import { updateThunk } from "../../../services/users/users-thunks";

const CreateListingComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [itemName, setItemName] = useState("");
  const [price, SetPrice] = useState(-1);
  const [condition, setCondition] = useState("NEW");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCancel = () => {
    navigate("/profile", { state: { profileUser: currentUser } });
  };
  const createListingClickHandler = () => {
    if (itemName === "") {
      alert("Please enter an item name.");
    } else if (Number(price) === null || price < 0) {
      alert("Please enter a valid price.");
    } else if (description === "") {
      alert("Please enter an item description.");
    }
    // else if (image === "") {
    //   alert("Please upload an image.");
    // }
    else {
      const newItem = {
        name: itemName,
        condition: condition,
        price: Number(price),
        date: new Date(),
        // image: image,
        description: description,
        sellerName: currentUser.username,
      };
      dispatch(createItemThunk(newItem)).then((response) => {
        const updatedSeller = {
          username: currentUser.username,
          email: currentUser.email,
          phoneNumber: currentUser.phoneNumber,
          password: currentUser.password,
          address: currentUser.address,
          avatar: currentUser.avatar,
          role: currentUser.role,
          likes: currentUser.likes,
          listings: currentUser.listings,
          reviews: currentUser.reviews,
        };
        updatedSeller.listings = response.payload._id + "," + updatedSeller.listings;
        dispatch(updateThunk(updatedSeller)).then(() => {
          dispatch(findRecentListingsThunk(updatedSeller.listings));
          navigate("/profile", { state: { profileUser: updatedSeller } });
        });
      });
    }
  };
  return (
    <>
      <div style={{ width: "40%", marginLeft: "auto", marginRight: "auto" }}>
        <h2 className="mt-5" style={{ textAlign: "center" }}>
          <b>Create a listing</b>
        </h2>
        <TextBox placeholder="Item name" onChange={(event) => setItemName(event.target.value)} />
        <TextBox placeholder="Price" onChange={(event) => SetPrice(event.target.value)} />
        <span style={{ color: "#6c767c" }}>Condition</span>
        <select selected className="mb-2 ps-1 rounded wd-white-on-bg-color-dark-gray" style={{ width: "100%" }} onChange={(event) => setCondition(event.target.value)}>
          <option value="NEW">New</option>
          <option value="USED">Used</option>
        </select>
        <br />
        <textarea selected style={{ width: "100%" }} className="rounded ps-2 wd-white-on-bg-color-dark-gray" placeholder="Description" onChange={(event) => setDescription(event.target.value)} />
        <br />
        <div style={{ color: "#C8C8C8" }} className="mb-1 mt-1">
          Upload a picture of this item
        </div>
        <div className="row m-0 mb-3">
          <button className="col-4 rounded">Choose File</button>
          <span className="col">No file chosen</span>
        </div>
        <div className="row m-0">
          <button className="col btn btn-primary rounded-pill me-1" style={{ backgroundColor: "#105cd4", borderColor: "transparent" }} onClick={createListingClickHandler}>
            <b>Create listing</b>
          </button>
          <button className="col btn btn-secondary override-bs rounded-pill ms-1" onClick={onCancel}>
            <b>Cancel</b>
          </button>
        </div>
      </div>
    </>
  );
};

const TextBox = ({ placeholder, onChange }) => {
  return (
    <>
      <input className="form-control override-bs mt-3 mb-2 wd-center" placeholder={placeholder} onChange={onChange}></input>
    </>
  );
};

export default CreateListingComponent;
