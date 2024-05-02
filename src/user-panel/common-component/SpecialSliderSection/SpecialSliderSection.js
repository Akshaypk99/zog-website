import React, { useEffect, useState } from "react";
import './SpecialSliderSection.scss'
import { useNavigate, Link } from 'react-router-dom';
import $ from 'jquery';

const SpecialSliderSection = ({ pageName, secNo, headingBoxPresent, headingWeb, headingTab, headingMob, descriptionWeb, descriptionTab, descriptionMob, boxAlignment, subTitle, data }) => {
  const navigate = useNavigate();

  const [sec4CurrentIndex, setSec4CurrentIndex] = useState(0);
  const [sec4ImgSide, setSec4ImgSide] = useState(false);


  const changeSec4CurrentIndex = (direction) => {
    if (direction === "minus") {
      if (sec4CurrentIndex !== 0) {
        setSec4CurrentIndex(sec4CurrentIndex - 1)
      }
      else {
        setSec4CurrentIndex(data.length - 1)
      }
    }
    else {
      if (sec4CurrentIndex !== (data.length - 1)) {
        setSec4CurrentIndex(sec4CurrentIndex + 1)
      }
      else {
        setSec4CurrentIndex(0)
      }
    }
  }
  useEffect(() => {

    let title = $("#sec4-title")
    let description = $("#sec4-description")

    console.log(sec4CurrentIndex)
    let odd = $("#sec4-img-box-odd");
    let even = $("#sec4-img-box-even")


    if (sec4ImgSide === true) {

      odd.css("z-index", 0)
      even.css("z-index", 1)
      even.css("background-image", `url("/images/${pageName}/sec-${secNo}-${sec4CurrentIndex + 1}${window.innerWidth < 768 ? "-mob" : window.innerWidth < 992 ? "-tab" : "-web"}.png")`)

      even.css("left", "0px");
      setTimeout(() => {
        odd.css("left", '554px');

      }, 2000);



    }

    else {

      odd.css("z-index", 1)
      even.css("z-index", 0)

      odd.css("background-image", `url("/images/${pageName}/sec-${secNo}-${sec4CurrentIndex + 1}${window.innerWidth < 768 ? "-mob" : window.innerWidth < 992 ? "-tab" : "-web"}.png")`)
      odd.css("left", "0px");

      setTimeout(() => {
        even.css("left", '554px');

      }, 2000);





    }




    title.html(data[sec4CurrentIndex].title)
    description.html(data[sec4CurrentIndex].description)

    title.css("opacity", "0");
    description.css("opacity", "0")
    title.css("line-height", "0px");
    description.css("line-height", "0px")

    setTimeout(() => {
      title.css("opacity", "1");
      title.css("line-height", "65px");
      description.css("opacity", "1");
      description.css("line-height", "28px")

    }, 800);


    setSec4ImgSide(!sec4ImgSide)


  }, [sec4CurrentIndex])

  const renderHTML = (text) => ({ __html: text });


  return (
    <div className={boxAlignment === "center" ? 'special-slider-section center' : 'special-slider-section left'}>

      {headingBoxPresent &&
        <div className='headding-box'>
          <h1 className='only-web' dangerouslySetInnerHTML={renderHTML(headingWeb)}></h1>
          <h1 className='only-tab' dangerouslySetInnerHTML={renderHTML(headingTab)}></h1>
          <h1 className='only-mob' dangerouslySetInnerHTML={renderHTML(headingMob)}></h1>

          <p className='only-web' dangerouslySetInnerHTML={renderHTML(descriptionWeb)}></p>
          <p className='only-tab' dangerouslySetInnerHTML={renderHTML(descriptionTab)}></p>
          <p className='only-mob' dangerouslySetInnerHTML={renderHTML(descriptionMob)}></p>

        </div>
      }

      <div className='main-box'>
        <div className='lhs'>
          <div className='sub-title'>{subTitle}</div>
          <div className="const-height">
            <div className='title' id='sec4-title'></div>
            <div className='description' id='sec4-description'></div>
          </div>
          <div className='d-flex mb-0 mt-5'>
            <img src='/images/home/sec-4-left-arrow.svg' className='me-5' onClick={() => changeSec4CurrentIndex("minus")}></img>
            <img src='/images/home/sec-4-right-arrow.svg' onClick={() => changeSec4CurrentIndex("plus")}></img>
          </div>
        </div>
        <div className='rhs'>
          <div className='sub-title'><div className="d-block d-lg-none special">OUR EXPERT SOLUTIONS</div> 0{sec4CurrentIndex + 1}/0{data.length}</div>
          <div className='inner' id="sec4-img-box-odd"></div>
          <div className='inner' id="sec4-img-box-even"></div>

        </div>
      </div>
    </div>
  )
}

export default SpecialSliderSection