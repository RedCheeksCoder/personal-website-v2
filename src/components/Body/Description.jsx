import styled from "styled-components";

const Details = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  padding: 2rem 0;
  width: 80%;
`;

const Container = styled.div`
  display: flex;
  /* lg */
  @media (max-width: 1024px) {
    max-width: 768px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  /* md */
  @media (max-width: 768px) {
    max-width: 640px;
  }

  /* sm */
  @media (max-width: 640px) {
    max-width: 475px;
  }

  /* xs */
  @media (max-width: 475px) {
    width: 100%;
  }
`;
function Description() {
  return (
    <Container>
      <Details>
        Hello! Im Engr. John Bryan Odiña , a passionate self taught web
        developer based in Taguig, Metro Manila, Philippines
      </Details>
    </Container>
  );
}

export default Description;
