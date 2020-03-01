import React, { useState } from "react";

function SearchBox(props) {
  return (
    <div className="SearchBox">
      <input onChange={props.onChange} />
    </div>
  );
}

export default SearchBox;
