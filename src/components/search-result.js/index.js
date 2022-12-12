import { useSelector } from "react-redux";
import Searchbar from "../home/searchbar";
import ItemPreviewList from "../item-preview-list";

const SearchResult = () => {
  const { searchResult, currentSearch,loading } = useSelector((state) => state.items);
  console.log(searchResult);
  return (
    <>
      <Searchbar />
      <div className="mb-2" style={{ fontSize: "25px" }}>
        Search results for <b>{currentSearch}</b>
      </div>
      {loading && <span>Loading...</span>}
      {!loading && searchResult.length === 0 && <span>No search results for <b>{currentSearch}</b></span>}
      {!loading && <ItemPreviewList items={searchResult} />}
    </>
  );
};

export default SearchResult;
