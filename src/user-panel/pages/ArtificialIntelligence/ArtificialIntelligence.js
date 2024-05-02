import React, { Component, useEffect, useState, useContext } from 'react'
import './ArtificialIntelligence.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
import StatisticsSection from '../../common-component/StatisticsSection/StatisticsSection.js'
import MultiCardsSection from '../../common-component/MultiCardsSection/MultiCardsSection.js'
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


const ArtificialIntelligence = () => {
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

  
const sec3Data=[
  {title:"Natural Language Processing (NLP)",
description:"Transforming language into valuable insights with advanced algorithms."},

{title:"Machine Learning Solutions",
description:"Crafting custom ML models for precise predictive analytics solutions."},

{title:"Predictive Analytics",
description:"Customised algorithms for predictive insights and smarter decision-making."},

{title:"Speech Recognition",
description:"Effortless conversion of speech into actionable data with pinpoint accuracy."},

{title:"Chatbots & Virtual Assistants",
description:"Interactive AI interfaces providing seamless customer engagement and support."},

{title:"Data Analysis & Insights",
description:"Transforming raw data into actionable intelligence for strategic advantage."},
]

  const sec4Data = [
    {
      text:"Revenue Boost",
      leftSign:"+",
      number:"24",
      rightSign:"%",
    },

    {
      text:"Productivity",
      leftSign:"+",
      number:"30",
      rightSign:"%",
    },
    {
      text:"Cost Reduction",
      leftSign:"-",
      number:"25",
      rightSign:"%",
    },
    {
      text:"Decision Accuracy",
      leftSign:"+",
      number:"79",
      rightSign:"%",
    },


  ]

const sec5Data=[
  {title:"Healthcare"},
  {title:"Technology"},
  {title:"Telecom"},
  {title:"Education"},
  {title:"Travel"},
  {title:"Banking & Financial Services"},
  {title:"Insurance"},
  {title:"Legal"},
  {title:"Media & Entertainment"},
  {title:"Pharma"},
  
]


  const sec6Data = [
    {
      title: "Adaptive Solutions",
      description: "Flexibility and innovation merge to deliver adaptable solutions tailored precisely to your business needs, ensuring sustained relevance and effectiveness.",
    },
    {
      title: "Streamlined Efficiency",
      description: "Our services optimise processes, eliminate bottlenecks, and streamline operations, enhancing productivity and efficiency across your organisation seamlessly.",
    },
    {
      title: "Dynamic Performance",
      description: "Consistently achieve high performance with solutions that adapt to your evolving requirements, driving success in a dynamic business environment.",
    },
    {
      title: "Strategic Insights",
      description: "Unlock actionable intelligence and gain strategic advantage with insightful analysis, guiding informed decision-making and fostering long-term success.",
    },
    {
      title: "Empowered Decision-Making",
      description: "Leverage AI-powered insights for confident, data-driven decision-making, empowering your leadership and guiding strategic initiatives with precision.",
    },
    {
      title: "Seamless Integration",
      description: "Effortlessly integrate our solutions into your workflows, ensuring smooth operation and maximising efficiency across your organisation's systems.",
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
    <div className='artificial-intelligence-page'>

      <Banner
        pageName={"artificial-intelligence"}
        blueTitle={"Artificial intelligence"}
        titleWeb={"Future-Proof Your<br/> Business with AI"}
        titleTab={"Future-Proof<br/> Your Business<br/> with AI"}
        titleMob={"Future-Proof<br/> Your Business<br/> with AI"}
        subTitleWeb={"We redefine industries with advanced AI<br/> solutions."}
        subTitleTab={"We redefine industries with advanced AI<br/> solutions."}
        subTitleMob={"We redefine industries with<br/> advanced AI solutions."}
        iconTopWeb={'10%'}
        iconLeftWeb={'90%'}
        iconTopTab={'50%'}
        iconLeftTab={'77%'}
        iconTopMob={'48%'}
        iconLeftMob={'75%'}
        iconRotationWeb={135}
        iconRotationTab={135}
        iconRotationMob={136}>
      </Banner>

      <SimpleSection
        pageName={"artificial-intelligence"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Transforming<br/> Customer<br/> Experience"}
        headingTab={"Transforming Customer<br/> Experience"}
        headingMob={"Transforming<br/> Customer<br/> Experience"}
        description={"Our AI future-ready platform is designed to deliver quality customer experience and quick reversal times while eliminating instances of human errors."}
        buttonText={""}
      />



<MultiCardsSection
        pageName={'artificial-intelligence'}
        secNo={'3'}
        cardHeight={515}
        alignment={"left"}
        numberPresent={true}
        imagePresent={false}
        cardShaded={true}
        headingWeb={"Our AI Services"}
        headingTab={"Our AI Services"}
        headingMob={"Our AI Services"}
        descriptionWeb={"Explore innovative AI services tailored to optimise efficiency and drive success for<br/> your business."}
        descriptionTab={"Explore innovative AI services tailored to optimise<br/> efficiency and drive success for your business."}
        descriptionMob={"Explore innovative AI services tailored<br/> to optimise efficiency and drive<br/> success for your business."}
data={sec3Data}
 />


      <StatisticsSection data={sec4Data}/>



      <MultiCardsSection
        pageName={'artificial-intelligence'}
        secNo={'5'}
        cardHeight={300}
        alignment={"center"}
        numberPresent={false}
        imagePresent={true}
        headingWeb={"Industries We Serve"}
        headingTab={"Industries We Serve"}
        headingMob={"Industries<br/> We Serve"}
       
data={sec5Data}
 />


      <BlueNotchSection
        headingWeb={"Key Benefits of<br/> Our AI Solutions"}     // <br/>
        headingTab={"Key Benefits of Our AI<br/> Solutions"}
        headingMob={"Key Benefits of<br/> Our AI Solutions"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec6Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"artificial-intelligence"}
        secNo={"7"}
        headingWeb={"Explore<br/> AI Related Insights"}
        headingTab={"Explore<br/> AI Related Insights"}
        headingMob={"Explore<br/> AI Related<br/> Insights"}
        data={blogData}
      />
}




      <BottomBanner
        pageName={"artificial-intelligence"}
        titleWeb={"Need Custom<br/> AI Services?"}
        titleTab={"Need Custom AI<br/> Services?"}
        titleMob={"Need Custom AI<br/> Services?"}
                
        subTitlePresent={true}
        subTitleWeb={"Take the first step towards your AI-powered journey."}
        subTitleTab={"Take the first step towards<br/> your AI-powered journey."}
        subTitleMob={"Take the first step towards your AI-<br/>powered journey."}

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

export default ArtificialIntelligence