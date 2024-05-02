import React, { Component, useEffect, useState, useContext } from 'react'
import './ProtectYourCustomersData.scss'
import Banner from '../../common-component/BannerSubPages/BannerSubPages.js'
import BottomBanner from '../../common-component/BottomBanner/BottomBanner.js'
import GreyCardsSection from '../../common-component/GreyCardsSection/GreyCardsSection.js'
import BlueNotchSection from '../../common-component/BlueNotchSection/BlueNotchSection.js'
import AccordionSection from '../../common-component/AccordionSection/AccordionSection.js'

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
import { Accordion } from 'react-bootstrap'


const ProtectYourCustomersData = () => {
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useContext(UserContext);

  const [tabSelected, selectTab] = useState(0);

  const [message, setMessage] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);





  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])


  useEffect(() => {

  }, [])


  const sec2Data = [
    {
      title: "Tailored Compliance",
      description: "Tailoring data protection strategies ensures compliance with legal standards and industry norms, seamlessly integrating with operations while addressing organisational nuances.",
    },

    {
      title: "Customised Solutions",
      description: "We personalise data protection with thorough assessments, crafting strategies to integrate seamlessly with your existing infrastructure for optimal security.",
    },
    {
      title: "Expert Guidance",
      description: "Collaborate with ZOG Global for expert data protection. Our team offers comprehensive support and valuable insights for informed decision-making from consultation to maintenance.",
    },
    {
      title: "Advanced Threat Detection",
      description: "We use advanced tech and algorithms for proactive threat detection, neutralising emerging risks in real-time and ensuring robust defence against cyber threats.",
    },
    {
      title: "Ongoing Monitoring",
      description: "We ensure ongoing data security with vigilant monitoring, swiftly addressing irregularities for safeguarding and compliance and maintaining operational integrity post-implementation.",
    },
    {
      title: "Customer Trust Assurance",
      description: "Through robust data protection measures and compliance, we bolster trust, strengthen relationships, and boost brand credibility, fostering customer loyalty.",
    },


  ]

  const sec3Data = [
    {
      title: "Public Sector",
      description: "Protect valuable commercial data with our tailored solutions. From financial institutions to retail, our services fortify data integrity, ensuring compliance and enhancing trust among customers, shareholders, and stakeholders.",
    },
    {
      title: "SMEs",
      description: "Empower small and medium enterprises with robust data security. Our scalable solutions cater to SMEs' unique needs, providing cost-effective yet comprehensive protection, ensuring compliance, and fostering growth without compromising security.",
    },
    {
      title: "Multinationals",
      description: "Secure vast multinational operations with our globally compliant strategies. We align data protection across borders, ensuring regulatory adherence while fortifying sensitive information, bolstering trust, and mitigating risks on a global scale.",
    },



  ]


  const sec4Data = [
    {
      title: "Risk Assessment",
      description: "Identify vulnerabilities and evaluate potential risks within your data infrastructure. Our comprehensive analysis provides insights to fortify defences, ensuring proactive mitigation strategies against potential threats.",
    },
    {
      title: "Encryption Solutions",
      description: "Implement robust encryption protocols to secure sensitive data. Our encryption services ensure that your information remains unintelligible to unauthorised users, fortifying your data against breaches or unauthorised access.",
    },
    {
      title: "Data Privacy Consulting",
      description: "Rely on our expertise to navigate complex data privacy regulations. Our consulting services offer guidance in aligning your practices with legal frameworks, ensuring compliance and fostering a privacy-centric culture within your organisation.",
    },
    {
      title: "Incident Response Planning",
      description: "Prepare for potential data breaches with our incident response planning. We develop tailored strategies to respond to security incidents swiftly, minimising their impact and ensuring a timely and effective resolution.",
    },
    {
      title: "Continuous Monitoring",
      description: "Our vigilant monitoring services offer real-time oversight of your data environment. Through continuous surveillance, we detect anomalies and potential threats, enabling proactive intervention to maintain data integrity and compliance.",
    },
    {
      title: "Access Control Solutions",
      description: "Implement robust access control measures to manage data accessibility. Our solutions ensure that only authorised personnel can access specific information, reducing the risk of internal breaches or unauthorised data manipulation.",
    },
    {
      title: "Compliance Audits",
      description: "Validate your adherence to data protection regulations through our compliance audits. We conduct thorough assessments, identify gaps, and recommend corrective measures to ensure ongoing compliance and minimise legal risks."

    }


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

  return (
    <div className='protect-your-customers-data-page'>

      <Banner
        pageName={"protect-your-customers-data"}
        blueTitle={"Protect your Customers Data"}
        titleWeb={"Ensuring<br/> Security & Trust"}
        titleTab={"Ensuring<br/> Security & Trust"}
        titleMob={"Ensuring<br/> Security & Trust"}
        subTitleWeb={"Our bespoke solutions are your fortress<br/> against data vulnerabilities and<br/> breaches."}
        subTitleTab={"Our bespoke solutions are your fortress<br/> against data vulnerabilities and<br/> breaches."}
        subTitleMob={"Our bespoke solutions are your<br/> fortress against data vulnerabilities<br/> and breaches."}

        iconTopWeb={'67%'}
        iconLeftWeb={'77%'}
        iconTopTab={'65%'}
        iconLeftTab={'57%'}
        iconTopMob={'63%'}
        iconLeftMob={'60%'}
        iconRotationWeb={151} 
        iconRotationTab={169}
        iconRotationMob={170}>
      </Banner>

      <GreyCardsSection
        pageName={'protect-your-customers-data'}
        headingWeb={"How We Ensure<br/> Next-Level Protection"}
        headingTab={"How We Ensure Next-<br/>Level Protection"}
        headingMob={"How We Ensure<br/> Next-Level<br/> Protection"}
        descriptionWeb={"ZOG Global offers unparalleled data protection services in the UK, ensuring your<br/> information remains secure and compliant. Here are six compelling reasons why our<br/> solutions stand out"}
        descriptionTab={"ZOG Global offers unparalleled data protection<br/> services in the UK, ensuring your information<br/> remains secure and compliant. Here are six<br/> compelling reasons why our solutions stand out"}
        descriptionMob={"ZOG Global offers unparalleled data<br/> protection services in the UK, ensuring<br/> your information remains secure and<br/> compliant. Here are six compelling<br/> reasons why our solutions stand out"}
        cardsData={sec2Data}

      />

      <BlueNotchSection
        headingWeb={"Custom Data Protection<br/> Solutions Across Industries"}
        headingTab={"Custom Data Protection<br/> Solutions Across<br/> Industries"}
        headingMob={"Custom Data<br/> Protection<br/> Solutions<br/> Across<br/> Industries"}
        descriptionPresent={true}
        descriptionWeb={"Our adaptable data protection services cater to various industries, ensuring robust<br/> security measures aligned with sector-specific needs."}
        descriptionTab={"Our adaptable data protection services cater to<br/> various industries, ensuring robust security<br/> measures aligned with sector-specific needs."}
        descriptionMob={"Our adaptable data protection services<br/> cater to various industries, ensuring<br/> robust security measures aligned with<br/> sector-specific needs."}
        listData={sec3Data}

      />



      <AccordionSection
        headingWeb={"Comprehensive Service<br/> Offerings"}
        headingTab={"Comprehensive Service<br/> Offerings"}
        headingMob={"Comprehensive<br/> Service<br/> Offerings"}
        description={"Our range of specialised services ensures holistic data security and compliance,<br/> safeguarding your valuable assets."}

        accordionData={sec4Data} />





      <BottomBanner
        pageName={"protect-your-customers-data"}
        titleWeb={"Secure<br/> Your Data Today"}
        titleTab={"Secure<br/> Your Data Today"}
        titleMob={"Secure<br/> Your Data Today"}
        subTitlePresent={true}
        subTitleWeb={"Ready to fortify your data security?<br/> Our experts are here to assist you."}
        subTitleTab={"Ready to fortify your data<br/> security? Our experts are<br/> here to assist you."}
        subTitleMob={"Ready to fortify your data security? Our<br/> experts are here to assist you."}

        buttonText={"SECURE YOUR DATA TODAY"}
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

export default ProtectYourCustomersData