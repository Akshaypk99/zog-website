import React, { Component, useEffect, useState, useContext } from 'react'
import './Home.scss'

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

import API from "../../../API.js"
import LoadingSpinner from "../../../LoadingSpinner.js";
import ErrorModal from "../../../ErrorModal.js";
import PositiveModal from "../../../PositiveModal.js";
import DeleteConfirmModal from "../../../DeleteConfirmModal.js";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner.js"
import $ from 'jquery';

import SpecialSliderSection from "../../common-component/SpecialSliderSection/SpecialSliderSection"

import { UserContext } from '../../../authentication/pages/UserContext.js';
import { Link } from 'react-router-dom'

import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Userhome = ({ selectCategory, setTripwiseAvailability, userData, loadUserData }) => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);


  const sec4Data = [
    { title: "Digital Engineering", description: "Efficient solutions, proactive support, and seamless IT management for optimised business performance and security." },
    { title: "Quality Assurance", description: "Exceptional QA solutions ensure seamless performance, reliability, and precision for your products and applications." },
    { title: "Future-Tech Solutions", description: "Enhance business productivity through advanced AI and Automation, optimising processes for improved efficiency and innovation." }
  ]
  const sec5Data = [
    {
      title: "Healthcare",
      description: "Empower your healthcare organisation with comprehensive IT services, fostering seamless operations, advanced data management, and robust security solutions. Enhance efficiency and connectivity within the healthcare industry, ensuring optimal performance and compliance in a rapidly evolving digital landscape.",
      link: "/healthcare"
    },
    {
      title: "Technology",
      description: "Strengthen your tech venture with our top IT services. Our solutions seamlessly integrate with your business, enhancing operational efficiency and fostering growth. From automation to cybersecurity, trust us for reliable support that aligns seamlessly with your technological aspirations.",
      link: "/technology"
    },
    {
      title: "Telecom",
      description: "Efficiently navigate the dynamic landscape of the Telecom industry with our specialised IT services. Streamline operations, enhance connectivity, and stay ahead in the competitive market. Our solutions are crafted to optimise performance and ensure seamless technological integration.",
      link: "/telecom"
    },
    {
      title: "Education",
      description: "Enhance educational environments with proficient IT services designed to integrate technology seamlessly. Our solutions optimise connectivity, streamline operations, and foster a dynamic learning experience. Elevate your institution's digital landscape with our specialised support for the education industry.",
      link: "/education"
    },
    {
      title: "Travel",
      description: "Unlock the potential of your travel business with our IT services. Seamlessly integrate technology to enhance customer experiences, streamline operations, and stay ahead in the dynamic travel industry. Explore innovative solutions that redefine your journey towards success.",
      link: "/travel"
    },
    {
      title: "Banking Services",
      description: "Explore our dynamic suite of IT solutions designed exclusively for the banking industry. Seamlessly integrate innovative technologies to enhance operational efficiency, strengthen security protocols, and foster a resilient digital ecosystem. Elevate your banking experience with our specialised IT services.",
      link: "/banking"
    },
    {
      title: "Insurance",
      description: "Navigating the complex landscape of the insurance industry demands adept IT solutions. Our services address industry challenges head-on, offering nuanced support. From data security to streamlined processes, we ensure your insurance operations flourish in an ever-evolving digital landscape.",
      link: "/insurance"
    },
    {
      title: "Legal",
      description: "Enhance your legal operations with our IT solutions, addressing industry challenges seamlessly. Streamline workflow, mitigate data security concerns, and enhance collaboration. Our services optimise your technology landscape, fostering efficiency and resilience in the dynamic legal environment.",
      link: "/legal"
    },
    {
      title: "Media",
      description: "Streamline your media business with our IT services, addressing industry challenges. We enhance efficiency, minimise downtime, and ensure seamless workflows. Our personalised solutions align with your unique needs, fostering innovation and growth in a dynamic media landscape.",
      link: "/media"
    },
    {
      title: "Pharma",
      description: "Enhance pharmaceutical operations with our proficient IT services, seamlessly integrating technology to optimise processes. Streamline data management, ensure regulatory compliance, and fortify security protocols. Drive efficiency and innovation within the pharmaceutical realm, fostering a resilient and agile industry landscape.",
      link: "/pharma"
    },

  ]

  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])


  const [opacity, setOpacity] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate opacity for each letter based on scroll position
      const textLength = document.getElementById('scrolling-text').textContent.length;
      const opacityValues = Array.from({ length: textLength }, (_, i) => Math.min(1, (scrollPosition - (i * windowHeight)) / windowHeight));
      setOpacity(opacityValues);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home-page'>
      <div className='banner'>
        <div className='inner'>
          <div className='main-heading only-web'>Your Next Digital Partner<br /> For Innovative IT Services</div>
          <div className='main-heading only-tab'>Your Next Digital<br /> Partner For Innovative<br /> IT Services</div>
          <div className='main-heading only-mob'>Your Next Digital<br /> Partner<br /> For Innovative IT<br /> Services</div>
          <button className='button-white-box' onClick={() => navigate('/contact-us')}>BOOK A MEETING</button>

        </div>

        <video autoPlay muted loop className='only-web' >
          <source src="/images/home/banner-web.mp4" type="video/mp4" />
        </video>

        <video autoPlay muted loop className='only-tab' >
          <source src="/images/home/banner-tab.mp4" type="video/mp4" />
        </video>

        <video autoPlay muted loop className='only-mob' >
          <source src="/images/home/banner-mob.mp4" type="video/mp4" />
        </video>

        <div className='mask'></div>
      </div>

      <div className='sec-2'>
        <p className='title only-web'  id="scrolling-text">
          Transform with confidence—<br />innovative IT, seamless digital<br /> experiences, robust security.<br /> Your trusted partner for every<br /> step.
        </p>
        <p>
        {opacity.map((opacityValue, index) => (
          <span key={index} style={{ opacity: opacityValue }}>
            {document.getElementById('scrolling-text').textContent.charAt(index)}
          </span>
        ))}
      </p>
        <div className='title only-tab'>
          Transform with confidence—<br />innovative IT, seamless digital<br /> experiences, robust security.<br /> Your trusted partner for every<br /> step.
        </div><div className='title only-mob'>
          Transform with confidence— innovative IT, seamless digital experiences, robust security. Your trusted partner for every step.
        </div>
        <video autoPlay muted loop className='d-none d-md-block animation' >
          <source src="/images/home/sec-2-video-web.mp4" type="video/mp4" />
        </video>

        <video autoPlay muted loop className='d-block d-md-none animation' >
          <source src="/images/home/sec-2-video-mob.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='sec-3'>
        <div className='inner'>
          <div className='text-top'>Build</div>
          <img src='/images/home/sec-3.svg'></img>
          <div className='text-bottom'>Happiness</div>
        </div>
      </div>

      <SpecialSliderSection
        pageName={"home"}
        secNo={"4"}
        subTitle={"OUR EXPERT SOLUTIONS"}
        headingBoxPresent={false}
        boxAlignment={"left"}
        data={sec4Data}
      />





      <div className='sec-5 d-none d-lg-block'>
        <div className='title'>
          INDUSTRIES WE COVER
        </div>
        <div className='tab-view'>
          <div className="tab-btn-container">
            {sec5Data.map((item, index) => {
              return (
                <div key={index} className={tabSelected == index ? "tab-btn active" : 'tab-btn'} onClick={() => selectTab(index)}><div className='number'>{index < 9 && "0"}{index + 1}</div><div className='text'>{item.title}</div></div>

              )
            })}
          </div>
          <div className='tab-content-container' >
            {sec5Data.map((item, index) => {
              return (
                <div className={tabSelected == index ? "tab-content active" : 'tab-content'} key={index}>
                  <p>{item.description}</p>
                  <button className='btn-transparent-arrow' onClick={() => navigate(item.link)}>Learn More</button>
                </div>
              )
            })}

            <div className='line'></div>


          </div>
        </div>
      </div>





      <div className='sec-5 d-block d-lg-none'>
        <div className='title'>
          INDUSTRIES WE COVER
        </div>
        <div className='tab-view'>

          {sec5Data.map((item, index) => {
            return (
              <div key={index}>
                <div className={tabSelected == index ? "tab-btn active" : 'tab-btn'} onClick={tabSelected === index ? () => selectTab(null) : () => selectTab(index)}><div className='number'>{index < 9 && "0"}{index + 1}</div><div className='text'>{item.title}</div></div>
                <div className='tab-content-container' onClick={() => { selectTab(null) }}>
                  <div className={tabSelected == index ? "tab-content active" : 'tab-content'}>
                    <p>{item.description}</p>
                    <button className='btn-transparent-arrow' onClick={() => navigate(item.link)}>Learn More
                    </button>
                  </div>
                  <div className='line'></div>
                </div>
              </div>
            )
          })}



        </div>
      </div>



      {isLoading && <FixedOverlayLoadingSpinner />}


      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default Userhome