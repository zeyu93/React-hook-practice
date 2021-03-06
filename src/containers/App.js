import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "../components/SearchBox";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSeachField } from "../actions/searchField";
import setRobots from "../actions/robots";

const App = () => {
  //using react hooks for local state
  const [robots, setRobots] = useState([]);
  const [searchField, setSearch] = useState("");
  const onChange = e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  //using react-redux for redux hooks
  // const search = useSelector(state => state.searchReducer.searchField);
  // const robots = useSelector(state => state.searchReducer.robots);
  // const dispatch = useDispatch();
  // const onChange = e => {
  //   dispatch(setSeachField(e.target.value));
  // };

  useEffect(() => {
    console.log('use effect being called')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        //this.setState({ robots: users })
        //becomes:
        setRobots(users)
        //using react hooks
        // dispatch(setRobots(users));
      });
  }, []);

  const filteredArray = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !true ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onChange={onChange} />

      <CardList robots={filteredArray} />
    </div>
  );
};

export default App;
