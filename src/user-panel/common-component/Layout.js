import React, { Component } from 'react'
import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer'
import './Layout.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import API from "../../API"
import { UserContext } from '../../authentication/pages/UserContext';


import Home from '../pages/Home/Home';
import WhyZogGlobal from '../pages/WhyZogGlobal/WhyZogGlobal';
import Industries from '../pages/Industries/Industries';
import DigitalEngineering from '../pages/DigitalEngineering/DigitalEngineering';
import QualityAssurance from '../pages/QualityAssurance/QualityAssurance';
import FutureTechSolutions from '../pages/FutureTechSolutions/FutureTechSolutions';
import Insights from '../pages/Insights/Insights';
import ContactUs from '../pages/ContactUs/ContactUs';

import WhatWeDo from '../pages/WhatWeDo/WhatWeDo';
import TransformYourBusiness from '../pages/TransformYourBusiness/TransformYourBusiness';
import ProtectYourCustomersData from '../pages/ProtectYourCustomersData/ProtectYourCustomersData';
import ManagedITServices from '../pages/ManagedITServices/ManagedITServices';
import EngagementModel from '../pages/EngagementModel/EngagementModel';
import ITOutSourcing from '../pages/ITOutSourcing/ITOutSourcing';

import Healthcare from '../pages/Healthcare/Healthcare';
import Technology from '../pages/Technology/Technology';
import Telecom from '../pages/Telecom/Telecom';
import Education from '../pages/Education/Education';
import Travel from '../pages/Travel/Travel';
import Banking from '../pages/Banking/Banking';
import Insurance from '../pages/Insurance/Insurance';
import Legal from '../pages/Legal/Legal';
import Media from '../pages/Media/Media';
import Pharma from '../pages/Pharma/Pharma';

import Automation from '../pages/Automation/Automation';
import DevOps from '../pages/DevOps/DevOps';
import ANS from '../pages/ANS/ANS';
import DevSecOps from '../pages/DevSecOps/DevSecOps';
import Cloud from '../pages/Cloud/Cloud';
import CyberSecurity from '../pages/CyberSecurity/CyberSecurity';
import SoftwareDevelopment from '../pages/SoftwareDevelopment/SoftwareDevelopment';
import Testing from '../pages/Testing/Testing';
import UnifiedCommunication from '../pages/UnifiedCommunication/UnifiedCommunication';

import AutomationTesting from '../pages/AutomationTesting/AutomationTesting';
import ManualTesting from '../pages/ManualTesting/ManualTesting';
import PenetrationTesting from '../pages/PenetrationTesting/PenetrationTesting';
import PerfomanceTesting from '../pages/PerfomanceTesting/PerfomanceTesting';
import ApplicationSecurityTesting from '../pages/ApplicationSecurityTesting/ApplicationSecurityTesting';
import AccessibilityTesting from '../pages/AccessibilityTesting/AccessibilityTesting';
 
import ArtificialIntelligence from '../pages/ArtificialIntelligence/ArtificialIntelligence';
import RPA from '../pages/RPA/RPA';

import Blog from '../pages/Blog/Blog';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
import BeAPartner from '../pages/BeAPartner/BeAPartner';
import Career from '../pages/Career/Career';
import CareerDetails from '../pages/CareerDetails/CareerDetails';
import CareerApply from '../pages/CareerApply/CareerApply';


import Profile from '../pages/Profile/Profile';
import FAQContact from '../pages/FAQContact/FAQContact';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import NoPage from '../pages/NoPage/NoPage';


import { Navigate, useNavigate } from 'react-router-dom';


