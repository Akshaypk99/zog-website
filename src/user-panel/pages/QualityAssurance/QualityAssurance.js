import React, { Component, useEffect, useState, useContext } from 'react'
import './QualityAssurance.scss'
import Banner from '../../common-component/BannerMainPages/BannerMainPages.js'
import AccordionSection from '../../common-component/AccordionSection/AccordionSection.js'
import DiamondSection from '../../common-component/DiamondSection/DiamondSection.js'
import ImageOverlapedSection from '../../common-component/ImageOverlapedSection/ImageOverlapedSection.js'
import InsightSliderSection from '../../common-component/InsightSliderSection/InsightSliderSection'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner'

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


const View = () => {
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

  const sec2Data = [
    {
      title: "Automation Testing",
      description: "Automated test scripts can help the testing process run more smoothly and effectively. Testing an application's performance, load, and balance is best done through automation.",
      link: "/automation-testing"
    },
    {
      title: "Manual Testing",
      description: "Explore our comprehensive manual testing services for meticulous quality assurance. Our skilled team ensures thorough examination, identifying and rectifying issues to deliver flawless software solutions.",
      link: "/mannual-testing"
    },
    {
      title: "Penetration Testing",
      description: "Penetration testing evaluates security teams, identifying flaws that risk data exposure. It ensures protection against unauthorised access, safeguards sensitive information and maintains authorisation protocols.",
      link: "/penetration-testing"
    },
    {
      title: "Performance Testing",
      description: "Assess system efficiency via performance testing for responsiveness, speed, and user experience under diverse workloads. Ensure optimal functionality and user satisfaction across heavy traffic, voluminous data, and numerous requests.",
      link: "/perfomance-testing"
    },
    {
      title: "Application Security Testing",
      description: "Enhance your digital fortress with our top-tier application security testing services. Safeguard your software against threats, vulnerabilities, and breaches for robust, resilient digital protection.",
      link: "/application-security-testing"
    },
    {
      title: "Accessibility Testing",
      description: "Ensure universal access to your digital presence with our comprehensive accessibility testing services, guaranteeing inclusivity and compliance with industry standards for a seamless user experience.",
      link: "/accessibility-testing"
    },

  ]

 


  const sec5Data = [
    {
      title: "Orientation & Training",
      description: "The initial step involves conducting a comprehensive orientation and training session for the QA team, covering project objectives, goals, expectations, and testing tools.",
    },

    {
      title: "Requirement Analysis",
      description: "The second phase entails a detailed requirement analysis, encompassing identifying key features, determining test types, and selecting necessary tools for testing execution.",
    },

    {
      title: "Test Planning",
      description: "After finalising the requirements, the team meticulously plans and designs test cases, outlining each case, expected results, pass/fail criteria, and test completion deadlines.",
    },
    {
      title: "Test Execution",
      description: "This stage involves executing test cases as per the plan, monitoring progress, and maintaining team communication to address issues and ensure project adherence to schedule.",
    },

    {
      title: "Test Reporting",
      description: "The final step includes examining and documenting software testing outcomes, preparing a comprehensive report assessing overall quality, and identifying detected problems or glitches.",
    },
  ]


  const sec6Data = [

    {
      title: "Mobilstrum otrebrattsur",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-6-1.png"
    },

    {
      title: "Mobilstrum otrebrattsur",
      description: " Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-6-1.png"
    },

    {
      title: "Mobilstrum otrebrattsur",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska.Nerväxt tiskade ett visukal, inklusive parade.  Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-6-1.png"
    },
    {
      title: "Mobilstrum otrebrattsur",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-6-1.png"
    },

    {
      title: "Mobilstrum otrebrattsur",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-6-1.png"
    },

    {
      title: "Mobilstrum otrebrattsur",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-6-1.png"
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
    <div className='quality-assurance-page'>

      <Banner
        pageName={"quality-assurance"}
        titleWeb={"Quality Assurance<br/> Services"}
        titleTab={"Quality Assurance<br/> Services"}
        titleMob={"Quality<br/> Assurance<br/> Services"}
        subTitleWeb={"Our QA experts ensure top-quality, timely software<br/> development implementation."}
        subTitleTab={"Our QA experts ensure top-quality, timely software<br/> development implementation."}
        subTitleMob={"Our QA experts ensure top-quality,<br/> timely software development<br/> implementation."}>
      </Banner>

      <AccordionSection 
      headingWeb={"QA Services<br/> We Offer"}
       headingTab={"QA Services<br/> We Offer"}
       headingMob={"QA Services<br/> We Offer"}
       description={"We perform end-to-end testing of your infrastructure, applications, and data to<br/> guarantee that all your software is offered bug-free to end users."}
      
      accordionData={sec2Data} />
      




      <DiamondSection
      pageName={'quality-assurance'} 
      secNo={'3'} 
      theme={"dark"}
      headingBoxPresent={true}
      headingWeb={"Why is Quality Assurance<br/> Important?"} 
      headingTab={"Why is Quality<br/> Assurance Important?"} 
      headingMob={"Why is Quality<br/> Assurance<br/> Important?"} 
      descriptionWeb={"Elevate success with the pivotal role of quality assurance, ensuring precision,<br/> reliability, and customer satisfaction. Unleash the power of seamless processes for<br/> enduring business excellence."} 
      descriptionTab={"Elevate success with the pivotal role of quality assurance, ensuring precision, reliability, and customer satisfaction. Unleash the power of seamless processes for enduring business<br/> excellence."} 
      descriptionMob={"Elevate success with the pivotal role of<br/> quality assurance, ensuring precision,<br/> reliability, and customer satisfaction.<br/> Unleash the power of seamless<br/> processes for enduring business<br/> excellence."} 


      subHeadding1={"Ensuring Customer Trust"} 
      description1={"Quality Assurance guarantees products meet high standards, fostering trust among customers. Rigorous testing ensures reliability, instils confidence in your brand and fosters long-lasting customer relationships."} 
      subHeadding2={"Mitigating Risks and Costs"} 
      description2={"Beyond customer satisfaction, Quality Assurance minimises risks and reduces long-term costs. By identifying and rectifying issues early, businesses avoid potential setbacks and financial burdens, ensuring sustainable success."} 
        />





      
      <ImageOverlapedSection 
      pageName={'quality-assurance'} 
      secNo={'4'} 
      imageFirst={false}
      headingWeb={"Why Choose ZOG Global For<br/> Quality Assurance Services?"} 
      headingTab={"Why Choose ZOG Global<br/> For Quality Assurance<br/> Services?"} 
      headingMob={"Why Choose ZOG<br/> Global For Quality<br/> Assurance<br/> Services?"} 


      subHeadding1={"Adapting Latest Tools and Frameworks"} 
      description1={"Stay ahead with cutting-edge QA solutions, leveraging the latest tools and frameworks for unparalleled testing excellence."} 
      subHeadding2={"Testing Specialist Engineers"} 
      description2={"Our expert QA engineers ensure precision and reliability, delivering seamless testing solutions tailored to your needs."} 
      subHeadding3={"High-Quality Services & Transparency"} 
      description3={"Experience top-tier QA services characterised by excellence and transparency, ensuring your project's success and client satisfaction."}
      />




      <div className='sec-5'>
        <div className='inner'>
          <h1>Onboarding Journey of<br />Quality Assurance Project</h1>

          {sec5Data.map((item, index) => {
            return (
              <div className={index % 2 == 0 ? 'segment even' : 'segment odd'} >
                <div className='number'>{index + 1}</div>
                <div className='text-box'>
                  <h2>{sec5Data[index].title}</h2>
                  <p>{sec5Data[index].description}</p>
                </div>
              </div>

            )
          })}


        </div>
      </div>

      {/* <div className='sec-6'>
        <div className='inner'>
          <h1>
          Insights and Best Practices <br/>in Quality Assurance
          </h1>

          <div className='flex-box d-none d-lg-flex'>
            <div className='column'>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[0].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[0].title}</div>
                  <div className='sub-title'>{sec6Data[0].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[1].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[1].title}</div>
                  <div className='sub-title'>{sec6Data[1].description}</div>
                </div>
              </div>


            </div>


            <div className='column'>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[2].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[2].title}</div>
                  <div className='sub-title'>{sec6Data[2].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[2].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[3].title}</div>
                  <div className='sub-title'>{sec6Data[3].description}</div>
                </div>
              </div>


            </div>



            <div className='column'>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[4].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[4].title}</div>
                  <div className='sub-title'>{sec6Data[4].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[5].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[5].title}</div>
                  <div className='sub-title'>{sec6Data[5].description}</div>
                </div>
              </div>

            </div>
          </div>



          <div className='flex-box d-none d-md-flex d-lg-none'>
            <div className='column'>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[0].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[0].title}</div>
                  <div className='sub-title'>{sec6Data[0].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[1].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[1].title}</div>
                  <div className='sub-title'>{sec6Data[1].description}</div>
                </div>
              </div>


              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[2].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[2].title}</div>
                  <div className='sub-title'>{sec6Data[2].description}</div>
                </div>
              </div>
            </div>


            <div className='column'>



              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[3].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[3].title}</div>
                  <div className='sub-title'>{sec6Data[3].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[4].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[4].title}</div>
                  <div className='sub-title'>{sec6Data[4].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[5].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[5].title}</div>
                  <div className='sub-title'>{sec6Data[5].description}</div>
                </div>
              </div>

            </div>



          </div>
          <div className='flex-box d-md-none'>
            <div className='column'>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[0].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[0].title}</div>
                  <div className='sub-title'>{sec6Data[0].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[1].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[1].title}</div>
                  <div className='sub-title'>{sec6Data[1].description}</div>
                </div>
              </div>


              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[2].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[2].title}</div>
                  <div className='sub-title'>{sec6Data[2].description}</div>
                </div>
              </div>




              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[3].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[3].title}</div>
                  <div className='sub-title'>{sec6Data[3].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[4].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[4].title}</div>
                  <div className='sub-title'>{sec6Data[4].description}</div>
                </div>
              </div>

              <div className='card'>
                <div className='img-box'>
                  <img src={sec6Data[5].image_url}></img>
                </div>
                <div className='text-box'>
                  <div className='title'>{sec6Data[5].title}</div>
                  <div className='sub-title'>{sec6Data[5].description}</div>
                </div>
              </div>

            </div>



          </div>

        </div>
      </div> */}



{blogData&&
      <InsightSliderSection
        pageName={"it-outsourcing"}
        secNo={"7"}
        headingWeb={"Explore Our Resources"}
        headingTab={"Explore<br/> Our Resources"}
        headingMob={"Explore Our<br/> Resources"}
        data={blogData}
      />
}


      <BottomBanner
        pageName={"quality-assurance"}
        titleWeb={"Connect Now<br/> For QA<br /> Consultation"}
        titleTab={"Get a Free<br/> Consultation"}
        titleMob={"Get a Free<br/> Consultation"}
        buttonText={"TALK TO OUR EXPERTS"}
        buttonTheme={"light"}
        textTheme={"light"}
        buttonLink={'/contact-us'}
      >
      </BottomBanner>




      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default View