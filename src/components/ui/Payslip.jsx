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
export const Payslip = () => {
  return (
    <StyledCarousel>
      <Carousel showArrows={true} dynamicHeight={true}>
        <div>
          <img src="/payslip images/payslip 1.PNG" />
        </div>
        <div>
          <img src="/payslip images/payslip 2.PNG" />
        </div>
        <div>
          <img src="/payslip images/payslip 3.PNG" />
        </div>
        <div>
          <img src="/payslip images/payslip 4.PNG" />
        </div>
        <div>
          <img src="/payslip images/payslip 5.PNG" />
        </div>
        <div>
          <img src="/payslip images/payslip 6.PNG" />
        </div>
        <div>
          <img src="/payslip images/payslip 7.PNG" />
        </div>
      </Carousel>
    </StyledCarousel>
  );
};
