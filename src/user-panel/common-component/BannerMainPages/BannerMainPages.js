import React from "react";
import './BannerMainPages.scss'
const BannerMainPages =({pageName, titleWeb, titleTab, titleMob, subTitleWeb, subTitleTab, subTitleMob })=>{
    const renderHTML = (text) => ({ __html: text });

    return(
        <div className='banner' style={{backgroundImage:`url("/images/${pageName}/banner-${window.innerWidth<768?"mob":window.innerWidth<992?"tab":"web"}.png")`}}>

        <div className='inner'>

          <div className='title only-web' dangerouslySetInnerHTML={renderHTML(titleWeb)}></div>
           <div className='title only-tab' dangerouslySetInnerHTML={renderHTML(titleTab)}></div>
          <div className='title only-mob' dangerouslySetInnerHTML={renderHTML(titleMob)}></div>
            
          <div className='sub-title only-web' dangerouslySetInnerHTML={renderHTML(subTitleWeb)}></div>
          <div className='sub-title only-tab' dangerouslySetInnerHTML={renderHTML(subTitleTab)}></div>
          <div className='sub-title only-mob' dangerouslySetInnerHTML={renderHTML(subTitleMob)}></div>

        </div>

      </div>
    )
}

export default BannerMainPages