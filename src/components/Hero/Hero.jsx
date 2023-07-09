import { BiArrowBack } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <section className="text-white text-[20px] container mx-auto group rounded-md pt-0 md:pt-20">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler) => {
          return (
            <div
              onClick={clickHandler}
              className="absolute right-[41px] md:right-[51px] bottom-0 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler) => {
          return (
            <div
              onClick={clickHandler}
              className="absolute right-0 bottom-0 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          );
        }}
      >
        <div>
          <img
            src="assets/images/slider-1.png"
            className="aspect-[16/10] md:aspect-video object-cover h-[500px]"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <img
            src="assets/images/slider-2.jpg"
            className="aspect-[16/10] md:aspect-video object-cover h-[500px]"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <img
            src="assets/images/slider-3.jpg"
            className="aspect-[16/10] md:aspect-video object-cover h-[500px]"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
