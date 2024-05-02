import React, { Component, useEffect, useState, useContext } from 'react'
import './Media.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import DiamondSection from '../../common-component/DiamondSection/DiamondSection.js'
import SpecialSliderSection from "../../common-component/SpecialSliderSection/SpecialSliderSection"
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
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


const Media = () => {
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
    { title: "Custom Software", description: "Customised software solutions crafted precisely to align with your business objectives, ensuring efficiency and scalability." },
    { title: "Security Solutions", description: "Our comprehensive security measures and strategies safeguard your digital assets, protecting your organisation from cyber threats." },
    { title: "AI & Automation", description: "Cutting-edge AI technologies and automation systems optimise processes and enhance productivity across your operations." },
    { title: "CRM Solutions", description: "Advanced customer relationship management platforms for seamless engagement and personalised interactions with your clients." }
  ]

  const sec4Data = [
    {
      title: "Improve Operation",
      description: "Streamline workflows, optimise processes, and boost efficiency with our tailored IT solutions for seamless operational enhancement.",
    },
    {
      title: "Keep Your Data Secure",
      description: "Safeguard your valuable data with robust cybersecurity measures and comprehensive strategies tailored to your specific needs.",
    },
    {
      title: "Enhance User Experience",
      description: "Elevate user satisfaction and engagement with intuitive interfaces, personalised content, and seamlessly integrated digital experience.",
    },
    {
      title: "Connect Everything Easily",
      description: "Integrate systems effortlessly, facilitate collaboration, and ensure smooth communication across platforms for enhanced connectivity.",
    },
    {
      title: "Drive Business Growth",
      description: "Leverage cutting-edge technologies and data-driven insights to unlock new opportunities and accelerate your organisation's growth.",
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
    <div className='media-page'>

      <Banner
        pageName={"media"}
        blueTitle={"Media & Entertainment"}
        titleWeb={"Streaming Success<br/> Powered by IT"}
        titleTab={"Streaming Success<br/> Powered by IT"}
        titleMob={"Streaming<br/> Success<br/> Powered by IT"}
        subTitleWeb={"We guarantee your audience will always<br/> have a rich experience."}
        subTitleTab={"We guarantee your audience will always<br/> have a rich experience."}
        subTitleMob={"We guarantee your audience<br/> will always have a rich<br/> experience."}
        iconTopWeb={'7%'}
        iconLeftWeb={'90%'}
        iconTopTab={'59%'}
        iconLeftTab={'68%'}
        iconTopMob={'56%'}
        iconLeftMob={'67%'}
        iconRotationWeb={142}
        iconRotationTab={102}
        iconRotationMob={-28}>
      </Banner>

      <DiamondSection
        pageName={'media'}
        secNo={'2'}
        theme={"light"}
        headingBoxPresent={false}
        


        subHeadding1={"Expand Market Presence"}
        description1={"Unlock unlimited growth opportunities for your business with our advanced software solution. Share your content and reach out to audiences worldwide, opening up exciting new markets for your brand. The possibilities are truly endless!"}
        subHeadding2={"Personalise Experience"}
        description2={"In order to provide a top-notch experience for your customers, it's important to offer personalised messages and content that align with their preferences. This can easily be accomplished using AI and extensive data management, allowing you to stay ahead of their needs and desires."}
      />



<SpecialSliderSection 
      pageName={"media"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"Media & Entertainment IT<br/> Solutions"}
      headingTab={"Media & Entertainment<br/> IT Solutions"}
      headingMob={"Media &<br/> Entertainment<br/> IT Solutions"}
      descriptionWeb={"Step onto the digital stage confidently. Our specialised IT solutions set the scene for<br/> your business success."}
      descriptionTab={"Step onto the digital stage confidently. Our<br/> specialised IT solutions set the scene for your<br/> business success."}
      descriptionMob={"Step onto the digital stage<br/> confidently. Our specialised IT solutions<br/> set the scene for your business<br/> success."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


      <BlueNotchSection
        headingWeb={"Let us help you"}     // <br/>
        headingTab={"Let us help you"}
        headingMob={"Let us help you"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec4Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"media"}
        secNo={"5"}
        headingWeb={"Explore Latest<br/> Industry Insights"}
        headingTab={"Explore Latest Industry<br/> Insights"}
        headingMob={"Explore Latest<br/> Industry<br/> Insights"}
        data={blogData}
      />
}

      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"media"}
        titleWeb={"Have a Query?"}
        titleTab={"Have a Query?"}
        titleMob={"Have a Query?"}
                
        subTitlePresent={true}
        subTitleWeb={"Connect with us, and let's explore the endless<br/> possibilities together."}
        subTitleTab={"Connect with us, and let's explore<br/> the endless possibilities together."}
        subTitleMob={"Connect with us, and let's explore the<br/> endless possibilities together."}

        buttonText={"Get Started"}
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

export default Media