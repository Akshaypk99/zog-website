import React, { Component, useEffect, useState, useContext } from 'react'
import './WhyZogGlobal.scss'
import Banner from '../../common-component/BannerMainPages/BannerMainPages'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate, Link } from 'react-router-dom';

import InsightSliderSection from '../../common-component/InsightSliderSection/InsightSliderSection'


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


  const sec5Data = [
    {
      title: "Mobilstrumpa otrebrattsurfa",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-5-1.png"
    },
    {
      title: "Mobilstrumpa otrebrattsurfa",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-5-2.png"
    },
    {
      title: "Mobilstrumpa otrebrattsurfa",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-5-3.png"
    },
    {
      title: "Mobilstrumpa otrebrattsurfa",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-5-4.png"
    },
    {
      title: "Mobilstrumpa otrebrattsurfa",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-5-5.png"
    },
    {
      title: "Mobilstrumpa otrebrattsurfa",
      description: "Nerväxt tiskade ett visukal, inklusive parade. Cykelbox Ikeamonarki poska. Haffa svininfluensa. Juholtare härgjord bloggare.",
      image_url: "/images/why-zog-global/sec-5-6.png"
    }
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

  const sec5SlideSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const sec3RespsSlideSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])


  useEffect(() => {
    console.log("100vh", window.innerHeight)
  }, [])


  useEffect(() => {
    const handleScroll = (event) => {
      const track = document.querySelector('.track');
      const isScrollingOverTrack = track.contains(event.target); // Check if the scroll event occurred within the track element

      // If scrolling is over the track, prevent default behavior to avoid vertical scrolling of the page
      if (isScrollingOverTrack) {
        event.preventDefault();

        // Check if the track is fully scrolled horizontally
        if (track.scrollLeft === (track.scrollWidth - track.clientWidth)) {
          // If the track is fully scrolled, allow vertical scrolling of the page
          document.body.style.overflowY = 'auto';
        } else {
          // If the track is not fully scrolled, continue horizontal scrolling and prevent vertical scrolling
          document.body.style.overflowY = 'hidden';
          track.scrollLeft += (event.deltaY);
        }
      } else {
        // If scrolling is not over the track, allow normal vertical scrolling of the page
        document.body.style.overflowY = 'auto';
      }
    };

    // Attach scroll event listener to the window
    window.addEventListener('wheel', handleScroll, { passive: false });



    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render


  const sec5PrevClicked = () => {
    const track = document.querySelector('.track');

    track.scrollLeft += -382;
  }

  const sec5NextClicked = () => {
    const track = document.querySelector('.track');

    track.scrollLeft += 382;
  }


  return (
    <div className='why-zog-global-page'>

      <Banner
        pageName={"why-zog-global"}
        titleWeb={"Creating Opportunities<br/> Using Technology"}
        titleTab={"Creating Opportunities<br/> Using Technology"}
        titleMob={"Creating<br/> Opportunities<br/> Using<br/> Technology"}
        subTitleWeb={"Empowering business growth through innovative<br /> solutions and technological opportunities."}
        subTitleTab={"Empowering business growth through innovative<br /> solutions and technological opportunities."}
        subTitleMob={'Empowering business growth<br/> through innovative solutions and<br/> technological opportunities.'}>
      </Banner>

      <div className='sec-2'>
        <img src='/images/why-zog-global/sec-2-web.png' className='d-none d-lg-block'></img>
        <img src='/images/why-zog-global/sec-2-tab.png' className='d-none d-md-block d-lg-none'></img>
        <img src='/images/why-zog-global/sec-2-mob.png' className='d-block d-md-none'></img>
        <div>
          <p>Elevate possibilities and navigate innovation. In the digital realm, we sculpt solutions. Your IT aspirations meet our expertise; we forge a seamless future together. Welcome to transformation.</p>

        </div>
      </div>


      <div className='sec-3'>
        <div className='inner'>
          <h1>Nurturing Innovation<br />
            Shaping Futures</h1>
          <div className='blue-box'>
            <div className='sub-title'>UNVEILING THE ESSENCE THAT GUIDES US </div>

            <div className='segments-box only-web'>
              <div className='segment segment-1'>
                <div className='title'>Our Vision</div>
                <div className='description'>Crafting customer-focused digital solutions to propel businesses seamlessly into the digital era.</div>
              </div>

              <div className='segment segment-2'>
                <div className='title'>Our Mission</div>
                <div className='description'>Achieving global leadership in cybersecurity, software development, automation, and artificial intelligence.</div>
              </div>

              <div className='segment segment-3'>
                <div className='title'>Our Values</div>
                <div className='description'>We strive to build happiness for everyone we work with, including technology partners, employees, and clients.</div>
              </div>
            </div>

            <div className='segments-box d-block d-lg-none'>

              <Slider {...sec3RespsSlideSettings}>
                <div className='segment segment-1'>
                  <div className='title'>Our Vision</div>
                  <div className='description'>Crafting customer-focused digital solutions to propel businesses seamlessly into the digital era.</div>
                </div>

                <div className='segment segment-2'>
                  <div className='title'>Our Mission</div>
                  <div className='description'>Achieving global leadership in cybersecurity, software development, automation, and artificial intelligence.</div>
                </div>

                <div className='segment segment-3'>
                  <div className='title'>Our Values</div>
                  <div className='description'>We strive to build happiness for everyone we work with, including technology partners, employees, and clients.</div>
                </div>
              </Slider>
            </div>

          </div>
        </div>
      </div>


      <div className='sec-4'>
        <h1>
          The Value We Bring to<br /> Your Business
        </h1>
        <p>Maximise profitability and efficiency with our comprehensive solutions, adding unmatched value to propel your business forward.</p>

        <div className='segment odd segment-1'>
          <h2>Enhanced Efficiency</h2>
          <p>Streamlined processes amplify productivity, ensuring tasks are completed seamlessly for optimal performance.</p>
        </div>

        <div className='segment even segment-2'>
          <h2>Seamless Integration</h2>
          <p>Our solutions effortlessly blend with existing systems, promoting synergy across your technological landscape.</p>
        </div>

        <div className='segment odd segment-3'>
          <h2>Proactive Security</h2>
          <p className='description'>Advanced protective measures fortify your digital assets, preventing threats and ensuring data integrity.</p>
        </div>

        <div className='segment even segment-4'>
          <h2>Agile Scalability</h2>
          <p>Our flexible solutions empower your business to grow dynamically and adapt to evolving demands.</p>
        </div>

        <div className='segment odd segment-5'>
          <h2>Insightful Analytics</h2>
          <p>Unlock valuable data-driven insights, empowering strategic decision-making for sustainable business growth and innovation.</p>
        </div>
        <div className='segment even segment-6'>
          <h2>Responsive Support</h2>
          <p>Our dedicated team offers swift assistance, resolving issues promptly to minimise disruptions and optimise operations.</p>
        </div>


      </div>


      <div className='sec-5'>
        <div className='inner'>
          <div className='lhs'>
            <h1 className='only-mob'>
              Navigating<br /> Success Stories
            </h1>
          </div>
          <div className='track d-none d-md-block'>
            <div className=' list '>

              <div className='first-card'>
                <h1 className='only-web'>
                  Navigating<br /> Success<br /> Stories
                </h1>
                <h1 className='only-tab'>
                  Navigating<br /> Success Stories
                </h1>
              </div>

              {sec5Data.map((item, index) => {

                return (
                  <div className='card'>
                    <div className='img-box'>
                      <img src={item.image_url}></img>
                    </div>
                    <div className='text-box'>
                      <div className='title'>{item.title}</div>
                      <div className='sub-title'>{item.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>


          <div className='d-block d-md-none w-100'>
            {sec5Data.map((item, index) => {
              return (
                <div className='card'>
                  <div className='img-box'>
                    <img src={item.image_url}></img>
                  </div>
                  <div className='text-box'>
                    <div className='title'>{item.title}</div>
                    <div className='sub-title'>{item.description}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='prev-button' onClick={sec5PrevClicked}></div>
          <div className='next-button' onClick={sec5NextClicked}></div>
        </div>

      </div>


      {/* <div className='sec-6'>
        <div className='inner'>
          <h1>
            Tech Blog Highlights
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



      {isLoading && <FixedOverlayLoadingSpinner />}
      <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate("/")} />
      {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={() => { }} />}

    </div>

  );


}

export default View