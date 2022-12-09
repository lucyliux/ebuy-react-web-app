import React from "react";

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
  return (
    <>
      <div className="wd-fill" style={{ width: "250px", height: "250px"}}>
        <img  src={item.image} alt="img"/>
      </div>
      <span style={{ position: "relative", bottom: "30px", left: "10px" }}>{item.name}</span>
      <span style={{ position: "relative", bottom: "30px", left: "130px" }}>${item.price}</span>
      <span style={{ position: "relative", bottom: "241px", right: "80px" }}>
        <i className={`${renderHeart === true ? `bi ${liked === true ? "bi-heart-fill text-danger" : "bi-heart"}` : ""} me-1`}></i>
        {renderHeart === true && item.likes}
      </span>
      <span style={{ position: "relative", bottom: "241px", left: "95px" }}>
        <i className={`${renderX === true ? "bi bi-x-lg" : ""}`}></i>
      </span>
    </>
  )
}

export default ItemPreview;