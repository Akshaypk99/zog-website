import React, { Component, useEffect, useState, useContext } from 'react'
import './ManagedITServices.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages.js'
import ImageOverlapedSection from '../../common-component/ImageOverlapedSection/ImageOverlapedSection.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import GreyCardsSection from '../../common-component/GreyCardsSection/GreyCardsSection.js'

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


const ManagedITServices = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


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
  const sec3Data = [
    {
      title: "Consistency in Service Quality",
      description: "Our unwavering commitment to delivering top-notch IT solutions is backed by a track record of reliability, ensuring consistent performance and satisfaction for your business.",
    },

    {
      title: "Exceptional Customer Service",
      description: "Our team is dedicated to delivering remarkable customer service, offering personalised support that consistently exceeds your expectations and fosters long-term partnerships.",
    },
    {
      title: "Committed to High Standards",
      description: "We uphold the highest standards in everything we do, ensuring your IT infrastructure operates at peak performance while meeting industry regulations and compliance requirements.",
    },
    {
      title: "Customised Strategic Solutions",
      description: "We tailor our IT strategies to your unique business needs, leveraging cutting-edge technologies and industry best practices to drive innovation and growth for your organisation.",
    },
    {
      title: "Proactive Security Measures",
      description: "Our proactive approach to security ensures your data and operations are protected against evolving cyber threats, with comprehensive measures in place to mitigate risks and prevent breaches.",
    },
    {
      title: "Expert Technical Guidance",
      description: "Benefit from the expertise of our expert professionals, who provide strategic guidance and innovative solutions to address your IT challenges and confidently drive your business forward.",
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
    <div className='managed-it-services-page'>

      <Banner
        pageName={"managed-it-services"}
        blueTitle={"MANAGED IT SERVICES"}
        titleWeb={"Achieve<br/> Long-Term Success"}
        titleTab={"Achieve Long-Term<br/> Success"}
        titleMob={"Achieve Long-<br/>Term Success"}
        subTitleWeb={"Our managed IT services keep you<br/> connected, secure and ahead of the<br/> curve."}
        subTitleTab={"Our managed IT services keep you<br/> connected, secure and ahead of the<br/> curve."}
        subTitleMob={"Our managed IT services<br/> keep you connected,<br/> secure and ahead of the<br/> curve."}
        iconTopWeb={'7%'}
        iconLeftWeb={'91%'}
        iconTopTab={'25%'}
        iconLeftTab={'80%'}
        iconTopMob={'29%'}
        iconLeftMob={'82%'}
        iconRotationWeb={152}
        iconRotationTab={155}
        iconRotationMob={155}>
      </Banner>

      <ImageOverlapedSection 
      pageName={'managed-it-services'} 
      secNo={'2'} 
      imageFirst={false}
      numberPresent={true}
      headingWeb={"Future-Proof Your Business<br/> with Expert Managed IT<br/> Services"} 
      headingTab={"Future-Proof Your<br/> Business with Expert<br/> Managed IT Services"} 
      headingMob={"Future-Proof Your<br/> Business with<br/> Expert Managed<br/> IT Services"} 


      subHeadding1={"Data Backup and Disaster Recovery"} 
      description1={"Ensure seamless continuity with robust data backup solutions and rapid disaster recovery strategies tailored to your business needs."} 
      subHeadding2={"Network Infrastructure Management"} 
      description2={"Optimise network performance and security with expert management, monitoring, and maintenance of your IT infrastructure."} 
      subHeadding3={"IT Consulting"} 
      description3={"Gain strategic insights and tailored solutions from experienced consultants to maximise your IT investments and achieve business objectives."}
      />

      <GreyCardsSection
        pageName={'managed-it-services'}
        headingWeb={"Why Choosing Us as Your<br/> Managed IT Provider?"}
        headingTab={"Why Choosing Us as<br/> Your Managed IT<br/> Provider?"}
        headingMob={"Why Choosing<br/> Us as Your<br/> Managed IT<br/> Provider?"}
        descriptionWeb={"Reliable, efficient, innovative: Your ultimate Managed IT provider solution awaits."}
        descriptionTab={"Reliable, efficient, innovative: Your ultimate<br/> Managed IT provider solution awaits."}
        descriptionMob={"Reliable, efficient, innovative: Your<br/> ultimate Managed IT provider solution<br/> awaits."}
        cardsData={sec3Data}

      />


      <BottomBanner
        pageName={"managed-it-services"}
        titleWeb={"Ready to<br/> Streamline your IT?"}
        titleTab={"Ready to<br/> Streamline your IT?"}
        titleMob={"Ready to<br/> Streamline<br/> your IT?"}

        
        subTitlePresent={false}
        subTitleWeb={""}
        subTitleTab={""}
        subTitleMob={""}

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

export default ManagedITServices