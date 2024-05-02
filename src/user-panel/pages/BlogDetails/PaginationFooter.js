import React from 'react';


const PaginationFooter = ({ blogData, currentSlide, handlePreviousSlide, handleNextSlide, isLastSlide }) => {
    
  return(
    <div className='sub-titles-footer'>
      <div className='titles'>
        {blogData.map((item, index) => (
          currentSlide === index && (
            <>
            <p key={index} className='active'>
              {item.sub_title}
            </p>
            {index > 0  && index === blogData.length - 1 && ( 
              <p className='next'>Prev: {blogData[index - 1].sub_title}</p>
            )}
            {index < blogData.length - 1 && ( 
              <p className='next'>Next: {blogData[index + 1].sub_title}</p>
            )}
          </>
          )
        ))}
      </div>
      <span  className={isLastSlide ? 'arrow-icon prev' : 'arrow-icon'} onClick={isLastSlide ? handlePreviousSlide : handleNextSlide}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" width="50" height="50" rx="25" transform="rotate(90 50 0)" fill="black"/>
        <path d="M24.2929 33.2071C24.6834 33.5976 25.3166 33.5976 25.7071 33.2071L32.0711 26.8431C32.4616 26.4526 32.4616 25.8195 32.0711 25.4289C31.6805 25.0384 31.0474 25.0384 30.6569 25.4289L25 31.0858L19.3431 25.4289C18.9526 25.0384 18.3195 25.0384 17.9289 25.4289C17.5384 25.8195 17.5384 26.4526 17.9289 26.8431L24.2929 33.2071ZM24 17.5L24 32.5L26 32.5L26 17.5L24 17.5Z" fill="white"/>
        </svg>
      </span>
    </div>
  );
    
};
export default PaginationFooter;