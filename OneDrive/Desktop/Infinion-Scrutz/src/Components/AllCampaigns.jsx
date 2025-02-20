import { FaSearch } from "react-icons/fa";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { GET_CAMPAIGNS } from "../utils/Constant";
import { useNavigate, Link} from "react-router-dom";


const AllCampaigns = () => {
  const [campaignLogs, setCampaignLogs] = useState([]);

  const navigate =useNavigate()
  const handleView = (e) => {
    e.preventDefault()
    navigate('/campaign')
  }


  useEffect(() => {
    axios
      .get(GET_CAMPAIGNS
      )
      .then((response) => {
        setCampaignLogs(response.data);
      })
      .catch((error) => {
        console.log("this is the error", error);
      });
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <div className="w-[879px]">
        <NavBar />
        <div className="ml-28">

        <h2 className="text-buttonColor font-semibold ml-16 pl-3 mt-3 text-2xl">
          All Campaigns
        </h2>

        <div className="flex jus gap-2 mt-6 ml-16">
          <button className="border border-buttonColor rounded-md text-buttonColor w-[67px]">
            All (90)
          </button>
          <button className="border border-buttonColor rounded-md text-buttonColor w-[97px]">
            Inactive (90)
          </button>
          <button className="border border-buttonColor rounded-md text-buttonColor w-[88px] mr-28">
            Active (90)
          </button>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-[144px] px-4 py-2 gap-2 rounded-lg border border-buttonColor focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
          <select name="" id="" className="border border-buttonColor w-30 rounded-md">
            <option value="">Filter by date</option>
          </select>
        </div>
        <div className="">
          <table className="w-[879px] mt-8 ml-16 mr-16">
            <thead className="bg-gray-300 text-left ml-8">
              <tr>
                <th >S/N</th>
                <th>Campaign Name</th>
                <th>Start Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="ml-10">
              {campaignLogs.map(
                ({id, campaignName, startDate, campaignStatus }, index) => (
                  <tr key={index} className="ml-6">
                    <td >{index + 1}</td>
                    <td>{campaignName}</td>
                    <td>{startDate}</td>
                    <td>{campaignStatus}</td>
                    <td className="border-r-2 border-gray-300 py-3">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-gray-500 mx-2 cursor-pointer"
                        onClick={handleView}
                      />
                      <Link to={`/campaign/${id}`}> 
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-gray-500 mx-2 cursor-pointer"
                      />
                      </Link>
                      <Link to={`/campaign/${id}`}> 
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-gray-500 mx-2 cursor-pointer"
                          />
                      </Link>
                      </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AllCampaigns;
