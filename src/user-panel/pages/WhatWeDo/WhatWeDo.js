import React, { Component, useEffect, useState, useContext } from 'react'
import './WhatWeDo.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages.js'
import ImageOverlapedSection from '../../common-component/ImageOverlapedSection/ImageOverlapedSection.js'
import GreySliderSection from '../../common-component/GreySliderSection/GreySliderSection.js'
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


const WhatWeDo = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sec4Data = [
    { title: "Development & Operations",
    description: "Transforming businesses with cutting-edge DevOps, cloud solutions, automation, software development, and rigorous testing for seamless operations and accelerated growth."
     },

    { title: "Security Solutions",
    description: "Protect your digital assets with our comprehensive cybersecurity solutions, effectively safeguarding your systems and data against evolving threats."
     },

    { title: "Infrastructure & Networking Services",
    description: "Streamline communication with advanced networking solutions like SD-WAN and SDN alongside unified communication services for seamless connectivity."
     },
      ]

  const secData = [
    {
      title: "",
      description: "",
      image_url: "/images/why-zog-global/sec-4-1.png"
    },

    {
      title: "",
      description: "",
      image_url: "/images/why-zog-global/sec-4-2.png"
    },

    {
      title: "",
      description: "",
      image_url: "/images/why-zog-global/sec-4-3.png"
    },

  ]


  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])


  
  
  return (
    <div className='what-we-do-page'>

      <Banner
        pageName={"what-we-do"}
        blueTitle={"WHAT WE DO"}
        titleWeb={"Designing<br/> Great Client Experiences"}
        titleTab={"Designing Great Client<br/> Experiences"}
        titleMob={"Designing<br/> Great Client<br/> Experiences"}
        subTitleWeb={"We are dedicated to enhancing client<br/> satisfaction through IT expertise."}
        subTitleTab={"We are dedicated to enhancing client<br/> satisfaction through IT expertise."}
        subTitleMob={"We are dedicated to enhancing<br/> client satisfaction through IT<br/> expertise."}
        iconTopWeb={'70%'}
        iconLeftWeb={'33%'}
        iconTopTab={'77%'}
        iconLeftTab={'14%'}
        iconTopMob={'62%'}
        iconLeftMob={'70%'}
        iconRotationWeb={-50}
        iconRotationTab={-50}
        iconRotationMob={-35}>
      </Banner>


      <div className='sec-2'>
        <div className='inner'>
          <h1 className='only-web'>Build <span>4</span> Happiness<br /> Strategy</h1>
          <h1 className='only-tab'>Build <span>4</span> Happiness<br /> Strategy</h1>
          <h1 className='only-mob'>Build <span>4</span><br /> Happiness<br /> Strategy</h1>
          <p>At ZOG Global, our 'Build for Happiness' strategy centres around exceeding customer expectations. We prioritise user-centric solutions, ensuring every service brings joy to our clients. With a commitment to innovation, seamless experiences, and unparalleled support, we craft solutions that not only meet but surpass the happiness threshold of our valued customers.</p>
        </div>
        <img src='/images/what-we-do/sec-2-icon.svg' className='main-icon'></img>
        </div>
      <ImageOverlapedSection
        pageName={'what-we-do'}
        secNo={'3'}
        imageFirst={false}
        numberPresent={true}
        headingWeb={"Empowering Your Business<br/> for the Future"}
        headingTab={"Empowering Your<br/> Business for the Future"}
        headingMob={"Empowering Your<br/> Business for the<br/> Future"}


        subHeadding1={"IT Support"}
        description1={"Don't take on the burden of managing your IT needs by yourself. Let us handle it for you. Our team of professionals is well-versed in technology and knowledgeable in business needs, so you can trust that your IT requirements are taken care of."}
        subHeadding2={"Business Security"}
        description2={"The number one priority is security, and we'll do everything in our capacity to assist you in keeping your company secure. Whether you're looking for a comprehensive security overhaul or just some basic security measures, we can help."}
        subHeadding3={"Business Transformation"}
        description3={"We help businesses of all sizes overcome their IT challenges and improve their productivity and efficiency. With unwavering dedication, we are committed to offering the best IT solutions to support growth and ensure lasting success for your business."}
      />





      <GreySliderSection
      pageName={"what-we-do"}
      secNo={"4"}
      headingWeb={"What We Offer"}
      headingTab={"What We Offer"}
      headingMob={"What We Offer"}
      data={sec4Data}
      />







      <BottomBanner
        pageName={"what-we-do"}
        titleWeb={"Let's Amplify Your<br/> IT Capabilities"}
        titleTab={"Let's Amplify Your<br/> IT Capabilities"}
        titleMob={"Let's Amplify Your<br/> IT Capabilities"}
        buttonText={"GET STARTED"}
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

export default WhatWeDo