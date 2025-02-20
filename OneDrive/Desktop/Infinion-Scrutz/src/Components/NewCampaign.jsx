
import { useState } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import NavBar from './NavBar';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className={`relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in ${isOn ? 'bg-purple-700' : 'bg-gray-300'} rounded-full`}>
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        style={{ left: isOn ? 'calc(100% - 1.5rem)' : '0.25rem' }}
      />
    </div>
  );
};

const NewCampaign = () => {
  const [addCampaign, setAddCampaign] = useState({
    campaignName: "",
    campaignDescription: "",
    startDate: "",
    endDate: "",
    digestCampaign: true,
    linkedKeywords: [],
    dailyDigest: "", 
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddCampaign(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleKeywordsChange = (e) => {
    setAddCampaign(prevState => ({
      ...prevState,
      linkedKeywords: e.target.value.split(',').map(keyword => keyword.trim())
    }));
  };

  const handleToggle = () => {
    setAddCampaign(prevState => ({
      ...prevState,
      digestCampaign: !prevState.digestCampaign
    }));
  };

  const handleCreate = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://infinion-test-int-test.azurewebsites.net/api/Campaign', addCampaign);
      if (response.status === 200) {
        console.log('Campaign created successfully');
        setAddCampaign({
          campaignName: "",
          campaignDescription: "",
          startDate: "",
          endDate: "",
          digestCampaign: true,
          linkedKeywords: [],
          dailyDigest: "", 
        });
      }
    } catch (error) {
      console.error('Error creating campaign:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div>
        <NavBar />
        <div className="pl-40">
          <h2 className="mt-6 text-buttonColor font-bold text-xl">Create New Campaign</h2>
          <div className="mt-6">
            <label htmlFor="campaignName">
              Campaign Name <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              name="campaignName"
              placeholder="e.g The Future is now"
              value={addCampaign.campaignName}
              onChange={handleChange}
              className="w-[684px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="campaignDescription">
              Campaign Description <span className="text-red-500">*</span>
            </label>
            <br />
            <textarea
              name="campaignDescription"
              placeholder="Please add a description to your campaign"
              value={addCampaign.campaignDescription}
              onChange={handleChange}
              className="w-[684px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex mt-6 gap-24">
            <div className="gap-4">
              <label htmlFor="startDate">
                Start date <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="date"
                name="startDate"
                value={addCampaign.startDate}
                onChange={handleChange}
                className="w-72 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="ml-4">
              <label htmlFor="endDate">End date</label>
              <br />
              <input
                type="date"
                name="endDate"
                value={addCampaign.endDate}
                onChange={handleChange}
                className="w-72 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <p className="-ml-64 mr-72">
              Want to receive daily digest on the campaign?
            </p>
            <ToggleSwitch isOn={addCampaign.digestCampaign} handleToggle={handleToggle} />

          </div>
          <div className="mt-6">
            <label htmlFor="linkedKeywords">
              Linked Keywords <span className="text-red-500">*</span>
            </label>
            <br />
            <textarea
              name="linkedKeywords"
              placeholder="To add keywords, type your keyword and press enter"
              value={addCampaign.linkedKeywords.join(', ')} 
              onChange={handleKeywordsChange}
              className="w-[684px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
<div className="mt-6">
            <label htmlFor="dailyDigest">
              Kindly select how often you want to receive daily digest
            </label>
            <br />
            <select
              name="dailyDigest"
              value={addCampaign.dailyDigest}
              onChange={handleChange}
              className="border border-gray-400 rounded-md"
            >
              <option value="">Select</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="flex gap-4 ml-8">
            <button className="w-[196px] h-[40px] border mt-12 py-6 text-buttonColor border-buttonColor rounded-lg flex items-center justify-center hover:bg-buttonColor hover:text-white cursor-pointer" onClick={onclose}>
              Cancel
            </button>
            <button
              className="w-[196px] h-[40px] border mt-12 py-6 bg-buttonColor text-white border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 hover:text-buttonColor cursor-pointer"
              onClick={handleCreate}
              disabled={loading}
            >
              {loading ? 'loading' : 'Create Campaign'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCampaign;