
import React, { useState, useContext } from 'react';
import "../../CustomPopup.css";
import API from '../../API'
import FixedOverlayLoadingSpinner from "../../FixedOverlayLoadingSpinner"
import { useNavigate } from 'react-router-dom';
import {convertTo12HourTime} from '../../GeneralFunctions'
import ErrorModal from "../../ErrorModal";

const HomePageDeliveryPopup = ({ setterFunction, selectedLocation, setTripwiseAvailability }) => {

    let navigate = useNavigate();


    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);









    return (
        <div className='custom-modal home-page-delivery-modal'>
            <div className='card'>

                <div className='first-screen'>
                    <img src='/images/authentication-screens/logout-popup-icon.svg'></img>
                    
                    <p>{selectedLocation.route_name}</p>
                    <p>Date:{selectedLocation.delivery_date}</p>
                    <div className='w-100 text-center'>
                        <span>Delivery Time:&nbsp;</span>
                        <span>{convertTo12HourTime(selectedLocation.trip_start_time)}&nbsp;
                    to&nbsp;
                    {convertTo12HourTime(selectedLocation.trip_end_time)}</span>
                    </div>
                    <div className='w-100 text-center mb-3'>
                        <span>Deliver Products:&nbsp;</span>
                        {selectedLocation && selectedLocation.trip_items.map((item, index) => {
                            return (
                                <span>{item.product_name},&nbsp;</span>
                            )
                        })}
                    </div>
                    <div className='footer vertical-footer'>
                        <button type='button' className='ok-button' onClick={() => { setTripwiseAvailability(selectedLocation.trip_id);navigate('/shop')}}>Book Your Items</button>
                        <button type='button' className='cancel-button' onClick={() => { setterFunction(false) }}>Cancel</button>

                    </div>
                </div>

            </div>
            <ErrorModal message={message} state={isErrorModalOpen} setterFunction={setIsErrorModalOpen} okClickedFunction={() => { window.location.reload() }} />
            {isLoading && <FixedOverlayLoadingSpinner />}

        </div>
    );
};

export default HomePageDeliveryPopup;

