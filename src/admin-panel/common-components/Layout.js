import React, { Component } from 'react'
import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import './Layout.css';
import Header from './Header';

import { UserContext } from '../../authentication/pages/UserContext';
import { useNavigate } from 'react-router-dom';

import API from '../../API';
import { Navigate } from 'react-router-dom';

import Profile from '../pages/Profile/Profile'
import Overview from '../pages/Overview/Overview';
import CustomersList from '../pages/CustomersList/CustomersList';
import CustomerDetails from '../pages/CustomerDetails/CustomerDetails';
import InvoiceList from '../pages/InvoiceList/InvoiceList';
//import InvoicesAdd from '../pages/Newinvoice/Newinvoice';
import InvoiceDetails from '../pages/InvoiceDetails/InvoiceDetails';
// import Orderdetails from '../pages/Orderdetails/Orderdetails';
import Analytics from '../pages/Analytics/Analytics';
import Notification from '../pages/Notification/Notification';
import Notificationhistory from '../pages/Notificationhistory/Notificationhistory';

const Layout = () => {


  let navigate = useNavigate();


  const [userData, setUserData] = useState(null);
  const [notificationData, setNotificationData] = useState();

  const [isNotificationSettingsShow, setNotificationSettingsShow] = useState(false)
  const [isSecurityModalShow, setSecurityModalShow] = useState(false)
  const [isLogoutModalShow, setLogoutModalShow] = useState(false)


  const submitNotification = () => {
    setNotificationSettingsShow(false)
  }




  const [navOpen, setnavOpen] = useState(false);

  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const { isLoggedIn, login, logout } = useContext(UserContext);

  const toggleLeftNav = () => {
    setnavOpen(!navOpen)
  }


  const loadUserData = () => {
    API.get(`/users/${window.localStorage.getItem('userID')}`)
      .then(response => {

        setUserData(response.data)
        console.log("userdata from adminlayout", userData)
      })

      .catch(error => {
        console.error(error);
      });


  }

  const loadNotificatiosData = () => {
    API.get(`notifications/${window.localStorage.getItem('userID')}/`)
      .then(response => {
        setNotificationData(response.data)
      }
      )

      .catch(error => {
        console.error(error);
      })
  }


  useEffect(() => {
    if (localStorage.getItem("userRole") === "admin") {
      loadUserData();
    }
    loadNotificatiosData()
  }, [])



  const myFunction = () => {
    document.getElementsByClassName("navbar-left")[0].classList.toggle("open");
  }




  return (
    <React.Fragment>
      <div className='bg-white resp-toolbar  d-block d-lg-none d-flex'>
        <div>
          <img src="/images/brick-logo.svg" alt=''></img>
        </div>
        <button onClick={myFunction} className='white-btn px-3 hamburger-btn'><i className="fa-solid f-lg fa-bars"></i></button>

      </div>
      <div className='w-100 d-flex ff-mon'>


        <div className=' navbar-left bg-darknavy div1'>
          {/* <button onClick={() => handleClick()}>Click Me</button> */}
          <Navbar></Navbar>
        </div>
        <div className='content_wrpr d-flex flex-column'>
          <Header userData={userData} isLoggedIn={isLoggedIn}></Header>

          {isLoggedIn && (window.localStorage.getItem("userRole") === "admin") ?
            <div className='w-100 d-flex flex-column py-4 px-2 px-lg-4'>

              <Routes>
                <Route index element={<Overview />} />
                
                <Route path="profile" element={<Profile />} />
                
                
                   <Route path="customers/list" element={<CustomersList />} />
                <Route path="customers/details" element={<CustomerDetails />} />
                
                {/* <Route path="orderdetails" element={<Orderdetails />} /> */}
                <Route path="invoice/list" element={<InvoiceList />} />
                <Route path="invoice/details" element={<InvoiceDetails />} />
                

                <Route path="analytics" element={<Analytics />} />
                  <Route path="notification" element={<Notification />} />
                <Route path="notificationhistory" element={<Notificationhistory />} />
                
              </Routes>
            </div>
            :
            <div className="auth-mask">
              <p>Please login as Admin to continue</p>
            </div>
          }

        </div>
      </div>

    </React.Fragment>
  )

}

export default Layout