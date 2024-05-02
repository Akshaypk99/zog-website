import React, { Component, useEffect, useState, useContext } from 'react'
import './Legal.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
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


const Legal = () => {
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
    { title: "Data Security", description: "Ensure legal data protection with robust encryption, firewalls, and compliance measures for confidentiality." },
    { title: "Cloud Services", description: "Transform legal operations with cloud-based document management, storage, and secured collaboration tools." },
    { title: "Automation Services", description: "Streamline legal processes through automated workflows, reducing manual tasks and optimising productivity." }
  ]

  const sec4Data = [
    {
      title: "Simplify Operations",
      description: "Streamline your processes and workflows for smoother, more efficient day-to-day operations.",
    },
    {
      title: "Boost Productivity",
      description: "Enhance your team's performance with our IT solutions designed to maximise efficiency and output.",
    },
    {
      title: "Enhanced Security",
      description: "Fortify your defences and safeguard sensitive data against cyber threats and breaches effectively.",
    },
    {
      title: "Protect Client Records",
      description: "Uphold client trust by implementing stringent measures to safeguard their sensitive information.",
    },
    {
      title: "Reduce Operational Costs",
      description: "Optimise resource utilisation and minimise expenses with cost-effective IT solutions and strategies.",
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
    <div className='legal-page'>

      <Banner
        pageName={"legal"}
        blueTitle={"Legal"}
        titleWeb={"Legal IT Solutions<br/> Simplified"}
        titleTab={"Legal IT Solutions<br/> Simplified"}
        titleMob={"Legal IT<br/> Solutions<br/> Simplified"}
        subTitleWeb={"We are dedicated to providing law firms<br/> with reliable IT services."}
        subTitleTab={"We are dedicated to providing law firms<br/> with reliable IT services."}
        subTitleMob={"We are dedicated to<br/> providing law firms with<br/> reliable IT services."}
        iconTopWeb={'28%'}
        iconLeftWeb={'90%'}
        iconTopTab={'59%'}
        iconLeftTab={'68%'}
        iconTopMob={'67%'}
        iconLeftMob={'67%'}
        iconRotationWeb={80}
        iconRotationTab={102}
        iconRotationMob={150}>
      </Banner>

      <SimpleSection
        pageName={"legal"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Tech Solutions for<br/> Legal Success"}
        headingTab={"Tech Solutions for Legal<br/> Success"}
        headingMob={"Tech Solutions for<br/> Legal Success"}
        description={"Wondering if your law firm should invest in technology? Absolutely, yes. In the legal sector, IT is commonly used to enhance work-life balance through improved efficiency and productivity via automation and cloud convenience."}
        buttonText={""}
      />



<SpecialSliderSection 
      pageName={"legal"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"IT Solutions for<br/> Legal Firms"}
      headingTab={"IT Solutions for Legal<br/> Firms"}
      headingMob={"IT Solutions for<br/> Legal Firms"}
      descriptionWeb={"Experience a transformative approach to legal operations, blending expertise and<br/> technology for unparalleled efficiency and success."}
      descriptionTab={"Experience a transformative approach to legal<br/> operations, blending expertise and technology for<br/> unparalleled efficiency and success."}
      descriptionMob={"Experience a transformative approach<br/> to legal operations, blending expertise<br/> and technology for unparalleled<br/> efficiency and success."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />

      <BlueNotchSection
        headingWeb={"Benefits<br/> You Can Expect"}     // <br/>
        headingTab={"Benefits You Can<br/> Expect"}
        headingMob={"Benefits You<br/> Can Expect"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec4Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"legal"}
        secNo={"5"}
        headingWeb={"Explore<br/> Legal IT Insights"}
        headingTab={"Explore Legal IT<br/> Insights"}
        headingMob={"Explore Legal IT<br/> Insights"}
        data={blogData}
      />
}

      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"legal"}
        titleWeb={"Ready for the<br/> Difference?"}
        titleTab={"Ready for the<br/> Difference?"}
        titleMob={"Ready for the<br/> Difference?"}
                
        subTitlePresent={true}
        subTitleWeb={"Get the IT support you need for your legal firm with ZOG<br/> Global."}
        subTitleTab={"Get the IT support you need<br/> for your legal firm with ZOG<br/> Global."}
        subTitleMob={"Get the IT support you need for your<br/> legal firm with ZOG Global."}

        buttonText={"talk to our team"}
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

export default Legal