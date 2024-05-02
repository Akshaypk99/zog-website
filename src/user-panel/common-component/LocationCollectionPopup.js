
import React, { useState } from 'react';
import "../../CustomPopup.css";
import API from '../../API'
import FixedOverlayLoadingSpinner from "../../FixedOverlayLoadingSpinner"

import ErrorModal from "../../ErrorModal";
import { UK_COUNTIES } from '../../Constants';
const LocationCollectionPopup = ({setterFunction}) => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSecondScreenShown,showSecondScreen]=useState(false)

    

    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleSubmit = () => {
       if(selectedLocation!==null&&!(/\s/.test(selectedLocation))){
        setIsLoading(true)
        API.post(`/change_user_location/${window.localStorage.getItem("userID")}/${selectedLocation}/`)
            .then(response => {
                console.log("API Response:", response);
                setIsLoading(false)
                showSecondScreen(true)
                setTimeout(()=>{
                    setterFunction(false)
                  },3000)
            })
            .catch(error => {
                console.log("API error:", error);
                setIsLoading(false)
                setMessage(error.response.data.message)
                setIsErrorModalOpen(true)
            });
        }
        else{
            setMessage("Please Enter a Postcode without space")
            setIsErrorModalOpen(true)
        }
    };

    return (
        <div className='custom-modal location-collection-modal'>
            <div className='card'>
                {!isSecondScreenShown ?
                    <div className='main-screen'>
                        <h1>Welcome!</h1>
                        <p>Enter your Postcode , so that we can update you with the future deliveries at your location</p>
                        <label>Postcode</label>
                        <input
                         className='form-control mb-3'
                          onChange={handleLocationChange}
                           value={selectedLocation || ''}
                           maxlength="8">
                            
                        </input>
                        <div className='footer single-button-footer'>
                        <button type='button' onClick={handleSubmit}>Submit the location</button>
                        </div>
                    </div>
                    :
                    <div className='secons-screen'>
                        <h1>Thank You!</h1>
                        <p>Thank you. We will update you with our upcoming deliveries to your selected location.</p>
                    </div>
                }
            </div>
            <ErrorModal message={message} state={isErrorModalOpen} setterFunction={setIsErrorModalOpen} okClickedFunction={() => { window.location.reload() }} />
            {isLoading && <FixedOverlayLoadingSpinner />}

        </div>
    );
};

export default LocationCollectionPopup;

