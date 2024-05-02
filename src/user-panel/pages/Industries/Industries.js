import React, { Component, useEffect, useState, useContext } from 'react'
import './Industries.scss'
import Banner from '../../common-component/BannerMainPages/BannerMainPages'

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
      title: "Healthcare",
      link: "/healthcare",
    },

    {
      title: "Technology",
      link: "/technology",
    },

    {
      title: "Telecom",
      link: "/telecom",
    },
    {
      title: "Education",
      link: "/education",
    },

    {
      title: "Travel",
      link: "/travel",
    },

    {
      title: "Banking ",
      link: "/banking",
    },
    {
      title: "Insurance",
      link: "/insurance",
    },

    {
      title: "Legal",
      link: "/legal",
    },

    {
      title: "Media",
      link: "/media",
    },
    {
      title: "Pharma",
      link: "/pharma",
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
    <div className='industries-page'>

      <Banner
        pageName={"industries"}
        titleWeb={"Innovative IT Solutions<br/> for Diverse Industries"}
        titleTab={"Innovative IT Solutions<br/> for Diverse Industries"}
        titleMob={"Innovative IT<br/> Solutions for<br/> Diverse<br/> Industries"}
        subTitleWeb={"Embrace the future of technology with a partner<br/> committed to transforming your challenges into success<br/>stories."}
        subTitleTab={"Embrace the future of technology with a partner<br/> committed to transforming your challenges into<br/> success stories."}
        subTitleMob={"Embrace the future of technology<br/> with a partner committed to<br/> transforming your challenges into<br/> success stories."}>
      </Banner>

      <div className='sec-2'>
        <h1>Fast-Track Your Success</h1>
        <p>Whether you are a small business or a large enterprise, we provide innovative and custom solutions to help your business achieve its goals and accelerate growth.</p>
      </div>


      <div className='sec-3'>
       <div className='inner'>
       <h1>Unlock New Possibilities</h1>
        <p>Transform as we unlock industry potential. Our innovative IT services empower agility, fostering creativity and opening doors to unprecedented opportunities for your business.</p>

       </div>
      </div>


      <div className='sec-4'>
      <h1 className='only-web'>Discover IT Solutions for<br /> Your Industry</h1>
      <h1 className='only-tab'>Discover IT Solutions for<br /> Your Industry</h1>
        <h1 className='only-mob'>Discover IT<br /> Solutions for<br /> Your Industry</h1>

        <Slider {...sec4SlideSettings}>

          {sec4Data.map((item, index) => {
            return (
              <div className='card' key={index}>
                <div className='inner' style={{ backgroundImage: `url("/images/industries/sec-4-${index + 1}.png")` }}>
                  <div className='title'>{item.title}</div>
                  <button onClick={() => navigate(`${item.link}`)}>Learn More <img src='/images/industries/sec-4-arrow.svg'></img></button>
                </div>
              </div>
            )
          })}

        </Slider>

      </div>


      <div className='sec-5'>
        <div className='lhs'>
        <h1 className='top-blue-line only-web'>Let's<br /> Discuss Your<br /> IT Needs!</h1>
        <h1 className='top-blue-line only-tab'>Let's<br /> Discuss Your<br /> IT Needs!</h1>
          <h1 className='top-blue-line only-mob'>Let's Discuss<br/> Your IT Needs!</h1>
          <p>Ready to transform your industry? Contact us now for a personalised consultation and take the first step towards a future-ready business!</p>

          <button className='button-black-box' onClick={() => navigate("/contact-us")}>TALK TO OUR TEAM</button>
        </div>
        <div className='rhs'>
          <p>Ready to transform your industry? Contact us now for a personalised consultation and take the first step towards a future-ready business!</p>
        </div>
      </div>









      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default View