import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="row mb-2">
        <div className="col-11 position-relative">
          <input
            placeholder="Search eBuy"
            className="form-control rounded-pill ps-5"
          />
          <i
            className="bi bi-search position-absolute
                       wd-nudge-up"
          ></i>
        </div>
      </div>
    </>
  );
};
export default Searchbar;