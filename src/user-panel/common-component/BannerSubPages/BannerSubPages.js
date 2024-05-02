import React from "react";
import './BannerSubPages.scss'
const BannerSubPages = ({ pageName, blueTitle, titleWeb, titleTab, titleMob, subTitleWeb, subTitleTab, subTitleMob, iconTopWeb, iconLeftWeb, iconTopTab, iconLeftTab, iconTopMob, iconLeftMob, iconRotationWeb, iconRotationTab, iconRotationMob }) => {
  const renderHTML = (text) => ({ __html: text });

  return (
    <div className='banner-sub-pages' >

      <div className='inner'>
        <div className="blue-title">{blueTitle}</div>
        <div className='title only-web' dangerouslySetInnerHTML={renderHTML(titleWeb)}></div>
        <div className='title only-tab' dangerouslySetInnerHTML={renderHTML(titleTab)}></div>
        <div className='title only-mob' dangerouslySetInnerHTML={renderHTML(titleMob)}></div>

        <div className='sub-title only-web' dangerouslySetInnerHTML={renderHTML(subTitleWeb)}></div>
        <div className='sub-title only-tab' dangerouslySetInnerHTML={renderHTML(subTitleTab)}></div>
        <div className='sub-title only-mob' dangerouslySetInnerHTML={renderHTML(subTitleMob)}></div>

      </div>
      <img src="/images/sub-pages-banner-icon.svg" className="main-icon" style={window.innerWidth > 992 ? { top: iconTopWeb, left: iconLeftWeb, transform: `rotate(${iconRotationWeb}deg)` } : window.innerWidth > 768 ? { top: iconTopTab, left: iconLeftTab, transform: `rotate(${iconRotationTab}deg)` } : { top: iconTopMob, left: iconLeftMob, transform: `rotate(${iconRotationMob}deg)` }}></img>
    </div>
  )
}

export default BannerSubPages