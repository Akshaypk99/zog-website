import React, { Component, useEffect, useState, useContext } from 'react'
import './DevSecOps.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import ThreeCardsSection from '../../common-component/ThreeCardsSection/ThreeCardsSection.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
import InsightSliderSection from '../../common-component/InsightSliderSection/InsightSliderSection'
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


const DevSecOps = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState(null);


  useEffect(() => {
    setIsLoading(true)
    API.get("blogs/?page_name=generic&section_number=1")
      .then((response) => {
        setBlogData(response.data)
        setIsLoading(false)

      })
      .catch((error) => {
        setMessage(error.data.message);
        setIsErrorModalOpen(true)
        setIsLoading(false)

      });
  }, [])

  

  const sec4Data = [
    {
      title:"1",
      description: "Our DevSecOps services reduce compliance costs and streamline feature development and deployment processes effectively for organisations.",
    },
    {
      title:"2",
      description: "Continuous network and data monitoring ensure enhanced security and swift recovery from potential breaches, bolstering resilience.",
    },
    {
      title:"3",
      description: "Organisations expedite application development, reduce time-to-market, and reinforce security measures by adopting DevSecOps methodologies.",
    },
    {
      title:"4",
      description: "We emphasise the importance of performing security checks, continuous security monitoring, and automated deployment tests from the very start.",
    },
    {
      title:"5",
      description: "Empowered development teams to expedite releases, enhancing software delivery pipelines and bolstering deployment agility with DevSecOps integration.",
    },
    {
      title:"6",
      description: "Detailed performance insights aid informed decision-making and proactive optimisation, fostering organisational success through DevSecOps practices.",
    },
    {
      title:"7",
      description: "Foster transparency in early development, facilitating collaboration, progress tracking, and hastening project timelines with DevSecOps adoption.",
    },
    {
      title:"8",
      description: "Integrated automated security measures throughout development mitigate risks and ensure reliability, hallmark benefits of DevSecOps.",
    },
    


  ]

  const sec5Data = [
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
    },
    {
      title: "Trädmord infodemi dekaledes",
      auther: "By John Doe",
      date: "Jan 30, 2024",
      department: "Banking, UI/UX"
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

  return (
    <div className='dev-sec-ops-page'>

      <Banner
        pageName={"dev-sec-ops"}
        blueTitle={"devsecops"}
        titleWeb={"Seamless Integration<br/> Secure Deployment"}
        titleTab={"Seamless Integration<br/> Secure Deployment"}
        titleMob={"Seamless<br/> Integration<br/> Secure<br/> Deployment"}
        subTitleWeb={"Enhancing security through automated<br/> development processes."}
        subTitleTab={"Enhancing security through automated<br/> development processes."}
        subTitleMob={"Enhancing security through<br/> automated development processes."}
        iconTopWeb={'33%'}
        iconLeftWeb={'85%'}
        iconTopTab={'55%'}
        iconLeftTab={'70%'}
        iconTopMob={'65%'}
        iconLeftMob={'73%'}
        iconRotationWeb={80}
        iconRotationTab={-30}
        iconRotationMob={10}>
      </Banner>

      <SimpleSection
        pageName={"dev-sec-ops"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"right"}
        headingWeb={"Accelerate Your<br/> DevSecOps Journey"}
        headingTab={"Accelerate Your<br/> DevSecOps Journey"}
        headingMob={"Accelerate Your<br/> DevSecOps Journey"}
        description={"DevSecOps goes beyond mere tool implementation; it encompasses the collaboration of teams, the refinement of processes, and meticulous planning. Whether you're just starting or further along in your DevSecOps journey, ZOG Global is poised to assist you in mapping out a tailored route towards a thriving DevSecOps initiative."}
        buttonText={""}
      />



      <ThreeCardsSection
        pageName={'dev-sec-ops'}
        secNo={'3'}
        cardHeight={523}
        alignment={"left"}
        headingWeb={"Key Principles to<br/> DevSecOps"}
        headingTab={"Key Principles to<br/> DevSecOps"}
        headingMob={"Key Principles<br/> to DevSecOps"}
        descriptionWeb={"DevSecOps, which stands for Development, Security, and Operations, is an approach<br/> that integrates security practices within the DevOps process. Here are three key<br/> principles to effectively implement DevSecOps:"}
        descriptionTab={"DevSecOps, which stands for Development,<br/> Security, and Operations, is an approach that<br/> integrates security practices within the DevOps<br/> process. Here are three key principles to<br/> effectively implement DevSecOps:"}
        descriptionMob={"DevSecOps, which stands for<br/> Development, Security, and Operations,<br/> is an approach that integrates security<br/> practices within the DevOps process.<br/> Here are three key principles to<br/> effectively implement DevSecOps:"}


        subHeading1={"Shift Left Approach"}
        description1={"Early security integration, minimising vulnerabilities from design to deployment."}
        subHeading2={"Continuous Automation"}
        description2={"Streamlining security checks through automated tools for efficient risk mitigation."}
        subHeading3={"Collaborative Culture"}
        description3={"Fostering teamwork among development, security, and operations for robust security."}
      />

      <BlueNotchSection
        headingWeb={"How Our DevSecOps<br/> Services Create Value"}     // <br/>
        headingTab={"How Our DevSecOps<br/> Services Create Value"}
        headingMob={"How Our<br/> DevSecOps<br/> Services Create<br/> Value"}
        descriptionPresent={false}
        descriptionWeb={""}
        descriptionTab={""}
        descriptionMob={""}
        type={2}
        listData={sec4Data}

      />


      {blogData&&
      <InsightSliderSection
        pageName={"dev-sec-ops"}
        secNo={"5"}
        headingWeb={"Insights from Our<br/> DevSecOps Experts"}
        headingTab={"Insights from Our<br/> DevSecOps Experts"}
        headingMob={"Insights from<br/> Our DevSecOps<br/> Experts"}
        data={blogData}
      />
}


      <div className='sec-6'>

      </div>


      <div className='sec-7'>

      </div>




      <BottomBanner
        pageName={"dev-sec-ops"}
        titleWeb={"Transform with<br/> DevSecOps<br/> Today"}
        titleTab={"Transform with<br/> DevSecOps Today"}
        titleMob={"Transform with<br/> DevSecOps Today"}

        subTitlePresent={true}
        subTitleWeb={"Navigate DevSecOps integration with expert guidance and<br/> support."}
        subTitleTab={"Navigate DevSecOps<br/> integration with expert<br/> guidance and support."}
        subTitleMob={"Navigate DevSecOps integration with<br/> expert guidance and support."}

        buttonText={"talk to our experts"}
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

export default DevSecOps