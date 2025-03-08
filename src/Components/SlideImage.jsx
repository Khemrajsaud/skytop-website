import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import img1 from "../assets/Image/landing page1.png"
import img2 from "../assets/Image/landing page2.jpg"
const slides = [

  {
    img : img1,
   
  }
  ,
  {
    img: img2
  }
];
function SlideImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="max-w-4xl mx-auto mt-[150px] ">
    
      {slides.map((slide, index) => (
        <div
          key={index}
          className={` bg-gray-200 transition-opacity duration-500 w-[900px] ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img src={slide.img} alt={`Slide ${index + 1}`} className=" w-full h-full" />
        </div>
      ))}

      {/* Left Arrow */}
      <div
        className="absolute top-2/3 left-0 cursor-pointer"
        onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
      >
        <BsChevronCompactLeft className="text-2xl font-bold text-black  mr-8" />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
      >
        <BsChevronCompactRight className="text-2xl font-bold text-black ml-8" />
      </div>   
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <RxDotFilled
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-2 ${currentSlide === index ? "text-gray-900" : "text-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SlideImage;