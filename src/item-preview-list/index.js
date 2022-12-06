import React from "react";
import ItemPreview from "./item-preview"
const items = [
  {
    name: "hha",
    price: 16.99,
    path: "https://maptote.com/resizeIt.php?width=249&image=/images/products/3/Boston-Grocery-WEB.jpg",
    liked: true,
    likes: 9,
  },
  {
    name: "hha",
    price: 16.99,
    path: "https://maptote.com/resizeIt.php?width=249&image=/images/products/3/Boston-Grocery-WEB.jpg",
    liked: true,
    likes: 9,
  },
  {
    name: "lol",
    price: 16.99,
    path: "https://imgprd19.hobbylobby.com/2/fe/7f/2fe7f9b08fb17ea5bffd92cf575dee4a8d898668/350Wx350H-634485-0320.jpg",
    liked: false,
    likes: 3,
  },
  {
    name: "jaja",
    price: 16.99,
    path: "https://maptote.com/resizeIt.php?width=249&image=/images/products/3/Boston-Grocery-WEB.jpg",
    liked: true,
    likes: 0,
  },
]

const ItemPreviewList = ({ renderHeart = false, renderX = false}) => {
  return (
    <>
      <div className="row">
        {items.map((item) => {
          let colDisplay = "";
          if (item === items[0]) {
            colDisplay = "col-lg-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
          }
          else if (item === items[1]) {
            colDisplay = "col-md-6 col-lg-4 col-xl-3 d-none d-sm-none d-md-block"
          }
          else if (item === items[2]) {
            colDisplay = "col-lg-4 col-xl-3 d-none d-md-none d-lg-block"
          }
          else if (item === items[3]) {
            colDisplay = "col-xl-3 d-none d-xl-block"
          }
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