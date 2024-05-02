import React, { Component, useEffect, useState, useContext } from 'react'
import './Blog.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate, Link } from 'react-router-dom';

import API from "../../../API.js"
import LoadingSpinner from "../../../LoadingSpinner.js";
import ErrorModal from "../../../ErrorModal.js";
import PositiveModal from "../../../PositiveModal.js";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner.js"
import $ from 'jquery';

import { UserContext } from '../../../authentication/pages/UserContext.js';

import Slider from 'react-slick'


const Blog = () => {
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


  useEffect(() => {

  }, [])


  useEffect(() => {

  }, [])

  const sec5SlideSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };



  const [blogData, setBlog] = useState([]);
  const [latestBlog, setLatestBlog] = useState({});

  useEffect(() => {
    setIsLoading(true) ;
    API.get(`/blogs/`)
      .then((response) => {
        setBlog(response.data);
        setLatestBlog(response.data[0])
        setIsLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        setIsErrorModalOpen(true);
        setMessage(error.message || "An error occurred.");
      });
  }, []);
  
  const [showAll, setShowAll] = useState(false);
  const [blogsToShow, setBlogsToShow] = useState(10);

  const handleShowMore = () => {
    setBlogsToShow(blogData.length);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setBlogsToShow(10);
    setShowAll(false);
  };

  return (
    <div className='blog-page'>

      <Banner
        pageName={"blog"}
        blueTitle={"BLOG"}
        titleWeb={"Explore Latest<br/> Tech Blogs"}
        titleTab={"Explore Latest Tech<br/> Blogs"}
        titleMob={"Explore Latest<br/> Tech Blogs"}
        subTitleWeb={""}
        subTitleTab={""}
        subTitleMob={""}
        iconTopWeb={'50%'}
        iconLeftWeb={'50%'}
        iconTopTab={'65%'}
        iconLeftTab={'55%'}
        iconTopMob={'70%'}
        iconLeftMob={'45%'}
        iconRotationWeb={-10}
        iconRotationTab={48}
        iconRotationMob={43}>
      </Banner>

      { latestBlog && 
        <div className='sec-2'>
          <div className='latest-blog' onClick={() => navigate(`/blog-details/${latestBlog.id}`)}>
            <div className='blog-image'>
              <img src={latestBlog.image_url} alt=''  />
            </div>
            <div className='blog-content web'>
              <h2 className='blog-title'>{latestBlog.title}</h2>
              <div>
                <p className='blog-author'>{latestBlog.extra}</p>
                <p className='blog-date'>{latestBlog.created_at}</p>
                <p className='blog-reln'>{latestBlog.department}</p>
              </div>
            </div>
            {/* mobile view */}
            <div className='blog-content mobile'>
              <p className='blog-date'>{latestBlog.created_at}</p>
              <h2 className='blog-title'>{latestBlog.title}</h2>
              <div>
                <p className='blog-reln'>{latestBlog.department}</p>
                <p className='blog-author'>{latestBlog.extra}</p>
              </div>
            </div>
          </div>
        </div>
      }


      <div className='sec-3'>
        {blogData.slice(1,blogsToShow).map((item, index) => (
              <div className='blog-card' onClick={() => navigate(`/blog-details/${item.id}`)}>
                <div className='blog-image'>
                  <img src={item.image_url} alt=''  />
                </div>
                <div className='blog-content web'>
                  <h2 className='blog-title'>{item.title}</h2>
                  <div>
                    <p className='blog-author'>{item.extra}</p>
                    <p className='blog-date'> {item.created_at}</p>
                    <p className='blog-reln'>{item.department}</p>
                  </div>
                </div>
                {/* mobile view */}
                <div className='blog-content mobile'>
                  <p className='blog-date'>{item.created_at}</p>
                  <h2 className='blog-title'>{item.title}</h2>
                  <div>
                    <p className='blog-reln'>{item.department}</p>
                    <p className='blog-author'>{item.extra}</p>
                  </div>
                </div>
              </div>
              
        ))}
      </div>
      <div className='show'>
          {!showAll && blogData.length > 10 && (
              <button className='button-black-box' onClick={handleShowMore}>SHOW MORE</button>
          )}
          {showAll && (
            <button className='button-black-box' onClick={handleShowLess}>SHOW LESS</button>
          )}
        </div>


      <div className='sec-4'>

      </div>





      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default Blog