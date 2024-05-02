import React, { useEffect, useState } from "react";
import './GreyCardsSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';

const GreyCardsSection = ({ pageName, headingWeb, headingTab, headingMob, descriptionWeb, descriptionTab, descriptionMob, cardsData }) => {
  const navigate = useNavigate();
  const renderHTML = (text) => ({ __html: text });




  return (
    <div className='grey-card-section'>
      <div className="inner">
      <div className='headding-box'>
        <h1 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
        <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
        <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>

        <p className='only-web' dangerouslySetInnerHTML={renderHTML(descriptionWeb)}></p>
        <p className='only-tab' dangerouslySetInnerHTML={renderHTML(descriptionTab)}></p>
        <p className='only-mob' dangerouslySetInnerHTML={renderHTML(descriptionMob)}></p>

      </div>


      <div className="cards-outer">

        {cardsData.map((item, index) => {
          return (
            <div className={item.title?'card':'card no-title'} key={index}>
              {item.title&&<div className="title">{item.title}</div>}
              <div className="description">{item.description}</div>
            </div>
          )
        })}


      </div>
      </div>
    </div>
  )
}

export default GreyCardsSection