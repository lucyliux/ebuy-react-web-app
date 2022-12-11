import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import ItemPreviewList from "../item-preview-list";

const AllListings = () => {
  // const { currentUser } = useSelector((state) => state.users);
  const { allListings, allLikes } = useSelector((state) => state.items);
  const location = useLocation();
  const profileUser = location.state.profileUser;
  // const isBuyer = profileUser.role === "BUYER";
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
      <h4>{headerText}</h4>
      <ItemPreviewList items={allItems} />
    </>
  );
};

export default AllListings;
