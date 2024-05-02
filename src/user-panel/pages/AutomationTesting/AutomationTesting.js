import React, { Component, useEffect, useState, useContext } from 'react'
import './AutomationTesting.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
import ImageOverlapedSection from "../../common-component/ImageOverlapedSection/ImageOverlapedSection"
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import MultiCardsSection from '../../common-component/MultiCardsSection/MultiCardsSection.js'
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


const AutomationTesting = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const sec6Data = [
    {
      title: "Consistency & Reliability",
      description: "Automation tests ensure that the same test is executed every time and the result is always consistent, eliminating the possibility of human errors and inconsistencies.",
    },
    {
      title: "Improved Quality",
      description: "Automation testing can efficiently perform multiple tests simultaneously, reducing the time and errors that manual testing could introduce.",
    },
    {
      title: "Cost-Effective",
      description: "It is cost-effective as automation testing eliminates the cost of hiring and training a team for manual testing and reduces the need for hardware infrastructure.",
    },
    {
      title: "Improved Efficiency",
      description: "Automation testing can efficiently perform multiple tests simultaneously, reducing the time and errors that manual testing could introduce.",
    },
    {
      title: "Increased Test Coverage",
      description: "It enables developers to run more comprehensive tests by covering the crucial parts of an application and all the functionality without interruption.",
    },
    {
      title: "High Scalability",
      description: "Automation tests enable software developers to scale up testing by testing the application on different platforms, operating systems, and devices.",
    },




  ]


  const sec3Data = [
    {
      title: "Unit Testing",
      description: "It meticulously scrutinises individual software components to ensure they adhere to requirements, identifying and addressing issues early in the development cycle.",
    },

    {
      title: "Integration Testing",
      description: "Through automated processes, it thoroughly examines the interactions and interoperability of different modules within the software, guaranteeing seamless integration.",
    },
    {
      title: "Regression Testing",
      description: "This essential practice verifies that software functions as intended post-modifications, safeguarding against unintended consequences and maintaining system stability.",
    },
    {
      title: "API Testing",
      description: "It rigorously assesses communication pathways between various software components, verifying data accuracy and transmission within the API framework.",
    },



  ]
  const sec5Data = [
    {
      title: "Expertise in Frameworks",
      description: "Leverage our deep framework knowledge for robust and scalable testing solutions.",
    },

    {
      title: "Extensive Test Coverage",
      description: "Ensure thorough examination of your software with our comprehensive testing methods.",
    },

    {
      title: "Rapid Deployment",
      description: "Accelerate your product launch with our efficient automation testing strategies.",
    },
    {
      title: "Seamless Integration",
      description: "Integrate tests seamlessly into your CI/CD pipelines for continuous quality assurance.",
    },

    {
      title: "Cost-Effective Solutions",
      description: "Reduce expenses significantly by utilising our efficient automation testing services.",
    },

    {
      title: "Precision in Testing",
      description: "Enhance the accuracy of your tests with our precise automation testing techniques.",
    },
    {
      title: "Scalable and Adaptable",
      description: "Scale testing efforts effortlessly and adapt to changing project needs seamlessly.",
    },

    {
      title: "Dedicated Support",
      description: "Receive consistent support and maintenance for your automation testing requirements.",
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
    <div className='automation-testing-page'>

      <Banner
        pageName={"automation-testing"}
        blueTitle={"automation testing"}
        titleWeb={"Seamless Quality<br/> Flawless Results"}
        titleTab={"Seamless Quality<br/> Flawless Results"}
        titleMob={"Seamless<br/> Quality<br/> Flawless<br/> Results"}
        subTitleWeb={"Efficient automation ensures flawless<br/> software quality."}
        subTitleTab={"Efficient automation ensures flawless<br/> software quality."}
        subTitleMob={"Efficient automation ensures<br/> flawless software quality."}
        iconTopWeb={'10%'}
        iconLeftWeb={'89%'}
        iconTopTab={'51%'}
        iconLeftTab={'80%'}
        iconTopMob={'52%'}
        iconLeftMob={'70%'}
        iconRotationWeb={85}
        iconRotationTab={83}
        iconRotationMob={80}> 
      </Banner>

      <SimpleSection
        pageName={"automation-testing"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Outstanding Outcomes"}
        headingTab={"Outstanding Outcomes"}
        headingMob={"Outstanding<br/> Outcomes"}
        description={"Our expertise in automation testing services is unmatched, and we have perfected our process to get the best possible results for every project. Our rigorous hiring process ensures that we only work with the most diligent and experienced automation QA engineers.   In addition, we provide robust mentorship and training programmes to ensure that our team members are continuously informed about the latest trends and best practices in the field."}
        buttonText={""}
      />



      <GreyCardsSection
        pageName={'automation-testing'}
        headingWeb={"Automation Testing<br/> Services We Offer"}
        headingTab={"Automation Testing<br/> Services We Offer"}
        headingMob={"Automation<br/> Testing Services<br/> We Offer"}
        descriptionWeb={"We offer comprehensive automation testing services, ensuring efficient and reliable<br/> software performance."}
        descriptionTab={"We offer comprehensive automation testing<br/> services, ensuring efficient and reliable software<br/> performance."}
        descriptionMob={"We offer comprehensive automation<br/> testing services, ensuring efficient and<br/> reliable software performance."}
        cardsData={sec3Data}

      />


      <ImageOverlapedSection
        pageName={'automation-testing'}
        secNo={'4'}
        imageFirst={false}
        numberPresent={false}
        headingWeb={"Frameworks We Use for<br/> Automation Testing"}
        headingTab={"Frameworks We Use for<br/> Automation Testing"}
        headingMob={"Frameworks We Use for Automation Testing"}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}

        subHeadding1={"Linear Automation Testing Framework"}
        description1={"Linear Automation Testing Framework improves testing efficiency by automating repetitive tasks, allowing testers to focus on more challenging activities and ensuring the timely delivery of high-quality software applications."}
        subHeadding2={"Data-Driven Automation Testing Framework"}
        description2={"A data-driven testing framework allows testers to efficiently test multiple scenarios using external data sources, reducing the need to modify the underlying testing code. This ensures that the application meets the expected results with minimum effort."}
        subHeadding3={"Hybrid Framework"}
        description3={"The hybrid framework combines keyword-driven and data-driven frameworks for simplified test case creation, execution, and maintenance. It allows for easily updated and reusable modules and is scalable for multiple applications and environments."}
        subHeadding4={"Keyword-Driven Testing Framework"}
        description4={"This testing method uses keywords to create test scripts in a table format. As a result, it simplifies test cases, making them easy to understand and maintain. In addition, it reduces the time taken for test development, execution, and reporting and allows for easy updates."}
      />


      <MultiCardsSection
        pageName={'automation-testing'}
        secNo={'5'}
        cardHeight={476}
        alignment={"center"}
        numberPresent={false }
        imagePresent={ true}
        headingWeb={"Why Choose Us for<br/> Automation Testing"}
        headingTab={"Why Choose Us for<br/> Automation Testing"}
        headingMob={"Why Choose Us<br/> for Automation<br/> Testing"}
        descriptionWeb={"ZOG Global is your trusted partner for comprehensive automation testing across<br/> diverse platforms."}
        descriptionTab={"ZOG Global is your trusted partner for<br/> comprehensive automation testing across<br/> diverse platforms."}
        descriptionMob={"ZOG Global is your trusted partner for<br/> comprehensive automation testing<br/> across diverse platforms."}
        data={sec5Data}
      />


      <BlueNotchSection
        headingWeb={"Benefits of Automation<br/> Testing"}     // <br/>
        headingTab={"Benefits of Automation<br/> Testing"}
        headingMob={"Benefits of<br/> Automation<br/> Testing"}
        descriptionPresent={true}
        descriptionWeb={"Test automation offers many advantages over manual testing, including quickly<br/> executing thousands of varied and lengthy test cases. Let's take a closer look at the<br/> numerous benefits of automated testing."}
        descriptionTab={"Test automation offers many advantages over<br/> manual testing, including quickly executing<br/> thousands of varied and lengthy test cases. Let's<br/> take a closer look at the numerous benefits of<br/> automated testing."}
        descriptionMob={"Test automation offers many<br/> advantages over manual testing,<br/> including quickly executing thousands<br/> of varied and lengthy test cases. Let's<br/> take a closer look at the numerous<br/> benefits of automated testing."}
        listData={sec6Data}

      />


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"automation-testing"}
        titleWeb={"Streamline<br/> Your Testing Process<br/> with Precision"}
        titleTab={"Streamline Your<br/> Testing Process<br/> with Precision"}
        titleMob={"Streamline Your<br/> Testing Process<br/> with Precision"}

        subTitlePresent={true}
        subTitleWeb={"Unlock efficiency and accuracy with our automation<br/> testing services."}
        subTitleTab={"Unlock efficiency and<br/> accuracy with our automation<br/> testing services."}
        subTitleMob={"Unlock efficiency and accuracy with our<br/> automation testing services."}

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

export default AutomationTesting
