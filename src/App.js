import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearch] = useState("");

  const onChange = e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        //this.setState({ robots: users })
        //becomes:
        setRobots(users);
      });
  }, []);

  const filteredArray = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onChange={onChange} />
      <CardList robots={filteredArray} />
    </div>
  );
}

export default App;
