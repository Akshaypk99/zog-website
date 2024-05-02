import React, { Component, useEffect, useState, useContext } from 'react'
import './ANS.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import GreyCardsSection from '../../common-component/GreyCardsSection/GreyCardsSection.js'
import GreySliderSection from '../../common-component/GreySliderSection/GreySliderSection.js'
import InsightSliderSection from '../../common-component/InsightSliderSection/InsightSliderSection'
import StatisticsSection from '../../common-component/StatisticsSection/StatisticsSection.js'

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


const ANS = () => {
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

  

  const sec2Data = [
    { title: "Future-Ready Solutions",
    description: "Optimised to support digital transformation and offer a robust solution for current and future needs."
     },

    { title: "Dedicated Professionals",
    description: "A team consists of expert professionals with a dedication to excellence, ensuring customer satisfaction."
     },

    { title: "Innovative Efficiency",
    description: "Boost innovation, maximise efficiency, and provide exceptional convenience while ensuring secure operations."
     },
     {title:"Value-Driven Deployment",
    description:"We will help you identify the actual value of SD-WAN for your organisation and work with you to deliver your needs."}
  
  ]

  const sec5Data = [
    {
      text:"Resilience Enhancement",
      leftSign:"",
      number:"85",
      rightSign:"%",
    },

    {
      text:"Transfer Acceleration",
      leftSign:"",
      number:"72",
      rightSign:"%",
    },
    {
      text:"Scalability Surge",
      leftSign:"",
      number:"60",
      rightSign:"%",
    },
    {
      text:"Security Enhancement",
      leftSign:"",
      number:"48",
      rightSign:"%",
    },


  ]
  const sec6Data = [
    {
      title: "Amplify Workforce Engagement",
      description: "Evolve the technology and give people a workplace experience that meets their expectations.",
    },

    {
      title: "Rapid Response Management",
      description: "Give customers what they need when they need it and create new customer touch points quickly.",
    },
    {
      title: "Enhance Work Efficiency",
      description: "Give employees the freedom to work anywhere and connect your application fast and securely.",
    },
    {
      title: "Strengthen Network Dynamics",
      description: "Refine your current infrastructure to fasten the digital transformation with increased ROI.",
    },
   


  ]


  const sec7Data=[
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
    <div className='ans-page'>

      <Banner
        pageName={"ans"}
        blueTitle={"Advanced Networking Services"}
        titleWeb={"Transform Connectivity<br/> Maximise Efficiency"}
        titleTab={"Transform<br/> Connectivity Maximise<br/> Efficiency"}
        titleMob={"Transform<br/> Connectivity<br/> Maximise<br/> Efficiency"}
        subTitleWeb={"Streamlining networks for optimal<br/> performance and efficiency."}
        subTitleTab={"Streamlining networks for optimal<br/> performance and efficiency."}
        subTitleMob={"Streamlining networks for optimal<br/> performance and efficiency."}
        iconTopWeb={'47%'}
        iconLeftWeb={'73%'}
        iconTopTab={'62%'}
        iconLeftTab={'69%'}
        iconTopMob={'65%'}
        iconLeftMob={'73%'}
        iconRotationWeb={90}
        iconRotationTab={30}
        iconRotationMob={10}>
      </Banner>

      <GreySliderSection
      pageName={"ans"}
      secNo={"2"}
      headingWeb={"Why SD-WAN from ZOG Global?"}
      headingTab={"Why SD-WAN from ZOG Global?"}
      headingMob={"Why SD-WAN from ZOG Global?"}
      data={sec2Data}
      />


<div className='sec-3'>
        <h1>Reliable Network with Outstanding Efficiency</h1>
        <p>The cloud has transformed how we do business, and SD-WAN is a cost-effective way to keep up with the demand for cloud-based applications. SD-WAN can increase bandwidth, boost performance, and quickly add new locations and services, making it an essential tool for businesses that rely on the cloud.</p>
      </div>


      <div className='sec-4'>
       <div className='inner'>
       <h1>Enhance Any Application to Any User Over Any Network</h1>
        <p>No amount of bandwidth can address the performance impact of latency - but ZOG Global's SaaS accelerator can increase app performance by up to 10x. With WAN optimisation, cloud acceleration, SaaS acceleration, and client acceleration, ZOG Global delivers end-to-end application performance.</p>

       </div>
      </div>


      <StatisticsSection data={sec5Data}/>



      <GreyCardsSection
        pageName={'ans'}
        headingWeb={"Transform The Way You Connect"}
        headingTab={"Transform The Way You Connect"}
        headingMob={"Transform The Way You Connect"}
        descriptionWeb={"We empower flexible work environments, enabling seamless connections for improved productivity."}
        descriptionTab={"We empower flexible work environments, enabling seamless connections for improved productivity."}
        descriptionMob={"We empower flexible work environments, enabling seamless connections for improved productivity."}
        cardsData={sec6Data }

      />


{blogData&&
      <InsightSliderSection
        pageName={"ans"}
        secNo={"7"}
        headingWeb={"Explore Advanced<br/> Networking Insights"}
        headingTab={"Explore Advanced<br/> Networking Insights"}
        headingMob={"Explore<br/> Advanced<br/> Networking<br/> Insights"}
        data={blogData}
      />
}



      <BottomBanner
        pageName={"ans"}
        titleWeb={"Upgrade Your<br/> Network Today"}
        titleTab={"Upgrade Your<br/> Network Today"}
        titleMob={"Upgrade Your Network<br/> Today"}
                
        subTitlePresent={true}
        subTitleWeb={"Navigate the future with SDN and SD-WAN solutions."}
        subTitleTab={"Navigate the future with SDN<br/> and SD-WAN solutions."}
        subTitleMob={"Navigate the future with SDN and SD-<br/>WAN solutions."}

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

export default ANS