import styled from "styled-components";
import Button from "../ui/Button";

const maxWidths = {
  lg: "1024px",
  md: "768px",
  sm: "640px",
  xs: "475px",
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  button {
    color: white;
    font-weight: 600;
    background-color: #00d7fe;
    &:hover {
      opacity: 0.9;
    }
  }

  a {
    &:hover {
      color: #00d7fe;
      transition: all 0.23s ease-in-out;
    }
  }
  svg {
    height: 80px;
  }

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

function Download() {
  return (
    <Container>
      <a href="/public/CV.pdf" download={"John Bryan Odiña CV"}>
        <Button variation="primary" size="medium">
          Download CV
        </Button>
      </a>
      <div>
        <a
          href="https://github.com/RedCheeksCoder"
          target="_blank"
          rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/johnbryanodina/"
          target="_blank"
          rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
      </div>
    </Container>
  );
}

export default Download;
