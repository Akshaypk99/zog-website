import React, { Component, useEffect, useState, useContext } from 'react'
import './Automation.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import DiamondSection from '../../common-component/DiamondSection/DiamondSection.js'
import StatisticsSection from '../../common-component/StatisticsSection/StatisticsSection.js'
import ImageOverlapedSection from "../../common-component/ImageOverlapedSection/ImageOverlapedSection"
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


const Automation = () => {
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

  

  const sec4Data = [
    {
      text:"Successful Automation Projects",
      leftSign:"",
      number:"15",
      rightSign:"+",
    },

    {
      text:"Happy Customers",
      leftSign:"",
      number:"97",
      rightSign:"%",
    },
    {
      text:"Faster Deployment",
      leftSign:"",
      number:"40",
      rightSign:"%",
    },
    {
      text:"Error Rate Reduction",
      leftSign:"",
      number:"80",
      rightSign:"%",
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
  const sec3Data = [
    {
      title: "Increased Efficiency",
      description: "Time, money, and effort are saved while errors decrease, enabling focus on primary goals and maximising effectiveness.",
    },

    {
      title: "Higher Productivity",
      description: "Teams are liberated from tedious tasks, resulting in increased output, efficiency, and achievement of significant objectives.",
    },
    {
      title: "Easy Compliance",
      description: "Process clarity simplifies adherence to regulations, ensuring alignment with legal requirements and facilitating accountability.",
    },
    {
      title: "Reduced Costs",
      description: "Minimising errors saves time, money, and resources, enhancing productivity and financial efficiency within operations.",
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
    <div className='automation-page'>

      <Banner
        pageName={"automation"}
        blueTitle={"automation"}
        titleWeb={"Transform Workflows<br/> Embrace Automation"}
        titleTab={"Transform Workflows<br/> Embrace Automation"}
        titleMob={"Transform<br/> Workflows<br/> Embrace<br/> Automation"}
        subTitleWeb={"We streamline processes through<br/> efficient automation."}
        subTitleTab={"We streamline processes through<br/> efficient automation."}
        subTitleMob={"We streamline processes through<br/> efficient automation."}
        iconTopWeb={'7%'}
        iconLeftWeb={'89%'}
        iconTopTab={'54%'}
        iconLeftTab={'75%'}
        iconTopMob={'52%'}
        iconLeftMob={'70%'}
        iconRotationWeb={83}
        iconRotationTab={74}
        iconRotationMob={80}>
      </Banner>

      <DiamondSection
        pageName={'automation'}
        secNo={'2'}
        theme={"light"}
        headingBoxPresent={false}
        


        subHeadding1={"Efficiency Designed for Your Business"}
        description1={"At ZOG Global, we understand the unique challenges your business faces. Our tailored automation services are designed to address your specific needs, whether streamlining inventory management, optimising customer communications, or automating repetitive administrative tasks. Let us create a customised solution that empowers your team to excel, driving growth and success for your business."}
        subHeadding2={"RPA for Smarter Operations"}
        description2={"Robotic Process Automation (RPA) optimises operations by automating repetitive tasks, liberating valuable time and resources. Our RPA services optimise efficiency, reduce errors, and enhance productivity. Experience seamless workflows and accelerated growth with our tailored automation solutions. Unlock the power of RPA today."}
        buttonText2={"Learn More"}
        buttonLink2={"/"}
      />



      <GreyCardsSection
        pageName={'automation'}
        headingWeb={"Leveraging Automation in<br/> Business Processes"}
        headingTab={"Leveraging Automation<br/> in Business Processes"}
        headingMob={"Leveraging Automation in Business Processes"}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        cardsData={ sec3Data}

      />

<StatisticsSection data={sec4Data}/>

<ImageOverlapedSection 
      pageName={'automation'} 
      secNo={'5'} 
      imageFirst={false}
      numberPresent={true}
      headingWeb={"Enhance the Performance<br/> of the Business"} 
      headingTab={"Enhance the<br/> Performance of the<br/> Business"} 
      headingMob={"Enhance the Performance of the Business"} 
      descriptionWeb={"We prioritise efficiency, collaboration, and informed decisions, crafting workflows<br/> tailored for organisational success."}
      descriptionTab={"We prioritise efficiency, collaboration, and<br/> informed decisions, crafting workflows tailored<br/> for organisational success."}
       descriptionMob={"We prioritise efficiency, collaboration, and informed decisions, crafting workflows tailored for organisational success."}

      subHeadding1={"Optimise Workflows"} 
      description1={"Automate tasks, minimise errors and expedite decisions for organisational efficiency and effectiveness."} 
      subHeadding2={"Integrate Seamlessly"} 
      description2={"Unify workflows across systems, repositories, and channels for streamlined operations and enhanced collaboration."} 
      subHeadding3={"Enhance Decision-making"} 
      description3={"Utilise tools for efficient, data-driven decisions, empowering confident and informed choices within the organisation."}
      />

      

      {blogData&&
      <InsightSliderSection
        pageName={"automation"}
        secNo={"6"}
        headingWeb={"Explore the Latest<br/> Insights in IT Automation"}
        headingTab={"Explore the Latest<br/> Insights in IT Automation"}
        headingMob={"Explore the<br/> Latest<br/> Insights in<br/> IT<br/> Automation"}
        data={blogData}
      />
      }

     


      

      <BottomBanner
        pageName={"automation"}
        titleWeb={"Automate Your<br/> Way Forward"}
        titleTab={"Automate Your<br/> Way Forward"}
        titleMob={"Automate Your<br/> Way Forward"}
                
        subTitlePresent={true}
        subTitleWeb={"Embrace automation and pave your path to success<br/> today!"}
        subTitleTab={"Embrace automation and<br/> pave your path to success<br/> today!"}
        subTitleMob={"Embrace automation and pave your<br/> path to success today!"}

        buttonText={"get started now"}
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

export default Automation