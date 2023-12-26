import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: #dd7676;
  height: 50vh;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;

  img {
    height: 300px;
    width: auto;
  }
  p {
    font-size: 2rem;
    width: 40%;
    line-height: 1.5;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;

function About() {
  return (
    <Container>
      <StyledAbout>
        <img src="../../public/about-me.jpg" alt="" />

        <p>
          I am an Electronics Engineer with a passion for programming and over
          five years of experience teaching engineering students. My love for
          writing code has been a constant throughout my career. Previously, I
          was part of a prototype development team, where I worked on developing
          electronics and sensor-based processes for research purposes. Now, I
          have rekindled my love for programming and am excited to embark on a
          new journey in my career, turning my passion into my profession. Join
          me as I explore the fascinating world of code and technology.
        </p>
      </StyledAbout>
    </Container>
  );
}

export default About;
