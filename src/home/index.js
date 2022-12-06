import React from "react";
import Searchbar from "./searchbar";
import ItemPreviewList from "../item-preview-list"

const HomeComponent = () => {
  return (
    <>
      <div className="ps-5 pe-5">
        <Searchbar />
        <b className="wd-text-align-left">Trending Items</b>
        <ItemPreviewList renderHeart={true} />
      </div>
    </>
  );
};
export default HomeComponent;