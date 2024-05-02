import React, { Component, useEffect, useState, useContext } from 'react'
import './WhyZogGlobal.scss'
import Banner from '../../common-component/BannerMainPages/BannerMainPages'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner'

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate, Link } from 'react-router-dom';

import API from "../../../API.js"
import LoadingSpinner from "../../../LoadingSpinner.js";
import ErrorModal from "../../../ErrorModal.js";
import PositiveModal from "../../../PositiveModal.js";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner.js"
import $ from 'jquery';

import { UserContext } from '../../../authentication/pages/UserContext.js';

import Slider from 'react-slick'


const View = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const sec4Data = [
    { title: "",
     description: "",
     image_url:"/images/why-zog-global/sec-4-1.png"
     },

    { title: "",
     description: "",
    image_url:"/images/why-zog-global/sec-4-2.png" 
  },

    { title: "",
     description: "",
    image_url:"/images/why-zog-global/sec-4-3.png" 
  },
  
  ]


  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])


  useEffect(() => {

  }, [])


  useEffect(() => {

  }, [])

  const sec5SlideSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='pagename-page'>

      <Banner
        pageName={"pagename"}
        blueTitle={""}
        titleWeb={""}
        titleTab={""}
        titleMob={""}
        subTitleWeb={""}
        subTitleTab={""}
       subTitleMob={""}
        iconTopWeb={0}
        iconLeftWeb={0}
        iconTopTab={0}
        iconLeftTab={0}
        iconTopMob={370}
        iconLeftMob={150}
        iconRotationWeb={0}
        iconRotationTab={0}
        iconRotationMob={0}>
      </Banner>

      <div className='sec-2'>

      </div>


      <div className='sec-3'>

      </div>


      <div className='sec-4'>

      </div>


      <div className='sec-5'>

      </div>


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"pagename"}
        titleWeb={""}
        titleTab={""}
        titleMob={""}
                
        subTitlePresent={false}
        subTitleWeb={""}
        subTitleTab={""}
        subTitleMob={""}

        buttonText={""}
        buttonTheme={"light"}
        buttonLink={"/contact-us"}
        textTheme={"light"}
      >
      </BottomBanner>



      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default View