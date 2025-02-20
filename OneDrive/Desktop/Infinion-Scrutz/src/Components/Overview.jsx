import { CiExport } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import overviewSearchIcon from "../assets/search.png";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Button from "./Button";

const Overview = () => {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <NavBar />

        <div className="pl-40">
          <div className="flex items-center justify-between gap-4 mt-6">
            <h3 className="text-2xl text-buttonColor font-semibold">
              Overview
            </h3>

            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center border border-gray-300 p-2 rounded-md gap-2">
                <FaRegCalendarAlt />
                <select>
                  <option value="">
                    <span className="font-semibold">Date Range |</span> Nov 1,
                    2022 - Nov 7, 2022
                  </option>
                </select>
              </div>
              <div>
                <button className=" flex items-center justify-center border border-lightgray gap-3 text-buttonColor font-semibold p-2 ml-3 rounded-md bg-gray-300">
                  <CiExport />
                  Export
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto absolute top-[287px] left-[632px]">
            <img src={overviewSearchIcon} alt="" />
            <p>No activity yet. Create anew campaign to get started</p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
