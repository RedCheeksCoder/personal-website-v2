import styled from "styled-components";

const StyledNavBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  @media (max-width: 1024px) {
    max-width: 768px;
    display: none;
  }
`;
const List = styled.li`
  list-style: none;
  font-weight: 600;
  &:hover {
    color: #00d7fe;
    transition: all 0.3s ease-in-out;
  }
`;
function NavBar() {
  return (
    <StyledNavBar>
      <List>
        <a href="#hero">Home</a>
      </List>
      <List>
        <a href="#about">About</a>
      </List>
      <List>
        <a href="#projects">Projects</a>
      </List>
      <List>
        <a href="#footer">Contact</a>
      </List>
    </StyledNavBar>
  );
}

export default NavBar;
