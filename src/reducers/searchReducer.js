const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";
const SET_ROBOTS = "SET_ROBOTS";
const initState = {
  searchField: "",
  robots: ['billy']
};

const searchReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    case SET_ROBOTS:
      console.log('i am reducer')
      return { ...state, robots: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
