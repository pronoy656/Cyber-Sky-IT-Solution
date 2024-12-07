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

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Home = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("fuits.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  const handleClick = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
  };
  return (
    <div>
      <div className="flex md:space-x-4 ">
        <div className="w-44  border bg-white dark:bg-gray-800 rounded-2xl h-[530px] hidden md:block">
          <div role="tablist" className="tabs tabs-boxed mb-2 mt-2">
            <a role="tab" className="tab tab-active">
              Fruits
            </a>
            <a role="tab" className="tab">
              Vegetable
            </a>
          </div>
          <div className="p-2">
            <input
              className="border w-40 relative p-1 rounded-xl"
              type="search"
              placeholder="Search by fruits"
              name=""
              id="search-field"
            />
            <button
              onClick={handleClick}
              className="border bg-red-200 p-1 absolute -mt-[30px] ml-[132px]"
            >
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
        <div className="w-full max-w-[1050px] border bg-white dark:bg-gray-800 rounded-3xl p-4 md:p-8 mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-5">
            {/* Social Media Icons */}
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
            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3">
              <div>
                <h1 className="text-2xl dark:text-white md:text-4xl font-bold">
                  Health Benefits Of An Avocado
                </h1>
                <h1 className="text-lg md:text-xl font-bold mt-4">
                  Supports Eye Health
                </h1>
                <h1 className="text-gray-600 leading-relaxed mt-2">
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.
                </h1>
                <h1 className="text-lg md:text-xl font-bold mt-4">
                  Supports Eye Health
                </h1>
                <h1 className="text-gray-600 leading-relaxed mt-2">
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.
                </h1>
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-full md:w-[1000px] h-auto md:h-[250px] rounded-2xl"
                  src="https://i.ibb.co.com/r23RbRW/front-view-fresh-fruits-quinces-lemons-other-fruits-light-table.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-6 md:ml-12">
            <h1 className="text-lg md:text-xl font-bold">
              Supports Eye Health
            </h1>
            <h1 className="text-gray-600 leading-relaxed mt-2">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration. Spinach contains high levels of vitamin A
              and other antioxidants that help maintain healthy vision and
              protect against age-related macular degeneration.
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:ml-12 md:space-x-8 items-center mt-6 space-y-4 md:space-y-0">
            <div className="w-full md:w-auto">
              <img
                className="w-full md:w-[1100px] h-auto md:h-[250px] rounded-2xl"
                src="https://i.ibb.co.com/GngRXtY/fresh-tasty-apples.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold">
                Supports Eye Health
              </h1>
              <h1 className="text-gray-600 leading-relaxed mt-2 dark:text-white">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.
              </h1>
            </div>
          </div>
          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-4 my-2 md:hidden">
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
          <div className="md:mt-5 md:ml-12">
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

        <div className="w-44 border p-2 bg-white h-72 rounded-2xl hidden md:block">
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
