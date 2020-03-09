const SET_ROBOTS = "SET_ROBOTS";

const setRobots = array => {
  console.log('hihihihi')
  console.log(array)
  return {
    type: SET_ROBOTS,
    payload: array
  };
};

export default setRobots;
