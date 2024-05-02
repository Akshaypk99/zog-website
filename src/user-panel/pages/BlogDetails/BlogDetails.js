import React, { Component, useEffect, useRef, useState, useContext } from 'react'
import './BlogDetails.scss'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate, useParams } from 'react-router-dom';

import API from "../../../API.js"
import LoadingSpinner from "../../../LoadingSpinner.js";
import ErrorModal from "../../../ErrorModal.js";
import PositiveModal from "../../../PositiveModal.js";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner.js"
import $ from 'jquery';
import { Helmet } from 'react-helmet';

import { UserContext } from '../../../authentication/pages/UserContext.js';
// import Head from 'next/head';

import Banner from './BlogBanner.js';
import shareOnSocialMedia from './SocialShare.js';
import BlogBasicSlider from './BlogBasicSlider.js';
import SubTitles from './Pagination.js';
import PaginationFooter from './PaginationFooter.js';

const BlogDetails = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const sec4Data = [
    { title: "",
     description: "",
     image_url:"/images/why-zog-global/sec-4-1.png"
     },

    { title: "",
     description: "",
    image_url:"/images/why-zog-global/sec-4-2.png" 
  },

    { title: "",
     description: "",
    image_url:"/images/why-zog-global/sec-4-3.png" 
  },
  
  ]


  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])


  const { id } = useParams();
  const [blogItem, setblogItem] = useState({});
  const [BlogSubItems,setBlogSubItems] = useState([])
  useEffect(() => {
    setIsLoading(true) ;
    API.get(`/blogs/${id}`)
      .then((response) => {
        setblogItem(response.data);
        setBlogSubItems(response.data.blog_items)
        setIsLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        setIsErrorModalOpen(true);
        setMessage(error.message || "An error occurred.");
      });
  
  }, [id]);

    
  // FOR SLIDER
  const [currentSlide, setCurrentSlide] = useState(0); 
  const handleTitleClick = (index) => {
    setCurrentSlide(index);
  };
  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === BlogSubItems.length - 1 ? 0 : currentSlide + 1);
  };
  const handlePreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? BlogSubItems.length - 1 : currentSlide - 1);
  };
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    setIsLastSlide(currentSlide === BlogSubItems.length - 1);
  }, [currentSlide, BlogSubItems]);



  const url = window.location.href;
  // const url = 'https://zogglobal.com/post-network-landscape-of-the-future/';
  
  // set Page Title
  useEffect(() => {
    if (blogItem.title) {
      document.title = blogItem.title;
    }
    return () => {
      document.title = "Zog Global";
    };
  }, [blogItem]);

  
  
 
  return (
    <div className='blog-details-page'>

      <Helmet>
        <title>{blogItem.title}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={blogItem.title} />
        <meta property="og:image" content={blogItem.image_url} />
        <meta property="og:site_name" content="Zog Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogItem.title} />
        <meta name="twitter:image" content={blogItem.image_url} />
      </Helmet>

      <Banner
        bgImage= {blogItem.image_url}
        pageName={"blog-details"}
        department={blogItem.department}
        titleWeb={blogItem.title}
        titleTab={blogItem.title}
        titleMob={blogItem.title}
        subTitleWeb={blogItem.extra}
        subTitleTab={blogItem.extra}
        subTitleMob={blogItem.extra}
        subTitle2Web={blogItem.created_at}
        subTitle2Tab={blogItem.created_at}
        subTitle2Mob={blogItem.created_at}
        iconTopWeb={'30%'}
        iconLeftWeb={'30%'}
        iconTopTab={597}
        iconLeftTab={491}
        iconTopMob={370}
        iconLeftMob={150}
        iconRotationWeb={-10}
        iconRotationTab={0}
        iconRotationMob={0}>
      </Banner>
      
      {blogItem && 
      <div className='sec-2'>
        <div className='left-side'>
          <div className='inner'>
            <div className='social'>
              <p>Share this post</p>
              <div className='social-icons'>
                <span  onClick={() => shareOnSocialMedia('facebook', url, blogItem.title)} >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0745 22.4127C11.0745 20.7016 11.0558 18.9905 11.0839 17.2794C11.0933 16.6705 10.8794 16.4114 10.2705 16.4816C9.91143 16.5222 9.54766 16.5472 9.18702 16.5628C8.40485 16.5956 7.96303 16.2381 8.00674 15.4715C8.08793 14.0461 8.10666 12.627 8.00362 11.2016C7.95991 10.5896 8.3143 10.2274 8.93567 10.1868C9.32285 10.1618 9.71627 10.1509 10.1003 10.1915C10.8341 10.268 11.1089 9.99635 11.0917 9.23291C11.0605 7.91681 10.9512 6.58978 11.2634 5.28304C11.9379 2.45256 13.4835 1.13958 16.4014 1.02873C17.8767 0.972529 19.3568 1.01156 20.8337 1.0381C21.6752 1.05371 21.9702 1.34098 21.9859 2.16842C22.0108 3.54229 21.9874 4.91616 21.9999 6.29003C22.0062 6.95979 21.6908 7.31418 21.0288 7.33916C20.1483 7.37351 19.2678 7.41878 18.3873 7.39849C17.7846 7.386 17.5114 7.55773 17.4474 8.21188C17.2538 10.1962 17.2273 10.1915 19.171 10.1743C19.7674 10.1696 20.3638 10.1743 20.9601 10.1774C21.6158 10.1837 21.9859 10.4991 21.989 11.1719C21.9952 12.6239 21.9937 14.0758 21.9921 15.5277C21.9921 16.2506 21.5675 16.541 20.9055 16.5722C20.0749 16.6112 19.249 16.5472 18.4216 16.4941C17.3912 16.4286 17.3022 16.4941 17.3834 17.4855C17.6098 20.2535 17.2163 23.0247 17.4583 25.7943C17.5161 26.4594 17.3834 27.1369 17.3803 27.8098C17.3787 28.3968 17.0868 28.6966 16.5388 28.7028C15.0353 28.7231 13.5319 28.7294 12.03 28.7028C11.3134 28.6888 11.0667 28.2126 11.0698 27.546C11.0777 25.8349 11.073 24.1238 11.073 22.4127H11.0745ZM12.8481 21.0497C12.8481 21.0497 12.8418 21.0497 12.8403 21.0497C12.8403 22.3456 12.8403 23.6429 12.8403 24.9387C12.8403 27.0058 12.8387 26.9808 14.9011 26.9808C15.5693 26.9808 15.7519 26.7294 15.7254 26.1096C15.6645 24.6858 15.588 23.2589 15.6333 21.8382C15.6707 20.6735 15.7629 19.5073 15.6973 18.3426C15.6536 17.5667 15.5833 16.7908 15.6239 16.0133C15.6723 15.0765 16.0579 14.7097 16.9868 14.6862C17.4271 14.6753 17.8689 14.6862 18.3092 14.6831C20.5402 14.6628 20.1967 15.0765 20.2482 12.6863C20.2607 12.0743 19.9844 11.9276 19.4458 11.9604C18.6449 12.0119 17.8408 12.0696 17.0399 12.0493C16.0267 12.0259 15.6239 11.6091 15.6239 10.599C15.6239 9.58887 15.6817 8.58033 15.7316 7.57178C15.7972 6.23382 16.4201 5.59841 17.7706 5.5063C18.3389 5.46727 18.9103 5.49381 19.4817 5.48912C19.719 5.48756 20.0078 5.48912 20.0546 5.20654C20.1686 4.54147 20.1811 3.8639 20.05 3.19882C19.9953 2.92249 19.7127 2.90531 19.4754 2.90531C18.3092 2.90687 17.1367 2.84599 15.9783 2.93966C14.2766 3.07705 13.485 3.82799 13.0573 5.47039C12.6841 6.90358 12.8746 8.3602 12.8574 9.80744C12.8309 11.9963 12.8512 12.0119 10.6905 12.0618C10.1097 12.0759 9.83961 12.2554 9.84273 12.8721C9.85366 15.0375 9.74438 14.6566 11.5288 14.6894C12.5249 14.7081 12.8403 15.0078 12.8465 15.993C12.859 17.6775 12.8496 19.3636 12.8496 21.0497H12.8481Z" fill="black"/>
                  </svg>
                </span>
                <span onClick={() => shareOnSocialMedia('twitter', url, blogItem.title)} >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_3139_10274"  maskUnits="userSpaceOnUse" x="2" y="2" width="26" height="26">
                  <path d="M27.4279 2H2V28H27.4279V2Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_3139_10274)">
                  <path d="M17.133 13.0036L26.5991 2H24.356L16.1366 11.5542L9.57174 2H2L11.9273 16.4477L2 27.9866H4.24329L12.9232 17.897L19.8561 27.9866H27.4279L17.1325 13.0036H17.133ZM14.0605 16.575L13.0547 15.1363L5.05158 3.68872H8.49714L14.9558 12.9273L15.9616 14.366L24.357 26.3747H20.9115L14.0605 16.5756V16.575Z" fill="black"/>
                  </g>
                  </svg>
                </span>
                <span onClick={() => shareOnSocialMedia('linkedin', url, blogItem.title)}>
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8482 20.2804C20.8482 18.6246 20.8482 16.9592 20.8482 15.3034C20.8482 15.0259 20.794 14.7674 20.6423 14.5282C20.2956 13.973 19.6996 13.8869 19.0712 13.8773C18.8545 13.8773 18.627 13.9061 18.4102 13.9539C17.8143 14.0783 17.5218 14.3559 17.4351 14.8919C17.4134 15.0354 17.4026 15.1886 17.4026 15.3417C17.4026 18.5767 17.4026 21.8213 17.4026 25.0563C17.4026 25.7263 17.0884 26.0038 16.3516 26.0038C14.6829 26.0038 13.0035 26.0038 11.3349 26.0038C11.0965 26.0038 10.8689 25.9656 10.6956 25.8124C10.5547 25.6976 10.4789 25.5444 10.5114 25.3817C10.5764 24.9989 10.5439 24.616 10.5439 24.2428C10.5439 19.1031 10.5439 13.973 10.5439 8.8334C10.5439 8.68983 10.5439 8.54627 10.5222 8.4027C10.4572 7.97201 10.7281 7.6753 11.2265 7.65616C11.519 7.64659 11.8224 7.65616 12.115 7.65616C13.5669 7.65616 15.008 7.65616 16.4599 7.65616C16.8283 7.65616 17.11 7.76144 17.2942 8.039C17.3592 8.14429 17.4351 8.16343 17.5543 8.106C18.9087 7.5126 20.3281 7.50303 21.7692 7.7423C23.2536 7.99115 24.5972 8.51756 25.7023 9.45552C26.58 10.2021 27.1651 11.1113 27.501 12.145C27.7935 13.0351 27.8369 13.9348 27.826 14.8536C27.8044 16.3658 27.826 17.8685 27.826 19.3807C27.826 21.2183 27.826 23.0464 27.826 24.884C27.826 24.9989 27.826 25.1233 27.8477 25.2382C27.9236 25.6976 27.6527 25.9943 27.1218 25.9943C26.2874 25.9943 25.4531 25.9943 24.6188 25.9943C23.6437 25.9943 22.6577 25.9943 21.6825 25.9943C21.0865 25.9943 20.859 25.7646 20.859 25.2477C20.859 23.5919 20.859 21.9266 20.859 20.2708L20.8482 20.2804ZM12.2667 16.8731C12.2667 19.2945 12.2667 21.716 12.2667 24.1375C12.2667 24.4629 12.2667 24.4629 12.6459 24.4629C13.5344 24.4629 14.4229 24.4629 15.3114 24.4629C15.7014 24.4629 15.7014 24.4629 15.7014 24.1184C15.7014 21.2853 15.7014 18.4523 15.7014 15.6193C15.7014 15.514 15.7014 15.4087 15.6689 15.313C15.3114 14.375 15.9723 13.1787 16.9908 12.6618C17.771 12.2694 18.6053 12.1737 19.4829 12.2215C21.3141 12.3173 22.5493 13.4179 22.5493 15.045C22.5601 18.079 22.5493 21.113 22.5493 24.1375C22.5493 24.4533 22.5601 24.4629 22.9069 24.4629C23.8279 24.4629 24.7597 24.4629 25.6807 24.4629C25.9479 24.4629 26.0816 24.3449 26.0816 24.1088C26.0816 21.0652 26.0816 18.0312 26.0816 14.9876C26.0816 14.4037 26.0382 13.8295 25.9082 13.2648C25.5615 11.7334 24.673 10.5658 23.0477 9.86707C22.1376 9.47466 21.1624 9.31195 20.1547 9.28324C19.3204 9.2641 18.5511 9.43638 17.8685 9.8575C17.5326 10.0585 17.2292 10.2978 16.8825 10.4796C16.3516 10.7668 15.7123 10.537 15.5172 10.0106C15.4631 9.87664 15.4522 9.73308 15.4631 9.58951C15.4956 9.35024 15.3872 9.27367 15.1163 9.27367C14.3037 9.28324 13.4802 9.27367 12.6676 9.27367C12.3786 9.27367 12.2342 9.39809 12.2342 9.64694C12.2342 12.0493 12.2342 14.4612 12.2342 16.8635L12.2667 16.8731Z" fill="black"/>
                  <path d="M8.76459 16.8438C8.76459 19.5429 8.76459 22.2419 8.76459 24.9409C8.76459 25.0462 8.76459 25.1515 8.76459 25.2472C8.74291 25.6779 8.38535 25.9937 7.89777 25.9937C6.1533 25.9937 4.40883 25.9937 2.66436 25.9937C2.10093 25.9937 1.81921 25.697 1.88422 25.2089C1.89506 25.0941 1.90589 24.9696 1.90589 24.8548C1.90589 19.5141 1.90589 14.1735 1.90589 8.83286C1.90589 8.70844 1.90589 8.57444 1.88422 8.45002C1.81921 7.98104 2.10093 7.6652 2.63185 7.60777C2.71854 7.5982 2.81605 7.60777 2.90273 7.60777C4.48468 7.60777 6.06662 7.60777 7.64856 7.60777C8.42869 7.60777 8.77542 7.91404 8.77542 8.61273C8.77542 11.3596 8.77542 14.1065 8.77542 16.8534L8.76459 16.8438ZM3.63953 16.8438C3.63953 19.2749 3.63953 21.7059 3.63953 24.1274C3.63953 24.4432 3.65036 24.4528 3.99709 24.4528C4.89641 24.4528 5.79574 24.4528 6.69506 24.4528C6.9551 24.4528 7.04179 24.3762 7.03095 24.1561C7.03095 19.294 7.03095 14.4223 7.03095 9.56026C7.03095 9.3497 6.9551 9.26356 6.70589 9.27313C5.81741 9.2827 4.92892 9.27313 4.04043 9.27313C3.77316 9.27313 3.63953 9.39117 3.63953 9.62726C3.63953 12.0296 3.63953 14.4415 3.63953 16.8438Z" fill="black"/>
                  <path d="M1.84285 3.11059C1.77784 1.56965 3.25143 0 5.37513 0C7.3363 0 8.86407 1.40694 8.88574 3.12973C8.90741 4.69938 7.46632 6.24989 5.35346 6.24032C3.13224 6.24032 1.767 4.58453 1.84285 3.11059ZM6.97874 3.12016C6.97874 2.30662 6.24195 1.65579 5.34262 1.66536C4.4433 1.67493 3.71734 2.31619 3.70651 3.11059C3.70651 3.91456 4.43246 4.54624 5.36429 4.54624C6.29612 4.54624 6.97874 3.94327 6.97874 3.12016Z" fill="black"/>
                  </svg>
                </span>

               
              </div>
            </div>
            <SubTitles blogData={BlogSubItems} currentSlide={currentSlide} handleTitleClick={handleTitleClick}/>
          </div>
        </div>
        <div className='right-side'  >
          
            <BlogBasicSlider TitleDescription={blogItem.title_description} blogData={BlogSubItems} currentSlide={currentSlide}  />
        </div>

      </div>
      }
      {/* tab and mobile pagination */}
      {blogItem &&
        < PaginationFooter 
          blogData={BlogSubItems} 
          currentSlide={currentSlide}
          handleNextSlide={handleNextSlide}
          handlePreviousSlide={handlePreviousSlide}
          isLastSlide={isLastSlide}
        />
      }

      <div className='sec-3'>

      </div>




      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default BlogDetails