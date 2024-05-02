import React, { Component, useEffect, useState, useContext } from 'react'
import './CyberSecurity.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import AccordionSection from '../../common-component/AccordionSection/AccordionSection.js'
import ImageOverlapedSection from "../../common-component/ImageOverlapedSection/ImageOverlapedSection"
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


const CyberSecurity = () => {
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
      title: "Infrastructure Security",
      description: "Fortify your digital foundation with our proactive infrastructure protection solutions.",
    },
    {
      title: "Application Security",
      description: "Ensure your applications are fortified against vulnerabilities with our expert solutions.",
    },
    {
      title: "Network Security",
      description: "Strengthen network defences against threats with our advanced security solutions.",
    },
    {
      title: "Cloud Security",
      description: "Secure your cloud environment with our comprehensive and scalable security solutions.",
    },
    {
      title: "Managed Security Services",
      description: "Let our expert team manage and monitor your security for optimal protection.",
    },
    {
      title: "Security Consulting & Strategy",
      description: "Gain strategic insights and customised security plans from our seasoned consultants.",
    },

    {
      title: "Risk Assessment & Security Audits",
      description: "We offer comprehensive risk assessments and security audits for maximum protection.",
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
    <div className='cyber-security-page'>

      <Banner
        pageName={"cyber-security"}
        blueTitle={"Cybersecurity"}
        titleWeb={"Fostering Secure<br/> Business Growth"}
        titleTab={"Fostering Secure<br/> Business Growth"}
        titleMob={"Fostering<br/> Secure<br/> Business<br/> Growth"}
        subTitleWeb={"We ensure your business stays<br/> protected always."}
        subTitleTab={"We ensure your business stays<br/> protected always."}
        subTitleMob={"We ensure your business<br/> stays protected always."}
        iconTopWeb={'15%'}
        iconLeftWeb={'89%'}
        iconTopTab={'47%'}
        iconLeftTab={'78%'}
        iconTopMob={'20%'}
        iconLeftMob={'79%'}
        iconRotationWeb={185}
        iconRotationTab={185}
        iconRotationMob={185}>
      </Banner>

      <SimpleSection
        pageName={"cyber-security"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Our Approach to<br/> Cybersecurity"}
        headingTab={"Our Approach to<br/> Cybersecurity"}
        headingMob={"Our Approach to<br/> Cybersecurity"}
        description={"Our approach is rooted in innovation, employing the latest technologies and methodologies to safeguard your data and infrastructure with unparalleled efficiency and effectiveness. What sets us apart is our team of seasoned security professionals with diverse certifications and expertise, including prestigious CISSP credentials, showcasing their dedication to excellence in cybersecurity. By partnering with us, you can trust that your cybersecurity concerns are in the hands of dedicated professionals committed to safeguarding your business from harm."}
        buttonText={""}
      />



      <AccordionSection 
      headingWeb={"Access Our Suite of<br/> Cybersecurity Solutions"}
       headingTab={"Access Our Suite of<br/> Cybersecurity Solutions"}
       headingMob={"Access Our<br/> Suite of<br/> Cybersecurity<br/> Solutions"}
       description={"Protect your business with our top-of-the-line cybersecurity solutions. Our full suite<br/> of services ensures you are safeguarded against possible threats. Don't take any<br/> chances with your valuable data; trust us to keep it secure."}
      
      accordionData={sec3Data} />


<SimpleSection
        pageName={"cyber-security"}
        secNo={"4"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Tackle Toughest<br/> Security Challenges"}
        headingTab={"Tackle Toughest Security<br/> Challenges"}
        headingMob={"Tackle Toughest<br/> Security Challenges"}
        description={"We integrate the Zero-Trust Principle into our cybersecurity framework, where trust is never assumed within or outside the network perimeter. By constantly verifying user identities and devices, we ensure that every access request undergoes rigorous authentication, bolstering your defence against unauthorised access."}
        buttonText={""}
      />


      <ImageOverlapedSection 
      pageName={'cyber-security'} 
      secNo={'5'} 
      imageFirst={false}
      numberPresent={false}
      headingWeb={"Our Featured<br/> Solutions"} 
      headingTab={"Our Featured Solutions"} 
      headingMob={"Our Featured Solutions"} 
      descriptionWeb={""}
      descriptionTab={""}
       descriptionMob={""}

      subHeadding1={"Ransomware Protection"} 
      description1={"Safeguard your data with robust encryption and proactive threat monitoring against ransomware attacks."} 
      subHeadding2={"Zero Trust Architecture"} 
      description2={"Reinvent security protocols with a holistic approach that verifies every user and device interaction."} 
      subHeadding3={"Microsegmentation"} 
      description3={"Secure your network by dividing it into smaller segments, limiting lateral movement and minimising risks."}
      />


<ThreeCardsSection
        pageName={'cyber-security'}
        secNo={'6'}
        cardHeight={523}
        alignment={"left"}
        headingWeb={"Our Methodology<br/> in Action"}
        headingTab={"Our Methodology<br/> in Action"}
        headingMob={"Our<br/> Methodology in<br/> Action"}
        descriptionWeb={"Our process integrates analysis, deployment, and continuous monitoring for tailored<br/> and effective cybersecurity solutions."}
        descriptionTab={"Our process integrates analysis, deployment, and<br/> continuous monitoring for tailored and effective<br/> cybersecurity solutions."}
        descriptionMob={"Our process integrates analysis,<br/> deployment, and continuous<br/> monitoring for tailored and effective<br/> cybersecurity solutions."}


        subHeading1={"Assessment & Analysis"}
        description1={"Thorough analysis identifies vulnerabilities and strengths for enhanced security."}
        subHeading2={"Implementation & Integration"}
        description2={"Tailored solutions deployed and integrated for comprehensive cybersecurity measures."}
        subHeading3={"Monitoring & Maintenance"}
        description3={"Continuous monitoring and updates ensure sustained protection against evolving threats."}
      />


      {blogData&&
      <InsightSliderSection
        pageName={"cyber-security"}
        secNo={"7"}
        headingWeb={"Insights into Safeguarding<br/> Your Digital Assets"}
        headingTab={"Insights into<br/> Safeguarding Your<br/> Digital Assets"}
        headingMob={"Insights into<br/> Safeguarding<br/> Your Digital<br/> Assets"}
        data={blogData}
      />
}




      <BottomBanner
        pageName={"cyber-security"}
        titleWeb={"Let's Handle<br/> Your Online Safety"}
        titleTab={"Let's Handle Your<br/> Online Safety"}
        titleMob={"Let's Handle Your<br/> Online Safety"}
                
        subTitlePresent={true}
        subTitleWeb={"Get expert solutions for your security needs."}
        subTitleTab={"Get expert solutions for your<br/> security needs."}
        subTitleMob={"Get expert solutions for your security<br/> needs."}

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

export default CyberSecurity