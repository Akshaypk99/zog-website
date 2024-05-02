import React, { Component, useEffect, useState, useContext } from 'react'
import './Healthcare.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'  
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import SpecialSliderSection from "../../common-component/SpecialSliderSection/SpecialSliderSection"
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import GreyCardsSection from '../../common-component/GreyCardsSection/GreyCardsSection.js'
import InsightSliderSection from '../../common-component/InsightSliderSection/InsightSliderSection'

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


const Healthcare = () => {
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
    { title: "Software Development", description: "Crafted with care, our healthcare software solutions prioritise patient well-being, streamline administrative tasks, and ensure data accuracy." },
    { title: "Cloud Migration", description: "Elevate your healthcare practice with a smooth and secure transition to the cloud, providing flexibility, accessibility, and peace of mind." },
    { title: "Cybersecurity Solutions", description: "Ensuring the protection of your patient's privacy is our utmost priority. Our comprehensive cybersecurity solutions ensure trust and confidence." },
    { title: "Infrastructure Management", description: "Behind every successful healthcare operation is reliable infrastructure management. We ensure seamless performance to support patient care." }
  ]

  const sec5Data = [
    {
      title: "Enhanced Efficiency",
      description: "Streamline workflows and automate tasks to boost operational efficiency and productivity within your healthcare organisation with our tailored IT solutions.",
    },
    {
      title: "Improved Patient Care",
      description: "Empower healthcare providers with advanced technology tools for personalised care delivery, leading to improved patient satisfaction and outcomes.",
    },
    {
      title: "Enhanced Data Security",
      description: "Ensure patient data's confidentiality, integrity, and availability while maintaining compliance with healthcare regulations using our security measures.",
    },

    
    {
      title: "Cost Savings",
      description: "Optimise resource allocation, minimise operational costs and achieve economies of scale with our cost-effective IT solutions tailored for healthcare.",
    },
    {
      title: "Scalability & Future-Readiness",
      description: "Stay ahead of industry trends and seamlessly adapt to evolving healthcare needs with our scalable and future-ready IT infrastructure and services.",
    },



  ]

  
  const sec4Data = [
    {
      title: "Electronic Health Record System",
      description: "Manage patient data seamlessly, ensuring accuracy and accessibility while facilitating efficient information sharing among healthcare providers.",
    },

    {
      title: "Patient Management Portal",
      description: "Empower patients with easy access to appointments, records, and communication channels, enhancing engagement and care coordination.",
    },
    {
      title: "Clinical Decision Support System",
      description: "Optimise clinical workflows with real-time insights and evidence-based recommendations, improving decision-making and patient outcomes.",
    },
    {
      title: "Telehealth Integration",
      description: "Revolutionise healthcare delivery through integrated telehealth, enabling remote consultations, monitoring, and seamless virtual care experiences for all.",
    },
    
  ]

  const sec6Data=[
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
    <div className='healthcare-page'>

      <Banner
        pageName={"healthcare"}
        blueTitle={"Healthcare"}
        titleWeb={"Streamlining Healthcare<br/> with IT Expertise"}
        titleTab={"Streamlining<br/> Healthcare with IT<br/> Expertise"}
        titleMob={"Streamlining<br/> Healthcare with<br/> IT Expertise"}
        subTitleWeb={"We lead the way in healthcare-focused<br/> IT innovations."}
        subTitleTab={"We lead the way in healthcare-focused<br/> IT innovations."}
        subTitleMob={"We lead the way in<br/> healthcare-focused IT<br/> innovations."}
        iconTopWeb={'10%'}
        iconLeftWeb={'90%'}
        iconTopTab={'40%'}
        iconLeftTab={'75%'}
        iconTopMob={'44%'}
        iconLeftMob={'72%'}
        iconRotationWeb={80}
        iconRotationTab={30}
        iconRotationMob={81}>
      </Banner>

      <SimpleSection
        pageName={"healthcare"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"All-in-One<br/> Healthcare IT<br/> Partner"}
        headingTab={"All-in-One Healthcare IT<br/> Partner"}
        headingMob={"All-in-One<br/> Healthcare IT<br/> Partner"}
        description={"We transform healthcare operations with advanced IT solutions, optimising efficiency, ensuring data security, and meeting regulatory standards for enhanced patient outcomes."}
        buttonText={""}
      />



<SpecialSliderSection 
      pageName={"healthcare"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"IT Services Specialised<br/> for Healthcare"}
      headingTab={"IT Services Specialised<br/> for Healthcare"}
      headingMob={"IT Services<br/> Specialised for<br/> Healthcare"}
      descriptionWeb={"Our commitment to healthcare shines through our bespoke IT services, designed to<br/> streamline operations, fortify security, and elevate patient experiences."}
      descriptionTab={"Our commitment to healthcare shines through<br/> our bespoke IT services, designed to streamline<br/> operations, fortify security, and elevate patient<br/> experiences."}
      descriptionMob={"Our commitment to healthcare shines<br/> through our bespoke IT services,<br/> designed to streamline operations,<br/> fortify security, and elevate patient<br/> experiences."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


      <GreyCardsSection
        pageName={''}
        headingWeb={"Advanced Software Solutions"}
        headingTab={"Advanced Software Solutions"}
        headingMob={"Advanced Software Solutions"}
        descriptionWeb={"We offer software solutions designed to address diverse industry needs, optimise operations, and drive performance through advanced features and functionality."}
        descriptionTab={"We offer software solutions designed to address diverse industry needs, optimise operations, and drive performance through advanced features and functionality."}
        descriptionMob={"We offer software solutions designed to address diverse industry needs, optimise operations, and drive performance through advanced features and functionality."}
        cardsData={ sec4Data}

      />


<BlueNotchSection
        headingWeb={"Why Choose our<br/> Healthcare IT Services"}     // <br/>
        headingTab={"Why Choose our<br/> Healthcare IT Services"}
        headingMob={"Why Choose our<br/> Healthcare IT<br/> Services"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec5Data}

      />

{blogData&&
      <InsightSliderSection
        pageName={"healthcare"}
        secNo={"6"}
        headingWeb={"Healthcare <br/>IT Insights"}
        headingTab={"Healthcare<br/> IT Insights"}
        headingMob={"Healthcare<br/> IT Insights"}
        data={blogData}
      />
}


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"healthcare"}
        titleWeb={"Discover the<br/> Future of<br/> Healthcare IT"}
        titleTab={"Discover the<br/> Future of<br/> Healthcare IT"}
        titleMob={"Discover the<br/> Future of<br/> Healthcare IT"}
                
        subTitlePresent={true}
        subTitleWeb={"Let's collaborate for<br/> unparalleled innovation and<br/> growth."}
        subTitleTab={"Let's collaborate for unparalleled innovation and growth."}
        subTitleMob={"Let's collaborate for unparalleled<br/> innovation and growth."}

        buttonText={"contact us now"}
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

export default Healthcare