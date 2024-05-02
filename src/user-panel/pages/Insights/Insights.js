import React, { useEffect, useState, useContext, useRef } from 'react';
import './Insights.scss';
import Banner from '../../common-component/BannerMainPages/BannerMainPages.js';
import BottomBanner from '../../common-component/BottomBanner/BottomBanner';
import SimpleSection from '../../common-component/SimpleSection/SimpleSection';
import { useNavigate } from 'react-router-dom';
import API from "../../../API.js";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner.js";
import ErrorModal from "../../../ErrorModal.js";
import PositiveModal from "../../../PositiveModal.js";
import { UserContext } from '../../../authentication/pages/UserContext.js';
import Slider from 'react-slick';
import $ from 'jquery';

const View = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useContext(UserContext);
  const [sec2Data, setSec2Data] = useState(null);
  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [slideSelectedIndex, selectSlide] = useState(2);

  const slideRefs = useRef([]);
  const sliderMenuRef = useRef(null);

  const scrollToElement = (index) => {
    const current = slideRefs.current[index];
    if (current) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])
  
  useEffect(() => {
    scrollToElement(slideSelectedIndex);
  }, [slideSelectedIndex]);

  useEffect(() => {
    API.get(`blogs/?page_name=insights&section_number=2`)
      .then((response) => {
        console.log("response.data", response.data)
        setSec2Data(response.data)
      })
      .catch((error) => {
        setIsErrorModalOpen(true);
        setMessage(error.message || "An error occurred.");
      });
  }, []);

  const sec5SlideSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='insights-page'>
      <Banner
        pageName={"insights"}
        titleWeb={"Discover, Collaborate<br/> and Thrive"}
        titleTab={"Discover, Collaborate<br/> and Thrive"}
        titleMob={"Discover,<br/> Collaborate and<br/> Thrive"}
        subTitleWeb={"Explore our blog, partnership opportunities, and<br/> rewarding career paths."}
        subTitleTab={"Explore our blog, partnership opportunities, and<br/> rewarding career paths."}
        subTitleMob={"Explore our blog, partnership<br/> opportunities, and rewarding<br/> career paths."}
      />


      <div className='sec-2'>
        <div className='slider' >
          <div className='slider-list'>
            {sec2Data && sec2Data.map((item, index) => (
              <div className='big-card' key={index} ref={el => slideRefs.current[index] = el}>
                <img src={item.image_url} alt={item.title}></img>
                <div className='text-box'>
                  <div className='date'>{item.created_at}</div>
                  <div className='title'>{item.title}</div>
                  <div className='description'>{item.department}</div>
                  <div className='auther'>{item.extra}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='menu-scroller' ref={sliderMenuRef}>
          <div className='menu-track'>
            {sec2Data && sec2Data.map((item, index) => (
              <div className={slideSelectedIndex==index?'small-card active':'small-card'} key={index} onClick={() => selectSlide(index)}>
                <div className='date'>{item.created_at}</div>
                <div className='title'>{item.title}</div>
                <div className='description'>{item.department}</div>
                <div className='auther'>{item.extra}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='arrow-box'>
          <img src='images/insights/sec-2-prev-arrow.svg'  onClick={() => selectSlide(slideSelectedIndex-1)}></img>
          <img src='images/insights/sec-2-next-arrow.svg'  onClick={() => selectSlide(slideSelectedIndex+1)}></img>
        </div>
        <button className='button-black-box'>DISCOVER MORE</button>
      </div>


      <SimpleSection
        pageName={"insights"}
        secNo={"3"}
        type={2}
        headdingPresent={true}
        buttonPresent={true}
        imagePosition={"right"}
        headingWeb={"Be a Partner"}
        headingTab={"Be a Partner"}
        headingMob={"Be a Partner"}
        description={"ZOG Global prioritises partnerships for growth and impact, uniting with public, private, and corporate allies to share knowledge, experience, commitment, and investments, improving the world collaboratively."}
        buttonText={"Get Started"}
      />
      <BottomBanner
        pageName={"insights"}
        titleWeb={"Start Your<br/> Career Journey"}
        titleTab={"Start<br/> Your Career<br/> Journey"}
        titleMob={"Start Your Career<br/> Journey"}
        subTitlePresent={true}
        subTitleWeb={"Begin your journey towards your dream career by taking<br/> the first step from here."}
        subTitleTab={"Begin your journey towards<br/> your dream career by taking<br/> the first step from here."}
        subTitleMob={"Begin your journey towards your dream<br/> career by taking the first step from<br/> here."}
        buttonText={"CHECK OUR LATEST VACANCIES"}
        buttonTheme={"light"}
        buttonLink={"/career"}
        textTheme={"light"}
      />
      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}
    </div>
  );
}

export default View;
