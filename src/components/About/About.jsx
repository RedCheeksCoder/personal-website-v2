import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: whitesmoke;
  height: 100dvh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;

  img {
    height: 300px;
    width: auto;
  }

  @media (max-width: 1400px) {
    max-width: 1200px;
    flex-direction: column;
  }

  /* md */
  @media (max-width: 768px) {
    max-width: 640px;
  }

  /* sm */
  @media (max-width: 640px) {
    max-width: 475px;
    img {
      height: 300px;
      width: auto;
    }
  }

  /* xs */
  @media (max-width: 475px) {
    width: 100%;
    img {
      height: 250px;
      width: auto;
    }
  }

  /* Paragraph media queries */
  p {
    font-size: 2rem;
    width: 50%;
    line-height: 1.5;
    @media (max-width: 1400px) {
      max-width: 1200px;
      flex-direction: column;
      width: 90%;
      margin-top: 2rem;
    }

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
      font-size: 1.5rem;
      line-height: 1.7;
      font-weight: 500;
    }

    /* xs */
    @media (max-width: 475px) {
      width: 90%;
    }
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
        <img src="../../public/about-me.jpg" alt="" />

        <p>
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
        </p>
      </StyledAbout>
    </Container>
  );
}

export default About;
