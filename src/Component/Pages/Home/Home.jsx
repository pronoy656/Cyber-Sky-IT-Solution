import React, { useEffect, useState } from "react";
import FruitCategory from "./FruitCategory";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSubtitlesOff } from "react-icons/md";

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
        <div className="w-44  border bg-white rounded-2xl h-[500px]">
          <div className="p-2">
            <input
              className="border w-40 relative p-1 rounded-xl"
              type="search"
              placeholder="Search by fruits"
              name=""
              id=""
            />
            <button className="border bg-red-200 p-1 absolute -mt-[30px] ml-[132px]">
              <div className="text-red-400 ">
                <CiSearch />
              </div>
            </button>
          </div>
          <h1 className="font-medium mb-1 ml-1">Fruits list</h1>

          <div className="h-96 overflow-y-auto overflow-x-hidden  scrollbar-thin space-y-2">
            {fruits.map((fruit) => (
              <FruitCategory key={fruit.id} fruit={fruit}></FruitCategory>
            ))}
          </div>
        </div>
        <div className="w-[1050px] border bg-white rounded-3xl  p-8">
          <div className="flex space-x-5">
            <div className="hidden md:flex flex-col space-y-4 mt-12 w-14">
              <div className="text-blue-600 text-lg">
                <FaFacebook />
              </div>
              <div className="text-blue-400 text-lg">
                <FaLinkedin />
              </div>
              <div className="text-blue-500 text-lg">
                <AiFillTwitterCircle />
              </div>
              <div className="text-orange-500 text-lg">
                <HiDotsCircleHorizontal />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-4xl font-bold">
                  Health Benefits Of An Avocado
                </h1>
                <h1 className="text-xl font-bold  mt-4">Supports Eye Health</h1>
                <h1 className="text-gray-600 leading-relaxed mt-2">
                  {" "}
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.
                </h1>
                <h1 className="text-xl font-bold  mt-4">Supports Eye Health</h1>
                <h1 className="text-gray-600 leading-relaxed mt-2">
                  {" "}
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.
                </h1>
              </div>
              <div>
                <img
                  className="w-[1000px] h-[250px] rounded-2xl"
                  src="https://i.ibb.co.com/r23RbRW/front-view-fresh-fruits-quinces-lemons-other-fruits-light-table.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="md:ml-12 mt-6">
            <h1 className="text-xl font-bold"> Supports Eye Health</h1>
            <h1 className="text-gray-600 leading-relaxed mt-2">
              {" "}
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration. Spinach contains high levels of vitamin A
              and other antioxidants that help maintain healthy vision and
              protect against age-related macular degeneration. Spinach contains
              high levels of vitamin A and other antioxidants that help maintain
              healthy vision and protect against age-related macular
              degeneration. Spinach contains high levels of vitamin A and other
              antioxidants that help maintain healthy vision and protect against
              age-related macular degeneration. Spinach contains high levels of
              vitamin A and other antioxidants that help maintain healthy vision
              and protect against age-related macular degeneration.
            </h1>
          </div>
          <div className="flex md:ml-12 space-x-8 items-center mt-6">
            <div>
              <img
                className="w-[2200px] h-[250px] rounded-2xl"
                src="https://i.ibb.co.com/GngRXtY/fresh-tasty-apples.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-bold"> Supports Eye Health</h1>
              <h1 className="text-gray-600 leading-relaxed mt-2 dark:text-white">
                {" "}
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration.
              </h1>
            </div>
          </div>
          {/* Mobile Social Icons above Rating Section */}
          <div className="flex justify-center space-x-4 my-6 md:hidden">
            <div className="text-blue-600 text-lg">
              <FaFacebook />
            </div>
            <div className="text-blue-400 text-lg">
              <FaLinkedin />
            </div>
            <div className="text-blue-500 text-lg">
              <AiFillTwitterCircle />
            </div>
            <div className="text-orange-500 text-lg">
              <HiDotsCircleHorizontal />
            </div>
          </div>
          <div className="md:ml-12 mt-5">
            <h1 className="text-lg font-medium">Was this helpful</h1>
            <div className="flex space-x-2">
              <div className="text-yellow-400">
                <FaStar />
              </div>
              <div className="text-yellow-400">
                <FaStar />
              </div>
              <div className="text-yellow-400">
                <FaStar />
              </div>
              <div className="text-yellow-400">
                <FaStar />
              </div>
              <div className="text-yellow-400">
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>

        <div className="w-44 border p-2 bg-white h-60 rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className=" font-medium">Settings</h1>
            <div>
              <IoSettingsOutline />
            </div>
          </div>
          <h1 className="font-medium mt-2">Paragraph Font Size</h1>
          <input
            type="range"
            min={0}
            max="100"
            value="40"
            className="range range-xs"
          />
          <h1 className="font-medium mt-1">Choose Vitamin type</h1>
          <div className="dropdown dropdown-bottom mt-1">
            <div tabIndex={0} role="button" className="btn m-1">
              All Vitamin
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"
            >
              <li>
                <a>Vitamin c</a>
              </li>
              <li>
                <a>Vitamin A</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center mt-2">
            <h1 className="font-medium">Turn Off Subtitles</h1>
            <div>
              <MdOutlineSubtitlesOff />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
