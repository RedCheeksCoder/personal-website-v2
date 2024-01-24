import GlobalStyles from "./Styles/GlobalStyles";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";
import Projects from "./components/Projects";

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProjectSection = styled.section`
  max-width: 100%;
`;

const Heading = styled.h2`
  text-align: left;
  padding: 2rem 0 2rem 2rem;
  color: #00d7fe;
  border-bottom: 1px solid #bebebe;
`;
function App() {
  const sr = ScrollReveal({
    distance: "40px",
    duration: 2500,
    reset: true,
  });

  sr.reveal("#hero", { delay: 200, origin: "left" });
  sr.reveal("#about", { delay: 200, origin: "right" });
  sr.reveal("#project", { delay: 200, origin: "left" });
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <section id="hero">
          <Header />
          <Body />
        </section>
        <section id="about">
          <About />
        </section>
        <ProjectSection id="projects">
          <Heading>Portfolio</Heading>
          <Projects />
        </ProjectSection>
      </StyledApp>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
