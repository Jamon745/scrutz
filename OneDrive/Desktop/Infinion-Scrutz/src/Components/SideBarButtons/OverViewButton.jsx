import { useNavigate } from "react-router-dom"


const OverviewButton = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
      <button onClick={handleClick} className="w-[196px] h-[40px] border mt-12 py-6 bg-white text-buttonColor border-gray-200 rounded-lg flex items-center justify-center hover:bg-buttonColor hover:text-white cursor-pointer">
           
       Overview
    
  </button>
  )
}

export default OverviewButton