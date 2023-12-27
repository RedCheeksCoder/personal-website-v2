import styled from "styled-components";

const maxWidths = {
  lg: "1024px",
  md: "768px",
  sm: "640px",
  xs: "475px",
};

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
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    transition-duration: 0.3s;
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
      background: radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.35) 0%,
        rgba(0, 0, 0, 0) 80%
      );
      transition-duration: 0.3s;
      transition-property: transform, opacity;
    }

    &:hover,
    &:focus,
    &:active {
      transform: translateY(-5px);
    }
    &:hover::before,
    &:active::before,
    &:focus:before {
      opacity: 1;
      transform: translateY(5px);
    }
  }

  @media (max-width: ${maxWidths.lg}) {
    max-width: ${maxWidths.md};
    justify-content: center;
    margin-top: 3rem;
  }

  @media (max-width: ${maxWidths.xs}) {
    width: 100%;
  }
`;

function TechStack() {
  return (
    <StyledTechStack>
      <span>
        <img
          src="https://skillicons.dev/icons?i=html,css"
          alt="HTML and CSS icons"
        />
      </span>
      <span>
        <img
          src="https://skillicons.dev/icons?i=javascript,react"
          alt="JavaScript and React icons"
        />
      </span>
      <span>
        <img
          src="https://skillicons.dev/icons?i=styledcomponents,tailwind"
          alt="Styled Components and Tailwind icons"
        />
      </span>
      <span>
        <img
          src="https://skillicons.dev/icons?i=git,github"
          alt="Git and GitHub icons"
        />
      </span>
    </StyledTechStack>
  );
}

export default TechStack;
