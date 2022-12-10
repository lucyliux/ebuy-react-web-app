import React from "react";
import { useNavigate } from "react-router";

const defaultItem = {
  id: "1",
  name: "hha",
  price: 16.99,
  path: "https://maptote.com/resizeIt.php?width=249&image=/images/products/3/Boston-Grocery-WEB.jpg",
  likes: 9,
}


const ItemPreview = ({ item, renderHeart = false, renderX = false }) => {
  const likedList = ["123", "3"]
  const liked = likedList.includes(item._id);
  console.log(item);
  console.log(item.name);
  const navigate = useNavigate();
  const onClick = () => {
    console.log("hahaha");
    navigate("/item-details/" + item.id, {state: {item: item}});
  }
  return (
    <>
      <div onClick={onClick}>
      <div className="mb-5 rounded" style={{ width: "250px", height: "250px", backgroundColor: "white" }}>
      <div className="wd-fill rounded-top" style={{ width: "250px", height: "220px", backgroundColor: "gray"}}>
        <img  src={item.image} alt="img"/>
      </div>
      <div className="row position-relative ps-1" style={{ width: "250px" }}>
        <span className="col-9" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", color: "black"}}
          // style={{ position: "relative", bottom: "30px", left: "10px" }}
        >{item.name}</span>
          <span className="col-3" style={{ color: "black" }}
          // style={{ position: "relative", bottom: "30px", left: "130px" }}
        >${item.price}</span>
      </div>
      {/* <span style={{ position: "relative", bottom: "30px", left: "10px" }}>{item.name}</span>
      <span style={{ position: "relative", bottom: "30px", left: "130px" }}>${item.price}</span> */}
      <span style={{ position: "relative", bottom: "241px", right: "80px" }}>
        <i className={`${renderHeart === true ? `bi ${liked === true ? "bi-heart-fill text-danger" : "bi-heart"}` : ""} me-1`}></i>
        {renderHeart === true && item.likes}
      </span>
      <span style={{ position: "relative", bottom: "241px", left: "95px" }}>
        <i className={`${renderX === true ? "bi bi-x-lg" : ""}`}></i>
        </span>
        </div>
      </div>
    </>
  )
}

export default ItemPreview;