import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import ItemPreviewList from "../item-preview-list";

const AllListings = () => {
  const { allListings, allLikes, loading } = useSelector((state) => state.items);
  const location = useLocation();
  const profileUser = location.state.profileUser;
  console.log(profileUser)
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate("/profile", { state: { profileUser: profileUser } });
  };
  let allItems = [];
  let headerText = "";
  if (profileUser.role === "BUYER") {
    allItems = allLikes;
    headerText = "All Likes";
  } else {
    allItems = allListings;
    headerText = "All Listings";
  }
  return (
    <>
      <div className="row align-items-start">
        <div className="col-1" style={{ fontSize: "30px" }} onClick={onBackClick}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="col-11 m-0 p-0 position-relative" style={{ top: "5px" }}>
      <h4>{headerText}</h4>
          {loading && <span>Loading...</span>}
          {!loading && <ItemPreviewList items={allItems} />}
        </div>
        </div>
    </>
  );
};

export default AllListings;
