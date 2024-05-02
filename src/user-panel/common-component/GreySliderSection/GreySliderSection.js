import React, { useEffect, useState } from "react";
import './GreySliderSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';
import Slider from 'react-slick'

const GreySliderSection = ({ pageName, secNo,numberMode, headingWeb, headingTab, headingMob, subHeading, data }) => {
  const navigate = useNavigate();
  const renderHTML = (text) => ({ __html: text });


  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
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
    <div className={numberMode==true?'grey-slider-section number-type':'grey-slider-section'}>
      <div className='headding-box'>
        <h1 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
        <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
        <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>
        {subHeading && <p>{subHeading}</p>}
      </div>



      <Slider {...sliderSettings}>

        {data.map((item, index) => {
          return (
            <div className='card' key={index}>

<div className="inner-base-box">
<div className="inner-moving-box">
  {numberMode==true?
  <div className="number">0{index+1}</div>
:
<img src={`/images/${pageName}/sec-${secNo}-${index + 1}.svg`}></img>
}


<div className='title'>{item.title}</div>
<div className='description'>{item.description}</div>

<button>
  <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.065 8.70711C33.4555 8.31658 33.4555 7.68342 33.065 7.29289L26.701 0.928932C26.3105 0.538408 25.6773 0.538408 25.2868 0.928932C24.8963 1.31946 24.8963 1.95262 25.2868 2.34315L30.9436 8L25.2868 13.6569C24.8963 14.0474 24.8963 14.6805 25.2868 15.0711C25.6773 15.4616 26.3105 15.4616 26.701 15.0711L33.065 8.70711ZM0.357849 9H32.3578V7H0.357849V9Z" fill="#fff" />
  </svg>
</button>
              </div>
  </div>


            </div>
          )
        })}

      </Slider>



    </div>
  )
}

export default GreySliderSection