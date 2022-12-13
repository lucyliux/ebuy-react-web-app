import { useDispatch, useSelector } from "react-redux";
import { findItemsByKeywordThunk } from "../../services/items/items-thunks";
import Searchbar from "../home/searchbar";
import ItemPreviewList from "../item-preview-list";

const SearchResult = () => {
  const { searchResult, currentSearch, loading, noMoreResults } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const onLoadMoreClick = () => {
    dispatch(findItemsByKeywordThunk({ keyword: currentSearch.keyword, num: currentSearch.num + 20 }));
  };
  return (
    <>
      <div className="mb-5">
        <Searchbar />
        {!loading && (
          <div className="mb-2" style={{ fontSize: "25px" }}>
            Search results for <b>{currentSearch.keyword}</b>
          </div>
        )}
        {loading && <span>Loading...</span>}
        {!loading && searchResult.length === 0 && (
          <span>
            No search results for <b>{currentSearch.keyword}</b>
          </span>
        )}
        {!loading && <ItemPreviewList items={searchResult} />}
        {!loading && !noMoreResults && (
          <button onClick={onLoadMoreClick} className="btn btn-primary override-bs rounded-pill wd-center mt-4 ps-4 pe-4" style={{ backgroundColor: "#1E1E1E", borderColor: "white", zIndex: "1" }}>
            Load more
          </button>
        )}
        {!loading && searchResult.length !== 0 && noMoreResults && (
          <div class="wd-center mt-3 ps-4 pe-4">
            <span>
              No more results for <b>{currentSearch.keyword}</b>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResult;
