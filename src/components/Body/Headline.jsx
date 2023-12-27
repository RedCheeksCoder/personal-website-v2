import styled from "styled-components";

const StyledHeadline = styled.h1`
  font-size: 7rem;
  line-height: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 768px;
    margin-top: 2rem;
  }
  /* md */
  @media (max-width: 768px) {
    max-width: 640px;
    font-size: 3rem;
  }

  /* sm */
  @media (max-width: 640px) {
    max-width: 475px;
    font-size: 3rem;
  }

  /* xs */
  @media (max-width: 475px) {
    width: 100%;
    font-size: 3rem;
  }
`;

const HighLight = styled.span`
  color: #00d7fe;
  //#00D7FE
  //#088f8f;
  text-shadow: 1px 1px grey;
`;
function Headline() {
  return (
    <StyledHeadline>
      {" "}
      FRONT END <HighLight>REACT</HighLight> <br />
      WEB DEVELOPER{" "}
    </StyledHeadline>
  );
}

export default Headline;
