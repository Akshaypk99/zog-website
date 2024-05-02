import React, {useRef, useEffect} from 'react';


const SubTitles = ({ blogData, currentSlide, handleTitleClick }) => {

    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const activeSubtitle = containerRef.current.querySelector('.active');
            if (activeSubtitle) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const activeSubtitleRect = activeSubtitle.getBoundingClientRect();
                const offset = activeSubtitleRect.top - containerRect.top - (containerRect.height - activeSubtitleRect.height) / 2;

                containerRef.current.scrollTo({
                    top: containerRef.current.scrollTop + offset,
                    behavior: 'smooth'
                });
            }
        }
    }, [currentSlide]);
    
    return (
        <div className='sub-titles' ref={containerRef}>
            {blogData.map((item, index) => (
                <div key={index} onClick={() => handleTitleClick(index)} className={currentSlide === index ? 'active' : ''}>
                    <p>{item.sub_title}</p>
                </div>
            ))}
        </div>
    );
};
export default SubTitles;