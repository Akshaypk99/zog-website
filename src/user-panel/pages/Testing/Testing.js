import React, { Component, useEffect, useState, useContext } from 'react'
import './Testing.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import GreySliderSection from '../../common-component/GreySliderSection/GreySliderSection.js'
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


const Testing = () => {
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

  
  const sec2Data = [
    {
      title: "Functional Testing",
      description: "Ensuring seamless user experiences across diverse platforms with meticulous and rigorous testing methodologies."
    },

    {
      title: "User Testing Service",
      description: "Leverage real-world feedback to refine products, mitigating risks and enhancing quality effectively and efficiently."
    },

    {
      title: "Device and Browser Compatibility",
      description: "Specialised in comprehensive cross-platform validation to ensure universal accessibility and user satisfaction."
    },
    {
      title: "Non-Functional Testing",
      description: "Critical evaluations ensure robust performance, security, and accessibility, crucial for reliable software deployment."
    },

    {
      title: "Scripting & Planning",
      description: "Methodical planning ensures measurable, traceable, and repeatable testing processes for consistent and reliable results."
    },

  ]


  const sec3Data = [
    {
      title: "Enhanced Product Quality",
      description: "Improve your software quality through comprehensive testing, ensuring functionality, reliability, and superior performance for end-users.",
    },

    {
      title: "Reduced Risks and Costs",
      description: "Mitigate project risks and control expenses by efficiently identifying and resolving issues early, preventing costly setbacks and delays.",
    },
    {
      title: "Improved User Satisfaction",
      description: "Delight users with seamless experiences, achieved through meticulous testing that ensures usability, accessibility, and overall satisfaction.",
    },
    {
      title: "Faster Time-to-Market",
      description: "Accelerate your product launch with efficient testing processes, enabling swift development without compromising quality or reliability.",
    },
    

  ]


  const sec4Data = [
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
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
    <div className='testing-page'>

      <Banner
        pageName={"testing"}
        blueTitle={"Testing"}
        titleWeb={"Accuracy Ensured<br/> Quality Delivered"}
        titleTab={"Accuracy Ensured<br/> Quality Delivered"}
        titleMob={"Accuracy<br/> Ensured Quality<br/> Delivered"}
        subTitleWeb={"We craft flawless digital experiences<br/> with our software testing."}
        subTitleTab={"We craft flawless digital experiences<br/> with our software testing."}
        subTitleMob={"We craft flawless digital<br/> experiences with our<br/> software testing."}
        iconTopWeb={'48%'}
        iconLeftWeb={'85%'}
        iconTopTab={'65%'}
        iconLeftTab={'81%'}
        iconTopMob={'61%'}
        iconLeftMob={'71%'}
        iconRotationWeb={150}
        iconRotationTab={137}
        iconRotationMob={137}>
      </Banner>

      <GreySliderSection
        pageName={"testing"}
        secNo={"2"}
        numberMode={true}
        headingWeb={"Our Testing Service Highlights"}
        headingTab={"Our Testing Service Highlights"}
        headingMob={"Our Testing Service Highlights"}
        data={sec2Data}
      />

      <GreyCardsSection
        pageName={'testing'}
        headingWeb={"Benefits of Our Software<br/> Testing Services"}
        headingTab={"Benefits of Our Software<br/> Testing Services"}
        headingMob={"Benefits of Our<br/> Software<br/> Testing Services"}
        descriptionWeb={"At ZOG Global, we're more than just a team of testers—we're your partners in<br/> success. With a deep understanding of your goals and aspirations, we meticulously<br/> craft testing strategies to bring out the best in your software."}
        descriptionTab={"At ZOG Global, we're more than just a team of<br/> testers—we're your partners in success. With a deep<br/> understanding of your goals and aspirations, we<br/> meticulously craft testing strategies to bring out the<br/> best in your software."}
        descriptionMob={"At ZOG Global, we're more than just a<br/> team of testers—we're your partners in<br/> success. With a deep understanding of<br/> your goals and aspirations, we<br/> meticulously craft testing strategies to<br/> bring out the best in your software."}
        cardsData={sec3Data}

      />


      {blogData&&
      <InsightSliderSection
        pageName={"testing"}
        secNo={"4"}
        headingWeb={"Read Our Latest<br/> Insights"}
        headingTab={"Read Our Latest<br/> Insights"}
        headingMob={"Read Our Latest<br/> Insights"}
        data={blogData}
      />
}

      <div className='sec-5'>

      </div>


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"testing"}
        titleWeb={"Let's Perfect<br/> Your Software Testing"}
        titleTab={"Let's Perfect Your<br/> Software Testing"}
        titleMob={"Let's Perfect Your<br/> Software Testing"}

        subTitlePresent={false}
        subTitleWeb={"Get expert help to refine your testing approach today."}
        subTitleTab={"Get expert help to refine your<br/> testing approach today."}
        subTitleMob={"Get expert help to refine your testing<br/> approach today."}

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

export default Testing