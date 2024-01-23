import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledCarousel = styled.div`
  width: 50%;
`;

export const RentCar = () => {
  return (
    <StyledCarousel>
      <Carousel showArrows={true} dynamicHeight={true}>
        <div>
          <img src="/rent car/rent car 1.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 2.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 3.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 4.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 5.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 6.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 7.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 8.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 9.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 10.PNG" />
        </div>
        <div>
          <img src="/rent car/rent car 11.PNG" />
        </div>
      </Carousel>
    </StyledCarousel>
  );
};
