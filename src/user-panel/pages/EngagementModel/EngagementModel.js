import React, { Component, useEffect, useState, useContext } from 'react'
import './EngagementModel.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
import FiveCardsSection from '../../common-component/FiveCardsSection/FiveCardsSection'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import ThreeCardsSection from '../../common-component/ThreeCardsSection/ThreeCardsSection.js'

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


const EngagementModel = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const sec2Data = [
    {
      title: "Fixed Bid (FB)",
      description: "Fixed Bid (FB) engagements offer meticulously defined project scopes and budgets. By locking in costs upfront, we ensure clarity, accountability, and successful project outcomes, all within predetermined parameters.",
    },
    {
      title: "T&M Model",
      description: "Through the Time and Materials (T&M) Model, ZOG Global offers client’s flexibility and transparency, enabling precise resource allocation and real-time budget management for evolving project needs.",
    },
    {
      title: "Agile Fixed Price (AFP)",
      description: "Agile Fixed Price (AFP) combines the adaptability of Agile methodology with the stability of fixed pricing, empowering ZOG Global to respond swiftly to changes while maintaining budget predictability and project control.",
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
    <div className='engagement-model-page'>

      <Banner
        pageName={"engagement-model"}
        blueTitle={"engagement model"}
        titleWeb={"Find<br/> Your Ideal Fit"}
        titleTab={"Find<br/> Your Ideal Fit"}
        titleMob={"Find<br/> Your Ideal Fit"}
        subTitleWeb={"IT services customised to match your<br/> preferred engagement model."}
        subTitleTab={"IT services customised to match your<br/> preferred engagement model."}
        subTitleMob={"IT services customised to match<br/> your preferred engagement model."}
        iconTopWeb={'74%'}
        iconLeftWeb={-30}
        iconTopTab={'80%'}
        iconLeftTab={-45}
        iconTopMob={'74%'}
        iconLeftMob={-40}
        iconRotationWeb={82}
        iconRotationTab={80}
        iconRotationMob={88}>
      </Banner>

      <BlueNotchSection
        headingWeb={"Explore Our Flexible<br/> Engagement Models"}     // <br/>
        headingTab={"Explore Our Flexible<br/> Engagement Models"}
        headingMob={"Explore<br/> Our Flexible<br/> Engagement<br/> Models"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec2Data}

      />


<ThreeCardsSection
        pageName={'engagement-model'}
        secNo={'3'}
        cardHeight={523}
        headingWeb={"Comprehensive Financial<br/> Management"}
        headingTab={"Comprehensive<br/> Financial Management"}
        headingMob={"Comprehensive<br/> Financial<br/> Management"}
        descriptionWeb={"Maximise financial efficiency with tailored pricing, accurate budgeting, and<br/> transparent cost breakdowns."}
        descriptionTab={"Maximise financial efficiency with tailored pricing,<br/> accurate budgeting, and transparent cost<br/> breakdowns."}
        descriptionMob={"Maximise financial efficiency with<br/> tailored pricing, accurate budgeting,<br/> and transparent cost breakdowns."}


        subHeading1={"Flexible Pricing Models"}
        description1={"We offer tailored models for clients' needs, budget alignment, and scalability for evolving projects."}
        subHeading2={"Accurate Budget Estimation"}
        description2={"Advanced techniques for precise forecasts, minimising overruns, ensuring financial predictability."}
        subHeading3={"Transparent Cost Breakdown"}
        description3={"Clear breakdown of budget allocation across project components, fostering trust and accountability."}
      />


      
<FiveCardsSection
        pageName={'engagement-model'}
        secNo={'4'}
        cardHeightWeb={477}
        cardHeightTab={477}
        headingWeb={"Advantages of Our Engagement Model"}
        headingTab={"Advantages of Our Engagement Model"}
        headingMob={"Advantages of Our Engagement Model"}
        description={""}
        

        subHeading1={"Iteration Preparation"}
        description1={"Pre-launch iteration analysis and organisation opportunity for clients, ensuring thorough preparation for successful project implementation."}
        subHeading2={"Agile Enhancement"}
        description2={"Agile practices implementation enhances project value without compromising completion dates, ensuring efficiency and effectiveness."}
        subHeading3={"Goal Enablement"}
        description3={"Empower clients with data analysis, operational setup, due diligence, and investment services to achieve unique business goals."}
        subHeading4={"Schedule Dedication"}
        description4={"Dedicated commitment to project objectives and schedules, ensuring guaranteed focus and alignment with client expectations."}
        subHeading5={"Expansion Guidance"}
        description5={"Partnership business development, investment recommendations, and analysis provided for clients navigating expansion or sustainability paths."}
      />

      <div className='sec-5'>

      </div>


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"engagement-model"}
        titleWeb={"Have a Project<br/> in Mind?"}
        titleTab={"Have a Project<br/> in Mind?"}
        titleMob={"Have a Project in<br/> Mind?"}
                
        subTitlePresent={false}
        subTitleWeb={""}
        subTitleTab={""}
        subTitleMob={""}

        buttonText={"TALK TO OUR EXPERTS"}
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

export default EngagementModel