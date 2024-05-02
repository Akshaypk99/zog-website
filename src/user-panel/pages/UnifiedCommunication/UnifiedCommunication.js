import React, { Component, useEffect, useState, useContext } from 'react'
import './UnifiedCommunication.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import AccordionSection from '../../common-component/AccordionSection/AccordionSection.js'
import ThreeCardsSection from '../../common-component/ThreeCardsSection/ThreeCardsSection.js'
import InsightSliderSection from '../../common-component/InsightSliderSection/InsightSliderSection'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'

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


const UnifiedCommunication = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState(null);


  useEffect(() => {
    setIsLoading(true)
    API.get("blogs/?page_name=generic&section_number=1")
      .then((response) => {
        setBlogData(response.data)
        setIsLoading(false)

      })
      .catch((error) => {
        setMessage(error.data.message);
        setIsErrorModalOpen(true)
        setIsLoading(false)

      });
  }, [])

  
  const sec3Data = [
    {
      title: "Voice Calling",
      description: "Seamlessly connect with crystal-clear voice communication across all devices.",
    },
    {
      title: "Video Conferencing",
      description: "Engage face-to-face from anywhere with powerful video conferencing capabilities.",
    },
    {
      title: "Enhanced Collaboration",
      description: "Transform the way teams work together with enhanced collaboration functionalities.",
    },
    {
      title: "User-Friendly Interface",
      description: "Simplify communication with a user-friendly interface accessible to all users.",
    },
    {
      title: "Simplified Administration",
      description: "Simplified administration ensures easy management of users, settings, and resources.",
    },
    {
      title: "",
      description: "",
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

  const sec5Data=[
    {
      title:"Trädmord infodemi dekaledes",
      auther:"By John Doe",
      date:"Jan 30, 2024",
      department:"Banking, UI/UX"
    },
    {
      title:"Trädmord infodemi dekaledes",
      auther:"By John Doe",
      date:"Jan 30, 2024",
      department:"Banking, UI/UX"
    },
    {
      title:"Trädmord infodemi dekaledes",
      auther:"By John Doe",
      date:"Jan 30, 2024",
      department:"Banking, UI/UX"
    },
    {
      title:"Trädmord infodemi dekaledes",
      auther:"By John Doe",
      date:"Jan 30, 2024",
      department:"Banking, UI/UX"
    },
    {
      title:"Trädmord infodemi dekaledes",
      auther:"By John Doe",
      date:"Jan 30, 2024",
      department:"Banking, UI/UX"
    },
    {
      title:"Trädmord infodemi dekaledes",
      auther:"By John Doe",
      date:"Jan 30, 2024",
      department:"Banking, UI/UX"
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
    <div className='unified-communication-page'>

      <Banner
        pageName={"unified-communication"}
        blueTitle={"Unified Communications"}
        titleWeb={"Seamless Connectivity<br/> Enhanced Collaboration "}
        titleTab={"Seamless<br/> Connectivity<br/> Enhanced<br/> Collaboration "}
        titleMob={"Seamless<br/> Connectivity<br/> Enhanced<br/> Collaboration "}
        subTitleWeb={"Effortlessly manage all your<br/> communication channels."}
        subTitleTab={"Effortlessly manage all your<br/> communication channels."}
        subTitleMob={"Effortlessly manage all<br/> your communication<br/> channels."}
        iconTopWeb={'72%'}
        iconLeftWeb={'71%'}
        iconTopTab={'47%'}
        iconLeftTab={'78%'}
        iconTopMob={'53%'}
        iconLeftMob={'75%'}
        iconRotationWeb={-5}
        iconRotationTab={185}
        iconRotationMob={193}>
      </Banner>

      <SimpleSection
        pageName={"unified-communication"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Simplify<br/> Collaboration with<br/> UCaaS"}
        headingTab={"Simplify Collaboration<br/> with UCaaS"}
        headingMob={"Simplify<br/> Collaboration with<br/> UCaaS"}
        description={"UCaaS, or Unified Communications as a Service, revolutionises business communication. Our cloud-based solution integrates voice, video, messaging, and email, fostering seamless collaboration and productivity."}
        buttonText={""}
      />



      <AccordionSection 
      headingWeb={"Capabilities of our<br/> Unified Communication Systems"}
       headingTab={"Capabilities of our<br/> Unified Communication<br/> Systems"}
       headingMob={"Capabilities of<br/> our Unified<br/> Communication<br/> Systems"}
       description={"ZOG Global brings you unparalleled connectivity and collaboration through our<br/> Unified Communication Systems, driving productivity forward."}
      
      accordionData={sec3Data} />


<ThreeCardsSection
        pageName={'unified-communication'}
        secNo={'4'}
        cardHeight={523}
        alignment={"left"}
        headingWeb={"How Your Business Can<br/> Benefit from UCaaS"}
        headingTab={"How Your Business Can<br/> Benefit from UCaaS"}
        headingMob={"How Your<br/> Business Can<br/> Benefit from<br/> UCaaS"}
        descriptionWeb={"Whether you're a small startup or a well-established enterprise, UCaaS is a versatile<br/> solution embraced by businesses across all scales."}
        descriptionTab={"Whether you're a small startup or a well-<br/>established enterprise, UCaaS is a versatile<br/> solution embraced by businesses across all<br/> scales."}
        descriptionMob={"Whether you're a small startup or a<br/> well-established enterprise, UCaaS is a<br/> versatile solution embraced by<br/> businesses across all scales."}


        subHeading1={"Enhance Productivity"}
        description1={"Accelerate productivity with integrated tools that streamline communication and enhance collaboration."}
        subHeading2={"Reduce  Operational Costs"}
        description2={"Save money by consolidating communication tools and reducing maintenance costs with our UCaaS solutions."}
        subHeading3={"Quick Deployment"}
        description3={"Rapidly deploy UCaaS solutions to expedite implementation and minimise downtime for your business."}
      />

      {blogData&&
      <InsightSliderSection
        pageName={"unified-communication"}
        secNo={"5"}
        headingWeb={"Explore Our Resources"}
        headingTab={"Explore Our Resources"}
        headingMob={"Explore Our<br/> Resources"}
        data={blogData}
      />
}


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"unified-communication"}
        titleWeb={"Take ZOG Global<br/> for a Spin"}
        titleTab={"Take ZOG Global<br/> for a Spin"}
        titleMob={"Take ZOG Global<br/> for a Spin"}
                
        subTitlePresent={false}
        subTitleWeb={"Talk to our unified communication experts today to see<br/> how it works for your business."}
        subTitleTab={"Talk to our unified communication<br/> experts today to see how it works for<br/> your business."}
        subTitleMob={"Talk to our unified communication<br/> experts today to see how it works for<br/> your business."}

        buttonText={"talk to our experts"}
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

export default UnifiedCommunication