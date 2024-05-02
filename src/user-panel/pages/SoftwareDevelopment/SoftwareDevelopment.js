import React, { Component, useEffect, useState, useContext } from 'react'
import './SoftwareDevelopment.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages'
import GreySliderSection from '../../common-component/GreySliderSection/GreySliderSection.js'
import SimpleSection from '../../common-component/SimpleSection/SimpleSection.js'
import AccordionSection from '../../common-component/AccordionSection/AccordionSection.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import GreyCardsSection from '../../common-component/GreyCardsSection/GreyCardsSection.js'
import StatisticsSection from '../../common-component/StatisticsSection/StatisticsSection.js'
import InsightSliderSection from '../../common-component/InsightSliderSection/InsightSliderSection'

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


const SoftwareDevelopment = () => {
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

  
  const sec3Data = [
    {
      title: "Understanding Your Vision",
      description: "We listen attentively to your unique vision, ensuring precise alignment.",
    },
    {
      title: "Strategic Planning",
      description: "Through strategic planning, we meticulously chart the path to success.",
    },
    {
      title: "Creative Design",
      description: "Innovative design solutions that authentically reflect your brand identity.",
    },
    {
      title: "Responsive Development",
      description: "Crafting websites that adapt flawlessly across all devices and platforms.",
    },
    {
      title: "Testing & Optimisation",
      description: "Rigorous testing and optimisation ensure peak performance and user satisfaction.",
    },


  ]
  const sec4Data = [
    {
      title: "Custom Website Design",
      description: "From concept to creation, we build custom websites tailored to your specific needs."
    },

    {
      title: "E-Commerce Development",
      description: "We specialise in developing robust e-commerce solutions that drive sales and growth."
    },

    {
      title: "UI/UX Design",
      description: "Turn your ideas into intuitive digital experiences with our UI/UX design services."
    },
    {
      title: "Content Management Systems",
      description: "Our team is experienced in popular CMS platforms like WordPress, Drupal, and Joomla."
    },

    {
      title: "SEO Optimisation",
      description: "Our websites are search engine optimised to attract more organic traffic to your site."
    },

    {
      title: "Website Maintenance",
      description: "We offer continued maintenance and support services to keep your website running smoothly."
    },

  ]
  const sec5Data = [
    {
      text:"Traffic Surge",
      leftSign:"+",
      number:"90",
      rightSign:"%",
    },

    {
      text:"Bounce Rate Drop",
      leftSign:"-",
      number:"40",
      rightSign:"%",
    },
    {
      text:"Mobile Traffic Boost",
      leftSign:"+",
      number:"50",
      rightSign:"%",
    },
    {
      text:"Satisfaction Rate",
      leftSign:"+",
      number:"97",
      rightSign:"%",
    },


  ]

  const sec6Data = [
    {
      title: "Web Design",
      link: "/healthcare",
    },

    {
      title: "Web Design",
      link: "/healthcare",
    },{
      title: "Web Design",
      link: "/healthcare",
    },{
      title: "Web Design",
      link: "/healthcare",
    },{
      title: "Web Design",
      link: "/healthcare",
    },{
      title: "Web Design",
      link: "/healthcare",
    },

  ]
  const sec6SlideSettings = {
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  const sec8Data = [
    {
      title: "Flexible Engagement Models",
      description: "We offer customisable engagement options to suit your project needs, ensuring flexibility and scalability throughout development.",
    },

    {
      title: "Result-Driven Development",
      description: "Our meticulous development process is focused on delivering substantial results that align with your business objectives and goals.",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Our cost-conscious approach ensures efficient resource utilisation, providing you with high-quality solutions at competitive prices.",
    },
    {
      title: "Full Post-Release Support",
      description: "Beyond deployment, we offer comprehensive support to ensure your software continues to perform optimally and evolve effectively.",
    },
    


  ]


  const sec9Data = [
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
    <div className='software-development-page'>

      <Banner
        pageName={"software-development"}
        blueTitle={"Software Development"}
        titleWeb={"Dream It<br/> We'll Build It"}
        titleTab={"Dream It<br/> We'll Build It"}
        titleMob={"Dream It<br/> We'll Build It"}
        subTitleWeb={"We craft expert software solutions for<br/> your business."}
        subTitleTab={"We craft expert software solutions for<br/> your business."}
        subTitleMob={"We craft expert software<br/> solutions for your<br/> business."}
        iconTopWeb={'12%'}
        iconLeftWeb={'89%'}
        iconTopTab={'37%'}
        iconLeftTab={'72%'}
        iconTopMob={'35%'}
        iconLeftMob={'74%'}
        iconRotationWeb={139}
        iconRotationTab={136}
        iconRotationMob={138}>
      </Banner>

      <SimpleSection
        pageName={"software-development"}
        secNo={"2"}
        headdingPresent={true}
        buttonPresent={false}
        imagePosition={"left"}
        headingWeb={"Our Commitment is<br/> to Secure by Design"}
        headingTab={"Our Commitment is to<br/> Secure by Design"}
        headingMob={"Our Commitment is<br/> to Secure by Design"}
        description={"At ZOG Global, we are dedicated to building websites that prioritise security from the ground up, guaranteeing a safe digital environment for your business and customers."}
        buttonText={""}
      />



      <AccordionSection
        headingWeb={"Development<br/> Strategy Overview"}
        headingTab={"Development Strategy<br/> Overview"}
        headingMob={"Development<br/> Strategy<br/> Overview"}
        description={"Discover our holistic approach to crafting exceptional digital experiences tailored to<br/> meet your unique business needs."}

        accordionData={sec3Data} />

      <GreySliderSection
        pageName={"software-development"}
        secNo={"4"}
        headingWeb={"Our Service Offerings"}
        headingTab={"Our Service Offerings"}
        headingMob={"Our Service Offerings"}
      subHeading={"We ensure success and satisfaction on your software journey every step of the way."}
        data={sec4Data}
      />


<StatisticsSection data={sec5Data}/>



<div className='sec-6'>
      <h1 className='only-web'>Our Portfolio<br/> Websites</h1>
      <h1 className='only-tab'>Our Portfolio Websites</h1>
        <h1 className='only-mob'>Our Portfolio Websites</h1>
        <Slider {...sec6SlideSettings}>

          {sec6Data.map((item, index) => {
            return (
              <div className='card' key={index}>
                <div className='inner' style={{ backgroundImage: `url("/images/software-development/sec-6-${index + 1}.png")` }}>
                  <div className='title'>{item.title}</div>
                  {/* <button onClick={() => navigate(`${item.link}`)}>Learn More <img src='/images/industries/sec-4-arrow.svg'></img></button> */}
                </div>
              </div>
            )
          })}

        </Slider>

      </div>


      <div className='sec-7'>
        <div className='inner'> 
          <div className='title-section'>
            <h1 className='only-web'>Software<br/>Development Cycle</h1>
            <h1 className='only-tab'>Software Development<br/>Cycle</h1>
            <h1 className='only-mob'>Software<br/>Development<br/>Cycle</h1>
            <p>We streamline the software development cycle, ensuring quality from concept to deployment with our efficient approach.</p>
          </div>
          <img src='/images/software-development/sec-7.png' alt=''></img>
        </div>
      </div>


      <GreyCardsSection
        pageName={''}
        headingWeb={"What Makes Us Unique?"}
        headingTab={"What Makes Us Unique?"}
        headingMob={"What Makes Us<br/> Unique?"}
        descriptionWeb={"Your business relationship with us matters as much as the impression we make on<br/> your clients."}
        descriptionTab={"Your business relationship with us matters as much<br/> as the impression we make on your clients."}
        descriptionMob={"Your business relationship with us<br/> matters as much as the impression we<br/> make on your clients."}
        cardsData={sec8Data}

      />


      {blogData&&
      <InsightSliderSection
        pageName={"software-development"}
        secNo={"9"}
        headingWeb={"Industry Trends, Expert<br/> Analysis, & Strategic Insights"}
        headingTab={"Industry Trends, Expert<br/> Analysis, & Strategic<br/> Insights"}
        headingMob={"Industry Trends,<br/> Expert Analysis,<br/> & Strategic Insights"}
        data={blogData}
      />
}


      <BottomBanner
        pageName={"software-development"}
        titleWeb={"Want to Build<br/> Something Amazing?"}
        titleTab={"Want to Build<br/> Something Amazing?"}
        titleMob={"Want to Build<br/> Something<br/> Amazing?"}

        subTitlePresent={true}
        subTitleWeb={"Get expert consultation and start your software success<br/> journey today."}
        subTitleTab={"Get expert consultation and<br/> start your software success<br/> journey today."}
        subTitleMob={"Get expert consultation and start your<br/> software success journey today."}

        buttonText={"book a meeting"}
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

export default SoftwareDevelopment