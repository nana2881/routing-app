import React from "react";
import { Link } from "react-router-dom";

const foodItems = [
  { name: "Waakye", id: 1 },
  { name: "Banku", id: 2 },
  { name: "Fufu", id: 3 },
  { name: "Akple", id: 4 },
  { name: "Yam", id: 5 },
];

function Items() {
  return (
    <div>
      {foodItems.map((item) => (
        <Link to={`/items/${item.name}`} key={item.name}>
          <h1>{item.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Items;
