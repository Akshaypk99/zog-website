import React, { Component, useEffect, useState, useContext } from 'react'
import './DevOps.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import SpecialSliderSection from "../../common-component/SpecialSliderSection/SpecialSliderSection"
import ThreeCardsSection from '../../common-component/ThreeCardsSection/ThreeCardsSection.js'
import InsightSliderSection from '../../common-component/InsightSliderSection/InsightSliderSection'
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


const DevOps = () => {
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

  
  const sec3Data = [
    {
      title: "Effortless Efficiency",
      description: "Automate tasks, reduce errors, and boost productivity for smoother software development and operations, enhancing overall performance."
    },
    {
      title: "Unified Collaboration",
      description: "Foster seamless communication and teamwork among development, operations, and other stakeholders for faster delivery and better outcomes."
    },
    {
      title: "Limitless Scalability",
      description: "Scale infrastructure and applications seamlessly to meet dynamic demands, ensuring optimal performance and resource utilisation at any scale."
    },
    {
      title: "Swift Deployment",
      description: "Implement CI/CD pipelines for rapid code delivery, testing, and deployment, accelerating software release cycles effectively with precision."},
    {
      title: "Insightful Operations",
      description: "Gain real-time visibility into system performance, enabling proactive troubleshooting for reliable operations management and informed decisions."
    },
  ]

 
  const sec4Data = [
    { title: "DevOps Outsourcing", description: "Efficient DevOps outsourcing solutions for streamlined development and operations collaboration, enhancing project scalability and flexibility." },
    { title: "DevOps Automation", description: "Harness the power of automation with our comprehensive DevOps services, driving efficiency, reliability, and accelerated software delivery." },
    { title: "Cloud-Based Software", description: "Innovative cloud-based software development solutions enable seamless scalability, enhanced accessibility, and rapid deployment of applications." },
    { title: "IT Infrastructure Optimisation", description: "Unlock the full potential of your IT infrastructure through strategic optimisation strategies tailored to boost performance and reduce costs." }
  ]

  const sec6Data=[
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
    <div className='dev-ops-page'>

      <Banner
        pageName={"dev-ops"}
        blueTitle={"DevOps"}
        titleWeb={"Flexible Development<br/> Seamless Delivery"}
        titleTab={"Flexible Development<br/> Seamless Delivery"}
        titleMob={"Flexible<br/> Development<br/> Seamless<br/> Delivery"}
        subTitleWeb={"Optimised DevOps workflows for rapid<br/> delivery."}
        subTitleTab={"Optimised DevOps workflows for rapid<br/> delivery."}
        subTitleMob={"Optimised DevOps workflows<br/> for rapid delivery."}
        iconTopWeb={'58%'}
        iconLeftWeb={'80%'}
        iconTopTab={'45%'}
        iconLeftTab={'75%'}
        iconTopMob={'45%'}
        iconLeftMob={'75%'}
        iconRotationWeb={45}
        iconRotationTab={75}
        iconRotationMob={65}>
      </Banner>

      <SimpleSection
        pageName={"dev-ops"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Embrace DevOps<br/> Culture and Practices"}
        headingTab={"Embrace DevOps Culture<br/> and Practices"}
        headingMob={"Embrace DevOps<br/> Culture and Practices"}
        description={"Automate your CI/CD pipeline with DevOps to accelerate development, testing, and deployment. Enhance team collaboration for seamless workflow integration, improving efficiency and fostering innovation."}
        buttonText={""}
      />



      <div className='sec-3-blue-notch-section'>
        <div className='inner'>
          <div className='title-sec'>
            <h1 className="only-web">Why are DevOps Tools<br/>Important?</h1>
            <h1 className="only-tab">Why are DevOps Tools<br/>Important?</h1>
            <h1 className="only-mob">Why are<br/>DevOps Tools<br/>Important?</h1>
          </div>
          <img src='/images/dev-ops/sec-3.svg' alt=''></img>

          {sec3Data.map((item, index) => {
            return (
              <div className={index % 2 == 0 ? 'segment even' : 'segment odd'} >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
              </div>

            )
          })}

        </div>
      </div>


      <SpecialSliderSection 
      pageName={"dev-ops"}
      secNo={"4"}
      
      headingBoxPresent={true}
      headingWeb={"DevOps Services<br/> We Offer"}
      headingTab={"DevOps Services We<br/> Offer"}
      headingMob={"DevOps<br/> Services We<br/> Offer"}
      descriptionWeb={"Excellent ideas deserve excellent execution. We accomplish this by offering DevOps<br/> services that are stable, dependable, and<br/> cost-effective to businesses in the UK and around the world."}
      descriptionTab={"Excellent ideas deserve excellent execution. We<br/> accomplish this by offering DevOps services that<br/> are stable, dependable, and cost-effective to<br/> businesses in the UK and around the world."}
      descriptionMob={"Excellent ideas deserve excellent<br/> execution. We accomplish this by<br/> offering DevOps services that are<br/> stable, dependable, and cost-effective<br/> to businesses in the UK and around the<br/> world."}
      boxAlignment={"center"}
      
      subTitle={"STREAMLINED SOLUTIONS"}
      data={sec4Data} 
      />


<ThreeCardsSection
        pageName={'dev-ops'}
        secNo={'5'}
        cardHeight={523}
        alignment={"left"}
        headingWeb={"Guiding Your<br/> DevOps Journey"}
        headingTab={"Guiding Your DevOps<br/> Journey"}
        headingMob={"Guiding Your<br/> DevOps Journey"}
        descriptionWeb={"Our DevOps services are designed to support you and your organisation at any stage<br/> of your DevOps journey, whether you're just beginning your transformation or seeking<br/> specialised technical expertise."}
        descriptionTab={"Our DevOps services are designed to support you<br/> and your organisation at any stage of your<br/> DevOps journey, whether you're just beginning<br/> your transformation or seeking specialised<br/> technical expertise."}
        descriptionMob={"Our DevOps services are designed to<br/> support you and your organisation at<br/> any stage of your DevOps journey,<br/> whether you're just beginning your<br/> transformation or seeking specialised<br/> technical expertise."}


        subHeading1={"Microsoft Azure DevOps"}
        description1={"We orchestrate Azure's DevOps capabilities for seamless project management."}
        subHeading2={"Amazon AWS DevOps"}
        description2={"Let our team expertly harness AWS DevOps tools for streamlined workflows."}
        subHeading3={"Google Cloud DevOps"}
        description3={"Our team leverages Google Cloud's DevOps features for efficient operations."}
      />

      {blogData&&
      <InsightSliderSection
        pageName={"dev-ops"}
        secNo={"6"}
        headingWeb={"Explore DevOps<br/> Best Practices and Trends"}
        headingTab={"Explore DevOps Best<br/> Practices and Trends"}
        headingMob={"Explore<br/> DevOps<br/> Best<br/> Practices<br/> and Trends"}
        data={blogData}
      />
}


    



      <BottomBanner
        pageName={"dev-ops"}
        titleWeb={"Let’s Discuss<br/> Your Project"}
        titleTab={"Let’s Discuss Your<br/> Project"}
        titleMob={"Let’s Discuss Your<br/> Project"}
                
        subTitlePresent={true}
        subTitleWeb={"Start your<br/> DevOps success journey today."}
        subTitleTab={"Start your DevOps success<br/> journey today."}
        subTitleMob={"Start your DevOps success journey<br/> today."}

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

export default DevOps