import styled from "styled-components";

const maxWidths = {
  "2xl": "1536px",
  xl: "1280px",
  lg: "1024px",
  md: "768px",
  sm: "640px",
  xs: "475px",
};

const StyledFooter = styled.div`
  font-size: 2rem;
  height: 30vh;
  width: 70%;
  color: whitesmoke;
  cursor: pointer;
  a {
    &:hover {
      color: #00d7fe;
      transition: all 0.3s ease-in-out;
    }
  }
  p {
    font-weight: 700;
  }
  img {
    color: white;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${maxWidths.xl}) {
    flex-direction: column;
    height: 20vh;
  }

  @media (max-width: ${maxWidths.xs}) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

const Container = styled.div`
  background-color: #2d2e32;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  gap: 0 1.5rem;
`;

function Footer() {
  return (
    <Container>
      <StyledFooter>
        <Contacts>
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
        </Contacts>
        <div>
          <a href="mailto:johnbryanodina.dev@gmail.com">
            Email: johnbryanodina.dev@gmail.com
          </a>
        </div>
        <div>
          <p>Copyright ©. All rights reserved.</p>
        </div>
      </StyledFooter>
    </Container>
  );
}

export default Footer;
