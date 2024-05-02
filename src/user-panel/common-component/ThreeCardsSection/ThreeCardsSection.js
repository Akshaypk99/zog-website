import React from "react";
import './ThreeCardsSection.scss'
import { useNavigate } from 'react-router-dom';

const ThreeCardsSection = ({ pageName, secNo,cardHeight,alignment, headingWeb, headingTab, headingMob, descriptionWeb, descriptionTab, descriptionMob, subHeading1, description1, subHeading2, description2, subHeading3, description3 }) => 
{
  const navigate = useNavigate();
  const renderHTML = (text) => ({ __html: text });

  return (
    <div className={alignment=="left"?'three-cards-section left-align':'three-cards-section'}>
      <div className='text-box'>
        <h1 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
        <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
        <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>

        <p className='only-web' dangerouslySetInnerHTML={renderHTML(descriptionWeb)}></p>
        <p className='only-tab' dangerouslySetInnerHTML={renderHTML(descriptionTab)}></p>
        <p className='only-mob' dangerouslySetInnerHTML={renderHTML(descriptionMob)}></p>
      </div>

      <div className='flex-box'>
        <div className='card' style={window.innerWidth>992?{height:`${cardHeight}px`}:{}}>
          <img src={`/images/${pageName}/sec-${secNo}-1.svg`} alt="Card 1"></img>
          <div className='title' dangerouslySetInnerHTML={renderHTML(subHeading1)}></div>
          <div className='description' dangerouslySetInnerHTML={renderHTML(description1)}></div>
        </div>

        <div className='card' style={{height:`${cardHeight}px`}}>
          <img src={`/images/${pageName}/sec-${secNo}-2.svg`} alt="Card 2"></img>
          <div className='title' dangerouslySetInnerHTML={renderHTML(subHeading2)}></div>
          <div className='description' dangerouslySetInnerHTML={renderHTML(description2)}></div>
        </div>

        <div className='card' style={{height:`${cardHeight}px`}}>
          <img src={`/images/${pageName}/sec-${secNo}-3.svg`} alt="Card 3"></img>
          <div className='title' dangerouslySetInnerHTML={renderHTML(subHeading3)}></div>
          <div className='description' dangerouslySetInnerHTML={renderHTML(description3)}></div>
        </div>
      </div>
    </div>
  );
}

export default ThreeCardsSection;
