/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Popup = ({ isVisible, campaignName} ) => {
  const navigate = useNavigate()
  const ReturnHome = (e) => {
    e.preventDefault()
    navigate('/allcampaigns')
  }
  return (
    <div>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center">
          <div className="bg-white p-6 rounded-md w-1/3 h-[353px] md:w-[500px] md:left-3/5 left-2/5">
            <h2 className="text-xl font-bold mb-4 mt-8">Campaign Deleted</h2>
            <p className="mt-12">The {campaignName} campaign has been successfully deleted.</p>
            <div className="mt-12 flex justify-center">
              <button
                className="bg-buttonColor px-4 py-2 rounded-lg text-white"
                onClick={ReturnHome}
              >
                Go back to Campaign list
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
