import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { findItemsByKeywordThunk } from "../../services/items/items-thunks";

const Searchbar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchClickHander = () => {
    if (keyword === "") {
      alert("Please enter a keyword");
    } else {
      dispatch(findItemsByKeywordThunk({ keyword: keyword, num: 20}));
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <>
      <div className="mt-4">
        <input
          placeholder="Search eBuy"
          className="form-control rounded-pill ps-3"
          style={{ width: "100%", backgroundColor: "#1E1E1E", color: "#FFFFFF" }}
          onChange={(e)=>setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchClickHander();
            }
          }}
        />
      </div>
    </>
  );
};
export default Searchbar;
