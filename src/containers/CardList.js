import React from "react";
import Card from "../components/Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card key={i} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
