import { useSelector } from "react-redux";
import Searchbar from "../home/searchbar";
import ItemPreviewList from "../item-preview-list";

const SearchResult = () => {
  const { searchResult, loading } = useSelector((state) => state.items);
  
  return (
    <>
      <Searchbar />
      <div className="mb-2" style={{ fontSize: "25px" }}>Search results for </div>
      {loading && <span>Loading...</span>}
      {!loading && searchResult === [] && <span>No search results for</span>}
      {!loading &&<ItemPreviewList items={searchResult} />}
    </>
  );
}

export default SearchResult;