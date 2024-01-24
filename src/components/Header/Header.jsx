import styled from "styled-components";
import NavBar from "./NavBar";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
