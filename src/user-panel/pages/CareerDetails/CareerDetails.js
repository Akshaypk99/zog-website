import React, { Component, useEffect, useState, useContext } from 'react'
import './CareerDetails.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'

import { useNavigate, useLocation, useParams } from 'react-router-dom';

import API from "../../../API.js"
import LoadingSpinner from "../../../LoadingSpinner.js";
import ErrorModal from "../../../ErrorModal.js";
import PositiveModal from "../../../PositiveModal.js";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner.js"
import $ from 'jquery';

import { UserContext } from '../../../authentication/pages/UserContext.js';



const CareerDetails = (props) => {
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
  const [item, setItem] = useState(null);
  const formatSkills = (skillsArray) => {
    return skillsArray.map(skill => skill.skill_required).join(', ');
  };

  useEffect(() => {
    setIsLoading(true) ;
    API.get(`/recruitment/jobs/${id}`)
      .then((response) => {
        // format skills to comma seperated
        const formattedSkills = formatSkills(response.data.skills_required);
        const updatedResponse = { ...response.data, skills_required: formattedSkills };
        setItem(updatedResponse);
        setIsLoading(false);
        console.log(updatedResponse)
      })
      .catch((error) => {
        setIsErrorModalOpen(true);
        setMessage(error.message || "An error occurred.");
      });
  
  }, [id]);


  useEffect(() => {

  }, [])

  
  const handleApplyJobClick = () => {
    localStorage.setItem('LoginRedirectURL', `/apply-job/${item.id}`);
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate(`/apply-job/${item.id}`);
    }
  };



  return (
    <div className='career-details-page'>

      { item &&
        <Banner
          pageName={"career-details"}
          blueTitle={""}
          titleWeb={item.title}
          titleTab={item.title}
          titleMob={item.title}
          subTitleWeb={""}
          subTitleTab={""}
          subTitleMob={""}
          iconTopWeb={'75%'}
          iconLeftWeb={'50%'}
          iconTopTab={'82%'}
          iconLeftTab={'20%'}
          iconTopMob={'70%'}
          iconLeftMob={'30%'}
          iconRotationWeb={245}
          iconRotationTab={256}
          iconRotationMob={236}>
        </Banner>
      }

      { item &&
      <div className='sec-2'>
        <div className='top-bar'>
          <img className="home" src="/images/career-details/sec-2-1.svg" onClick={() => navigate("/")} ></img>
          <span className='top-text career' onClick={() => navigate("/career")} >&nbsp;/ Careers&nbsp;</span>
          <span className='top-text' > / {item.title}</span>
        </div>
        <div className='row details' >
          <div className='col-4 lhs'>
            <div className='btns'>
              <button className='button-black-box' onClick={handleApplyJobClick}>APPLY JOB</button>
              <img className="arrow" src="/images/career-details/sec-2-2.svg"></img>
            </div>
            <div className=' detail'>
              <div className="data-key p-0">Job ID</div>
              <div className="data-value p-0 job-id">{item && item.job_id}</div>
            </div>
            <div className="detail">
              <div className="data-key p-0">Job Type</div>
              <div className="data-value p-0">{item.type}</div>
            </div>
            <div className="detail">
              <div className="data-key p-0">Salary Range</div>
              <div className="data-value salary p-0">
                {item.salary_range_from} - {item.salary_range_to} 
                {item.is_salary_negotiable && 
                  <span className="salary-btn">Negotiable</span>
                }
              </div>
            </div>
            <div className="detail">
              <div className="data-key p-0">Working Hours</div>
              <div className="data-value p-0">{item.working_hours_from} - {item.working_hours_to} BST</div>
            </div>
            <div className="detail">
              <div className="data-key p-0">Location</div>
              <div className="data-value p-0">{item.location}</div>
            </div>
                
            
          </div>

          <div className='col-8 rhs'>

            <div className='detail job-role'>
              <h3>Your Role</h3>
              {item.job_roles.map((item, index) => (
                <p key={index} className='role'>{item.job_role_required}</p>
              ))}
              
            </div>

            <div className='detail skill'>  
              <h3>Required Skillset</h3>
              <div className='skillset'>
                <p className='req-skill'>Required Skills</p>
                <p>{item.skills_required}</p>
              </div>
              <p className='skill-descr'>{item.skill_description} </p>
            </div>
            
            <div className='detail about'>  
              <h3>About Us</h3>
              <p>{item.about_zog}</p>
            </div>
            <div className='detail policy'>  
              <h3>Disclaimer / Policy Statements</h3>
              <p>{item.disclaimer}</p>
            </div>
          </div>
        </div>

      </div>
      }

      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default CareerDetails