import React, { useEffect, useState } from "react";
import './DiamondSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';

const DiamondSection =({pageName, secNo, theme,headingBoxPresent, headingWeb, headingTab, headingMob, descriptionWeb, descriptionTab, descriptionMob, subHeadding1, description1, subHeadding2, description2,buttonText1,buttonText2,buttonLink1,buttonLink2})=>{
  const navigate = useNavigate();
const renderHTML = (text) => ({ __html: text });




    return(
      <div className='diamond-section' style={theme==="dark"?{backgroundColor:"#000",color: "#fff"}:{backgroundColor:"#fff",color: "#000"}}>
      {headingBoxPresent&&
      <div className='headding-box'>
      <h1 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
      <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
      <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>

      <p className='only-web' dangerouslySetInnerHTML={renderHTML(descriptionWeb)}></p>
      <p className='only-tab' dangerouslySetInnerHTML={renderHTML(descriptionTab)}></p>
      <p className='only-mob' dangerouslySetInnerHTML={renderHTML(descriptionMob)}></p>

      </div>
      }


      <div className='sub-sec-1'>
        <div className='lhs'>
          <img src={`/images/${pageName}/sec-${secNo}-1.png`} className='only-web'></img>
          <img src={`/images/${pageName}/sec-${secNo}-1-tab.png`} className='only-tab'></img>
          <img src={`/images/${pageName}/sec-${secNo}-1.png`} className='only-mob'></img>
        </div>

        <div className='rhs'>
          <div>
          <h2>{subHeadding1}</h2>
          <p>{description1}</p>
          {buttonText1&&<button className='btn-transparent-arrow' onClick={()=>navigate(buttonLink1)}>{buttonText2}</button>}

          </div>
        </div>
      </div>

      <div className='sub-sec-2'>
        <div className='lhs'>
        <img src={`/images/${pageName}/sec-${secNo}-2.png`} className='only-web'></img>
          <img src={`/images/${pageName}/sec-${secNo}-2-tab.png`} className='only-tab'></img>
          <img src={`/images/${pageName}/sec-${secNo}-2.png`} className='only-mob'></img>
        </div>

        <div className='rhs'>
          <div>
          <h2>{subHeadding2}</h2>
          <p>{description2}</p>
         {buttonText2&&<button className='btn-transparent-arrow' onClick={()=>navigate(buttonLink2)}>{buttonText2}</button>
}
          </div></div>
      </div>

    </div>
    )
}

export default DiamondSection