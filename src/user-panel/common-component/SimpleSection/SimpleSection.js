import React, { useEffect, useState } from "react";
import './SimpleSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';

const SimpleSection = ({ pageName,secNo, type, blackBG,headdingPresent, buttonPresent, imagePosition,headingWeb, headingTab, headingMob, description, buttonText, greyBG }) => {
  const navigate = useNavigate();
  const renderHTML = (text) => ({ __html: text });




  return (
  <div className={type==2?'type2 simple-section':'simple-section'} style={imagePosition=="right"?{flexDirection:"row-reverse"}:{}}>
      <div className='lhs'>
      <img src={`/images/${pageName}/sec-${secNo}.png`} className='only-web'></img>
          <img src={`/images/${pageName}/sec-${secNo}-tab.png` }  className='only-tab'></img>
          <img src={`/images/${pageName}/sec-${secNo}.png`} className='only-mob'></img>
      </div>
      <div className='rhs'>
      <div className="inner">
      {headdingPresent&&<h2 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h2>}
     {headdingPresent&& <h2 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h2>}
     {headdingPresent&&<h2 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h2>}

        <p style={headdingPresent==false&&window.innerWidth<992?{
  
    
        textAlign: 'center',
      
      }:{textAlign:"left"}}
      >{description}</p>

        {buttonPresent&&<button className="btn-transparent-arrow">{buttonText}</button>}

      </div>
          </div>
    </div>
  )
}

export default SimpleSection