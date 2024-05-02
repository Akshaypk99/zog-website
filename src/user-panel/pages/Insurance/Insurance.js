import React, { Component, useEffect, useState, useContext } from 'react'
import './Insurance.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import ImageOverlapedSection from "../../common-component/ImageOverlapedSection/ImageOverlapedSection"
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


const Insurance = () => {
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
    { title: "Cybersecurity Solutions", description: "Fortify digital defences against evolving threats, ensuring data protection and compliance integrity." },
    { title: "RPA Solutions", description: "Accelerate processes and reduce manual effort with advanced Robotic Process Automation (RPA) solutions." },
    { title: "CRM Solutions", description: "Nurture lasting relationships and loyalty through personalised customer experiences with our CRM solutions." }
  ]

  const sec5Data = [
    {
      title: "Next Level Digitisation",
      description: "Elevate your digital transformation with advanced solutions tailored for your insurance business, maximising efficiency and innovation.",
    },
    {
      title: "Optimise Returns",
      description: "Maximise the performance of your investment portfolio with tailored strategies, ensuring optimal returns and sustainable growth.",
    },
    {
      title: "Streamline Payments",
      description: "Simplify and expedite premium collections while ensuring swift payouts, enhancing customer satisfaction and operational efficiency.",
    },
    {
      title: "Revamp Operations",
      description: "Overhaul your treasury and finance operations with cutting-edge technology, streamlining processes and driving agility and profitability.",
    },
    {
      title: "Increase Efficiency",
      description: "Enhance your bottom line by reducing costs and optimising workflows, improving efficiency and productivity across your insurance operations.",
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
    <div className='insurance-page'>

      <Banner
        pageName={"insurance"}
        blueTitle={"Insurance"}
        titleWeb={"Next-Gen Insurance<br/>IT Solutions"}
        titleTab={"Next-Gen Insurance<br/> IT Solutions"}
        titleMob={"Next-Gen<br/> Insurance IT<br/> Solutions"}
        subTitleWeb={"Start your journey to digital insurance<br/> excellence."}
        subTitleTab={"Start your journey to digital insurance<br/> excellence."}
        subTitleMob={"Start your journey to digital<br/> insurance excellence."}
        iconTopWeb={'49%'}
        iconLeftWeb={'87%'}
        iconTopTab={'60%'}
        iconLeftTab={'69%'}
        iconTopMob={'65%'}
        iconLeftMob={'60%'}
        iconRotationWeb={149}
        iconRotationTab={135}
        iconRotationMob={149}>
      </Banner>

      <SimpleSection
        pageName={"insurance"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Embrace Change to<br/> Stay Ahead"}
        headingTab={"Embrace Change to Stay<br/> Ahead"}
        headingMob={"Embrace Change to<br/> Stay Ahead"}
        description={"Insurance companies face unrelenting pressures to trim costs in today's dynamic landscape. However, the key to attracting and retaining customers, boosting profitability, and staying ahead is ongoing investment in the latest insurance technology solutions."}
        buttonText={""}
      />

<ImageOverlapedSection 
      pageName={'insurance'} 
      secNo={'3'} 
      imageFirst={false}
      numberPresent={true}
      headingWeb={"Maximising<br/> Business Potential"} 
      headingTab={"Maximising Business<br/> Potential"} 
      headingMob={"Maximising<br/> Business<br/> Potential"} 
      descriptionWeb={"At ZOG Global, we empower you to exceed policyholder expectations, safeguard your<br/> business, and outperform competitors."}
      descriptionTab={"At ZOG Global, we empower you to exceed<br/> policyholder expectations, safeguard your<br/> business, and outperform competitors."}
       descriptionMob={"At ZOG Global, we empower you to<br/> exceed policyholder expectations,<br/> safeguard your business, and<br/> outperform competitors."}

      subHeadding1={"Enhance Operations"} 
      description1={"Elevate core processes for peak performance and reliability in critical operations."} 
      subHeadding2={"Improve Efficiency"} 
      description2={"Refine accuracy, streamline workflows, and drive superior outcomes with our solutions."} 
      subHeadding3={"Strengthen Compliance"} 
      description3={"Ensure strict adherence to regulations and reinforce compliance for heightened security."}
      />

<SpecialSliderSection 
      pageName={"insurance"}
      secNo={"4"}
      
      headingBoxPresent={true}
      headingWeb={"IT Solutions for<br/> the Insurance Industry"}
      headingTab={"IT Solutions for the<br/> Insurance Industry"}
      headingMob={"IT Solutions for<br/> the Insurance<br/> Industry"}
      descriptionWeb={"Discover how our innovative approach can streamline operations, enhance security,<br/> and drive growth for your insurance business."}
      descriptionTab={"Discover how our innovative approach can<br/> streamline operations, enhance security, and<br/> drive growth for your insurance business."}
      descriptionMob={"Discover how our innovative approach<br/> can streamline operations, enhance<br/> security, and drive growth for your<br/> insurance business."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


      


      <BlueNotchSection
        headingWeb={"Why Our IT<br/> Solutions Stand Out"}     // <br/>
        headingTab={"Why Our IT Solutions<br/> Stand Out"}
        headingMob={"Why Our IT<br/> Solutions Stand<br/> Out"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec5Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"insurance"}
        secNo={"6"}
        headingWeb={"Read Our Insurance<br/> Tech Insights"}
        headingTab={"Read Our Insurance<br/> Tech Insights"}
        headingMob={"Read Our<br/> Insurance Tech<br/> Insights"}
        data={blogData}
      />
}


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"insurance"}
        titleWeb={"Let's Discuss<br/> your IT Needs"}
        titleTab={"Let's Discuss your<br/> IT Needs"}
        titleMob={"Let's Discuss your<br/> IT Needs"}
                
        subTitlePresent={true}
        subTitleWeb={"We can help your business<br/> prepare for the future."}
        subTitleTab={"We can help your business prepare for the future."}
        subTitleMob={"We can help your business prepare for<br/> the future."}

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

export default Insurance