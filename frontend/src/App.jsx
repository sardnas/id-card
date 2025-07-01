import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import color from "./assets/colors";
import styled, { createGlobalStyle } from "styled-components";
import Start from "./pages/Start";
import Test from "./pages/Test";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${color.grey.shade1};
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Start />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default App;
