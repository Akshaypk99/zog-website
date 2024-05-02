import React from "react";
import './BlogBanner.scss'
const BannerSubPages = ({ pageName, department, titleWeb, titleTab, titleMob, subTitleWeb, subTitleTab, subTitleMob, subTitle2Web, subTitle2Tab, subTitle2Mob, iconTopWeb, iconLeftWeb, iconTopTab, iconLeftTab, iconTopMob, iconLeftMob, iconRotationWeb, iconRotationTab, iconRotationMob,bgImage }) => {
  const renderHTML = (text) => ({ __html: text });

  return (
    <div className='banner-blog-pages' style={{backgroundImage:`url("${bgImage}")`}}>
      

      <div className='inner'>
        <div className="department">{department}</div>
        <div className='title only-web' dangerouslySetInnerHTML={renderHTML(titleWeb)}></div>
        <div className='title only-tab' dangerouslySetInnerHTML={renderHTML(titleTab)}></div>
        <div className='title only-mob' dangerouslySetInnerHTML={renderHTML(titleMob)}></div>

        <div className='sub-title only-web' dangerouslySetInnerHTML={renderHTML(subTitleWeb)}></div>
        <div className='sub-title only-tab' dangerouslySetInnerHTML={renderHTML(subTitleTab)}></div>
        <div className='sub-title only-mob' dangerouslySetInnerHTML={renderHTML(subTitleMob)}></div>
        <div className='sub-title2 only-web' dangerouslySetInnerHTML={renderHTML(subTitle2Web)}></div>
        <div className='sub-title2 only-tab' dangerouslySetInnerHTML={renderHTML(subTitle2Tab)}></div>
        <div className='sub-title2 only-mob' dangerouslySetInnerHTML={renderHTML(subTitle2Mob)}></div>

      </div>
      {/* <img src="/images/sub-pages-banner-icon.svg" className="main-icon" style={window.innerWidth > 992 ? { top: iconTopWeb, left: iconLeftWeb, transform: `rotate(${iconRotationWeb}deg)` } : window.innerWidth > 768 ? { top: iconTopTab, left: iconLeftTab, transform: `rotate(${iconRotationTab}deg)` } : { top: iconTopMob, left: iconLeftMob, transform: `rotate(${iconRotationMob}deg)` }}></img> */}
    </div>
  )
}

export default BannerSubPages