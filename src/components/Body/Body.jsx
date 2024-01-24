import Headline from "./Headline";
import Description from "./Description";
import Image from "./Image";
import TechStack from "./TechStack";
import styled from "styled-components";
import Download from "./Download";

const StyledBody = styled.div`
  border-top: 1px solid var(--color-grey-300);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f6f388;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100vw;

  /* lg */
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const Details = styled.div`
  max-width: 50%;

  /* lg */
  @media (max-width: 1024px) {
    max-width: 1024px;
  }

  /* md */
  @media (max-width: 768px) {
    max-width: 640px;
  }

  /* sm */
  @media (max-width: 640px) {
    max-width: 475px;
  }
`;
function Body() {
  return (
    <StyledBody>
      <Container>
        <Details>
          <Headline />
          <Description />
          <TechStack />
          <Download />
        </Details>
        <Image />
      </Container>
    </StyledBody>
  );
}

export default Body;
