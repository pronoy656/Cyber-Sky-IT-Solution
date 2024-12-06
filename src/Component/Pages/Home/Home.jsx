import React, { useEffect, useState } from "react";
import FruitCategory from "./FruitCategory";

const Home = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("fuits.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return (
    <div>
      <h1>This is Home page</h1>
      <div className="flex space-x-4">
        <div className="w-40 border border-red-400">
          <h1>Fruits list</h1>
          <h1>Total Items: {fruits.length}</h1>
          <div className="border">
            {fruits.map((fruit) => (
              <FruitCategory key={fruit.id} fruit={fruit}></FruitCategory>
            ))}
          </div>
        </div>
        <div className="w-[1100px] border border-blue-600">
          <h1>This is middle side</h1>
        </div>
        <div className="w-40 border border-red-400">
          <h1>This is Right side</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
