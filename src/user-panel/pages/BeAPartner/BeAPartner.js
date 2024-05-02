import React, { Component, useEffect, useState, useContext } from 'react'
import './BeAPartner.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import FiveCardsSection from '../../common-component/FiveCardsSection/FiveCardsSection'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import GreyCardsSection from '../../common-component/GreyCardsSection/GreyCardsSection.js'

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


const BeAPartner = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sec3Data = [
    {
      title: "Accelerate Growth",
      description: "Leverage our data-driven insights to identify key market trends and seize strategic opportunities for rapid expansion and increased profitability.",
    },

    {
      title: "Enhanced Customer Solutions",
      description: "Utilise personalised data analytics to anticipate customer needs and deliver bespoke solutions, ensuring unparalleled satisfaction and loyalty.",
    },
    {
      title: "Cultivate Innovation",
      description: "Empower your teams with agile methodologies and collaborative tools, fostering an environment where innovation thrives, and breakthrough ideas emerge.",
    },
    {
      title: "Discover New Opportunities",
      description: "Harness predictive analytics and market intelligence to stay ahead of the competition, uncovering untapped markets and niche segments for growth.",
    },
    


  ]
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
    <div className='be-a-partner-page'>

      <Banner
        pageName={"be-a-partner"}
        blueTitle={"BE A PARTNER"}
        titleWeb={"Let’s Grow Together<br/> with Us"}
        titleTab={"Let’s Grow Together<br/> with Us"}
        titleMob={"Let’s Grow<br/> Together<br/> with Us"}
        subTitleWeb={"We have a track record of standing by<br/> our partners and helping them prosper."}
        subTitleTab={"We have a track record of standing by<br/> our partners and helping them prosper."}
        subTitleMob={"We have a track record of standing<br/> by our partners and helping them<br/> prosper."}
        iconTopWeb={'10%'}
        iconLeftWeb={'89%'}
        iconTopTab={'49%'}
        iconLeftTab={'80%'}
        iconTopMob={'62%'}
        iconLeftMob={'72%'}
        iconRotationWeb={81}
        iconRotationTab={82}
        iconRotationMob={-36}>
      </Banner>

      
<FiveCardsSection
        pageName={'be-a-partner'}
        secNo={'2'}
        cardHeightWeb={477}
        cardHeightTab={477}
        headingWeb={"Our Diverse Partnership Opportunities"}
        headingTab={"Our Diverse Partnership Opportunities"}
        headingMob={"Our Diverse Partnership Opportunities"}
        description={""}
        

        subHeading1={"Financial Partners"}
        description1={""}
        subHeading2={"Consulting Partners"}
        description2={""}
        subHeading3={"Technology Partners"}
        description3={""}
        subHeading4={"Reseller Partners"}
        description4={""}
        subHeading5={"Outsourcing Partners"}
        description5={""}
      />

      <GreyCardsSection
        pageName={'be-a-partner'}
        headingWeb={"Benefits of Becoming ZOG Global Partner?"}
        headingTab={"Benefits of Becoming ZOG Global Partner?"}
        headingMob={"Benefits of Becoming ZOG Global Partner?"}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        cardsData={ sec3Data}

      />


     




      <BottomBanner
        pageName={"be-a-partner"}
        titleWeb={"Become a<br/> ZOG Global Partner"}
        titleTab={"Become a<br/> ZOG Global<br/> Partner"}
        titleMob={"Become a ZOG<br/> Global Partner"}
                
        subTitlePresent={true}
        subTitleWeb={"Let's cultivate meaningful connections and thrive<br/> together as partners in progress."}
        subTitleTab={"Let's cultivate meaningful<br/> connections and thrive<br/> together as partners in<br/> progress."}
        subTitleMob={"Let's cultivate meaningful connections<br/> and thrive together as partners in<br/> progress."}

        buttonText={"be a partner"}
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

export default BeAPartner
