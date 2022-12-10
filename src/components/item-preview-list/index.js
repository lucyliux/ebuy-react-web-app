import React from "react";
import ItemPreview from "./item-preview"
const itemsExample = [
  {
    _id: "123",
    name: "bag",
    date: "2006-01-02T15:04:05.000Z",
    price: 12.99,
    image: "https://maptote.com/resizeIt.php?width=249&image=/images/products/3/Boston-Grocery-WEB.jpg",
    description: "yay",
    sellerId: "1"
  }
]

const ItemPreviewList = ({ items = itemsExample, renderHeart = false, renderX = false}) => {
  return (
    <>
      <div className="row">
        {items.map((item) => {
          let colDisplay = "col";
          return (
            <>
              <div className={colDisplay}><ItemPreview item={item} renderHeart={renderHeart} renderX={renderX} /></div>
            </>
          )
        })}
      </div>
      
    </>
  )
}

export default ItemPreviewList;