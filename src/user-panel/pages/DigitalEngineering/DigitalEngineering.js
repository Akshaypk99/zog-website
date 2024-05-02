import React,{ Component,useEffect, useState, useContext } from 'react'
import './DigitalEngineering.scss'
import Banner from '../../common-component/BannerMainPages/BannerMainPages'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection'
import ThreeCardsSection from '../../common-component/ThreeCardsSection/ThreeCardsSection'

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


const View = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const sec4Data = [
    {
      title: "Cybersecurity",
      description: "Safeguard your digital assets with cutting-edge measures against cyber threats." ,
      link: "/cyber-security",
    } ,

    {
      title: "Software Development" ,
      description: "Craft innovative, high-quality software solutions for diverse business needs.",
      link: "/software-development",
    } ,

    {
      title: "Automation" ,
      description: "Boost efficiency and reduce manual efforts with streamlined,automated processes.",
      link: "/automation",
    } ,
    {
      title: "Cloud",
      description: "Harness the power of cloud computing for scalable and flexible solutions.",
      link: "/cloud",
    },

    {
      title: "DevOps",
      description: "Merge development and operations for faster, more reliable software delivery.",
      link: "/devops",
    } ,

    {
      title: "DevSecOps ",
      description: "Integrate security seamlessly into the development process for robust apps.",
      link: "/devsecops",
    },
    {
      title: "Advanced Networking Services",
      description: "Transform connectivity with SD-WAN and SDN for agile, scalable networks.",
      link: "/ans",
    },

    {
      title: "Testing",
      description: "Ensure software reliability through expert testing for optimal performance.",
      link: "/testing",
    },

    {
      title: "Unified Communication",
      description: "Seamlessly integrate communication tools for efficient and collaborative workflows.",
      link: "/unified-communication",
    },


  ]


  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])


 
  const sec4SlideSettings = {
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  };
  return (
    <div className='digital-engineering-page'>

      <Banner
        pageName={"digital-engineering"}
        titleWeb={"Transforming Ideas into<br/> Digital Excellence"}
        titleTab={"Transforming Ideas<br/> into Digital Excellence"}
        titleMob={"Transforming<br/> Ideas into Digital<br/> Excellence"}
        subTitleWeb={"Get reliable IT support services for your small to<br/> medium-sized business in the UK."}
        subTitleTab={"Get reliable IT support services for your small to<br/> medium-sized business in the UK."}
        subTitleMob={"Get reliable IT support services for<br/> your small to medium-sized<br/> business in the UK."}>
      </Banner>

      <SimpleSection
        pageName={"digital-engineering"}
        secNo={"2"}
        headdingPresent={false}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={""}
        headingTab={""}
        headingMob={""}
        description={"Business growth is a multifaceted process that goes beyond simply outpacing competitors. It requires not only staying ahead in the market but also developing the resilience and capabilities to sustain that success over the long term. With our help, you can transform your IT infrastructure through a combination of tailored services, expert proficiency, and strategic insights."}
        buttonText={""}
        />


<ThreeCardsSection
        pageName={'digital-engineering'}
        secNo={'3'}
        cardHeight={477}
        headingWeb={"Why Choose Our<br/> IT Services?"}
        headingTab={"Why Choose Our<br/> IT Services?"}
        headingMob={"Why Choose Our<br/> IT Services?"}
        descriptionWeb={"We redefine success. Choose innovation; choose us. At ZOG Global, excellence is not<br/> an option; it's a promise."}
        descriptionTab={"We redefine success. Choose innovation; choose<br/> us. At ZOG Global, excellence is not an option; it's<br/> a promise."}
        descriptionMob={"We redefine success. Choose<br/> innovation; choose us. At ZOG Global,<br/> excellence is not an option; it's a<br/> promise."}


        subHeading1={"Grow<br/> Your Business"}
        description1={"Elevate success with tailored IT solutions for exponential business growth."}
        subHeading2={"Empower<br/> Your People"}
        description2={"Boost productivity and morale through empowering IT support for your team."}
        subHeading3={"Save<br/> Your Budget"}
        description3={"Optimise costs with efficient IT services, ensuring a budget-friendly approach."}
      />


      <div className='sec-4'>
        <h1>Digital Engineering<br/> Offerings</h1>

        <Slider {...sec4SlideSettings}>

          {sec4Data.map((item, index) => {
            return (
              <div className='card' key={index}>
                <div className='inner' style={{ backgroundImage: `url("/images/digital-engineering/sec-4-${index + 1}.png")` }}>
                  <div className='title'>{item.title}</div>
                  <div className='description'>{item.description}</div>

                  <button onClick={() => navigate(`${item.link}`)}>Learn More <img src='/images/industries/sec-4-arrow.svg'></img></button>
                </div>
              </div>
            )
          })}


        </Slider>

      </div>






      <BottomBanner
        pageName={"digital-engineering"}
        titleWeb={"Get a Free<br/> Consultation"}
        titleTab={"Get a Free<br/> Consultation"}
        titleMob={"Get a Free<br/> Consultation"}
        subTitleWeb={"Get reliable IT support services for your small to<br/> medium-sized business in the UK."}
        subTitleTab={"Get reliable IT support services for your small to<br/> medium-sized business in the UK."}
        subTitleMob={"Get reliable IT support services for<br/> your small to medium-sized<br/> business in the UK."}
        buttonText={"BOOK A MEETING"}
        buttonTheme={"dark"}
        textTheme={"dark"}
        buttonLink={'/contact-us'}
      >
      </BottomBanner>






      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default View