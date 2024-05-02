import React, { Component, useEffect, useState, useContext } from 'react'
import './ApplicationSecurityTesting.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import MultiCardsSection from '../../common-component/MultiCardsSection/MultiCardsSection.js'
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


const ApplicationSecurityTesting = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sec3Data = [
    {
      title: "Static Application Security Testing (SAST)",
      description: "SAST finds code flaws such as injections and overflows. It ensures robust code security through comprehensive source code analysis.",
    },

    {
      title: "Dynamic Application Security Testing (DAST)",
      description: "DAST identifies runtime vulnerabilities like XSS and SQL injection. It examines applications in real-time to uncover potential security weaknesses.",
    },
    {
      title: "Interactive Application Security Testing (IAST)",
      description: "IAST combines SAST and DAST for precise vulnerability detection. It analyses application behaviour in a simulated environment for accurate results.",
    },
    {
      title: "Penetration Testing",
      description: "Penetration tests simulate attacks to identify system weaknesses. They provide insights into potential vulnerabilities and avenues for improvement.",
    },
    {
      title: "Fuzz Testing",
      description: "Fuzz testing detects faults like buffer overflows by injecting random data. It helps ensure robustness and reliability in software applications.",
    },
    {
      title: "Mobile Application Security Testing",
      description: "This testing focuses on mobile app security, uncovering issues like data leaks and unauthorised access. It ensures mobile app integrity.",
    },


  ]
  const sec4Data = [
    {
      title: "Enhance Digital Trust",
    },
    {
      title: "Reduce Time to Market",
    },
    {
      title: "Accelerate GDPR Compliance",
    },
    {
      title: "Continuous Security Testing",
    },
    {
      title: "Improve Test Coverage",
    },
    {
      title: "Enhance Software Quality",
    },
    {
      title: "Reduce Attack Surface",
    },
    {
      title: "Reduce Cost of Testing",
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
    <div className='application-security-testing-page'>

      <Banner
        pageName={"application-security-testing"}
        blueTitle={"Application Security Testing"}
        titleWeb={"Strengthen Security<br/> Ensure Reliability"}
        titleTab={"Strengthen Security<br/> Ensure Reliability"}
        titleMob={"Strengthen<br/> Security<br/> Ensure<br/> Reliability"}
        subTitleWeb={"We ensure the security of your<br/> application against cyber-attacks."}
        subTitleTab={"We ensure the security of your<br/> application against cyber-attacks."}
        subTitleMob={"We ensure the security of<br/> your application against<br/> cyber-attacks."}
        iconTopWeb={'72%'}
        iconLeftWeb={'71%'}
        iconTopTab={'80%'}
        iconLeftTab={'42%'}
        iconTopMob={'77%'}
        iconLeftMob={'32%'}
        iconRotationWeb={-5}
        iconRotationTab={-6}
        iconRotationMob={0}>
      </Banner>

      <SimpleSection
        pageName={"application-security-testing"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Secure Your<br/> Digital Assets"}
        headingTab={"Secure Your Digital Assets"}
        headingMob={"Secure Your Digital<br/> Assets"}
        description={"Your digital assets are the heartbeat of your business – they hold your innovations, client data, and reputation. At ZOG Global, we understand the gravity of safeguarding these assets. Our comprehensive testing services go beyond mere protection; they are committed to fortifying your digital fortress against persistent cyber threats."}
        buttonText={""}
      />



      <GreyCardsSection
        pageName={'application-security-testing'}
        headingWeb={"3"}
        headingTab={"Application Security<br/> Services We Offer"}
        headingMob={"Application Security<br/> Services We Offer"}
        descriptionWeb={"Application<br/> Security<br/> Services We<br/> Offer"}
        descriptionTab={""}
        descriptionMob={""}
        cardsData={sec3Data}

      />


      <MultiCardsSection
        pageName={'application-security-testing'}
        secNo={'4'}
        cardHeight={279}
        alignment={"center"}
        numberPresent={true}
        imagePresent={false}
        headingWeb={"Benefits Of Our Application<br/> Security Testing"}
        headingTab={"Benefits Of Our<br/> Application Security<br/> Testing"}
        headingMob={"Benefits Of Our<br/> Application<br/> Security Testing"}
        descriptionWeb={"Discover the benefits of our application security testing to make informed decisions<br/> about securing your applications."}
        descriptionTab={"Discover the benefits of our application security<br/> testing to make informed decisions about<br/> securing your applications."}
        descriptionMob={"Discover the benefits of our application<br/> security testing to make informed<br/> decisions about securing your<br/> applications."}
        data={sec4Data}
      />

      <div className='sec-5'>

      </div>


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"application-security-testing"}
        titleWeb={"Secure Your<br/> Application from<br/> the Start"}
        titleTab={"Secure Your<br/> Application from<br/> the Start"}
        titleMob={"Secure Your<br/> Application from<br/> the Start"}

        subTitlePresent={true}
        subTitleWeb={"Let's discuss how we can quickly move you along on the<br/> path towards strengthening your defences."}
        subTitleTab={"Let's discuss how we can<br/> quickly move you along on<br/> the path towards<br/> strengthening your defences."}
        subTitleMob={"Let's discuss how we can quickly move<br/> you along on the path towards<br/> strengthening your defences."}

        buttonText={"talk to us now"}
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

export default ApplicationSecurityTesting