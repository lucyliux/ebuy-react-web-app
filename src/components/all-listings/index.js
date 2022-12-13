import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { getAllRemoteItemsThunk } from "../../services/items/items-thunks";
import ItemPreviewList from "../item-preview-list";

const AllListings = () => {
  const { allListings, allLikes, loading, noMoreResults } = useSelector((state) => state.items);
  const location = useLocation();
  const profileUser = location.state.profileUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isShein = profileUser.username === "SHEIN";
  const onBackClick = () => {
    navigate("/profile", { state: { profileUser: profileUser } });
  };
  const onLoadMoreClick = () => {
    dispatch(getAllRemoteItemsThunk(allListings.length + 20));
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
      <div className="row align-items-start me-5 mb-5">
        <div className="col-1" style={{ fontSize: "30px" }} onClick={onBackClick}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="col-11 m-0 p-0 position-relative" style={{ top: "5px" }}>
          <h4>{headerText}</h4>
          {loading && <span>Loading...</span>}
          {!loading && <ItemPreviewList items={allItems} />}
          {!loading && !noMoreResults && isShein && (
            <button onClick={onLoadMoreClick} className="btn btn-primary override-bs rounded-pill wd-center mt-4 ps-4 pe-4" style={{ backgroundColor: "#1E1E1E", borderColor: "white", zIndex: "1" }}>
              Load more
            </button>
          )}
          {!loading && noMoreResults && <div class="wd-center mt-3 ps-4 pe-4"><span >No more results</span></div>}

        </div>
      </div>
    </>
  );
};

export default AllListings;
