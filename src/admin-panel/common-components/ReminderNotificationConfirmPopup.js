import { Modal } from "react-bootstrap";
import React , { useState }from 'react';
import FixedOverlayLoadingSpinner from "../../FixedOverlayLoadingSpinner"
import PositiveModal from "../../PositiveModal"
import { useNavigate } from 'react-router-dom';

import ErrorModal from "../../ErrorModal";
import API from '../../API'

const DeleteConfirmModal = ({ setterFunction, tripId }) => {
  const navigate=useNavigate()

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageModalOpen,setIsMessageModalOpen]=useState(false)


  const submit=()=>{
    setIsLoading(true)
    API.post(`/send-trip-reminder-mail/${tripId}/`)
    .then(response=>{
      setIsLoading(false)
      setMessage("Notification sent to all the customers");
      setIsMessageModalOpen(true)
     
      

    })
    .catch(error=>{
console.log("error.response.message")
setIsLoading(false)

    })
  }


  return (
    <div className='custom-modal logout-modal'>
            <div className='card'>
               
                    <div className='first-screen'>
                        <img src='/images/delete-popup-icon.svg'></img>
                        <h1>Send?</h1>
                        <p>Are you sure to send a reminder to all of the customers in this location?</p>
                        
                        <div className='footer'>
                        <button type='button' className='cancel-button' onClick={()=>{setterFunction(false)}}>Cancel</button>
                        <button type='button' className='ok-button' onClick={submit}>Yes, Send</button>

                        </div>
                    </div>
                    
            </div>
            <ErrorModal message={message} state={isErrorModalOpen} setterFunction={setIsErrorModalOpen} okClickedFunction={() => { window.location.reload() }} />
            {isLoading && <FixedOverlayLoadingSpinner />}
            {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => {  window.location.reload() }} />}

        </div>

  );
};

export default DeleteConfirmModal;
