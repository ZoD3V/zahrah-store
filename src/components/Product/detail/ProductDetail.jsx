import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetail = ({ data }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] overflow-hidden">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {data?.map((item) => {
          return (
            <img
              key={item.id}
              src={item.attributes.url}
              alt="image"
              className="w-full object-cover object-center"
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductDetail;
