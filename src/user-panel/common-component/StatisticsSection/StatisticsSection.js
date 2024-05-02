import React, { useEffect, useState } from "react";
import './StatisticsSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';

const StatisticsSection = ({ data }) => {
  const navigate = useNavigate();




  return (
    <div className='statistics-section'>
      <div className='inner'>

        {data.map((item, index) => {
          return (
            <div className='segment' key={index} >
              <div className="text">{item.text}</div>
              <div className="value"><span className="left-sign">{item.leftSign&&item.leftSign}</span><span className="number">{item.number&&item.number}</span><span className="right-sign">{item.rightSign&&item.rightSign}</span></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StatisticsSection