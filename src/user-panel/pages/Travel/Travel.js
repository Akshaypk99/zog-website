import React, { Component, useEffect, useState, useContext } from 'react'
import './Travel.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import SpecialSliderSection from "../../common-component/SpecialSliderSection/SpecialSliderSection"
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


const Travel = () => {
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
    { title: "Travel Management Software", description: "Simplify bookings, manage itineraries, and elevate customer experiences with our comprehensive travel management software." },
    { title: "Customer Support Chatbots", description: "Enhance service efficiency and customer engagement with AI-powered chatbots tailored specifically for the travel industry." },
    { title: "Endpoint Security Solutions", description: "Ensure data protection and compliance with specialised endpoint security solutions crafted for the travel businesses." }
  ]

  const sec5Data = [
    {
      title: "Personalised Engagement",
      description: "Our data-driven insights craft unique travel experiences, ensuring each customer feels valued with personalised recommendations and services.",
    },
    {
      title: "Streamlined Operations",
      description: "We seamlessly integrate systems tailored to your needs, optimising workflows to boost productivity, cut costs, and ensure efficiency.",
    },
    {
      title: "Scalable Solutions",
      description: "Our flexible IT infrastructure grows with you, adapting to changing demands and expanding horizons while maintaining peak performance.",
    },
    {
      title: "Cost Efficiency",
      description: "We tailor processes to maximise resource use, driving down costs without compromising quality and ensuring value for your investment.",
    },
    {
      title: "Competitive Innovation",
      description: "Partnering with us means staying ahead with cutting-edge technology and offering innovative solutions that set you apart competitively.",
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
    <div className='travel-page'>

      <Banner
        pageName={"travel"}
        blueTitle={"Travel"}
        titleWeb={"Crafting Digital Destinies for Travel"}
        titleTab={"Crafting Digital<br/> Destinies for<br/> Travel"}
        titleMob={"Crafting Digital<br/> Destinies for<br/> Travel"}
        subTitleWeb={"Transforming travel businesses with<br/> expert IT solutions."}
        subTitleTab={"Transforming travel businesses with<br/> expert IT solutions."}
        subTitleMob={"Transforming travel<br/> businesses with expert IT<br/> solutions."}
        iconTopWeb={'70%'}  
        iconLeftWeb={'74%'}
        iconTopTab={'79%'}
        iconLeftTab={'41%'}
        iconTopMob={'73%'}
        iconLeftMob={'35%'}
        iconRotationWeb={104}
        iconRotationTab={104}
        iconRotationMob={104}>
      </Banner>

      <SimpleSection
        pageName={"travel"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Create Lasting Travel<br/> Memories"}
        headingTab={"Create Lasting Travel<br/> Memories"}
        headingMob={"Create Lasting Travel<br/> Memories"}
        description={"Integrating digital innovations into transportation infrastructure can significantly improve the quality and efficiency of travel experiences."}
        buttonText={""}
      />



<SpecialSliderSection 
      pageName={"travel"}
      secNo={"3"}
      
      headingBoxPresent={true}
      headingWeb={"IT Services We Offer to<br/> Travel Industry"}
      headingTab={"IT Services We Offer to<br/> Travel Industry"}
      headingMob={"IT Services We<br/> Offer to Travel<br/> Industry"}
      descriptionWeb={"Maximise your travel business's potential with our tailored IT services, driving<br/> operational efficiency, fortifying security, and elevating customer satisfaction."}
      descriptionTab={"Maximise your travel business's potential with our<br/> tailored IT services, driving operational efficiency,<br/> fortifying security, and elevating customer<br/> satisfaction."}
      descriptionMob={"Maximise your travel business's<br/> potential with our tailored IT services,<br/> driving operational efficiency, fortifying<br/> security, and elevating customer<br/> satisfaction."}
      boxAlignment={"center"}
      
      subTitle={""}
      data={sec3Data} 
      />


<SimpleSection
        pageName={"travel"}
        secNo={"4"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Overcome Challenges"}
        headingTab={"Overcome Challenges"}
        headingMob={"Overcome Challenges"}
        description={"Partner with us to overcome the challenges, leveraging innovative solutions and expert guidance to navigate the complexities of the travel industry."}
        buttonText={""}
        
      />

      <BlueNotchSection
        headingWeb={"Why Our IT<br/> Services Matter"}     // <br/>
        headingTab={"Why Our IT Services<br/> Matter"}
        headingMob={"Why Our IT<br/> Services Matter"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        listData={sec5Data}

      />

{blogData&&
      <InsightSliderSection
        pageName={"travel"}
        secNo={"6"}
        headingWeb={"Expert Insights into<br/> Travel Tech"}
        headingTab={"Expert Insights into<br/> Travel Tech"}
        headingMob={"Expert Insights<br/> into Travel Tech"}
        data={blogData}
      />
}


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"travel"}
        titleWeb={"Looking for an<br/> IT Partner?"}
        titleTab={"Looking for an IT<br/> Partner?"}
        titleMob={"Looking for an IT<br/> Partner?"}
                
        subTitlePresent={true}
        subTitleWeb={"Reach out to our experienced team today."}
        subTitleTab={"Reach out to our experienced<br/> team today."}
        subTitleMob={"Reach out to our experienced team<br/> today."}

        buttonText={"talk to our team"}
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

export default Travel