import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledCarousel = styled.div`
  max-width: 70rem;
  padding: 3rem;
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
export const WorldMapper = () => {
  return (
    <StyledCarousel>
      <Carousel showArrows={true} dynamicHeight={true}>
        <div>
          <img src="/world mapper/World mapper main page.PNG" />
        </div>
        <div>
          <img src="/world mapper/world mapper pricing.PNG" />
        </div>
        <div>
          <img src="/world mapper/World mapper map.PNG" />
        </div>
      </Carousel>
    </StyledCarousel>
  );
};
