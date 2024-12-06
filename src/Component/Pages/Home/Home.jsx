import React, { useEffect, useState } from "react";
import FruitCategory from "./FruitCategory";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("fuits.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return (
    <div>
      <div className="flex space-x-4">
        <div className="w-44  border border-red-400">
          <div className="p-2">
            <input
              className="border w-40 relative p-1"
              type="search"
              placeholder="Search by fruits"
              name=""
              id=""
            />
            <button className="border bg-red-200 p-1 absolute -mt-[30px] ml-[135px]">
              <div className="text-red-400 ">
                <CiSearch />
              </div>
            </button>
          </div>
          <h1>Fruits list</h1>
          <h1>Total Items: {fruits.length}</h1>
          <div className="border h-96 overflow-y-auto overflow-x-hidden  scrollbar-thin">
            {fruits.map((fruit) => (
              <FruitCategory key={fruit.id} fruit={fruit}></FruitCategory>
            ))}
          </div>
        </div>
        <div className="w-[1050px] border border-blue-600">
          <h1>This is middle side</h1>
        </div>
        <div className="w-44 border border-red-400">
          <h1>This is Right side</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
