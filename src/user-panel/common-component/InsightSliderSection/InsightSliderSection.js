import React, { useEffect, useState } from "react";
import './InsightSliderSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';
import Slider from 'react-slick'

const InsightSliderSection = ({ pageName, secNo,  headingWeb, headingTab, headingMob,data}) => {
  const navigate = useNavigate();
  const renderHTML = (text) => ({ __html: text });


  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
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
    <div className='insight-slider-section'>
      <div className='headding-box'>
        <h1 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
        <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
        <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>
      </div>



      <Slider {...sliderSettings}>
          {data.map((item, index) => {
            return (
              <div className='card' key={index}>
                <div className='img-box'>
                      <img src={item.image_url}></img>
                    </div>
                    <div className='text-box'>
                      <div className='title'>{item.title}</div>
                      <div className='auther'>{item.extra}</div>
                      <div className='date'>{item.created_at}</div>
                      <div className='department'>{item.department}</div>
                    </div>
              </div>
            )
          })}
        </Slider>

      

    </div>
  )
}

export default InsightSliderSection