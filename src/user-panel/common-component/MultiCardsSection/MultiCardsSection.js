import React from "react";
import './MultiCardsSection.scss'
import { useNavigate } from 'react-router-dom';

const MultiCardsSection = ({ pageName, secNo, cardHeight, alignment, imagePresent, numberPresent,cardShaded, headingWeb, headingTab, headingMob, descriptionWeb, descriptionTab, descriptionMob, data }) => {
  const navigate = useNavigate();
  const renderHTML = (text) => ({ __html: text });

  return (
    <div className={alignment == "left" ? 'multi-cards-section left-align' : 'multi-cards-section'}>
      <div className='text-box'>
        <h1 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
        <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
        <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>

        <p className='only-web' dangerouslySetInnerHTML={renderHTML(descriptionWeb)}></p>
        <p className='only-tab' dangerouslySetInnerHTML={renderHTML(descriptionTab)}></p>
        <p className='only-mob' dangerouslySetInnerHTML={renderHTML(descriptionMob)}></p>
      </div>

      <div className='flex-box'>


        {data && data.map((item, index) => {
          return (
            <div className={cardShaded==true?'card shaded':"card"} style={window.innerWidth > 992 ? { height: `${cardHeight}px` } : {}}>
              {numberPresent&&<div className="number">{index+1}</div>}
              {imagePresent && <img src={`/images/${pageName}/sec-${secNo}-${index + 1}.svg`} alt="card image"></img>}
              <div className='title' dangerouslySetInnerHTML={renderHTML(item.title)}></div>
              <div className='description' dangerouslySetInnerHTML={renderHTML(item.description)}></div>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default MultiCardsSection;
