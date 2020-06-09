import React from "react";

const Search = ({ onFilterHandler }) => {
  return (
    <>
      <h3>
        Trazi po imenu <i className="fa fa-search" aria-hidden="true"></i>
      </h3>
      <input
        type="text"
        placeholder="Trazi"
        onChange={onFilterHandler}
        style={{ margin: "0 0 20px 0" }}
      ></input>
    </>
  );
};

export default Search;
