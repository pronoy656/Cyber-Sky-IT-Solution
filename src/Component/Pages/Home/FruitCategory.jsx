import React from "react";

const FruitCategory = ({ fruit }) => {
  const { name, iconImage, vitaminType } = fruit;
  return (
    <div>
      <div className="border rounded-xl flex  items-center space-x-3">
        <img className="w-8 h-8 border rounded-full" src={iconImage} alt="" />
        <div>
          <h1 className="text-lg font-semibold">{name}</h1>
          <h1 className="font-medium text-gray-600">{vitaminType}</h1>
        </div>
      </div>
    </div>
  );
};

export default FruitCategory;
