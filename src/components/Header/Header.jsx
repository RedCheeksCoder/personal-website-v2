import styled from "styled-components";
import NavBar from "./NavBar";
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: whitesmoke;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
`;
const StyledHeader = styled.div`
  font-family: "Open Sans", sans-serif;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.8rem;

  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  /* 2xl */
  @media (max-width: 1536px) {
    max-width: 1280px;
  }

  /* xl */
  @media (max-width: 1280px) {
    max-width: 1024px;
  }

  /* lg */
  @media (max-width: 1024px) {
    max-width: 768px;
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

const Name = styled.h1`
  font-size: 2rem;
`;

function Header() {
  return (
    <Container>
      <StyledHeader>
        <Name>
          <a href="#hero">Bryan Odina</a>
        </Name>
        <NavBar />
      </StyledHeader>
    </Container>
  );
}

export default Header;
