import React, { Component, useEffect, useState, useContext } from 'react'
import './Career.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'

import { useNavigate, Link } from 'react-router-dom';

import API from "../../../API.js"
import LoadingSpinner from "../../../LoadingSpinner.js";
import ErrorModal from "../../../ErrorModal.js";
import PositiveModal from "../../../PositiveModal.js";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner.js"
import $ from 'jquery';

import { UserContext } from '../../../authentication/pages/UserContext.js';

import Accordion from './CareerAccordion.js';
import { UK_COUNTRIES } from '../../../Constants.js';


const Career = () => {
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
  const sec5SlideSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])


  // FILTER DATA
  const [sec2Data, setSec2Data] = useState(null);
  const [filters, setFilters] = useState({
    search_key: '',
    department: '',
    job_type: '',
    location: ''
  });
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    const params = new URLSearchParams(filters);
    API.get(`recruitment/jobs/?page=1&page_size=100&${params.toString()}`)
      .then((response) => {
        setSec2Data(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setIsErrorModalOpen(true);
        setMessage(error.message || "An error occurred.");
      });
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    fetchJobs();
  };



  return (
    <div className='career-page'>

      <Banner
        pageName={"career"}
        blueTitle={"careers"}
        titleWeb={"Innovate.<br/> Improve.<br/> Inspire."}
        titleTab={"Innovate.<br/> Improve.<br/> Inspire."}
        titleMob={"Innovate.<br/> Improve.<br/> Inspire."}
        subTitleWeb={""}
        subTitleTab={""}
        subTitleMob={""}
        iconTopWeb={'58%'}
        iconLeftWeb={'55%'}
        iconTopTab={'73%'}
        iconLeftTab={'29%'}
        iconTopMob={'65%'}
        iconLeftMob={'24%'}
        iconRotationWeb={20}
        iconRotationTab={257}
        iconRotationMob={260}>
      </Banner>

      <div className='sec-2'>
        <div className='form-data'>
          <h1>Navigate Towards a<br/>Rewarding Career</h1>
          <p>Team up with ZOG Global to accelerate your career and craft moments of happiness.</p>

          <div className='form-section'>
            <form onSubmit={handleFilterSubmit}>
              <div class="row">
                <div class="col mb-5">
                  <input
                    type="text"
                    id="search_key"
                    name="search_key"
                    className={`form-control form-control-lg keyword`}
                    placeholder='Keyword'
                    value={filters.search_key}
                    onChange={handleFilterChange}
                  />
                </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-5">
                <select name="department" id="department" class="form-select form-control form-control-lg"
                value={filters.department}
                onChange={handleFilterChange}>
                  <option value="">Department</option>
                  <option value="Designing">Designing</option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  
                </select>
              </div>
              <div class="col-lg-6 mb-5">
                <select name="job_type" id="job_type" class="form-select form-control form-control-lg"
                value={filters.job_type}
                onChange={handleFilterChange}>
                  <option value="">Job Type</option>
                  <option value="full-time">Full Time</option>
                  <option value="internship">Internship</option>
                  <option value="part-time">Part Time</option>
                  <option value="hybrid-office">Hybrid/Office</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-5">
                <select name="location" id="location" class="form-select form-control form-control-lg"
                value={filters.location}
                onChange={handleFilterChange}>
                  <option value="">Location</option>

                  {UK_COUNTRIES.map((country) => (
                      <option key={country.id} value={country.country_name}>
                          {country.country_name}
                      </option>
                  ))}
                </select>
              </div>
              <div class="col-lg-6 mb-5">
                <button className='button-black-box' type='submit'>APPLY FILTERS</button>
              </div>
            </div>

          </form>
          </div>
          
        </div>
        <div className='data-section'>
        <Accordion accordionData={sec2Data} />
        </div>

      </div>


      <BottomBanner
        pageName={"career"}
        titleWeb={"Join Our<br/> Team Today"}
        titleTab={"Join Our<br/> Team Today"}
        titleMob={"Join Our<br/> Team Today"}
                
        subTitlePresent={true}
        subTitleWeb={"Explore opportunities, spark your<br/> career journey."}
        subTitleTab={"Explore opportunities, spark<br/> your career journey."}
        subTitleMob={"Explore opportunities, spark your career<br/> journey."}

        buttonText={"SEND YOUR QUERIES TO JOBS@ZOGGLOBAL.COM"}
        buttonTheme={"light"}
        buttonLink={"/contact-us"}
        textTheme={"light"}
      >
      </BottomBanner>



      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default Career


