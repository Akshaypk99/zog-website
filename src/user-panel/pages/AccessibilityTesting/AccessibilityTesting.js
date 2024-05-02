import React, { Component, useEffect, useState, useContext } from 'react'
import './AccessibilityTesting.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import ImageOverlapedSection from "../../common-component/ImageOverlapedSection/ImageOverlapedSection"
import ThreeCardsSection from '../../common-component/ThreeCardsSection/ThreeCardsSection.js'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
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


const AccessibilityTesting = () => {
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
    <div className='accessibility-testing-page'>

      <Banner
        pageName={"accessibility-testing"}
        blueTitle={"Accessibility Testing"}
        titleWeb={"Inclusivity Assured<br/> Accessibility Tested"}
        titleTab={"Inclusivity Assured<br/> Accessibility Tested"}
        titleMob={"Inclusivity<br/> Assured<br/> Accessibility<br/> Tested"}
        subTitleWeb={"We ensure accessibility, embracing<br/> every user."}
        subTitleTab={"We ensure accessibility, embracing<br/> every user."}
        subTitleMob={"We ensure accessibility,<br/> embracing every user."}
        iconTopWeb={'44%'}
        iconLeftWeb={'83%'}
        iconTopTab={'50%'}
        iconLeftTab={'69%'}
        iconTopMob={'51%'}
        iconLeftMob={'73%'}
        iconRotationWeb={181}
        iconRotationTab={180}
        iconRotationMob={180}>
      </Banner>

      <SimpleSection
        pageName={"accessibility-testing"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Build Compliant and<br/> Accessible Applications"}
        headingTab={"Build Compliant and<br/> Accessible Applications"}
        headingMob={"Build Compliant and<br/> Accessible<br/> Applications"}
        description={"At ZOG Global, we prioritise building compliant and accessible applications that cater to every user. Through meticulous accessibility testing, we ensure inclusivity, empowering all individuals to navigate digital spaces effortlessly."}
        buttonText={""}
      />



<ImageOverlapedSection 
      pageName={'accessibility-testing'} 
      secNo={'3'} 
      imageFirst={false}
      numberPresent={false}
      headingWeb={"Quality Testing Complaint<br/> with the WCAG Standard"} 
      headingTab={"Quality Testing<br/> Complaint with the<br/> WCAG Standard"} 
      headingMob={"Quality Testing Complaint with the WCAG Standard"} 
      descriptionWeb={""}
      descriptionTab={""}
       descriptionMob={""}

      subHeadding1={"Easy to Perceive"} 
      description1={"When testing the accessibility of a website or application, we need to check if users can discern the content using the browser or assistive technologies. This includes checking for proper heading levels, alt text on images, and labels on form fields. By ensuring that users can access and understand the content, we can help make the internet more inclusive for everyone."} 
      subHeadding2={"Easy Functionalities"} 
      description2={"We ensure that users can successfully operate and control all interface components and navigations. This includes ensuring that buttons, links, and other control elements are easy to find and use and that the overall navigation of the site or app is easy to understand. In addition, we also test for any possible accessibility issues that could affect users with disabilities."} 
      subHeadding3={"Predictable & Consistent"} 
      description3={"We strive to provide a user experience that is both secure and capable. We want users to feel confident and informed when making decisions. To achieve this, we make sure the user interface is easy to understand and use predictably and consistently. This way, users can focus on achieving their goals rather than on trying to figure out how our products work."}
      subHeadding4={"Improved Performance & Robustness"} 
      description4={"We test whether people can engage with content compatible with various user agents. To do this, we test the content against a set of known user agents and check to see if the content can be correctly rendered and interacted. If the content is incompatible with a user agent, we try to find a workaround that will allow the content to be correctly displayed and interacted with."}
      />


<ThreeCardsSection
        pageName={'accessibility-testing'}
        secNo={'4'}
        cardHeight={503}
        alignment={"left"}
        headingWeb={"Why ZOG Global Tops the<br/> List of Choices"}
        headingTab={"Why ZOG Global Tops<br/> the List of Choices"}
        headingMob={"Why ZOG Global<br/> Tops the List of<br/> Choices"}
        descriptionWeb={"Our commitment to excellence, adaptability, and security makes us the top choice<br/> for accessibility testing."}
        descriptionTab={"Our commitment to excellence, adaptability, and<br/> security makes us the top choice for accessibility<br/> testing."}
        descriptionMob={"Our commitment to excellence,<br/> adaptability, and security makes us the<br/> top choice for accessibility testing."}


        subHeading1={"High-Quality Results"}
        description1={"We employ top-notch tech and techniques for exceptional outcomes always."}
        subHeading2={"Greater Flexibility"}
        description2={"Our services adapt swiftly to changing client needs, ensuring satisfaction."}
        subHeading3={"Highly Secured"}
        description3={"Our security infrastructure ensures client information remains confidential."}
      />


      <div className='sec-5'>

      </div>


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"accessibility-testing"}
        titleWeb={"Take the Next<br/> Step Towards<br/> Inclusivity"}
        titleTab={"Take the Next<br/> Step Towards<br/> Inclusivity"}
        titleMob={"Take the Next<br/> Step Towards<br/> Inclusivity"}
                
        subTitlePresent={true}
        subTitleWeb={"Start making your website accessible today and ensure<br/> everyone can enjoy the same online experience."}
        subTitleTab={"Start making your website<br/> accessible today and ensure<br/> everyone can enjoy the same<br/> online experience."}
        subTitleMob={"Start making your website accessible<br/> today and ensure everyone can enjoy<br/> the same online experience."}

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

export default AccessibilityTesting