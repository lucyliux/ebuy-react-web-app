import Searchbar from "./searchbar";
import ItemPreviewList from "../item-preview-list";
import { useSelector } from "react-redux";
import { newItemsExample } from "../../services/items/items";

const HomeComponent = () => {
  const { newItems } = useSelector((state) => state.items);
  const { currentUser } = useSelector((state) => state.users);
  console.log(currentUser)
  return (
    <>
      <div className="ps-5 pe-5">
        <Searchbar />
        <b style={{ fontSize: "30px" }}>Hi, {currentUser !== null && currentUser!==""? currentUser.username : "please sign in or create an account"}!</b>
        <br />
        <br />
        <b className="wd-text-align-left">What's new</b>
        <ItemPreviewList items={newItems.length===0 ? newItemsExample : newItems} />
        {currentUser !== null && currentUser!=="" && currentUser.role === "BUYER" && <RecentLikes />}
        {currentUser !== null && currentUser!==""&& currentUser.role === "SELLER" && <RecentListings />}
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
