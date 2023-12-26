import styled from "styled-components";

const StyledTechStack = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;

  /* lg */
  @media (max-width: 1024px) {
    max-width: 768px;
    justify-content: center;
    margin-top: 3rem;
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
function TechStack() {
  return (
    <StyledTechStack>
      <img src="https://skillicons.dev/icons?i=html,css,javascript,react,styledcomponents,tailwind,git" />
    </StyledTechStack>
  );
}

export default TechStack;
