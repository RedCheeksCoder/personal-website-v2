import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledCarousel = styled.div`
  max-width: 70rem;
  padding: 1rem 3rem;
  margin: 1rem;
  box-shadow: 1px -1px 59px -19px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 1px -1px 59px -19px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 1px -1px 59px -19px rgba(0, 0, 0, 0.24);

  @media (max-width: 600px) {
    aspect-ratio: 16/9;
    max-width: 50rem;
  }

  @media (max-width: 480px) {
    aspect-ratio: 16/9;
    max-width: 35rem;
    padding: 1rem 2rem;
  }
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
