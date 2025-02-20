import { MdOutlineCampaign } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const CampaignButton = () => {
          const navigate = useNavigate()
          const handleClick = (e) => {
            e.preventDefault()
            navigate('/AllCampaigns')
          }

  return (
    <div>
      <button onClick={handleClick}  className="hover:bg-buttonColor hover:text-white cursor-pointer text-left w-40 flex items-center py-2 mt-2 rounded-md">
            <MdOutlineCampaign className="mr-4" /> Campaigns
          </button>

    </div>
  )
}

export default CampaignButton