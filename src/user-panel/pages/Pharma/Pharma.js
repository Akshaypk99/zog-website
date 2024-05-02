import React, { Component, useEffect, useState, useContext } from 'react'
import './Pharma.scss'
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


const Pharma = () => {
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
    { title: "RPA Solutions", description: "Streamline processes, enhance efficiency, and reduce errors with our advanced Robotic Process Automation solutions." },
    { title: "AI & Machine Learning", description: "Leverage cutting-edge AI and Machine Learning technologies for predictive analytics and optimised decision-making." },
    { title: "Cybersecurity Solutions", description: "Protect sensitive data and ensure compliance with robust cybersecurity solutions tailored for the pharmaceutical sector." }
  ]

  const sec4Data = [
    {
      title: "Efficiency Enhancement",
      description: "Streamline repetitive tasks, reducing human error and operational costs in the face of stringent regulatory requirements.",
    },
    {
      title: "Optimised Drug Development",
      description: "Accelerate research and development cycles, navigating complex data landscapes to identify trends and insights efficiently.",
    },
    {
      title: "Robust Data Protection",
      description: "Safeguard sensitive patient information and intellectual property from evolving cyber threats, ensuring compliance with regulations.",
    },
    {
      title: "Enhanced Regulatory Compliance",
      description: "Leverage automated processes to ensure adherence to UK pharmaceutical regulations, mitigating risks and avoiding penalties.",
    },
    {
      title: "Personalised Patient Care",
      description: "Utilise AI algorithms to analyse patient data, enabling personalised treatment plans and enhancing healthcare outcomes across the UK.",
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
    <div className='pharma-page'>

      <Banner
        pageName={"pharma"}
        blueTitle={"Pharma"}
        titleWeb={"Infusing Innovation<br/> into Pharma"}
        titleTab={"Infusing Innovation<br/> into Pharma"}
        titleMob={"Infusing<br/> Innovation into<br/> Pharma"}
        subTitleWeb={"We help pharma businesses on the<br/> journey to thrive in the tech world."}
        subTitleTab={"We help pharma businesses on the<br/> journey to thrive in the tech world."}
        subTitleMob={"We help pharma businesses<br/> on the journey to thrive in<br/> the tech world."}
        iconTopWeb={'53%'}
        iconLeftWeb={'83%'}
        iconTopTab={'58%'}
        iconLeftTab={'70%'}
        iconTopMob={'53%'}
        iconLeftMob={'70%'}
        iconRotationWeb={37}
        iconRotationTab={22}
        iconRotationMob={20}>
      </Banner>

      <SimpleSection
        pageName={"pharma"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Enhance Drug<br/> Development"}
        headingTab={"Enhance Drug<br/> Development"}
        headingMob={"Enhance Drug<br/> Development"}
        description={"Digital technology is revolutionising the pharma industry, and one exciting example is AI. With its ability to analyse enormous amounts of data, AI is uncovering valuable patterns and connections, leading to faster and higher-quality drug development."}
        buttonText={""}
      />



<SpecialSliderSection 
      pageName={"pharma"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"IT Solutions<br/> for Pharma Industry"}
      headingTab={"IT Solutions <br/> Pharma Industry"}
      headingMob={"IT Solutions for<br/> Pharma<br/> Industry"}
      descriptionWeb={"ZOG Global offers a range of specialised IT solutions to empower pharmaceutical<br/> companies with innovative technologies that drive efficiency, compliance, and growth."}
      descriptionTab={"ZOG Global offers a range of specialised IT<br/> solutions to empower pharmaceutical<br/> companies with innovative technologies that<br/> drive efficiency, compliance, and growth."}
      descriptionMob={"ZOG Global offers a range of<br/> specialised IT solutions to empower<br/> pharmaceutical companies with<br/> innovative technologies that drive<br/> efficiency, compliance, and growth."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


      <BlueNotchSection
        headingWeb={"How you Benefit<br/> from Our Tech Solutions"}     // <br/>
        headingTab={"How you Benefit from<br/> Our Tech Solutions"}
        headingMob={"How you<br/> Benefit from<br/> Our Tech<br/> Solutions"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec4Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"pharma"}
        secNo={"5"}
        headingWeb={"Explore Pharma<br/> Tech Insights"}
        headingTab={"Explore Pharma Tech<br/> Insights"}
        headingMob={"Explore<br/> Pharma Tech<br/> Insights"}
        data={blogData}
      />
}

      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"pharma"}
        titleWeb={"Need IT<br/> Support?"}
        titleTab={"Need IT Support?"}
        titleMob={"Need IT Support?"}
                
        subTitlePresent={true}
        subTitleWeb={"Let's talk about your challenges and how we can help."}
        subTitleTab={"Let's talk about your<br/> challenges and how we can<br/> help."}
        subTitleMob={"Let's talk about your challenges and<br/> how we can help."}

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

export default Pharma