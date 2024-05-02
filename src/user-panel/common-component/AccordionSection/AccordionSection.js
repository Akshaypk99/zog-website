import React, { useEffect, useState } from "react";
import './AccordionSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';

const AccordionSection =({headingWeb, headingTab, headingMob, description, accordionData})=>{
  const navigate = useNavigate();
const [selectedAccordion, selectAccordion]=useState(0)   


useEffect(()=>{

  $(".segment").removeClass("active")
  if(selectedAccordion!==null){
  $(".segment").eq(selectedAccordion).addClass("active")
  }
},[selectedAccordion])

const renderHTML = (text) => ({ __html: text });

    return(
      <div className='accordion-section'>
      <div className='inner'>
        <h1 className="only-web" dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
        <h1 className="only-tab" dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
        <h1 className="only-mob" dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>
        <p className="only-web" dangerouslySetInnerHTML={renderHTML(description)}></p>

        {accordionData.map((item, index) => {
          return (
            <div className={item.title.length>19?'segment double-lined':"segment"} key={index} onClick={selectedAccordion==index?()=>selectAccordion(null):()=>selectAccordion(index)}>
              <img className="arrow" src="/images/common-components/accordion/arrow-up.svg"></img>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item.link&&<button className='button-black-box' onClick={()=>navigate(item.link)}>LEARN MORE</button>}

            </div>
          )
        })}
      </div>
    </div>
    )
}

export default AccordionSection