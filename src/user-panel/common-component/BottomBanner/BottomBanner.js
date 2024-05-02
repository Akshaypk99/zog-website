import React from "react";
import { useNavigate } from "react-router-dom";
import './BottomBanner.scss'
const BottomBanner =({pageName, titleWeb, titleTab, titleMob,subTitlePresent,subTitleWeb, subTitleTab, subTitleMob, buttonText,buttonLink, buttonTheme,textTheme })=>{
   const navigate=useNavigate()
  const renderHTML = (text) => ({ __html: text });

    return(
        <div className='bottom-banner' style={{backgroundImage:`url("/images/${pageName}/banner-bottom-${window.innerWidth<768?"mob":window.innerWidth<992?"tab":"web"}.png")`}}>

        <div className='inner'>

          <div className='title only-web' style={textTheme==="dark"?{color:"#000"}:{color:"#fff"}} dangerouslySetInnerHTML={renderHTML(titleWeb)}></div>
           <div className='title only-tab' style={textTheme==="dark"?{color:"#000"}:{color:"#fff"}} dangerouslySetInnerHTML={renderHTML(titleTab)}></div>
          <div className='title only-mob' style={textTheme==="dark"?{color:"#000"}:{color:"#fff"}} dangerouslySetInnerHTML={renderHTML(titleMob)}></div>

        {subTitlePresent&&<p className=' only-web' style={textTheme==="dark"?{color:"#000"}:{color:"#fff"}} dangerouslySetInnerHTML={renderHTML(subTitleWeb)}></p>}
          {subTitlePresent&& <p className='only-tab' style={textTheme==="dark"?{color:"#000"}:{color:"#fff"}} dangerouslySetInnerHTML={renderHTML(subTitleTab)}></p>}
          {subTitlePresent&&<p className='only-mob' style={textTheme==="dark"?{color:"#000"}:{color:"#fff"}} dangerouslySetInnerHTML={renderHTML(subTitleMob)}></p>}
            
          <button onClick={()=>navigate(buttonLink)} className={buttonTheme==="dark"?"button-black-box":"button-white-box"} dangerouslySetInnerHTML={renderHTML(buttonText)}></button>
          
        </div>

      </div>
    )
}

export default BottomBanner