import Searchbar from "./searchbar";
import ItemPreviewList from "../item-preview-list";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageThunk } from "../../services/items/items-thunks";

const HomeComponent = () => {
  const trendingItems = useSelector((state) => state.trendingItems);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <>
      <div className="ps-5 pe-5">
        <Searchbar />
        <b style={{ fontSize: "30px" }}>Hi {currentUser !== null ? currentUser.username : ""}!</b>
        <br />
        <b className="wd-text-align-left">Trending Items</b>
        <ItemPreviewList items={trendingItems} renderHeart={currentUser !== null && currentUser.role === "BUYER"} />
        <input id="input" type="file" className="col rounded" onChange={e => dispatch(uploadImageThunk(e.target.files[0]))} />
        {currentUser !== null && currentUser.role === "BUYER" && <RecentLikes />}
        {currentUser !== null && currentUser.role === "SELLER" && <RecentListings />}
      </div>
    </>
  );
};

const RecentLikes = () => {
  const { recentLikes } = useSelector((state) => state.items);
  return (
    <>
      <div>
        <b className="wd-text-align-left">Your recent likes</b>
        <br />
        {recentLikes.length === 0 && <span>You don't have any liked items. Explore eBuy using the search bar above!</span>}
        <ItemPreviewList items={recentLikes} renderHeart={true} />
      </div>
    </>
  );
};

const RecentListings = () => {
  const { recentListings } = useSelector((state) => state.items);
  return (
    <>
      <div>
        <b className="wd-text-align-left">Your recent listings</b>
        <br />
        {recentListings.length > 0 && <ItemPreviewList items={recentListings} renderHeart={false} />}
        {recentListings.length === 0 && <span>Post your first listing in profile page!</span>}
      </div>
    </>
  );
};

export default HomeComponent;
