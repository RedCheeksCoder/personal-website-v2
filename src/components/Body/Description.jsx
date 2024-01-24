import styled from "styled-components";

const maxWidths = {
  lg: "1024px",
  md: "768px",
  sm: "640px",
  xs: "475px",
};

const Details = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 0;
  width: 80%;
  color: grey;
  text-wrap: balance;
  @media (max-width: ${maxWidths.xs}) {
    width: 100%;
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  display: flex;

  @media (max-width: ${maxWidths.lg}) {
    max-width: ${maxWidths.md};
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: ${maxWidths.xs}) {
    width: 100%;
  }
`;

function Description() {
  return (
    <Container>
      <Details>
        Hello! I'm Engr. John Bryan Odiña, a passionate self-taught web
        developer based in Taguig, Metro Manila, Philippines.
      </Details>
    </Container>
  );
}

export default Description;
