import React, { useState, useEffect } from 'react';


function Images(props) {
    const { images, currentIndex } = props;
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        props.onNextClick();
      }, 3000);
      return () => clearInterval(intervalId);
    }, [currentIndex, props]);
  
    const currentImage = images[currentIndex];
  
    return (
      <div>
        <img src={currentImage.url} alt={currentImage.id} />
      </div>
    );
  }
  
  export default Images;