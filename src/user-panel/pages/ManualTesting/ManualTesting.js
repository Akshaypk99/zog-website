import React, { Component, useEffect, useState, useContext } from 'react'
import './ManualTesting.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import MultiCardsSection from '../../common-component/MultiCardsSection/MultiCardsSection.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
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


const ManualTesting = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  const sec3Data = [
    {
      title: "Fast Onboarding",
      description: "Walk us through your project details, and you'll get a concise list of all the information we need to start testing immediately.",
    },
    {
      title: "No Long-term Contract",
      description: "We believe in earning your trust and satisfaction with every interaction, allowing you the freedom to adjust as your needs evolve.",
    },
    {
      title: "Effective Communication",
      description: "Our manual testers can communicate with all kinds of people, from project managers to developers to customer service representatives.",
    },
    {
      title: "User Experience",
      description: "We also test the application from a user perspective, examining factors like layout, workflow, and usability rather than finding bugs.",
    },
    {
      title: "Client Satisfaction",
      description: "We are constantly improving and innovating our offerings to ensure that we strive to provide the best possible value for our clients.",
    },



  ]

  
  const sec4Data = [
    { title: "User Experience Testing",
     },

     { title: "Usability Testing",
     },

     { title: "Test Case Creation",
     },

     { title: "Cross-Browser Testing",
     },

     { title: "GUI Testing",
     },

     { title: "DB Testing",
     },

     { title: "Localisation Testing", 
     },

     { title: "Security Testing",
     },

   
  
  ]

  const sec6Data = [
    {
      title: "For User Interface Validation",
      description: "Ensure seamless user experiences and pixel-perfect interfaces through meticulous manual testing tailored to UI intricacies.",
    },

    {
      title: "In Complex Integration Scenarios",
      description: "Navigate intricate system integrations with manual testing expertise, ensuring seamless platform communication and compatibility.",
    },
    {
      title: "Throughout Version Updates",
      description: "Ensure software integrity during version transitions with manual testing, preserving functionality and user experience across iterations.",
    },
    {
      title: "With Exploratory Testing Needs",
      description: "Uncover hidden defects and validate system behaviour under diverse scenarios through intuitive and adaptable exploratory testing methods.",
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
    <div className='manual-testing-page'>

      <Banner
        pageName={"manual-testing"}
        blueTitle={"MANUAL TESTING"}
        titleWeb={"Crafting Flawless<br/> Software Experiences"}
        titleTab={"Crafting Flawless<br/> Software Experiences"}
        titleMob={"Crafting<br/> Flawless<br/> Software<br/> Experiences"}
        subTitleWeb={"We ensure bug-free, high-performance<br/> software."}
        subTitleTab={"We ensure bug-free, high-performance<br/> software."}
        subTitleMob={"We ensure bug-free, high-<br/>performance software."}
        iconTopWeb={'58%'}
        iconLeftWeb={'80%'}
        iconTopTab={'69%'}
        iconLeftTab={'56%'}
        iconTopMob={'58%'}
        iconLeftMob={'70%'}
        iconRotationWeb={45}
        iconRotationTab={169}
        iconRotationMob={150} >
      </Banner>

      <SimpleSection
        pageName={"manual-testing"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Manual &<br/> Automated<br/> Approaches"}
        headingTab={"Manual & Automated<br/> Approaches"}
        headingMob={"Manual &<br/> Automated<br/> Approaches"}
        description={"At ZOG Global, our manual testing services ensure that all parts of your application or system are subjected to thorough testing at each stage of the development process. We also use advanced software automation tools to do manual testing more efficiently and quickly."}
        buttonText={""}
      />



      <BlueNotchSection
        headingWeb={"What Sets Us Apart?"}     // <br/>
        headingTab={"What Sets Us Apart?"}
        headingMob={"What Sets Us<br/> Apart?"}
        descriptionPresent={true}
        descriptionWeb={"Our commitment to meticulous attention to detail, rigorous testing methodologies, and personalised solutions ensures unparalleled quality in software validation."}
        descriptionTab={"Our commitment to meticulous attention to detail, rigorous testing methodologies, and personalised solutions ensures unparalleled quality in software validation."}
        descriptionMob={"Our commitment to meticulous attention to detail, rigorous testing methodologies, and personalised solutions ensures unparalleled quality in software validation."}
        listData={sec3Data}

      />


<MultiCardsSection
        pageName={'manual-testing'}
        secNo={'4'}
        cardHeight={360}
        alignment={"center"}
        numberPresent={false}
        imagePresent={true}
        headingWeb={"Types Of Manual Testing<br/> We Provide"}
        headingTab={"Types Of Manual<br/> Testing We Provide"}
        headingMob={"Types Of<br/> Manual Testing<br/> We Provide"}
        descriptionWeb={"Explore our diverse range of meticulous manual testing service offerings."}
        descriptionTab={"Explore our diverse range of meticulous manual<br/> testing service offerings."}
        descriptionMob={"Explore our diverse range of meticulous<br/> manual testing service offerings."}
data={sec4Data}
 />

      <div className='sec-5'>
        <div className='inner'>
          <div className='title'>
            <h1 className='only-web'>How our Testing Keeps Up<br/>with Development</h1>
            <h1 className='only-tab'>How our Testing Keeps<br/>Up with Development</h1>
            <h1 className='only-mob'>How our Testing<br/>Keeps Up with<br/>Development</h1>
          </div>
          <img src='/images/manual-testing/sec-5.png' alt=''></img>
        </div>
      </div>


      <GreyCardsSection
        pageName={''}
        headingWeb={"When You Need Manual<br/> Testing?"}
        headingTab={"When You Need<br/> Manual Testing?"}
        headingMob={"When You Need<br/> Manual Testing?"}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        cardsData={ sec6Data}

      />


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"manual-testing"}
        titleWeb={"Enhance Quality.<br/> Ensure Reliability."}
        titleTab={"Enhance Quality.<br/> Ensure Reliability."}
        titleMob={"Enhance Quality.<br/> Ensure Reliability."}
                
        subTitlePresent={true}
        subTitleWeb={"Trust our services to ensure high software quality."}
        subTitleTab={"Trust our services to ensure<br/> high software quality."}
        subTitleMob={"Trust our services to ensure high<br/> software quality."}

        buttonText={"get started now"}
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

export default ManualTesting