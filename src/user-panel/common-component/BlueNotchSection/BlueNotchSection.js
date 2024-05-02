import React, { useEffect, useState } from "react";
import './BlueNotchSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';

const BlueNotchSection =({type, headingWeb, headingTab, headingMob, descriptionPresent, descriptionWeb , descriptionTab, descriptionMob, listData})=>{
  const navigate = useNavigate();



const renderHTML = (text) => ({ __html: text });

    return(
      <div className={type==2?'blue-notch-section type-2':'blue-notch-section'}>
      <div className='inner'>
        <h1 className="only-web" dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
        <h1 className="only-tab" dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
        <h1 className="only-mob" dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>
        
        {descriptionPresent&&
        <>
        <p className="only-web" dangerouslySetInnerHTML={renderHTML(descriptionWeb)}></p>
        <p className="only-tab" dangerouslySetInnerHTML={renderHTML(descriptionTab)}></p>
        <p className="only-mob" dangerouslySetInnerHTML={renderHTML(descriptionMob)}></p>
        </>
        }

        
{listData.map((item, index) => {
            return (
              <div className={index % 2 == 0 ? 'segment even' : 'segment odd'} >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
              </div>

            )
          })}

      </div>
    </div>
    )
}

export default BlueNotchSection