import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'

  const ImageCarousel  = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx ) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
     
    }
  };

  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx >= images.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
        newIdx = images.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <div className="carousel-container">
      <div className="relative flex  h-[520px]">
      <Image
        className="selected-image"
        layout="fill"
        objectFit="contain"
        priority={true}
        src={selectedImage?selectedImage.image:"/placeholder.jpg"} 
        alt={selectedImage?selectedImage.alt:"loading"}
        />

        </div>
        

      <div className="carousel ">
        <div className="carousel__images flex-wrap  justify-center">
          {
            images.map((image, idx) => (
              
              <Image
                onClick={() => handleSelectedImageChange(idx)}
                src={image.image}
                alt={image.alt}
                priority={true}
                width={100}
                height={100}
                objectFit="cover"
                key={image.id}
                className={`carousel__image  ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              ></Image>
            ))}
        </div>
       
      </div>
    </div>
  );
};

export default ImageCarousel;