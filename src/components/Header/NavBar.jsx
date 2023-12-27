import styled from "styled-components";

const maxWidths = {
  lg: "1024px",
  md: "768px",
};

const StyledNavBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  @media (max-width: ${maxWidths.lg}) {
    max-width: ${maxWidths.md};
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
    <StyledNavBar role="navigation">
      <List>
        <a href="#hero" aria-label="Home">
          Home
        </a>
      </List>
      <List>
        <a href="#about" aria-label="About">
          About
        </a>
      </List>
      <List>
        <a href="#projects" aria-label="Projects">
          Projects
        </a>
      </List>
      <List>
        <a href="#footer" aria-label="Contact">
          Contact
        </a>
      </List>
    </StyledNavBar>
  );
}

export default NavBar;
