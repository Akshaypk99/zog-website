
import React, { useState,useContext } from 'react';
import "../../CustomPopup.css";
import API from '../../API'
import FixedOverlayLoadingSpinner from "../../FixedOverlayLoadingSpinner"
import { useNavigate } from 'react-router-dom';


import ErrorModal from "../../ErrorModal";

const LocationCollectionPopup = ({setterFunction}) => {
    
  let navigate = useNavigate();
  
  
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    

    

    

   
    const goToOrder = () => {
       navigate('/orders')
       setterFunction(false)
    }

    const goToHome = () => {
       navigate('/')
       setterFunction(false)
    }
    return (
        <div className='custom-modal logout-modal'>
            <div className='card'>
               
                    <div className='first-screen'>
                        <img src='/images/Checkout/checkout-confirm-popup-icon.svg'></img>
                        <h1>Order Successful!</h1>
                        <p>You have successfully made order</p>
                        
                        <div className='footer vertical-footer'>
                        <button type='button' className='ok-button' onClick={goToOrder}>View Order</button>
                        <button type='button' className='cancel-button' onClick={goToHome}>Back To Home</button>

                        </div>
                    </div>
                    
            </div>
            <ErrorModal message={message} state={isErrorModalOpen} setterFunction={setIsErrorModalOpen} okClickedFunction={() => { window.location.reload() }} />
            {isLoading && <FixedOverlayLoadingSpinner />}

        </div>
    );
};

export default LocationCollectionPopup;

