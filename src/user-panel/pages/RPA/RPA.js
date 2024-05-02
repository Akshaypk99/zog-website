import React, { Component, useEffect, useState, useContext } from 'react'
import './RPA.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import ImageOverlapedSection from "../../common-component/ImageOverlapedSection/ImageOverlapedSection"
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


const RPA = () => {
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
        setMessage(error.message);
        setIsErrorModalOpen(true)
        setIsLoading(false)

      });
  }, [])

  


  const sec5Data = [
    {
      title: "Improved Accuracy",
      description: "Elevate precision, ensure error-free outcomes, and enhance performance, fostering trust and reliability in operational processes.",
    },
    {
      title: "High Scalability",
      description: "Seamlessly expand operations, adapting with agility to evolving business needs, ensuring sustainable growth and operational flexibility.",
    },
    {
      title: "Reduce Expense",
      description: "Drive cost-efficiency, minimise expenditure, and maximise savings through streamlined processes, optimising resource allocation effectively.",
    },
    {
      title: "Compliance Assurance",
      description: "Ensure regulatory adherence, mitigate risks, and maintain industry standards, instilling confidence and trust in business operations.",
    },
    {
      title: "Employee Satisfaction",
      description: "Boost morale, empower staff, and enhance productivity, fostering a favourable work environment and improving employee engagement levels.",
    },

    {
      title: "Business Continuity",
      description: "Ensure uninterrupted operations, mitigate disruptions and safeguard resilience, ensuring stability and continuity in business processes.",
    },

  



  ]

  
  const secData = [
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
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
    <div className='rpa-page'>

      <Banner
        pageName={"rpa"}
        blueTitle={"ROBOTIC PROCESS AUTOMATION"}
        titleWeb={"Automate Tasks<br/> Boost Productivity"}
        titleTab={"Automate Tasks Boost<br/> Productivity"}
        titleMob={"Automate<br/> Tasks Boost<br/> Productivity"}
        subTitleWeb={"Simplify your operations with our expert<br/> RPA services."}
        subTitleTab={"Simplify your operations with our expert<br/> RPA services."}
        subTitleMob={"Simplify your operations with<br/> our expert RPA services."}
        iconTopWeb={'58%'}
        iconLeftWeb={'79%'}
        iconTopTab={'61%'}
        iconLeftTab={'70%'}
        iconTopMob={'50%'}
        iconLeftMob={'74%'}
        iconRotationWeb={45}
        iconRotationTab={28}
        iconRotationMob={15}>
      </Banner>

      <SimpleSection
        pageName={"rpa"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Expanding RPA<br/> Adoption"}
        headingTab={"Expanding RPA Adoption"}
        headingMob={"Expanding RPA<br/> Adoption"}
        description={"UK industries witness rapid RPA adoption, revolutionising operations, enhancing efficiency, and driving innovation across diverse sectors."}
        buttonText={""}
      />



<ImageOverlapedSection 
      pageName={'rpa'} 
      secNo={'3'} 
      imageFirst={false}
      numberPresent={false}
      headingWeb={"RPA Services We Offer"} 
      headingTab={"RPA Services We Offer"} 
      headingMob={"RPA Services We Offer"} 
      descriptionWeb={""}
      descriptionTab={""}
       descriptionMob={""}

      subHeadding1={"Data Entry Automation"} 
      description1={"Streamline data input processes, eliminate errors, and enhance efficiency with automation."} 
      subHeadding2={"Customer Service Automation"} 
      description2={"Enhance customer interactions, reduce response times, and boost satisfaction through automation."} 
      subHeadding3={"HR Process Automation"} 
      description3={"Simplify HR workflows, optimise recruitment, onboarding, and payroll processes with automation."}
      subHeadding4={"Custom Bot Development"} 
      description4={"Develop custom bots to streamline operations and maximise productivity across your business."}
      />


      <div className='sec-4'>
        <div className='inner'>
            <div className='title'>
              <h1 className='only-web'>Bot Development<br/>Life Cycle</h1>
              <h1 className='only-tab'>Bot Development<br/>Life Cycle</h1>
              <h1 className='only-mob'>Bot<br/>Development<br/>Life Cycle</h1>
            </div>
            <img src='/images/rpa/sec-4.png' alt=''></img>

            <div className='left-icon'>
              <img src='/images/rpa/sec-4-2.svg' className='only-web' alt='icon'></img>
              <img src='/images/rpa/sec-4-2-tab.svg' className='only-tab' alt='icon'></img>
              <img src='/images/rpa/sec-4-2-mob.svg' className='only-mob' alt='icon'></img>
            </div>
        </div>
      </div>


      <BlueNotchSection
        headingWeb={"Why Use RPA for<br/> your Business?"}     // <br/>
        headingTab={"Why Use RPA for your<br/> Business?"}
        headingMob={"Why Use RPA<br/> for your<br/> Business?"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec5Data}

      />

{blogData&&
      <InsightSliderSection
        pageName={"rpa"}
        secNo={"6"}
        headingWeb={"Explore Latest<br/> RPA Insights"}
        headingTab={"Explore Latest<br/> RPA Insights"}
        headingMob={"Explore<br/> Latest RPA<br/> Insights"}
        data={blogData}
      />
}


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"rpa"}
        titleWeb={"Start Automating<br/> Processes Today"}
        titleTab={"Start Automating<br/> Processes Today"}
        titleMob={"Start Automating<br/> Processes Today"}
                
        subTitlePresent={true}
        subTitleWeb={"Get expert help to streamline your operations using our<br/> RPA services."}
        subTitleTab={"Get expert help to streamline<br/> your operations using our RPA services."}
        subTitleMob={"Get expert help to streamline your<br/> operations using our RPA services."}

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

export default RPA