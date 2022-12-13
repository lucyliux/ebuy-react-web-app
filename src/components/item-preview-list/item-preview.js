import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { deleteItemThunk, findAllListingsThunk, findRecentListingsThunk } from "../../services/items/items-thunks";
import { updateThunk } from "../../services/users/users-thunks";

const ItemPreview = ({ item, renderHeart = false }) => {
  const { currentUser } = useSelector((state) => state.users);
  let likedList = [];
  if (currentUser) {
    likedList = currentUser.likes;
  }
  const liked = likedList.includes(item._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isCurrentSeller = currentUser !== null && currentUser.username === item.sellerName && !location.pathname.startsWith("/search");
  const margin = isCurrentSeller ? "-40px" : "";
  const onClickItem = () => {
    navigate("/item-details/" + item._id, { state: { item: item } });
  };
  const onDeleteItem = () => {
    dispatch(deleteItemThunk(item._id));
    const updatedUser = { ...currentUser };
    updatedUser.listings.replace(item._id + ",", "");
    dispatch(updateThunk(updatedUser));
    dispatch(findRecentListingsThunk(updatedUser.listings));
    dispatch(findAllListingsThunk(updatedUser.listings));
  };

  return (
    <>
      {isCurrentSeller && (
        <button onClick={onDeleteItem} className="btn btn-primary rounded-pill position-relative m-0 p-0 ps-2 pe-2" style={{ height: "35px", top: "45px", left: "165px", zIndex: "1" }}>
          delete
        </button>
      )}
      <div onClick={onClickItem} style={{ marginBottom: margin }}>
        <div className="mb-5 rounded" style={{ width: "250px", height: "250px", backgroundColor: "white" }}>
          <div className="wd-fill rounded-top" style={{ width: "250px", height: "220px", backgroundColor: "gray" }}>
            <img src={item.image} alt="img" />
          </div>
          <div className="row position-relative ps-1" style={{ width: "250px" }}>
            <span className="col-9" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", color: "black" }}>
              {item.name}
            </span>
            <span className="col-3 m-0 p-0" style={{ color: "black", textAlign: "end" }}>
              ${item.price}
            </span>
          </div>
          <div style={{ position: "relative", bottom: "241px", left: "15px" }}>
            <i className={`${renderHeart === true ? `bi ${liked === true ? "bi-heart-fill text-danger" : "bi-heart"}` : ""} me-1`}></i>
            {renderHeart === true && item.likes}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPreview;
