import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ItemPreview = ({ item, renderHeart = false }) => {
  const { currentUser } = useSelector((state) => state.users);
  let likedList = [];
  if (currentUser) {
    likedList = currentUser.likes;
  }
  const liked = likedList.includes(item._id);
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/item-details/" + item._id, { state: { item: item } });
  };
  return (
    <>
      <div onClick={onClick}>
        <div className="mb-5 rounded" style={{ width: "250px", height: "250px", backgroundColor: "white" }}>
          <div className="wd-fill rounded-top" style={{ width: "250px", height: "220px", backgroundColor: "gray" }}>
            <img src={item.image} alt="img" />
          </div>
          <div className="row position-relative ps-1" style={{ width: "250px" }}>
            <span className="col-9" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", color: "black" }}>
              {item.name}
            </span>
            <span className="col-3 m-0 p-0" style={{ color: "black", textAlign:"end" }}>
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
