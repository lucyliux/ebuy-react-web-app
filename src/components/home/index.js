import React, {useEffect} from "react";
import Searchbar from "./searchbar";
import ItemPreviewList from "../item-preview-list";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  const trendingItems = useSelector((state) => state.trendingItems);
  const {currentUser} = useSelector((state) => state.users);
  

  console.log(currentUser);
  return (
    <>
      <div className="ps-5 pe-5">
        <Searchbar />
        <b className="wd-text-align-left">Trending Items</b>
        <ItemPreviewList items={trendingItems} renderHeart={true} />
        {
          currentUser !== null ?
          <div>
            <b className="wd-text-align-left">Your recent likes</b>
            <ItemPreviewList renderHeart={true} />
          </div>
          :
            <></>
        }
      </div>
    </>
  );
};
export default HomeComponent;