import React, {useEffect} from "react";
import Searchbar from "./searchbar";
import ItemPreviewList from "../item-preview-list";
import { useDispatch, useSelector } from "react-redux";
import { findRecentListingsThunk } from "../../services/items/items-thunks";

const HomeComponent = () => {
  const trendingItems = useSelector((state) => state.trendingItems);
  const { currentUser } = useSelector((state) => state.users);
  // const { recentListings } = useSelector((state) => state.items);

  // const dispatch = useDispatch();
  // if (currentUser) {
    // dispatch(findRecentListingsThunk(currentUser.listings));
  //   console.log("recent");
  //   console.log(recentListings)
  // }
  console.log(currentUser);
  return (
    <>
      <div className="ps-5 pe-5">
        <Searchbar />
        <b style={{fontSize: "30px"}}>Hi {currentUser !== null ? currentUser.username : ''}!</b><br/>
        <b className="wd-text-align-left">Trending Items</b>
        <ItemPreviewList items={trendingItems} renderHeart={currentUser === "BUYER"} />
        {
          currentUser !== null && currentUser.role === "BUYER" && <RecentLikes user={currentUser} />
        }
        {
          currentUser !== null && currentUser.role === "SELLER" && <RecentListings user={currentUser} />
        }
      </div>
    </>
  );
};

const RecentLikes = ({ user }) => {
  const dispatch = useDispatch();
  // dispatch(findRecentListingsThunk(user.likes));
  const {recentLikes} = useSelector((state) => state.items);

  <div>
    <b className="wd-text-align-left">Your recent likes</b>
    {/* <ItemPreviewList items={recentLikes}  renderHeart={true} /> */}
  </div>
}

const RecentListings = ({ user }) => {
  const { recentListings } = useSelector((state) => state.items);
  console.log(recentListings);
  return (
    <>
      <div>
        <b className="wd-text-align-left">Your recent listings</b><br/>
        {recentListings.length > 0 && <ItemPreviewList items={recentListings} renderHeart={false} />}
        {recentListings.length === 0 && <span>Post your first listing in profile page!</span>}
      </div>
    </>
  )
}

export default HomeComponent;