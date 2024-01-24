import styled from "styled-components";

const maxWidths = {
  lg: "1024px",
  md: "768px",
  sm: "640px",
  xs: "475px",
};

const StyledHeadline = styled.h1`
  font-size: 5rem;
  line-height: 1;

  @media (max-width: ${maxWidths.lg}) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    max-width: ${maxWidths.md};
    margin-top: 2rem;
  }

  @media (max-width: ${maxWidths.xs}) {
    width: 100%;
    font-size: 3rem;
  }
`;

const HighLight = styled.span`
  color: #00d7fe;
  display: inline-block;
  text-shadow: 1px 1px grey;
`;

function Headline() {
  return (
    <StyledHeadline>
      <HighLight>FRONT END REACT</HighLight>
      <div>WEB DEVELOPER</div>
    </StyledHeadline>
  );
}

export default Headline;
