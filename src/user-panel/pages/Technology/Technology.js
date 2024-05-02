import React, { Component, useEffect, useState, useContext } from 'react'
import './Technology.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SpecialSliderSection from "../../common-component/SpecialSliderSection/SpecialSliderSection"
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
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


const Technology = () => {
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
      title: "",
      description: "Customised IT solutions addressing specific tech business challenges, aligning with goals for optimal performance and efficiency.",
    },

    {
      title: "",
      description: "Deep understanding of tech industry intricacies, offering proactive solutions and staying ahead with the latest technologies and trends.",
    },
    {
      title: "",
      description: "Solutions designed to adapt to tech businesses' evolving needs, ensuring support for growth, expansions, and market changes.",
    },
    {
      title: "",
      description: "Ongoing maintenance and updates to ensure robust IT infrastructure, providing reliable support for achieving business objectives.",
    },
    


  ]
  const sec3Data = [
    { title: "AI & Automation", description: "Our AI solutions are like having a team of tireless assistants, streamlining tasks and sparking innovation." },
    { title: "Bespoke Software", description: "Imagine software tailored just for you, like a perfectly fitted suit, boosting productivity and growth." },
    { title: "Business Security", description: "We're your digital guardians, keeping your valuable data safe from cyber threats and ensuring peace of mind." },
    { title: "Cloud Migration", description: "Think of us as your cloud experts, guiding you smoothly to a world of flexibility and efficiency ahead." }
  ]
  const sec4Data = [
    {
      title: "Expertise in the Tech Industry",
      description: "Expert knowledge tailored to tech businesses ensures solutions that meet unique needs effectively.",
    },
    {
      title: "Customised Solutions",
      description: "Tailored IT solutions addressing your specific challenges and goals for enhanced efficiency and success.",
    },
    {
      title: "Reliable Support & Maintenance",
      description: "Ongoing support ensures your IT remains secure, efficient, and hassle-free, empowering business growth.",
    },
    {
      title: "Innovative Approach to Tech",
      description: "Embrace the latest technological trends, ensuring your business stays competitive and drives growth.",
    },
    {
      title: "Exceptional Customer Satisfaction",
      description: "Consistently exceed expectations, ensuring your satisfaction and success as our cherished partner.",
    },



  ]

  
  const sec5Data=[
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
    <div className='technology-page'>

      <Banner
        pageName={"technology"}
        blueTitle={"Technology"}
        titleWeb={"IT Solutions for Tech<br/> Businesses"}
        titleTab={"IT Solutions for Tech<br/> Businesses"}
        titleMob={"IT Solutions for<br/> Tech<br/> Businesses"}
        subTitleWeb={"We offer transformative support for<br/> your tech needs."}
        subTitleTab={"We offer transformative support for<br/> your tech needs."}
        subTitleMob={"We offer transformative<br/> support for your tech needs."}
        iconTopWeb={'55%'}
        iconLeftWeb={'82%'}
        iconTopTab={'58%'}
        iconLeftTab={'73%'}
        iconTopMob={'49%'}
        iconLeftMob={'76%'}
        iconRotationWeb={44}
        iconRotationTab={22}
        iconRotationMob={15}>
      </Banner>

      <GreyCardsSection
        pageName={'technology'}
        headingWeb={"Unsatisfied with Your Current IT Provider?"}
        headingTab={"Unsatisfied with Your Current IT Provider?"}
        headingMob={"Unsatisfied with Your Current IT Provider?"}
        descriptionWeb={"You're not alone. The majority of our clients were in your situation. They had IT assistance, but they still had reoccurring issues, downtime, techs, and, worst of all, poor response times. At first, they thought it was just the cost of doing business—until they found us. By working with us, they were able to improve their IT infrastructure, eliminate recurring issues, and get their business back on track. Discover how our tailored approach and commitment to excellence can propel your tech business forward."}
        descriptionTab={"You're not alone. The majority of our clients were in your situation. They had IT assistance, but they still had reoccurring issues, downtime, techs, and, worst of all, poor response times. At first, they thought it was just the cost of doing business—until they found us. By working with us, they were able to improve their IT infrastructure, eliminate recurring issues, and get their business back on track. Discover how our tailored approach and commitment to excellence can propel your tech business forward."}
        descriptionMob={"You're not alone. The majority of our clients were in your situation. They had IT assistance, but they still had reoccurring issues, downtime, techs, and, worst of all, poor response times. At first, they thought it was just the cost of doing business—until they found us. By working with us, they were able to improve their IT infrastructure, eliminate recurring issues, and get their business back on track. Discover how our tailored approach and commitment to excellence can propel your tech business forward."}
        cardsData={ sec2Data}

      />

<SpecialSliderSection 
      pageName={"technology"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"Our IT offerings for the<br/> Tech Industry"}
      headingTab={"Our IT offerings for the<br/> Tech Industry"}
      headingMob={"Our IT offerings<br/> for the Tech<br/> Industry"}
      descriptionWeb={"Discover the power of your business with cutting-edge AI, bespoke software, robust<br/> cybersecurity, and seamless cloud migration services. Future-proof your success<br/> today."}
      descriptionTab={"Discover the power of your business with<br/> cutting-edge AI, bespoke software, robust<br/> cybersecurity, and seamless cloud migration<br/> services. Future-proof your success today."}
      descriptionMob={"Discover the power of your business<br/> with cutting-edge AI, bespoke software,<br/> robust cybersecurity, and seamless<br/> cloud migration services. Future-proof<br/> your success today."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


      <BlueNotchSection
        headingWeb={"Why Choose ZOG Global"}     // <br/>
        headingTab={"Why Choose ZOG Global"}
        headingMob={"Why Choose<br/> ZOG Global"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec4Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"technology"}
        secNo={"5"}
        headingWeb={"Latest Tech Industry<br/> Insights"}
        headingTab={"Latest Tech Industry<br/> Insights"}
        headingMob={"Latest Tech<br/> Industry<br/> Insights"}
        data={blogData}
      />
}


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"technology"}
        titleWeb={"Need IT<br/> Support?"}
        titleTab={"Need IT<br/> Support?"}
        titleMob={"Need IT Support?"}
                
        subTitlePresent={true}
        subTitleWeb={"Have a quick call with our expert team to<br/> discuss your IT needs."}
        subTitleTab={"Have a quick call with our<br/> expert team to discuss your<br/> IT needs."}
        subTitleMob={"Have a quick call with our expert team<br/> to discuss your IT needs."}

        buttonText={"CONNECT NOW"}
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

export default Technology