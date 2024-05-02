import React, { Component, useEffect, useState, useContext } from 'react'
import './Banking.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import DiamondSection from '../../common-component/DiamondSection/DiamondSection.js'
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


const Banking = () => {
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
    { title: "Risk Assessment", description: "We execute thorough analyses to identify vulnerabilities, assess potential threats, and recommend risk mitigation strategies." },
    { title: "Data Protection", description: "We deploy advanced measures to safeguard your sensitive data, ensuring compliance and protecting against unauthorised access." },
    { title: "Network Security", description: "Our expert solutions fortify your networks against cyber threats, prioritising confidentiality, integrity, and availability." },
    { title: "Security Testing", description: "We conduct meticulous testing to uncover system vulnerabilities, fortifying your defences against potential cyber-attacks." }
  ]

  const sec4Data = [
    {
      title: "Minimising Customer Turnover",
      description: "Enhance customer satisfaction and loyalty through personalised solutions, proactive communication, and effective loyalty programs, reducing turnover rates.",
    },
    {
      title: "Fraud Detection & Prevention",
      description: "Safeguard customers and institutions from fraudulent activities by employing advanced algorithms, real-time monitoring systems, and robust biometric authentication methods.",
    },
    {
      title: "Regulatory Compliance Management",
      description: "Mitigate risks and assure adherence to regulatory requirements by utilising compliance software, conducting regular audits, and providing comprehensive staff training.",
    },
    {
      title: "Managing Legacy Systems",
      description: "Overcome limitations of legacy systems by embracing modernisation strategies such as cloud migration, technology integration, and adopting agile methodologies.  ",
    },
    {
      title: "Optimising Operational Efficiency",
      description: "Streamline processes and reduce costs by implementing automation, digitisation, and workflow optimisation tools, enhancing overall operational efficiency.",
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
    <div className='banking-page'>

      <Banner
        pageName={"banking"}
        blueTitle={"Banking & Financial Services"}
        titleWeb={"Secure your<br/>Financial Future"}
        titleTab={"Secure your<br/> Financial Future"}
        titleMob={"Secure your<br/> Financial Future"}
        subTitleWeb={"Modernise and secure your banking and<br/> financial operations with our services."}
        subTitleTab={"Modernise and secure your<br/> banking and<br/> financial operations with our services."}
        subTitleMob={"Modernise and secure your<br/> banking and financial<br/> operations with our services."}
        iconTopWeb={'15%'}
        iconLeftWeb={'89%'}
        iconTopTab={'51%'}
        iconLeftTab={'73%'}
        iconTopMob={'68%'}
        iconLeftMob={'59%'}
        iconRotationWeb={5}
        iconRotationTab={12}
        iconRotationMob={202}>
      </Banner>

      <DiamondSection
        pageName={'banking'}
        secNo={'2'}
        theme={"light"}
        headingBoxPresent={false}
    
        subHeadding1={"Sustainability in Financial Services"}
        description1={"A sustainable world needs sustainable finance. We are helping to build a better financial services industry that is stronger, fairer, and more sustainable by helping organisations create value, accelerate the transition and make a measurable difference."}
        subHeadding2={"Solve your Security Challenges"}
        description2={"At ZOG Global, we offer dynamic solutions for your security challenges, ensuring comprehensive protection for your organisation's digital assets. Explore our cybersecurity expertise today for a robust defence."}
      />




<SpecialSliderSection 
      pageName={"banking"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"Comprehensive<br/> Cybersecurity Solutions"}
      headingTab={"Comprehensive<br/> Cybersecurity Solutions"}
      headingMob={"Comprehensive<br/> Cybersecurity<br/> Solutions"}
      descriptionWeb={"Our security solutions ensure that your digital assets are safeguarded against<br/> unauthorised access, breaches, and cyber-attacks, allowing you to focus on your core<br/> business objectives confidently."}
      descriptionTab={"Our security solutions ensure that your digital<br/> assets are safeguarded against unauthorised<br/> access, breaches, and cyber-attacks, allowing<br/> you to focus on your core business objectives<br/> confidently."}
      descriptionMob={"Our security solutions ensure that your<br/> digital assets are safeguarded against<br/> unauthorised access, breaches, and<br/> cyber-attacks, allowing you to focus on<br/> your core business objectives<br/> confidently."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


      <BlueNotchSection
        headingWeb={"How we Address<br/> your Challenges"}     // <br/>
        headingTab={"How we Address your<br/> Challenges"}
        headingMob={"How we<br/> Address your<br/> Challenges"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec4Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"banking"}
        secNo={"5"}
        headingWeb={"Banking and Financial<br/> IT Insights"}
        headingTab={"Banking and Financial<br/> IT Insights"}
        headingMob={"Banking and<br/> Financial IT<br/> Insights"}
        data={blogData}
      />
}

      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"banking"}
        titleWeb={"Looking for a<br/> Reliable IT Partner?"}
        titleTab={"Looking for a<br/> Reliable IT<br/> Partner?"}
        titleMob={"Looking for a<br/> Reliable IT<br/> Partner?"}
                
        subTitlePresent={true}
        subTitleWeb={"Connect with us for secure banking and finance<br/> solutions."}
        subTitleTab={"Connect with us for secure<br/> banking and finance<br/> solutions."}
        subTitleMob={"Connect with us for secure banking and<br/> finance solutions."}

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

export default Banking