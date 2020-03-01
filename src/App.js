import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

function App(props) {
  const [robots, setstate] = useState([
    {
      name: "George"
    }
  ]);
  const [searchField, setSearch] = useState("");

  const onChange = e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const filteredArray = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1> Robot Friends</h1>
      <SearchBox onChange={onChange} />
      <CardList robots={filteredArray} />
    </div>
  );
}

export default App;