const Layout = () => {
  const navigate = useNavigate()

  const [showCookieBar, setShowCookieBar] = useState(true)
  const [userData, setUserData] = useState(null);
  const [notificationData, setNotificationData] = useState(null);

  const [navSelected, setNavSelected] = useState(null)

  const [isNotificatioShown, setNotificationShown] = useState(false)

  const [isNotificationSettingsShow, setNotificationSettingsShow] = useState(false)
  const [isSecurityModalShow, setSecurityModalShow] = useState(false)

  const [navOpen, setnavOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [categorySelected, selectCategory] = useState(null);
  const [subCategorySelected, selectSubCategory] = useState(null);
  const [brandSelected, selectBrand] = useState(null);
  const [tripwiseAvailability, setTripwiseAvailability] = useState(null);
  const [searchKey, setSearchKey] = useState(null);

  const [activePage, setActivePage] = useState("home");




  const navLeft = () => {
    setNavSelected(null)

  }
  useEffect(() => {

  }, [])
  const loadUserData = () => {
    API.get(`/users/${window.localStorage.getItem('userID')}`)
      .then(response => {

        setUserData(response.data)

      })
      .catch(error => {
        console.error(error);
      });


  }

  const loadNotificatiosData = () => {

    API.get(`notifications/${window.localStorage.getItem('userID')}/`)
      .then(response => {
        setNotificationData(response.data)
        console.log("notification data from layout", response.data)
      }
      )

      .catch(error => {
        console.error(error);
      })
  }


  useEffect(() => {
    loadUserData();
    loadNotificatiosData()
  }, [])




  return (

    <>

      <Header userData={userData} isLoggedIn={isLoggedIn} setSearchKey={setSearchKey} selectCategory={selectCategory}></Header>
      
      <div className='app-content'>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home/>} />
          <Route path="why-zog-global" element={<WhyZogGlobal/>} />
          <Route path="industries" element={<Industries/>} />
          <Route path="digital-engineering" element={<DigitalEngineering/>} />
          <Route path="quality-assurance" element={<QualityAssurance/>} />
          <Route path="future-tech-solutions" element={<FutureTechSolutions/>} />
          <Route path="insights" element={<Insights/>} />
          <Route path="contact-us" element={<ContactUs />} />


          <Route path="what-we-do" element={<WhatWeDo/>} />
          <Route path="transform-your-business" element={<TransformYourBusiness/>} />
          <Route path="protect-your-customers-data" element={<ProtectYourCustomersData/>} />
          <Route path="managed-it-services" element={<ManagedITServices/>} />
          <Route path="engagement-model" element={<EngagementModel/>} />
          <Route path="it-outsourcing" element={<ITOutSourcing/>} />

          <Route path="healthcare" element={<Healthcare/>} />
          <Route path="technology" element={<Technology/>} />
          <Route path="telecom" element={<Telecom/>} />
          <Route path="education" element={<Education/>} />
          <Route path="travel" element={<Travel/>} />
          <Route path="banking" element={<Banking/>} />
          <Route path="insurance" element={<Insurance/>} />
          <Route path="legal" element={<Legal/>} />
          <Route path="media" element={<Media/>} />
          <Route path="pharma" element={<Pharma/>} />

          <Route path="automation" element={<Automation/>} />
          <Route path="dev-ops" element={<DevOps/>} />
          <Route path="ans" element={<ANS/>} />
          <Route path="dev-sec-ops" element={<DevSecOps/>} />
          <Route path="cloud" element={<Cloud/>} />
          <Route path="cyber-security" element={<CyberSecurity/>} />
          <Route path="software-development" element={<SoftwareDevelopment/>} />
          <Route path="testing" element={<Testing/>} />
          <Route path="unified-communication" element={<UnifiedCommunication/>} />

          <Route path="automation-testing" element={<AutomationTesting/>} />
          <Route path="manual-testing" element={<ManualTesting/>} />
          <Route path="penetration-testing" element={<PenetrationTesting/>} />
          <Route path="perfomance-testing" element={<PerfomanceTesting/>} />
          <Route path="application-security-testing" element={<ApplicationSecurityTesting/>} />
          <Route path="accessibility-testing" element={<AccessibilityTesting/>} />

          <Route path="artificial-intelligence" element={<ArtificialIntelligence/>} />
          <Route path="rpa" element={<RPA/>} />
          
          <Route path="blog" element={<Blog/>} />
          <Route path="blog-details/:id" element={<BlogDetails/>} />
          <Route path="be-a-partner" element={<BeAPartner/>} />
          <Route path="career" element={<Career/>} />
          <Route path="career-details/:id" element={<CareerDetails/>} />
          
          <Route path="apply-job/:id" element={<CareerApply/>} />

           <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage />} />

        </Routes>

      </div>
      <Footer></Footer>



    </>
  )
}


export default Layout