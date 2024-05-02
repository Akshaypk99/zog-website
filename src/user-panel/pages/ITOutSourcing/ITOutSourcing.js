import React, { Component, useEffect, useState, useContext } from 'react'
import './ITOutSourcing.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages.js'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import StatisticsSection from '../../common-component/StatisticsSection/StatisticsSection.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import GreyCardsSection from '../../common-component/GreyCardsSection/GreyCardsSection.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
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


const ITOutSourcing = () => {
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


  const sec6Data = [
    {
      title: "Advanced Risk Management",
      description: "Mitigate risks associated with IT operations through proactive monitoring, compliance adherence, and disaster recovery strategies.",
    },
    {
      title: "Focus on Core Business Activities",
      description: "By outsourcing IT tasks, businesses can focus on core strengths and strategic initiatives, driving growth and innovation.",
    },
    {
      title: "Access to Specialised Expertise",
      description: "Gain access to a varied talent pool of experienced professionals skilled in diverse tech domains and industry standards.",
    },
    {
      title: "Cost Savings",
      description: "Reduce operational expenses by outsourcing IT functions, eliminating the need for in-house infrastructure and personnel.",
    },
    {
      title: "Enhanced Adaptability",
      description: "Embrace rapid changes in technology and market demands by leveraging our IT resources for quick scalability and adaptation.",
    },
    {
      title: "Improved Productivity",
      description: "Streamline IT workflows, leveraging automation and optimisation techniques to enhance overall efficiency and productivity.",
    },



  ]


  const sec4Data = [
    {
      text:"Client Satisfaction",
      leftSign:"",
      number:"97",
      rightSign:"%",
    },

    {
      text:"Successful Projects",
      leftSign:"",
      number:"150",
      rightSign:"+",
    },
    {
      text:"On-Time Delivery",
      leftSign:"",
      number:"98",
      rightSign:"%",
    },
    {
      text:"IT Costs Reduction",
      leftSign:"",
      number:"30",
      rightSign:"%",
    },


  ]
  const sec5Data = [
    {
      title: "Scalability & Flexibility",
      description: "We offer flexible solutions adapting to your business needs, ensuring agility and scalability.",
    },

    {
      title: "Reliability & Security",
      description: "Reliable services with robust security measures safeguard your valuable assets consistently.",
    },
    {
      title: "Timely Project Delivery",
      description: "We prioritise deadlines, ensuring projects are delivered promptly without compromising quality.",
    },
    {
      title: "Ongoing Support",
      description: "We offer continuous assistance and guidance for seamless operations and sustained performance.",
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
    <div className='it-outsourcing-page'>

      <Banner
        pageName={"it-outsourcing"}
        blueTitle={"IT Outsourcing"}
        titleWeb={"Outsource Your IT to<br/> Outperform"}
        titleTab={"Outsource Your<br/> IT to Outperform"}
        titleMob={"Outsource Your<br/> IT to<br/> Outperform"}
        subTitleWeb={"Our commitment is to deliver<br/> exceptional results through outsourcing."}
        subTitleTab={"Our commitment is to deliver<br/> exceptional results through outsourcing."}
        subTitleMob={"Our commitment is to deliver<br/> exceptional results through<br/> outsourcing."}
        iconTopWeb={'30%'}
        iconLeftWeb={'82%'}
        iconTopTab={'60%'}
        iconLeftTab={'62%'}
        iconTopMob={'45%'}
        iconLeftMob={'77%'}
        iconRotationWeb={-38}
        iconRotationTab={-16}
        iconRotationMob={192}>
      </Banner>

      <SimpleSection
        pageName={"it-outsourcing"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"The Power of<br/> Outsourcing"}
        headingTab={"The Power of Outsourcing"}
        headingMob={"The Power of<br/> Outsourcing"}
        description={"IT outsourcing services provide numerous valuable benefits for businesses. From cost savings to enhanced efficiency, businesses nationwide recognise the strategic advantage of entrusting their IT needs to dedicated experts. As the demand for streamlined operations and scalable solutions persists, more and more companies in the UK are turning to outsourcing to optimise their IT infrastructure."}
        buttonText={""}
      />


      <div className='sec-3'>
<div className='inner'>
  <div className='text-box'>
  <h1>Our IT Outsourcing Offerings</h1>
  <p>Delve into the specifics of our capabilities across various technologies – click the cards for detailed breakdowns.</p>

  </div>
  
  <div className='flex-box'>
  <div className='card'>
      <img src='/images/it-outsourcing/sec-3-1.png'></img>
      <div className='text'>Managed IT Services</div> 
    </div>

    <div className='card'>
      <img src='/images/it-outsourcing/sec-3-2.png'></img>
      <div className='text'>Cybersecurity Services</div>
    </div>

    <div className='card'>
      <img src='/images/it-outsourcing/sec-3-3.png'></img>
      <div className='text'>Quality Assurance Services</div>
    </div>

    <div className='card'>
      <img src='/images/it-outsourcing/sec-3-4.png'></img>
      <div className='text'>DevSecOps Services</div>
    </div>
  </div>
</div>
      </div>


      <StatisticsSection data={sec4Data}/>


      <GreyCardsSection
        pageName={'it-outsourcing'}
        headingWeb={"Highlighting Our IT<br/> Outsourcing Features"}
        headingTab={"Highlighting Our IT<br/> Outsourcing Features"}
        headingMob={"Highlighting Our<br/> IT Outsourcing<br/> Features"}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        cardsData={sec5Data}

      />


      <BlueNotchSection
        headingWeb={"Benefits Of<br/> Our IT Outsourcing Solutions"}     // <br/>
        headingTab={"Benefits Of Our IT<br/> Outsourcing Solutions"}
        headingMob={"Benefits Of Our<br/> IT Outsourcing<br/> Solutions"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec6Data}

      />


      {blogData&&
      <InsightSliderSection
        pageName={"it-outsourcing"}
        secNo={"7"}
        headingWeb={"Explore Our Resources"}
        headingTab={"Explore<br/> Our Resources"}
        headingMob={"Explore Our<br/> Resources"}
        data={blogData}
      />
      }



      <BottomBanner
        pageName={"it-outsourcing"}
        titleWeb={"Thinking About<br/> IT Outsourcing?"}
        titleTab={"Thinking About IT<br/> Outsourcing?"}
        titleMob={"Thinking About IT<br/> Outsourcing?"}

        subTitlePresent={true}
        subTitleWeb={"Our experts are here to guide you every<br/> step of the way."}
        subTitleTab={"Our experts are here to guide<br/> you every step of the way."}
        subTitleMob={"Our experts are here to guide you every<br/> step of the way."}

        buttonText={"talk to our experts"}
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

export default ITOutSourcing