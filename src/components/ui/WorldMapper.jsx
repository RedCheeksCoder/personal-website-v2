import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledCarousel = styled.div`
  width: 50%;
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
