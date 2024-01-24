import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledCarousel = styled.div`
  max-width: 70rem;
  padding: 1rem 3rem;
  @media (max-width: 600px) {
    aspect-ratio: 16/9;
    max-width: 50rem;
  }

  @media (max-width: 480px) {
    aspect-ratio: 16/9;
    max-width: 35rem;
    padding: 1rem 1rem;
  }
`;

export const EasyHire = () => {
  return (
    <StyledCarousel>
      <Carousel showArrows={true} dynamicHeight={true}>
        <div>
          <img src="/Easy hire/easy hire 1.PNG" />
        </div>
        <div>
          <img src="/Easy hire/easy hire 2.PNG" />
        </div>
        <div>
          <img src="/Easy hire/easy hire 3.PNG" />
        </div>
        <div>
          <img src="/Easy hire/easy hire 4.PNG" />
        </div>
        <div>
          <img src="/Easy hire/easy hire 5.PNG" />
        </div>
        <div>
          <img src="/Easy hire/easy hire 6.PNG" />
        </div>
      </Carousel>
    </StyledCarousel>
  );
};
