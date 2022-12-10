import { useSelector } from "react-redux";
import Searchbar from "../home/searchbar";
import ItemPreviewList from "../item-preview-list";

const SearchResult = () => {
  const { searchResult } = useSelector((state) => state.items);
  
  return (
    <>
      <Searchbar />
      <div className="mb-2" style={{ fontSize: "25px" }}>Search results for </div>
      {searchResult === [] && <span>No search results for</span>}
      {<ItemPreviewList items={searchResult} />}
    </>
  );
}

export default SearchResult;