import { CiBellOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import ProfileIcon from "../assets/Ellipse 1.png";

const NavBar = () => {
  return (
    <div>
      <div className="border-b-2 w-[1176px] h-[92px] flex items-center justify-between px-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search something"
            className="w-[391px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <CiBellOn className="w-[30px] h-[30px]" />
          <img src={ProfileIcon} alt="" className="w-[55px] h-[55px]" />
          <select name="" id="">
            <option value="">BigTech</option>
          </select>
        </div>
      </div>

      
    </div>
  );
};

export default NavBar;
