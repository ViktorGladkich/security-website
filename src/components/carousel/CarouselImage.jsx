import React from 'react';

const CarouselImage = ({image, index}) => {
  return (
       <div>
          <img src={image} alt={`slide ${index + 1}`} loading="lazy"/>
      </div>
  )
}
export default CarouselImage;