import Slider from "react-slick";

import img1 from "../../../src/assets/img/travel-visa-service.jpg";
import img2 from "../../../src/assets/img/5.jpg";
import img3 from "../../../src/assets/img/TOURIST-scaled.jpg";
import img5 from "../../../src/assets/img/Visitor-visa.jpg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="bg-image py-10 flex flex-col items-center justify-center ">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-center flex-col my-5 ">
          <h1 className="font-bold text-2xl md:text-5xl mb-3 text-white">
            <Typewriter
              words={[
                "Explore Our Services",
                "Fast Processing",
                "Affordable Services",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="md:text-2xl text-white font-semibold">
            Find the best visa options around the world.
          </p>
        </div>

        <div className="carousel w-full my-8">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full h-96" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full h-96" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full h-96" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img5} className="w-full  h-96" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
