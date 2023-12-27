import styled from "styled-components";

const StyledProjects = styled.div`
  height: 100dvh;
  width: 70%;
  background-color: grey;

  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 15px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Projects() {
  return (
    <Container>
      <StyledProjects>Projects</StyledProjects>;
    </Container>
  );
}

export default Projects;
