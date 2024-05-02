import React, { Component, useEffect, useState, useContext } from 'react'
import './TransformYourBusiness.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages.js'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection'
import FiveCardsSection from '../../common-component/FiveCardsSection/FiveCardsSection'
import ImageOverlapedSection from '../../common-component/ImageOverlapedSection/ImageOverlapedSection.js'
import ThreeCardsSection from '../../common-component/ThreeCardsSection/ThreeCardsSection.js'
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


const TransformYourBusiness = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const sec4Data = [
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
    <div className='transform-your-business-page'>

      <Banner
        pageName={"transform-your-business"}
        blueTitle={"Transform your business"}
        titleWeb={"Digital Solutions<br/> that Work"}
        titleTab={"Digital Solutions<br/> that Work"}
        titleMob={"Digital Solutions<br/> that Work"}
        subTitleWeb={"Make use of our advanced tech<br/> offerings to identify your desired results."}
        subTitleTab={"Make use of our advanced tech<br/> offerings to identify your desired results."}
        subTitleMob={"Make use of our advanced tech<br/> offerings to identify your desired<br/> results."}
        iconTopWeb={'68%'}
        iconLeftWeb={'-18%'}
        iconTopTab={'75%'}
        iconLeftTab={'-38%'}
        iconTopMob={'71%'}
        iconLeftMob={-180}
        iconRotationWeb={-38}
        iconRotationTab={-38}
        iconRotationMob={-38}>
      </Banner>

      <SimpleSection
        pageName={"transform-your-business"}
        secNo={"2"}
        headdingPresent={false}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={""}
        headingTab={""}
        headingMob={""}
        description={"Embrace the opportunity for change. Our transformative IT solutions allow your business to evolve, innovate, and achieve remarkable success beyond imagination."}
        buttonText={""}
      />


<FiveCardsSection
        pageName={'transform-your-business'}
        secNo={'3'}
        cardHeightWeb={477}
        cardHeightTab={477}
        headingWeb={"How Digital <br/> Transformation<br/> Benefits You"}
        headingTab={"How Digital Transformation<br/> Benefits You"}
        headingMob={"How Digital<br/> Transformation<br/> Benefits You"}
        description={""}
        

        subHeading1={"Enhanced Profitability Potential"}
        description1={""}
        subHeading2={"Streamlined Operations Efficiency"}
        description2={""}
        subHeading3={"Expanded Market Reach"}
        description3={""}
        subHeading4={"Improved Customer Satisfaction"}
        description4={""}
        subHeading5={"Fostered Innovation Culture"}
        description5={""}
      />



      <ImageOverlapedSection
        pageName={'transform-your-business'}
        secNo={'4'}
        imageFirst={false}
        numberPresent={true}
        headingWeb={"How We Help Transform<br/> Your Business"}
        headingTab={"How We Help Transform<br/> Your Business"}
        headingMob={"How We Help Transform<br/> Your Business"}
        descriptionWeb={"Discover transformative solutions tailored to your business needs,<br/> ensuring growth, efficiency, and sustained success every step of the<br/> way."}
        descriptionTab={"Discover transformative solutions tailored to your<br/> business needs, ensuring growth, efficiency, and<br/> sustained success every step of the way."}
        descriptionMob={"Discover transformative solutions<br/> tailored to your business needs,<br/> ensuring growth, efficiency, and<br/> sustained success every step of the<br/> way."}

        subHeadding1={"Strategic Consultation"}
        description1={"Our expert advisors craft personalised strategies to propel your business toward sustainable growth and success."}
        subHeadding2={"Innovative Technologies"}
        description2={"Harness cutting-edge tools to drive efficiency, innovation, and competitiveness in today's dynamic business landscape."}
        subHeadding3={"Process Optimisation"}
        description3={"Maximise operational efficiency and effectiveness through meticulous analysis, refinement, and implementation of streamlined processes."}
        subHeadding4={"Continuous Support"}
        description4={"From inception to evolution, our dedicated team provides unwavering guidance to navigate challenges and seize opportunities. "}
     />


<ThreeCardsSection
        pageName={'transform-your-business'}
        secNo={'5'}
        cardHeight={523}
        headingWeb={"Enabling Secured and<br/> Enormous Innovation"}
        headingTab={"Enabling Secured and<br/> Enormous Innovation"}
        headingMob={"Enabling<br/> Secured and<br/> Enormous<br/> Innovation"}
        descriptionWeb={"We facilitate secured and enormous innovation, fostering progress and resilience with<br/> comprehensive solutions and strategies."}
        descriptionTab={"We facilitate secured and enormous innovation,<br/> fostering progress and resilience with<br/> comprehensive solutions and strategies."}
        descriptionMob={"We facilitate secured and enormous<br/> innovation, fostering progress and<br/> resilience with comprehensive<br/> solutions and strategies."}


        subHeading1={"Automated"}
        description1={"Our SecOps solutions harness factual data, advanced analytics, and complete automation to enhance operational efficiency while significantly reducing the risk of security breaches."}
        subHeading2={"Integrated"}
        description2={"We seamlessly integrate leading-edge capabilities to deliver the most robust cybersecurity solution, ensuring unparalleled visibility and control across all fronts."}
        subHeading3={"Secured"}
        description3={"By implementing Zero Trust principles across all security touchpoints, we ensure the highest level of application protection, safeguarding your digital assets comprehensively."}
      />


      



      <BottomBanner
        pageName={"transform-your-business"}
        titleWeb={"Let Us Be Part of<br/> Your Success Story"}
        titleTab={"Let Us Be Part of<br/> Your Success Story"}
        titleMob={"Let Us Be Part of<br/> Your Success<br/> Story"}
        buttonText={"CONTACT US"}
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

export default TransformYourBusiness