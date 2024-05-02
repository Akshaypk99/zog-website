import React, { useState, useEffect, useRef } from 'react';
import './BlogBasicSlider.scss';

const BlogBasicSlider = ({TitleDescription, blogData, currentSlide }) => {
    const containerRef = useRef(null);
    const [activeSlideHeight, setActiveSlideHeight] = useState(0);
    useEffect(() => {
        if (containerRef.current) {
            const activeSlide = containerRef.current.querySelector('.blog-slide.active');
            if (activeSlide) {
                setActiveSlideHeight(activeSlide.offsetHeight);
            }
        }
    }, [currentSlide]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.height = `${activeSlideHeight}px`;
            const activeSlide = containerRef.current.querySelector('.blog-slide.active');
            if (activeSlide) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const activeSlideRect = activeSlide.getBoundingClientRect();
                const offset = activeSlideRect.top - containerRect.top + containerRef.current.scrollTop;
    
                containerRef.current.scrollTo({
                    top: offset,
                    behavior: 'auto'
                });
            }
        }
    }, [activeSlideHeight]);
    if (!blogData || blogData.length === 0) {
        return null;
    }
    return (
        <div className="blog-slider-container" ref={containerRef}>
            <div className="blog-slider">
                <p>{TitleDescription}</p>
                {blogData.map((item, index) => (
                    <div key={index} data-index={index} className={`blog-slide ${index === currentSlide ? 'active' : 'hidden'}`}>
                        <h2>{item.sub_title}</h2>
                        {item.image_url_item && 
                            <img src={`${item.image_url_item}`} alt='' />
                        }
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogBasicSlider;
