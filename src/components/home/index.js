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
        <ItemPreviewList items={trendingItems} renderHeart={currentUser === "BUYER"} />
        {
          currentUser !== null && currentUser.role === "BUYER" ?
          <div>
            <b className="wd-text-align-left">Your recent likes</b>
            <ItemPreviewList renderHeart={true} />
          </div>
          :
            <></>
        }
        {
          currentUser !== null && currentUser.role === "SELLER" ?
          <div>
            <b className="wd-text-align-left">Your recent listings</b>
            <ItemPreviewList renderHeart={false} />
          </div>
          :
            <></>
        }
      </div>
    </>
  );
};
export default HomeComponent;