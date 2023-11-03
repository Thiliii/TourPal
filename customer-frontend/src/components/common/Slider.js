import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../global.css";

const Slider = ({ images }) => {
  return (
    <Carousel infiniteLoop autoPlay>
      {images?.map((image, index) => (
        <img
          key={index}
          src={image}
          style={{ objectFit: "cover" }}
          alt={`slider image ${index}`}
        />
      ))}
    </Carousel>
  );
};

export default Slider;
