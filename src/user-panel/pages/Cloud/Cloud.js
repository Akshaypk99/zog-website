import React, { Component, useEffect, useState, useContext } from 'react'
import './Cloud.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import ThreeCardsSection from '../../common-component/ThreeCardsSection/ThreeCardsSection.js'
import ImageOverlapedSection from "../../common-component/ImageOverlapedSection/ImageOverlapedSection"
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


const Cloud = () => {
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
    <div className='cloud-page'>

      <Banner
        pageName={"cloud"}
        blueTitle={"Cloud"}
        titleWeb={"Seamless Access<br/> Reliable Protection"}
        titleTab={"Seamless Access<br/> Reliable Protection"}
        titleMob={"Seamless<br/> Access Reliable<br/> Protection"}
        subTitleWeb={"We migrate, optimise, secure, and<br/> maintain your cloud infrastructure."}
        subTitleTab={"We migrate, optimise, secure, and<br/> maintain your cloud infrastructure."}
        subTitleMob={"We migrate, optimise, secure, and<br/> maintain your cloud infrastructure."}
        iconTopWeb={'72%'}
        iconLeftWeb={'71%'}
        iconTopTab={'82%'}
        iconLeftTab={'43%'}
        iconTopMob={'75%'}
        iconLeftMob={'35%'}
        iconRotationWeb={-5}
        iconRotationTab={0}
        iconRotationMob={0}>
      </Banner>

      <SimpleSection
        pageName={"cloud"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Experience Hassle-<br/>Free Cloud Migration"}
        headingTab={"Experience Hassle-Free<br/> Cloud Migration"}
        headingMob={"Experience Hassle-<br/>Free Cloud Migration"}
        description={"Our custom migration approach, guided by seasoned experts with extensive experience in cloud technologies and industry best practices, ensures a smooth and efficient transition for your business."}
        buttonText={""}
      />



<ThreeCardsSection
        pageName={'cloud'}
        secNo={'3'}
        cardHeight={523}
        alignment={"left"}
        headingWeb={"Our Cloud Services<br/> Offerings"}
        headingTab={"Our Cloud Services<br/> Offerings"}
        headingMob={"Our Cloud<br/> Services<br/> Offerings"}
        descriptionWeb={"ZOG Global offers a range of cloud services, empowering businesses with scalable<br/> digital solutions."}
        descriptionTab={"ZOG Global offers a range of cloud services,<br/> empowering businesses with scalable digital<br/> solutions."}
        descriptionMob={"ZOG Global offers a range of cloud<br/> services, empowering businesses with<br/>  scalable digital solutions."}


        subHeading1={"Infrastructure as a Service (IaaS)"}
        description1={"Scalable infrastructure solutions tailored to your business's needs."}
        subHeading2={"Platform as a Service (PaaS)"}
        description2={"Streamline development with our robust platform and intuitive tools."}
        subHeading3={"Software as a Service (SaaS)"}
        description3={"Access powerful software applications securely from any device, anywhere."}
      />

<ThreeCardsSection
        pageName={'cloud'}
        secNo={'4'}
        cardHeight={523}
        alignment={"left"}
        headingWeb={"Drive Business Success through<br/> Leading Cloud Solutions"}
        headingTab={"Drive Business Success<br/> through Leading Cloud<br/> Solutions"}
        headingMob={"Drive Business<br/> Success<br/> through Leading<br/> Cloud Solutions"}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}


        subHeading1={"Amazon Web Services (AWS)"}
        description1={"We provide comprehensive support on AWS, the global leader in cloud computing."}
        subHeading2={"Google Cloud Platform (GCP)"}
        description2={"Count on our assistance for leveraging GCP's advanced data management and AI."}
        subHeading3={"Microsoft Azure "}
        description3={"Explore Azure with our dedicated support for diverse business solutions."}
      />


      <ImageOverlapedSection 
      pageName={'cloud'} 
      secNo={'5'} 
      imageFirst={false}
      numberPresent={true}
      headingWeb={"Why Choose ZOG Global as<br/> your Cloud Partner?"} 
      headingTab={"Why Choose ZOG Global<br/> as your Cloud Partner?"} 
      headingMob={"Why Choose ZOG Global as your Cloud Partner?"} 
      descriptionWeb={"ZOG Global offers unmatched reliability, security, and innovation, making us the ideal<br/> choice for your trusted cloud partner. Our dedication to continuous improvement<br/> means you're not just choosing a provider; you're choosing a collaborative partner<br/> invested in your success."}
      descriptionTab={"ZOG Global offers unmatched reliability, security,<br/> and innovation, making us the ideal choice for<br/> your trusted cloud partner. Our dedication to<br/> continuous improvement means you're not just<br/> choosing a provider; you're choosing a<br/> collaborative partner invested in your success."}
       descriptionMob={"ZOG Global offers unmatched reliability, security, and innovation, making us the ideal choice for your trusted cloud partner. Our dedication to continuous improvement means you're not just choosing a provider; you're choosing a collaborative partner invested in your success."}

      subHeadding1={"Reliable & Secure"} 
      description1={"Our trustworthy, encrypted cloud services ensure data security, reliability, and seamless operations."} 
      subHeadding2={"Patching & Maintenance"} 
      description2={"Proactive maintenance secures your cloud, preventing vulnerabilities and ensuring smooth operations."} 
      subHeadding3={"Continuous Improvement"} 
      description3={"Customised enhancements foster efficiency and innovation, guaranteeing peak performance for your operations."}
      />


      {blogData&&
      <InsightSliderSection
        pageName={"cloud"}
        secNo={"6"}
        headingWeb={"Explore<br/> Cloud Computing Insights"}
        headingTab={"Explore Cloud<br/> Computing Insights"}
        headingMob={"Explore Cloud<br/> Computing<br/> Insights"}
        data={blogData}
      />
}


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"cloud"}
        titleWeb={"Ready for<br/> Cloud Migration?"}
        titleTab={"Ready for Cloud<br/> Migration?"}
        titleMob={"Ready for Cloud<br/> Migration?"}
                
        subTitlePresent={true}
        subTitleWeb={"Streamline your migration process with expert guidance<br/> today."}
        subTitleTab={"Streamline your migration<br/> process with expert guidance<br/> today."}
        subTitleMob={"Streamline your migration process with<br/> expert guidance today."}

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

export default Cloud