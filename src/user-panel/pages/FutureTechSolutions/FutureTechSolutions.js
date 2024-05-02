import React, { Component, useEffect, useState, useContext } from 'react'
import './FutureTechSolutions.scss'
import Banner from '../../common-component/BannerMainPages/BannerMainPages.js'
import DiamondSection from '../../common-component/DiamondSection/DiamondSection.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner'
import GreyCardsSection from '../../common-component/GreyCardsSection/GreyCardsSection'

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


const View = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const sec3Data = [
    {
      title: "Improved Efficiency",
      description: "Leverage AI and automation to optimise business operations, increase efficiency, and empower your team to prioritise strategic tasks and innovation, ultimately fostering productivity and growth in your organisation.",
    },

    {
      title: "Enhanced Decision-Making",
      description: "Harness the power of AI for rapid, data-driven insight. Automate analysis of vast datasets, enabling informed decisions at unprecedented speeds. Gain a competitive edge in your industry with these advanced solutions.",
    },
    {
      title: "Cost-Effective",
      description: "Discover significant cost reductions by implementing automated processes. AI-driven solutions optimise resource allocation, reduce manual errors, and streamline workflows, leading to substantial financial benefits.",
    },
    {
      title: "Customer Satisfaction",
      description: "Elevate customer experiences with personalised interactions and quick problem resolution. AI-driven automation anticipates customer needs, ensuring satisfaction through enhanced communication and efficient service delivery.",
    },
    {
      title: "Enhanced Security",
      description: "Strengthen your defences against cyber threats with AI-powered security solutions. Automation detects and responds to potential risks in real time, fortifying your digital infrastructure and safeguarding sensitive information.",
    },
    {
      title: "Scalability and Flexibility",
      description: "AI and automation ensure seamless adaptation to business changes, offering scalability for efficient growth and flexibility to respond dynamically to market challenges, enabling your organisation to thrive.",
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
    <div className='future-tech-solutions-page'>

      <Banner
        pageName={"future-tech-solutions"}
        titleWeb={"Welcome to the Future<br/> of Efficiency"}
        titleTab={"Welcome to the<br/> Future of Efficiency"}
        titleMob={"Welcome to the<br/> Future of<br/> Efficiency"}
        subTitleWeb={"Streamline operations, enhance efficiency, and boost<br/> innovation."}
        subTitleTab={"Streamline operations, enhance efficiency, and<br/> boost innovation."}
        subTitleMob={"Streamline operations, enhance<br/> efficiency, and boost innovation."}>
      </Banner>

      <DiamondSection
        pageName={'future-tech-solutions'}
        secNo={'2'}
        theme={"light"}
      headingBoxPresent={true}
      headingWeb={"Transformative<br/> Technologies for Progress"}
        headingTab={"Transformative Technologies for Progress"}
        headingMob={"Transformative<br/> Technologies for<br/> Progress"}
        descriptionWeb={"From lead generation to customer engagement, data collection and analysis, and<br/> human resources, ZOG Global supercharge various aspects of your business with AI<br/> and Automation solutions."}
        descriptionTab={"From lead generation to customer engagement, data collection and analysis, and human resources, ZOG Global supercharge various aspects of your business with AI and Automation solutions."}
        descriptionMob={"From lead generation to customer<br/> engagement, data collection and<br/> analysis, and human resources, ZOG<br/> Global supercharge various aspects of<br/> your business with AI and Automation<br/> solutions."}


        subHeadding1={"AI-Powered Business Solutions"}
        description1={"We empower businesses with strategic AI solutions, enhancing operations and decision-making. Harness the power of intelligent technology for tactical growth and sustained success in today's dynamic market."}
        subHeadding2={"Simplify Workflows Through RPA"}
        description2={"We transform your business with next-level automation through Robotic Process Automation (RPA) solutions. Streamline workflows and boost productivity by eliminating manual tasks. Experience efficiency like never before."}
      />

      <GreyCardsSection
        pageName={''}
        headingWeb={"Benefits Of Our AI And<br/> RPA Solutions"}
        headingTab={"Benefits Of Our AI And<br/> RPA Solutions"}
        headingMob={"Benefits Of Our<br/> AI And RPA<br/> Solutions"}
        descriptionWeb={"Our dynamic AI and RPA solutions mark the beginning of a new era in business<br/> optimisation. Dive into a realm where efficiency and innovation converge, propelling<br/> your organisations towards unparalleled success and growth."}
        descriptionTab={"Our dynamic AI and RPA solutions mark the beginning of a new era in business optimisation. Dive into a realm where efficiency and innovation> converge, propelling your organisations towards unparalleled success and growth."}
        descriptionMob={"Our dynamic AI and RPA solutions mark the beginning of a new era in business optimisation. Dive into a realm where efficiency and innovation converge, propelling your organisations towards unparalleled success and growth."}
        cardsData={sec3Data}

      />


      <BottomBanner
        pageName={"quality-assurance"}
        titleWeb={"Let's Build the<br/> Future Together!"}
        titleTab={"Let's Build the Future<br/> Together!"}
        titleMob={"Let's Build<br/> the Future<br/> Together!"}
        buttonText={"GET STARTED NOW"}
        buttonTheme={"light"}
        textTheme={"light"}
        buttonLink={'/contact-us'}
      >
      </BottomBanner>





      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default View