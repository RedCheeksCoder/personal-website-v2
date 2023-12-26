import GlobalStyles from "./Styles/GlobalStyles";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Footer from "./components/Footer";

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f7f6f388;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Body />
        <About />
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;
