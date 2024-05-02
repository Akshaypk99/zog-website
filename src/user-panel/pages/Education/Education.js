import React, { Component, useEffect, useState, useContext } from 'react'
import './Education.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import SpecialSliderSection from "../../common-component/SpecialSliderSection/SpecialSliderSection"
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
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


const Education = () => {
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
    { title: "Education Software", description: "Enhance your teaching methods with cutting-edge software, fostering interactive and immersive learning experiences for students of all levels." },
    { title: "Cloud Solutions", description: "Streamline administrative tasks and enhance classroom collaboration with our secure, cloud-based solutions designed for educational institutions." },
    { title: "Cybersecurity", description: "Ensure the security and privacy of your institution's digital assets with our comprehensive cybersecurity solutions, safeguarding against cyber threats." }
  ]

  const sec4Data = [
    {
      title: "Parent-Teacher Communication Platform",
      description: "Enable real-time updates, progress reports, and collaboration between parents and teachers for enhanced student development and engagement.",
    },
    {
      title: "Virtual Classroom Platforms",
      description: "Transform classrooms with live video, chat, whiteboards, and collaborative tools for immersive remote learning experiences and seamless interaction.",
    },
    {
      title: "Educational CMS",
      description: "Centralise creation, storage, and distribution of educational content for easy access, organisation, and customisation to diverse learning needs.",
    },
    {
      title: "SIS Enhancements",
      description: "Optimise administrative processes with customised enhancements to student information systems, including automated reporting and streamlined data management.",
    },
    {
      title: "Adaptive Learning Platforms",
      description: "Personalise learning experiences with AI-driven platforms that tailor content and assessments to individual student abilities and learning preferences.",
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
    <div className='education-page'>

      <Banner
        pageName={"education"}
        blueTitle={"Education"}
        titleWeb={"Smart IT Solutions for<br/>Brighter Futures"}
        titleTab={"Smart IT<br/> Solutions for<br/> Brighter Futures"}
        titleMob={"Smart IT<br/> Solutions for<br/> Brighter Futures"}
        subTitleWeb={"We enhance the learning environments<br/> with our tech expertise."}
        subTitleTab={"We enhance the learning environments<br/> with our tech expertise."}
        subTitleMob={"We enhance the learning<br/> environments with our tech<br/> expertise."}
        iconTopWeb={'30%'}
        iconLeftWeb={'88%'}
        iconTopTab={'55%'}
        iconLeftTab={'75%'}
        iconTopMob={'58%'}
        iconLeftMob={'70%'}
        iconRotationWeb={140}
        iconRotationTab={73}
        iconRotationMob={70}>
      </Banner>

      <SimpleSection
        pageName={"education"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Transforming<br/> Education Industry"}
        headingTab={"Transforming Education<br/> Industry"}
        headingMob={"Transforming<br/> Education Industry"}
        description={"ZOG Global specialises in securing cloud infrastructures for educational institutions, ensuring compliance and reliability. We focus on optimising student-oriented learning environments with world-class software and managed solutions. We help schools and universities maximise technology investments for a safe and efficient digital experience."}
        buttonText={""}
      />



<SpecialSliderSection 
      pageName={"education"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"Our Service Offerings"}
      headingTab={"Our Service Offerings"}
      headingMob={"Our Service<br/> Offerings"}
      descriptionWeb={"Improve educational experiences with our IT solutions personalised to optimise<br/> operations and support learning objectives within the industry."}
      descriptionTab={"Improve educational experiences with our IT<br/> solutions personalised to optimise operations<br/> and support learning objectives within the<br/> industry."}
      descriptionMob={"Improve educational experiences with<br/> our IT solutions personalised to<br/> optimise operations and support<br/> learning objectives within the industry."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


      <BlueNotchSection
        headingWeb={"Advanced Software<br/> Solutions"}     // <br/>
        headingTab={"Advanced Software<br/> Solutions"}
        headingMob={"Advanced<br/> Software<br/> Solutions"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec4Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"education"}
        secNo={"5"}
        headingWeb={"Technology Insights in<br/> Education Industry"}
        headingTab={"Technology Insights in<br/> Education Industry"}
        headingMob={"Technology<br/> Insights in<br/> Education<br/> Industry"}
        data={blogData}
      />
}

      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"education"}
        titleWeb={"Have any<br/> Queries?"}
        titleTab={"Have any Queries?"}
        titleMob={"Have any<br/> Queries?"}
                
        subTitlePresent={true}
        subTitleWeb={"Get in touch with our expert team to discuss your IT<br/> needs."}
        subTitleTab={"Get in touch with our expert<br/> team to discuss your IT<br/> needs."}
        subTitleMob={"Get in touch with our expert team to<br/> discuss your IT needs."}

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

export default Education