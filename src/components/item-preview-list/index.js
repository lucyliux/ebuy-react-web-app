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
          // if (item === items[0]) {
          //   colDisplay = "col-lg-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
          // }
          // else if (item === items[1]) {
          //   colDisplay = "col-md-6 col-lg-4 col-xl-3 d-none d-sm-none d-md-block"
          // }
          // else if (item === items[2]) {
          //   colDisplay = "col-lg-4 col-xl-3 d-none d-md-none d-lg-block"
          // }
          // else if (item === items[3]) {
          //   colDisplay = "col-xl-3 d-none d-xl-block"
          // }
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