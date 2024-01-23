import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledCarousel = styled.div`
  width: 50%;
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
