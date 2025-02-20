import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    navigate('/newcampaign')
  }
      return (
        <button onClick={handleClick} className="w-[196px] h-[40px] border mt-12 py-6 bg-buttonColor text-white border-gray-200 rounded-lg flex items-center justify-center hover:bg-green-900 cursor-pointer">
           
            <IoMdAdd className="mr-5" /> New Campaign
          
        </button>
      );
    }
    
    export default Button;
    