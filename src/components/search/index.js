import { Route, Routes } from "react-router";
import SearchResult from "./search-result.js";
import Searchbar from "./searchbar";

const Search = () => {
  return (
    <>
      <Searchbar />
      <Routes>
        <Route path=":keyword" element={<SearchResult />} />
      </Routes>
    </>
  );
};

export default Search;
