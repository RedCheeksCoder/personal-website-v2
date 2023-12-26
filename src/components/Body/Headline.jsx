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
  }
  /* md */
  @media (max-width: 768px) {
    max-width: 640px;
    font-size: 5rem;
  }

  /* sm */
  @media (max-width: 640px) {
    max-width: 475px;
    font-size: 4rem;
  }

  /* xs */
  @media (max-width: 475px) {
    width: 100%;
    font-size: 4rem;
  }
`;

const HighLight = styled.span`
  background: #00ff00;
  background: linear-gradient(to left, #00ff00 24%, #00ff00 0%, #00ffff 71%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
function Headline() {
  return (
    <StyledHeadline>
      {" "}
      FRONT END REACT <br />
      <HighLight>WEB DEVELOPER</HighLight>{" "}
    </StyledHeadline>
  );
}

export default Headline;
