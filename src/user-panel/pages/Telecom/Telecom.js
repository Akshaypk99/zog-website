import React, { Component, useEffect, useState, useContext } from 'react'
import './Telecom.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import DiamondSection from '../../common-component/DiamondSection/DiamondSection.js'
import SpecialSliderSection from "../../common-component/SpecialSliderSection/SpecialSliderSection"
import ImageOverlapedSection from '../../common-component/ImageOverlapedSection/ImageOverlapedSection.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
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


const Telecom = () => {
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
    { title: "Digital Transformation", description: "Empowering telecom businesses with innovative digital solutions for enhanced efficiency and customer experience." },
    { title: "Network Infrastructure Management", description: "Expert management and optimisation of telecom networks for seamless connectivity, performance, and reliability." },
    { title: "Data Security Solutions", description: "Advanced defence strategies fortify telecom operations against cyber threats, ensuring data privacy and compliance." },
    { title: "Cloud Migration Services", description: "Seamless transition to cloud infrastructure for telecom businesses, ensuring scalability, agility, and cost-effectiveness." }
  ]

  const sec5Data = [
    {
      title: "Specialised Expertise",
      description: "Benefit from industry-specific knowledge, tailored solutions, and a deep understanding of telecom challenges for optimal outcomes.",
    },
    {
      title: "Cost Efficiency",
      description: "Streamlined processes, automation, and strategic planning lead to minimised costs and maximised value from IT investments.",
    },
    {
      title: "Scalability & Flexibility",
      description: "Dynamic solutions adapt to changing demands, ensuring seamless growth, agility, and scalability in evolving telecom environments.",
    },
    {
      title: "Enhanced Performance",
      description: "Proactive monitoring, robust security measures, and strategic infrastructure management ensure high performance and reliability.",
    },
    {
      title: "Strategic Partnerships & Support",
      description: "Personalised attention, ongoing support, and commitment to client success foster strong partnerships and mutual growth opportunities.",
    },



  ]

  
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
    <div className='telecom-page'>

      <Banner
        pageName={"telecom"}
        blueTitle={"Telecom"}
        titleWeb={"Innovative IT Services<br/> for Telecom"}
        titleTab={"Innovative IT<br/> Services for<br/> Telecom"}
        titleMob={"Innovative IT<br/> Services for<br/> Telecom"}
        subTitleWeb={"Driving digital evolution in Telecom<br/> businesses."}
        subTitleTab={"Driving digital evolution in Telecom<br/> businesses."}
        subTitleMob={"Driving digital evolution in<br/> Telecom businesses."}
        iconTopWeb={'8%'}
        iconLeftWeb={'90%'}
        iconTopTab={'26%'}
        iconLeftTab={'75%'}
        iconTopMob={'38%'}
        iconLeftMob={'70%'}
        iconRotationWeb={140}
        iconRotationTab={31}
        iconRotationMob={19}>
      </Banner>

      <DiamondSection
        pageName={'telecom'}
        secNo={'2'}
        theme={"light"}
        headingBoxPresent={false}
        
        subHeadding1={"Our Tech-Forward Approach"}
        description1={"ZOG Global leverages its vast domain knowledge and technological expertise to deliver high-value IT services tailored for telecom clients throughout the UK. Our solutions empower businesses to capitalise on revenue-generating opportunities, adapt to evolving customer demands, and expand into new markets. With our innovative telecom technology solutions, we offer enhanced methods to achieve measurable business success."}
        subHeadding2={"‌Next Generation Networks"}
        description2={"Next Generation Networks (NGNs) underscore the critical role of IT in the telecom sector. With instantaneous technological advancements and increasing demands for connectivity, telecom companies rely heavily on robust IT infrastructure to meet evolving customer needs."}
      />

<SpecialSliderSection 
      pageName={"telecom"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"Our Telecom<br/> Offerings"}
      headingTab={"Our Telecom Offerings"}
      headingMob={"Our Telecom<br/> Offerings"}
      descriptionWeb={"We offer tailored solutions and innovative services designed to empower telecom<br/> businesses for sustained growth and success."}
      descriptionTab={"We offer tailored solutions and innovative<br/> services designed to empower telecom<br/> businesses for sustained growth and success."}
      descriptionMob={"We offer tailored solutions and<br/> innovative services designed to<br/> empower telecom businesses for<br/> sustained growth and success."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


<ImageOverlapedSection 
      pageName={'telecom'} 
      secNo={'4'} 
      imageFirst={false}
      numberPresent={true}
      headingWeb={"Advanced Security<br/> Offerings"} 
      headingTab={"Advanced Security<br/> Offerings"} 
      headingMob={"Advanced<br/> Security<br/> Offerings"} 
      descriptionWeb={"Step into a fortified future with our advanced security offerings custom-tailored to<br/> shield your telecom business and customer data."}
      descriptionTab={"Step into a fortified future with our advanced<br/> security offerings custom-tailored to shield your<br/> telecom business and customer data."}
       descriptionMob={"Step into a fortified future with our<br/> advanced security offerings custom-<br/>tailored to shield your telecom<br/> business and customer data."}

      subHeadding1={"Threat Intelligence"} 
      description1={"Stay ahead of cyber threats with dynamic insights for proactive  defence strategies."} 
      subHeadding2={"Secure SD-WAN"} 
      description2={"Enhance network security and performance through our cutting-edge SD-WAN solutions."} 
      subHeadding3={"Penetration Testing"} 
      description3={"Identify and strengthen security weaknesses with thorough penetration testing services."}
      />


      <BlueNotchSection
        headingWeb={"Why Choose ZOG Global"}     // <br/>
        headingTab={"Why Choose ZOG Global"}
        headingMob={"Why Choose<br/> ZOG Global"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec5Data}

      />


{blogData&&
      <InsightSliderSection
        pageName={"telecom"}
        secNo={"6"}
        headingWeb={"Telecom IT Insights"}
        headingTab={"Telecom IT Insights"}
        headingMob={"Telecom IT<br/> Insights"}
        data={blogData}
      />
}


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"telecom"}
        titleWeb={"Interested in<br/> Our Solutions?"}
        titleTab={"Interested in Our<br/> Solutions?"}
        titleMob={"Interested in Our<br/> Solutions?"}
                
        subTitlePresent={true}
        subTitleWeb={"Reach out to discuss your telecom IT needs with our<br/> expert team."}
        subTitleTab={"Reach out to discuss your<br/> telecom IT needs with our<br/> expert team."}
        subTitleMob={"Reach out to discuss your telecom IT<br/> needs with our expert team."}

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

export default Telecom