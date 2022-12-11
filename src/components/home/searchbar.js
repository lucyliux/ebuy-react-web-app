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
    }
    else {
      dispatch(findItemsByKeywordThunk(keyword));
      navigate("/search-result");
    }
  }
  return (
    <>
      <div>
          <input
            placeholder="Search eBuy"
            className="form-control rounded-pill ps-5"
            style={{ width: "100%", backgroundColor: "#1E1E1E", color: "#FFFFFF" }}
            onChange={(e) => setKeyword(e.target.value)}
          />
        <button onClick={searchClickHander} className="position-relative" style={{ bottom: "38px", left: "15px", color:"#C8C8C8"}}><i
            className="bi bi-search position-relative"
            // style={{ bottom: "38px", left: "15px", color:"#C8C8C8"}}
        ></i></button>
      </div>
    </>
  );
};
export default Searchbar;