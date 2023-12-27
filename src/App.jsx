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
`;
function App() {
  const sr = ScrollReveal({
    distance: "40px",
    duration: 2500,
    reset: true,
  });

  sr.reveal("#hero", { delay: 200, origin: "left" });
  sr.reveal("#about", { delay: 200, origin: "right" });
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
        <section>
          <Projects />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </StyledApp>
    </>
  );
}

export default App;
