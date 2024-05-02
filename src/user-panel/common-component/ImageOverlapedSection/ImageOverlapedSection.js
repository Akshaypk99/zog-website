import React, { useEffect, useState } from "react";
import './ImageOverlapedSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';

const ImageOverlapedSection = ({ pageName, secNo, imageFirst, numberPresent, headingWeb, headingTab, headingMob,descriptionWeb,descriptionTab, descriptionMob, subHeadding1, description1, subHeadding2, description2, subHeadding3, description3,subHeadding4 , description4 }) => {
  const navigate = useNavigate();
  const renderHTML = (text) => ({ __html: text });
console.log("imageFirst from ImageOverlappedSection", imageFirst)

 
  return (
    <div className='image-overlaped-section'>
      <h1 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
      <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
      <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>

      {descriptionWeb&&
      <>
      <p className='only-web' dangerouslySetInnerHTML={renderHTML(descriptionWeb)}></p>
      <p className='only-tab' dangerouslySetInnerHTML={renderHTML(descriptionTab)}></p>
      <p className='only-mob' dangerouslySetInnerHTML={renderHTML(descriptionMob)}></p>
      </>
}
      <div className={imageFirst?'sub-sec image-at-left':'sub-sec image-at-right'}>
        <div className='lhs'>
          <img src={`/images/${pageName}/sec-${secNo}-1.png`} className='only-web'></img>
          <img src={`/images/${pageName}/sec-${secNo}-1-tab.png`} className='only-tab'></img>
          <img src={`/images/${pageName}/sec-${secNo}-1.png`} className='only-mob'></img>

        </div>
        <div className='rhs'>
          {numberPresent&&<div className="number">01</div>}
          <h2>{subHeadding1}</h2>
          <p>{description1}</p>

        </div>
      </div>

      <div className={imageFirst===true?'sub-sec image-at-right':'sub-sec image-at-left'}>
        <div className='lhs'>
          <img src={`/images/${pageName}/sec-${secNo}-2.png`} className='only-web'></img>
          <img src={`/images/${pageName}/sec-${secNo}-2-tab.png`} className='only-tab'></img>
          <img src={`/images/${pageName}/sec-${secNo}-2.png`} className='only-mob'></img>

        </div>

        <div className='rhs'>
        {numberPresent&&<div className="number">02</div>}
          <h2>{subHeadding2}</h2>
          <p>{description2}</p>

        </div>
      </div>

      <div className={imageFirst?'sub-sec image-at-left':'sub-sec image-at-right'}>
        <div className='lhs'>
          <img src={`/images/${pageName}/sec-${secNo}-3.png`} className='only-web'></img>
          <img src={`/images/${pageName}/sec-${secNo}-3-tab.png`} className='only-tab'></img>
          <img src={`/images/${pageName}/sec-${secNo}-3.png`} className='only-mob'></img>

        </div>
        <div className='rhs'>
        {numberPresent&&<div className="number">03</div>}
          <h2>{subHeadding3}</h2>
          <p>{description3}</p>

        </div>
      </div>

      {subHeadding4&&
      <div className={imageFirst===true?'sub-sec image-at-right':'sub-sec image-at-left'}>
      <div className='lhs'>
        <img src={`/images/${pageName}/sec-${secNo}-4.png`} className='only-web'></img>
        <img src={`/images/${pageName}/sec-${secNo}-4-tab.png`} className='only-tab'></img>
        <img src={`/images/${pageName}/sec-${secNo}-4.png`} className='only-mob'></img>

      </div>

      <div className='rhs'>
      {numberPresent&&<div className="number">04</div>}
        <h2>{subHeadding4}</h2>
        <p>{description4}</p>

      </div>
    </div>}
    </div>

  )
}

export default ImageOverlapedSection