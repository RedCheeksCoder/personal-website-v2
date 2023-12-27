import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 50%;
  /* max-width: 100%;
  height: auto; */

  @media (max-width: 1024px) {
    max-width: 768px;
    height: 400px;
  }
  /* md */
  @media (max-width: 768px) {
    max-width: 640px;
    padding-bottom: 2rem;
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Image() {
  return (
    <Container>
      <StyledImage
        src="https://avatars.githubusercontent.com/u/149803435?s=400&u=4657ebe7011b87a96e0a06a04fc204aefba12e5c&v=4"
        alt=""
      />
    </Container>
  );
}

export default Image;
