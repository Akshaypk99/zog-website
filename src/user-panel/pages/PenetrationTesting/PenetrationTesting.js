import React, { Component, useEffect, useState, useContext } from 'react'
import './PenetrationTesting.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import ImageOverlapedSection from "../../common-component/ImageOverlapedSection/ImageOverlapedSection"
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
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


const PenetrationTesting = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  const sec5Data = [
    {
      title: "Enhanced Vulnerability Detection",
      description: "Pinpoints weaknesses in object interactions, providing comprehensive security coverage and insights.",
    },
    {
      title: "Targeted Risk Mitigation",
      description: "Identifies specific vulnerabilities within objects, enabling precise remediation efforts for risk reduction.",
    },
    {
      title: "Realistic Attack Simulation",
      description: "Mimics authentic threat scenarios, allowing organisations to assess defences accurately against potential breaches.",
    },
    {
      title: "Comprehensive Object Analysis",
      description: "Examines individual components thoroughly, ensuring a detailed understanding of system vulnerabilities and weaknesses.",
    },
    {
      title: "Efficient Resource Utilisation",
      description: "Maximises testing efficacy by focusing efforts on critical object interactions and optimising resource allocation.",
    },

    {title:"Improved Incident Response",
    description:"Facilitates rapid identification and mitigation of security incidents through granular object-level analysis."},
    {title:"Adaptive Security Strategies",
    description:"Supports flexible security approaches tailored to object features, enhancing overall resilience against evolving threats."},
    {title:"Streamlined Risk Prioritisation",
    description:"Enables prioritisation of security efforts based on the severity and impact of identified object vulnerabilities."},
    {title:"Holistic Security Assessment",
    description:"It offers a comprehensive view of system security by thoroughly assessing objects in their operational context."},
   

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
    <div className='penetration-testing-page'>

      <Banner
        pageName={"penetration-testing"}
        blueTitle={"Penetration Testing"}
        titleWeb={"Strategic Protection<br/> Thorough Testing"}
        titleTab={"Strategic Protection<br/> Thorough Testing"}
        titleMob={"Strategic<br/> Protection<br/> Thorough<br/> Testing"}
        subTitleWeb={"Comprehensive testing for<br/> robust software security."}
        subTitleTab={"Comprehensive testing for robust<br/> software security."}
        subTitleMob={"Comprehensive testing for<br/> robust software security."}
        iconTopWeb={'7%'}
        iconLeftWeb={'89%'}
        iconTopTab={'46%'}
        iconLeftTab={'75%'}
        iconTopMob={'49%'}
        iconLeftMob={'74%'}
        iconRotationWeb={201}
        iconRotationTab={209}
        iconRotationMob={82}>
      </Banner>

      <SimpleSection
        pageName={"penetration-testing"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Eliminate All Security<br/> Weaknesses"}
        headingTab={"Eliminate All Security<br/> Weaknesses"}
        headingMob={"Eliminate All<br/> Security Weaknesses"}
        description={"Our team of expert penetration testers will simulate cyber-attacks against your software to identify exploitable flaws or logic errors that might leave you vulnerable to hackers."}
        buttonText={""}
      />


<ImageOverlapedSection 
      pageName={'penetration-testing'} 
      secNo={'3'} 
      imageFirst={false}
      numberPresent={true}
      headingWeb={"Types of Penetration<br/> Testing Services We Offer"} 
      headingTab={"Types of Penetration<br/> Testing Services We<br/> Offer"} 
      headingMob={"Types of Penetration Testing Services We Offer"} 
      descriptionWeb={""}
      descriptionTab={""}
       descriptionMob={""}

      subHeadding1={"Objective-Based Penetration Testing"} 
      description1={"Our tailored assessments focus on specific goals, uncovering vulnerabilities to fortify your security strategy effectively and efficiently."} 
      subHeadding2={"Infrastructure Penetration Testing"} 
      description2={"We comprehensively examine your network, systems, and applications, pinpointing weaknesses to bolster your defences against cyber threats."} 
      subHeadding3={"Ransomware Penetration Testing"} 
      description3={"Simulating ransomware attacks, we evaluate your preparedness, strengthen defences, and minimise the impact of potential ransomware incidents."}
      />


<SimpleSection
        pageName={"penetration-testing"}
        secNo={"4"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Mitigate Breach Risk<br/> with an Objective-<br/>Based Approach"}
        headingTab={"Mitigate Breach Risk with<br/> an Objective-Based<br/> Approach"}
        headingMob={"Mitigate Breach<br/> Risk with an<br/> Objective-Based<br/> Approach"}
        description={"If you're concerned about the likelihood of a data breach, one effective strategy is to implement an objective-based penetration test. This assessment is designed to simulate real-world cyber-attacks and uncover potential vulnerabilities within your systems and processes."}
        buttonText={""}
      />

      <BlueNotchSection
        headingWeb={"Benefits of Object-Based<br/> Penetration Testing Approach"}     // <br/>
        headingTab={"Benefits of Object-<br/>Based Penetration Testing Approach"}
        headingMob={"Benefits of<br/> Object-Based<br/> Penetration<br/> Testing<br/> Approach"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec5Data}

      />


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"penetration-testing"}
        titleWeb={"Secure Your<br/> Software Today"}
        titleTab={"Secure Your<br/> Software Today"}
        titleMob={"Secure Your<br/> Software Today"}
                
        subTitlePresent={true}
        subTitleWeb={"Start with your trusted partner for robust pen testing<br/> services."}
        subTitleTab={"Start with your trusted<br/> partner for robust pen testing<br/> services."}
        subTitleMob={"Start with your trusted partner for<br/> robust pen testing services."}

        buttonText={"GET started now"}
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

export default PenetrationTesting