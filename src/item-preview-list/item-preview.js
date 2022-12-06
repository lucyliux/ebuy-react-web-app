import React from "react";

const defaultItem = {
  name: "hha",
  price: 16.99,
  path: "https://maptote.com/resizeIt.php?width=249&image=/images/products/3/Boston-Grocery-WEB.jpg",
  liked: true,
  likes: 9,
}

const ItemPreview = ({ item = defaultItem, renderHeart = false, renderX = false }) => {
  return (
    <>
      <div className="wd-fill" style={{ width: "250px", height: "250px"}}>
        <img  src={item.path} alt="img"/>
      </div>
      <span style={{ position: "relative", bottom: "30px", left: "10px" }}>item.name</span>
      <span style={{ position: "relative", bottom: "30px", left: "90px" }}>${item.price}</span>
      <span style={{ position: "relative", bottom: "241px", right: "140px" }}>
        <i className={`${renderHeart === true ? `bi ${item.liked === true ? "bi-heart-fill text-danger" : "bi-heart"}` : ""} me-1`}></i>
        {renderHeart === true && item.likes}
      </span>
      <span style={{ position: "relative", bottom: "241px", left: "25px" }}>
        <i className={`${renderX === true ? "bi bi-x-lg" : ""}`}></i>
      </span>
    </>
  )
}

export default ItemPreview;