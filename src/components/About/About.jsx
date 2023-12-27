import styled from "styled-components";

const maxWidths = {
  xs: "475px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
};

const StyledAbout = styled.div`
  background-color: whitesmoke;
  height: 100vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;

  img {
    height: 300px;
    width: auto;
  }

  @media (max-width: ${maxWidths.xl}) {
    max-width: ${maxWidths.xl};
    flex-direction: column;
  }

  @media (max-width: ${maxWidths.xs}) {
    width: 100%;
    img {
      height: 250px;
      width: auto;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 2rem;
  width: 50%;
  line-height: 1.5;

  @media (max-width: ${maxWidths.xl}) {
    max-width: ${maxWidths.xl};
    flex-direction: column;
    width: 90%;
    margin-top: 2rem;
  }

  @media (max-width: ${maxWidths.sm}) {
    max-width: ${maxWidths.sm};
    font-size: 1.5rem;
    line-height: 1.7;
    font-weight: 500;
  }

  @media (max-width: ${maxWidths.xs}) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin: 0;
`;

const Header = styled.div`
  font-size: 2rem;
  color: #00d7fe;
  font-weight: 600;
  text-shadow: 1px;
`;

function About() {
  return (
    <Container>
      <StyledAbout>
        <img src="../../public/about-me.jpg" alt="About me" />

        <Paragraph>
          <Header>ABOUT ME</Header>I am an Electronics Engineer with half a
          decade of experience in teaching engineering students and a passion
          for programming. My love for writing code has been a constant
          throughout my career. Previously, I was part of a prototype
          development team, where I worked on developing electronics and
          sensor-based processes, automation, and robotics for academic
          research. Now, I have rekindled my love for programming and am excited
          to embark on a new journey to becoming a web developer, turning my
          passion into my profession. Join me as I explore the fascinating world
          of code and technology.
        </Paragraph>
      </StyledAbout>
    </Container>
  );
}

export default About;
