import axios from 'axios';
import { useParams } from 'react-router';
import Popup from './PopUp';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Modal = ({ isOpen, onClose, campaignName }) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteComplete, setDeleteComplete] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.delete(`https://infinion-test-int-test.azurewebsites.net/api/Campaign/${id}`);
      console.log('res', response)
        setDeleteComplete(!deleteComplete);
        console.log('hello', deleteComplete)
        

      
    } catch (error) {
      console.log('Error:', error);
      setIsDeleting(false);
    }
  };
  console.log(deleteComplete)
  const handleClose=(e)=>{
e.preventDefault()
navigate('/')

  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center flex-col">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3 h-[353px]">
        
          <div className='text-center'>
            <h2 className="text-2xl font-bold mb-4 mt-8">Stop Campaign</h2>
            <p className='mt-16'>Are you sure you want to delete the {campaignName} campaign?</p>
            <p>This action cannot be undone.</p>
            <div className="flex justify-center gap-2 mt-12">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose} disabled={isDeleting}>
                Cancel
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDelete} disabled={isDeleting}>
                { isDeleting ? 'Deleting...' : 'Stop Campaign'}
              </button>
            </div>
          </div>
        
        {deleteComplete  && <Popup isVisible={deleteComplete} onClose={handleClose} campaignName={campaignName}/> }
      </div>
    </div>
  );
};

export default Modal;