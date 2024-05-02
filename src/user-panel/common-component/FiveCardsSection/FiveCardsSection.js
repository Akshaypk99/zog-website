import React from "react";
import './FiveCardsSection.scss'
import { useNavigate } from 'react-router-dom';

const FiveCardsSection = ({ pageName, secNo, cardHeightWeb, cardHeightTab, headingWeb, headingTab, headingMob, description, subHeading1, description1, subHeading2, description2, subHeading3, description3, subHeading4, description4, subHeading5, description5 }) => {
  const navigate = useNavigate();
  const renderHTML = (text) => ({ __html: text });

  return (
    <div className='five-cards-section '>
<div className="inner">
      <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
      <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>
      {description&&<p className='only-tab' dangerouslySetInnerHTML={renderHTML(description)}></p>}
      {description&&<p className='only-mob' dangerouslySetInnerHTML={renderHTML(description)}></p>}


      <div className='flex-box'>

        <div className='text-box' style={window.innerWidth>992?{height:`${cardHeightWeb}px`}:window.innerWidth>768?{height:`${cardHeightTab}px`}:{}}>
          <h1  dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
          {description&&<p dangerouslySetInnerHTML={renderHTML(description)}></p>}

        </div>

        <div className='card' style={window.innerWidth>992?{height:`${cardHeightWeb}px`}:window.innerWidth>768?{height:`${cardHeightTab}px`}:{}} >
          <img src={`/images/${pageName}/sec-${secNo}-1.svg`} alt="Card 1"></img>
          <div className='title' dangerouslySetInnerHTML={renderHTML(subHeading1)}></div>
          <div className='description' dangerouslySetInnerHTML={renderHTML(description1)}></div>
        </div>

        <div className='card' style={window.innerWidth>992?{height:`${cardHeightWeb}px`}:window.innerWidth>768?{height:`${cardHeightTab}px`}:{}}>
          <img src={`/images/${pageName}/sec-${secNo}-2.svg`} alt="Card 2"></img>
          <div className='title' dangerouslySetInnerHTML={renderHTML(subHeading2)}></div>
          <div className='description' dangerouslySetInnerHTML={renderHTML(description2)}></div>
        </div>

        <div className='card' style={window.innerWidth>992?{height:`${cardHeightWeb}px`}:window.innerWidth>768?{height:`${cardHeightTab}px`}:{}}>
          <img src={`/images/${pageName}/sec-${secNo}-3.svg`} alt="Card 3"></img>
          <div className='title' dangerouslySetInnerHTML={renderHTML(subHeading3)}></div>
          <div className='description' dangerouslySetInnerHTML={renderHTML(description3)}></div>
        </div>

        <div className='card' style={window.innerWidth>992?{height:`${cardHeightWeb}px`}:window.innerWidth>768?{height:`${cardHeightTab}px`}:{}}>
          <img src={`/images/${pageName}/sec-${secNo}-4.svg`} alt="Card 4"></img>
          <div className='title' dangerouslySetInnerHTML={renderHTML(subHeading4)}></div>
          <div className='description' dangerouslySetInnerHTML={renderHTML(description4)}></div>
        </div>

        <div className='card' style={window.innerWidth>992?{height:`${cardHeightWeb}px`}:window.innerWidth>768?{height:`${cardHeightTab}px`}:{}}>
          <img src={`/images/${pageName}/sec-${secNo}-5.svg`} alt="Card 5"></img>
          <div className='title' dangerouslySetInnerHTML={renderHTML(subHeading5)}></div>
          <div className='description' dangerouslySetInnerHTML={renderHTML(description5)}></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FiveCardsSection;
