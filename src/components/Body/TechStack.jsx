import styled from "styled-components";

const StyledTechStack = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  span {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    &:before {
      pointer-events: none;
      position: absolute;
      z-index: -1;
      content: "";
      top: 100%;
      left: 5%;
      height: 10px;
      width: 90%;
      opacity: 0;
      background: -webkit-radial-gradient(
        center,
        ellipse,
        rgba(0, 0, 0, 0.35) 0%,
        rgba(0, 0, 0, 0) 80%
      );
      background: radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.35) 0%,
        rgba(0, 0, 0, 0) 80%
      );
      /* W3C */
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform, opacity;
      transition-property: transform, opacity;
    }

    &:hover,
    &:focus,
    &:active {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    &:hover::before,
    &:active::before,
    &:focus:before {
      opacity: 1;
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }
  }

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
      <span>
        <img src="https://skillicons.dev/icons?i=html,css" />
      </span>
      <span>
        <img src="https://skillicons.dev/icons?i=javascript,react" />
      </span>
      <span>
        <img src="https://skillicons.dev/icons?i=styledcomponents,tailwind" />
      </span>
      <span>
        <img src="https://skillicons.dev/icons?i=git,github" />
      </span>
    </StyledTechStack>
  );
}

export default TechStack;
