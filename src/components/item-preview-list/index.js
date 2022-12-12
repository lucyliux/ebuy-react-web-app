import React from "react";
import ItemPreview from "./item-preview"
const itemsExample = [
  {
    _id: "123",
    name: "bag",
    price: 12.99,
    image: "https://maptote.com/resizeIt.php?width=249&image=/images/products/3/Boston-Grocery-WEB.jpg",
    description: "yay",
    sellerId: "1"
  }
]

const ItemPreviewList = ({ items = itemsExample, renderHeart = false}) => {
  return (
    <>
      <div className="row position-relative" style={{marginBottom: "-30px"}}>
        {items.map((item) => {
          const colDisplay = "col-12 col-md-6 col-lg-4 col-xl-3";
          return (
            <>
              <div className={colDisplay}><ItemPreview item={item} renderHeart={renderHeart} /></div>
            </>
          )
        })}
      </div>
      
    </>
  )
}

export default ItemPreviewList;