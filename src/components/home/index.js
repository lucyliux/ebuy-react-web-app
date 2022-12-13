import Searchbar from "./searchbar";
import ItemPreviewList from "../item-preview-list";
import { useSelector } from "react-redux";
import { newItemsExample } from "../../services/items/items";

const HomeComponent = () => {
  const { newItems, newItemsLoading } = useSelector((state) => state.items);
  const { currentUser } = useSelector((state) => state.users);
  return (
    <>
      <div className="ps-5 pe-5">
        <Searchbar />
        <b style={{ fontSize: "30px" }}>Hi, {currentUser !== null && currentUser !== "" ? currentUser.username : "please sign in or create an account"}!</b>
        <br />
        <br />
        <h5 className="wd-text-align-left" style={{ fontWeight: "bold" }}>
          What's new
        </h5>
        {newItemsLoading && <span>Loading...</span>}
        {!newItemsLoading && <ItemPreviewList items={newItems.length === 0 ? newItemsExample : newItems} />}
        {currentUser !== null && currentUser !== "" && currentUser.role === "BUYER" && <RecentLikes />}
        {currentUser !== null && currentUser !== "" && currentUser.role === "SELLER" && <RecentListings />}
      </div>
    </>
  );
};

const RecentLikes = () => {
  const { recentLikes, loading } = useSelector((state) => state.items);
  return (
    <>
      <div>
        <h5 className="wd-text-align-left" style={{ fontWeight: "bold" }}>
          Your recent likes
        </h5>
        {loading && <span>Loading...</span>}
        {!loading && recentLikes.length === 0 && <span>You don't have any liked items. Explore eBuy using the search bar above!</span>}
        {!loading && <ItemPreviewList items={recentLikes} renderHeart={true} />}
      </div>
    </>
  );
};

const RecentListings = () => {
  const { recentListings, loading } = useSelector((state) => state.items);
  return (
    <>
      <div>
        <h5 className="wd-text-align-left" style={{ fontWeight: "bold" }}>
          Your recent listings
        </h5>
        {loading && <span>Loading...</span>}
        {!loading && recentListings.length > 0 && <ItemPreviewList items={recentListings} renderHeart={false} />}
        {!loading && recentListings.length === 0 && <span>Post your first listing in profile page!</span>}
      </div>
    </>
  );
};

export default HomeComponent;
