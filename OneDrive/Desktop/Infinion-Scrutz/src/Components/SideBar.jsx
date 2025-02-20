import Logo from "../assets/Logo.svg";
import Button from "./Button";
import { FaRegCircleQuestion } from "react-icons/fa6";
// import { useNavigate, Link } from 'react-router-dom';
import CampaignButton from "./SideBarButtons/CampaignButton";
import MarketInt from "./SideBarButtons/MarketInt";
import AccountSetting from "./SideBarButtons/AccountSetting";
import OverViewButton from './SideBarButtons/OverViewButton'



const SideBar = () => {
  // const navigate = useNavigate()
  // const handleclick = (e) => {
  //   e.preventDefault()
  //   navigate ('/')
  // }
  return (
    <div className="flex">
      <div className="w-[292px] h-[868px] border-r-2 bg-lightgray">
        <div className="flex items-center justify-center mt-4">
          <img src={Logo} alt="" className="w-20 h-20 top-23 left-40" />
          <h1 className="w-32 h-12 top-26 ml-6 text-4xl font-bold text-gradient">
            Scrutz
          </h1>
        </div>
        <div className="gap-3 flex items-center flex-col justify-center mt-10">
         <Button />
         <OverViewButton />
         <CampaignButton />
         <MarketInt/>
         <AccountSetting/>
        </div>
        <div className="flex flex-col items-center justify-center w-[228px] h-[192px] mt-14 ml-2 text-center bg-white">
          <FaRegCircleQuestion className="text-buttonColor"/>
          <h4>Need Help?</h4>
          <p>We&apos;re readily aavailble to provide help.</p>
          <button className="bg-buttonColor p-1 rounded-md mt-4 text-white">
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
