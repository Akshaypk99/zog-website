import React, { Component, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import LogoutPopup from "../../authentication/LogoutPopup";


const Toolbar=({ userData, isLoggedIn })=>{

    const [isLogoutModalShow, setLogoutModalShow] = useState(false)
     let navigate = useNavigate();
  
  
  const myFunction=()=>{
        var x = document.getElementById("profile-logout-popup");
        if (x.style.display === "none") {
          x.style.display = "block";
        } 
        else {
          x.style.display = "none";
        }
      
    }

        return (
            <div className='w-100 toolbar positionsticky'>
                <div className='top-navbar w-100'>
                    <div className='d-flex align-items-center'>
                        {/* <div className='black-clr me-4'><b>Overview</b></div> */}
                        <div className='relative'>
                            <input className='nav-search-inp' placeholder='Search'></input>
                            <div className='search-i-position'><i className="fa-solid fa-magnifying-glass"></i></div>
                        </div>
                    </div>
                    {isLoggedIn&&(window.localStorage.getItem("userRole")==="admin")?
                    <div className='d-flex align-items-center'>
                        <div className='me-3'>
                            <div className='relative'>
                                <i className="fa-solid fa-bell f-22"></i>
                                <div className='notification-dot-i'><i className="fa-solid fa-circle brick-clr f-8"></i></div>
                            </div>

                        </div>
                        <div className='me-2'>
                        {userData&&userData.profile_image?<img src={`https://sibufishnmeat.co.uk${userData.profile_image}`} alt=''  className='nav-profile-img'></img>
                        : <img src="/images/profile/avatar-no-profile-image.png" alt='' className='nav-profile-img' ></img>
        }
                        </div>
                        <div className='relative'>
                            <button onClick={myFunction} id='toggle-arrow'><i className="fa-solid fa-sort-down lightgrey-clr f-lg"></i></button>
                            <div className='bg-white py-3 radius-11 box-shadow absolute profile-popup' id="profile-logout-popup">
                                <div className='bb-dashed pb-2'>
                                    <div className='black-clr f-sm px-3'><b>{userData&&userData.first_name?userData.first_name:"Admin"} {userData&&userData.last_name&&userData.last_name}</b></div>
                                    <div className='lightbrick fw-500 f-xs px-3'>{userData&&userData.email&&userData.email}</div>
                                </div>
                                <div className='d-flex flex-column align-items-center py-3 bb-dashed'>
                                    {/* <button className='mb-2'><i className="fa-solid fa-user brick-clr me-2"></i><span className='lightgrey-clr f-xs'><b>Profile</b></span><span className='lightgrey-clr f-xs transparent'>sh</span></button> */}
                                    <Link to="/admin/profile" className='clr-898989 underline-none fw-500'><i className="fa-solid fa-gear brick-clr me-2"></i>Settings</Link>
                                </div>
                                <div className='d-flex black-clr align-items-center justify-content-center pt-3'>
                                    <button className='black-clr fw-500 f-xs' onClick={()=>setLogoutModalShow(true)}>Logout</button>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                    :
                    <div className='d-flex'>
              <button className='signup-btn' onClick={() => navigate('/sign-up')}>Sign Up</button>
              <button className='login-btn' onClick={() => { localStorage.setItem("userRoleRequest", "admin"); navigate('/admin-login') }}>Login In</button>
            </div>
}
                </div>
{isLogoutModalShow&&<LogoutPopup setterFunction={setLogoutModalShow}></LogoutPopup>}

            </div>
        )
    
}

export default Toolbar