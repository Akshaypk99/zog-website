import React, { useEffect, useState } from "react";
import './CareerAccordion.scss'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

const Accordion =({accordionData})=>{
    const navigate = useNavigate();
    const [selectedAccordion, selectAccordion]=useState(null)   


    useEffect(()=>{

      $(".segment").removeClass("active")
      $(".segment").eq(selectedAccordion).addClass("active")

    },[selectedAccordion])
    const toggleSegment = (index) => {
      selectAccordion(selectedAccordion === index ? null : index);
    }

    if (!accordionData || !accordionData.results) {
      return <div></div>; 
    }

    return(
      <div className='career-accordion-section'>
      <div className='inner'>

      {accordionData && accordionData.results.length > 0 ? (
          accordionData.results.map((item, index) => (
            <div className='segment' key={index} onClick={()=>selectAccordion(index)}>
              <img className="arrow" src="/images/career/arrow.svg" onClick={(e) => {
                e.stopPropagation();
                toggleSegment(index);
              }} ></img>
              <h2>{item.title}</h2>
              <div className="segment-data">
                <div className="row">
                  <button className='button-black-box' onClick={() => navigate(`/career-details/${item.id}`)}>VIEW MORE</button>
                </div>
                <div className="row detail">
                  <div className="data-key p-0">Job ID</div>
                  <div className="data-value p-0 job-id">{item.job_id}</div>
                </div>
                <div className="row detail">
                  <div className="data-key p-0">Job Type</div>
                  <div className="data-value p-0">{item.type}</div>
                </div>
                <div className="row detail">
                  <div className="data-key p-0">Salary Range</div>
                  <div className="data-value salary p-0">
                    {item.salary_range_from} - {item.salary_range_to} 
                    {item.is_salary_negotiable && 
                      <span className="salary-btn">Negotiable</span>
                    }
                  
                  </div>
                </div>
                <div className="row detail">
                  <div className="data-key p-0">Working Hours</div>
                  <div className="data-value p-0"> {item.working_hours_from} - {item.working_hours_to} BST</div>
                </div>
                <div className="row detail">
                  <div className="data-key p-0">Location</div>
                  <div className="data-value p-0">{item.location}</div>
                </div>
                
              </div>
           


            </div>
          ))
        ) : (
          <div className="no-data-message">No data available !</div>
        )}
      </div>
    </div>
    )
}

export default Accordion