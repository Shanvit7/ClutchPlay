import React from "react";
const LandingCarousel = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative object-contain bg-center w-full h-full"
      >
        <img src={"/landing/photo3.jpg"} className="w-full h-screen" alt='landing-page-image'/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent hover:bg-transparent text-white border-white w-12 h-10 xl:w-20 xl:h-20"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent hover:bg-transparent text-white border-white  w-12 h-10 xl:w-20 xl:h-20"
          >
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide2"
        className="carousel-item relative object-contain bg-center w-full h-full"
      >
        <img src={"/landing/photo2.jpg"} className="w-full h-screen" alt='landing-page-image'/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent hover:bg-transparent text-white border-white w-12 h-10 xl:w-20 xl:h-20"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent hover:bg-transparent text-white border-white w-12 h-10 xl:w-20 xl:h-20"
          >
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide3"
        className="carousel-item relative object-contain bg-center w-full h-full"
      >
        <img src={"/landing/photo5.jpg"} className="w-full h-screen" alt='landing-page-image'/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent hover:bg-transparent text-white border-white w-12 h-10 xl:w-20 xl:h-20"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent hover:bg-transparent text-white border-white w-12 h-10 xl:w-20 xl:h-20"
          >
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide4"
        className="carousel-item relative object-contain bg-center w-full h-full"
      >
        <img src={"/landing/photo4.jpg"} className="w-full h-screen" alt='landing-page-image'/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent hover:bg-transparent text-white border-white w-12 h-10 xl:w-20 xl:h-20"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent hover:bg-transparent text-white border-white w-12 h-10 xl:w-20 xl:h-20"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingCarousel;
