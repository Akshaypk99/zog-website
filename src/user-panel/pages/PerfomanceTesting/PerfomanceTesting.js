import React, { Component, useEffect, useState, useContext } from 'react'
import './PerfomanceTesting.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
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


const PerfomanceTesting = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const sec3Data = [
    { title: "Load Testing",
    description: "This performance testing measures system performance under a heavy load of users, transactions, or requests to assess its capability."
     },

    { title: "Stress Testing",
    description: "Determines system resilience by subjecting it to extreme loads beyond capacity, simulating vast numbers of users or requests."
     },

    { title: "Endurance Testing",
    description: "Prolongs heavy load to simulate real-world scenarios, checking for consistent performance, endurance, and degradation over time."
     },
     { title: "Spike Testing",
     description: "Evaluates system resilience to sudden traffic surges, such as during sales or promotional events, to ensure robustness."
      },
 
     { title: "Compatibility Testing",
     description: "Compatibility Testing"
      },
 
     { title: "Scalability Testing",
     description: "Assesses system performance as demand grows or decreases, ensuring it can handle increasing user loads effectively and efficiently."
      },
   
  ]


  const sec4Data = [
    {
      title:"1",
      description: "Identifies bottlenecks or issues pre-deployment, ensuring smooth software performance and proactive issue resolution.",
    },
    {
      title:"2",
      description: "Assesses scalability and load capacity, optimising application functionality and enhancing user experience.",
    },
    {
      title:"3",
      description:"Early issue detection saves time and costs on bug fixes, facilitating efficient troubleshooting processes.",
    },
    {
      title:"4",
      description: "Enhances user experience with consistent application performance, fostering satisfaction and customer loyalty.",
    },
    {
      title:"5",
      description: "Anticipates and mitigates potential downtime, minimising disruptions and maintaining business continuity.",
    },
    {
      title:"6",
      description: "Offers precise performance data, meets service level agreements, and ensures accountability and reliability.",
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
    <div className='performance-testing-page'>

      <Banner
        pageName={"performance-testing"}
        blueTitle={"Performance Testing"}
        titleWeb={"Maximise Performance<br/> Exceed Expectations"}
        titleTab={"Maximise<br/> Performance Exceed<br/> Expectations"}
        titleMob={"Maximise<br/> Performance<br/> Exceed<br/> Expectations"}
        subTitleWeb={"We assure optimised performance for<br/> your product success."}
        subTitleTab={"We assure optimised performance for<br/> your product success."}
        subTitleMob={"We assure optimised<br/> performance for<br/> your product success."}
        iconTopWeb={'28%'}
        iconLeftWeb={'88%'}
        iconTopTab={'57%'}
        iconLeftTab={'75%'}
        iconTopMob={'64%'}
        iconLeftMob={'61%'}
        iconRotationWeb={83}
        iconRotationTab={197}
        iconRotationMob={74}>
      </Banner>

      <SimpleSection
        pageName={"performance-testing"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Unlocking User<br/> Experience Potential"}
        headingTab={"Unlocking User Experience<br/> Potential"}
        headingMob={"Unlocking User<br/> Experience Potential"}
        description={"Ensuring a positive user experience requires understanding software performance underload. Our performance testing solutions can help you evaluate your software's ability to handle increased traffic and identify potential areas of improvement."}
        buttonText={""}
      />

<GreySliderSection
      pageName={"performance-testing"}
      secNo={"3"}
      headingWeb={"Performance Testing Services We Offer"}
      headingTab={"Performance Testing Services We Offer"}
      headingMob={"Performance Testing Services We Offer"}
      data={sec3Data}
      />


<BlueNotchSection
        headingWeb={"Benefits of Our Performance<br/> Testing Services"}     // <br/>
        headingTab={"Benefits of Our<br/> Performance Testing<br/> Services"}
        headingMob={"Benefits of<br/> Our Performance<br/> Testing Services"}
        type={2}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec4Data}

      />


      

      <BottomBanner
        pageName={"performance-testing"}
        titleWeb={"Need to Enhance<br/> Software Performance?"}
        titleTab={"Need to Enhance<br/> Software<br/> Performance?"}
        titleMob={"Need to Enhance<br/> Software<br/> Performance?"}
                
        subTitlePresent={true}
        subTitleWeb={"Guarantee the success of your software with our expert<br/> testing services!"}
        subTitleTab={"Guarantee the success of<br/> your software with our expert<br/> testing services!"}
        subTitleMob={"Guarantee the success of your software<br/> with our expert testing services!"}

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

export default PerfomanceTesting