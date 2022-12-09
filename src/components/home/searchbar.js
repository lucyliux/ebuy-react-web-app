import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="mb-3">
          <input
            placeholder="Search eBuy"
            className="form-control rounded-pill ps-5"
            style={{width: "100%", backgroundColor: "#1E1E1E", color: "#FFFFFF"}}
          />
          <i
            className="bi bi-search position-relative"
            style={{ bottom: "38px", left: "15px", color:"#C8C8C8"}}
        ></i>
      </div>
    </>
  );
};
export default Searchbar;