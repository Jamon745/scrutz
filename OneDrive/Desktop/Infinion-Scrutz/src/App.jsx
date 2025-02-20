import AllCampaigns from "./Components/AllCampaigns";
import Overview from "./Components/Overview";
import NewCampaign from "./Components/NewCampaign";
import { Route, Routes } from 'react-router-dom';
import CampaignInfo from "./Components/CampaignInfo";
import StopCampaignModl from './Components/Modals/StopCampaignModl'


function App() {
  return (
    <>
      
        
         <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/allcampaigns' element={<AllCampaigns />} />
            <Route path='/newcampaign' element={<NewCampaign />} />
            <Route path="/campaign" element={<CampaignInfo />} />
            <Route path="/campaign/:id" element={<CampaignInfo />} />
            <Route path="/stopcampaign/:id" element={<StopCampaignModl />} />
         </Routes>

        
      
    
    </>
  );
}

export default App;
